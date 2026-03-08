"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function QuizEngine({ quizData, quizList }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [scores, setScores] = useState({});
    const [flags, setFlags] = useState({});

    // BMI Sonucu için State
    const [bmiResult, setBmiResult] = useState(null);

    const [isFinished, setIsFinished] = useState(false);
    const [recStep, setRecStep] = useState(0);

    const totalSteps = quizData.steps.length;
    const currentStep = quizData.steps[currentStepIndex];

    // --- HELPER: GÜVENLİ HESAPLAMALAR (DÜZELTME BURADA) ---
    
    // Toplam Puan Kapasitesi
    const calculatedTotalScore = quizData.totalPossibleScore || quizData.steps.reduce((acc, step) => {
        return acc + step.questions.reduce((qAcc, q) => {
            // DÜZELTME: q.options yoksa (input ise) 0 döndür
            if (!q.options) return qAcc;
            
            const maxScoreInQuestion = Math.max(...q.options.map(o => o.score || 0));
            return qAcc + (maxScoreInQuestion > 0 ? maxScoreInQuestion : 0);
        }, 0);
    }, 0);

    // Toplam Flag Kapasitesi
    const calculatedTotalFlags = quizData.totalPossibleFlags || quizData.steps.reduce((acc, step) => {
        return acc + step.questions.reduce((qAcc, q) => {
            // DÜZELTME: q.options yoksa 0 döndür
            if (!q.options) return qAcc;

            const hasFlag = q.options.some(o => o.isRedFlag);
            return qAcc + (hasFlag ? 1 : 0);
        }, 0);
    }, 0);

    // Standart Quizler için Pozitif Cevap Listesi
    const positiveAnswersList = [];
    // BMI (Calculator) veya Puan Bazlı (General Health) değilse çalıştır
    if (!quizData.isScoreBased && !quizData.isCalculator) {
        quizData.steps.forEach(step => {
            step.questions.forEach(q => {
                // DÜZELTME: Input sorularını atla (options yoksa)
                if (!q.options) return;

                const val = answers[q.id];
                const opt = q.options.find(o => o.value === val);
                
                if (opt && (opt.value === "yes" || opt.score > 0 || opt.isRedFlag)) {
                    positiveAnswersList.push(q.text);
                }
            });
        });
    }

    // Kullanıcının Mevcut Skoru
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const totalFlags = Object.values(flags).filter(Boolean).length;


    // --- HANDLERS ---

    const handleAnswer = (question, option) => {
        setAnswers(prev => ({ ...prev, [question.id]: option.value }));
        setScores(prev => ({ ...prev, [question.id]: option.score || 0 }));
        setFlags(prev => ({ ...prev, [question.id]: option.isRedFlag ? true : false }));
    };

    // INPUT TİPİ CEVAPLAMA (BMI İÇİN)
    const handleInputChange = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    // BMI HESAPLAMA
    const calculateBMI = () => {
        const weight = parseFloat(answers["weight"]);
        const height = parseFloat(answers["height"]);

        if (weight > 0 && height > 0) {
            const bmi = (weight / (height * height)).toFixed(1);
            setBmiResult(bmi);
            setIsFinished(true);
        } else {
            alert("Please enter valid weight and height.");
        }
    };

    const handleNext = () => {
        // Eğer BMI hesaplama adımındaysak
        if (quizData.isCalculator && currentStepIndex === totalSteps - 1) {
            calculateBMI();
            return;
        }

        let nextIndex = currentStepIndex + 1;
        while (
            nextIndex < totalSteps &&
            quizData.steps[nextIndex].condition &&
            answers[quizData.steps[nextIndex].condition.questionId] !== quizData.steps[nextIndex].condition.expectedValue
        ) {
            nextIndex++;
        }

        if (nextIndex < totalSteps) {
            setCurrentStepIndex(nextIndex);
        } else {
            setIsFinished(true);
        }
    };

    const handleBack = () => {
        let prevIndex = currentStepIndex - 1;
        while (
            prevIndex >= 0 &&
            quizData.steps[prevIndex].condition &&
            answers[quizData.steps[prevIndex].condition.questionId] !== quizData.steps[prevIndex].condition.expectedValue
        ) {
            prevIndex--;
        }
        if (prevIndex >= 0) setCurrentStepIndex(prevIndex);
    };

    // --- RENDERERS ---

    // 1. GENERAL HEALTH INDEX RENDER
    const renderGeneralHealthResult = () => {
        const score = totalScore;
        const userGender = answers["gender"] || "male";

        const recommendations = [];
        quizData.steps.forEach(step => {
            step.questions.forEach(q => {
                // DÜZELTME: Options kontrolü
                if (!q.options) return;

                const val = answers[q.id];
                const opt = q.options.find(o => o.value === val);
                if (opt && opt.isRedFlag && q.recommendation) {
                    recommendations.push({
                        questionText: q.text,
                        userAnswerLabel: opt.label,
                        data: q.recommendation
                    });
                }
            });
        });

        let resultInfo = quizData.results.low;
        if (score >= 80) resultInfo = quizData.results.perfect;
        else if (score >= 60) resultInfo = quizData.results.high;
        else if (score >= 40) resultInfo = quizData.results.medium;

        const currentRec = recommendations[recStep];
        const rotationDegree = 45 + (score * 1.8);

        return (
            <div className="w-full bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
                {/* Gauge Graph */}
                <div className="text-center mb-10">
                    <h2 className="font-garet font-bold text-3xl text-slate-900 mb-6">
                        Your General Health Index is:
                    </h2>
                    <div className="relative w-56 h-28 mx-auto overflow-hidden">
                        <div className="absolute top-0 left-0 w-56 h-56 rounded-full border-[24px] border-gray-100 box-border"></div>
                        <div 
                            className="absolute top-0 left-0 w-56 h-56 rounded-full border-[24px] border-t-transparent border-r-transparent border-l-transparent box-border origin-center transition-all duration-1000 ease-out"
                            style={{ 
                                borderColor: resultInfo.borderColor,
                                transform: `rotate(${rotationDegree}deg)`
                            }}
                        ></div>
                        <div className="absolute bottom-0 w-full text-center pb-2">
                            <span className="text-7xl font-black text-slate-900 leading-none">{score}</span>
                            <span className="text-xl font-bold text-gray-400">/100</span>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="mb-10 text-center max-w-3xl mx-auto text-slate-700">
                    <h3 className={`inline-block px-4 py-1 rounded-full text-white font-bold mb-3 ${resultInfo.color}`}>
                        {resultInfo.title}
                    </h3>
                    <p className="text-lg font-medium">{resultInfo.message}</p>
                </div>

                {/* Slider */}
                {recommendations.length > 0 && (
                    <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                        <div className="bg-slate-100 px-6 py-4 flex justify-between items-center border-b border-gray-200">
                            <span className="font-bold text-slate-900 uppercase tracking-wide text-sm">RECOMMENDATIONS:</span>
                            <div className="flex items-center gap-4">
                                <button onClick={() => setRecStep(Math.max(0, recStep - 1))} disabled={recStep === 0} className="text-xs font-bold text-slate-500 disabled:opacity-30 hover:text-slate-900 uppercase">&lt; BACK</button>
                                <span className="font-bold text-slate-900 text-sm">{recStep + 1}/{recommendations.length}</span>
                                <button onClick={() => setRecStep(Math.min(recommendations.length - 1, recStep + 1))} disabled={recStep === recommendations.length - 1} className="text-xs font-bold text-slate-500 disabled:opacity-30 hover:text-slate-900 uppercase">NEXT &gt;</button>
                            </div>
                        </div>
                        <div className="p-6 md:p-8" key={recStep}>
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <p className="text-sm font-bold text-slate-500 mb-1">Question: {currentRec.questionText}</p>
                                <p className="text-xl font-bold text-slate-900">Your Answer: <span className="text-red-500">{currentRec.userAnswerLabel}</span></p>
                            </div>
                            <div className="prose max-w-none text-slate-700 text-sm">
                                <p className="mb-3 font-bold text-slate-900">Allvex recommendation: <span className="font-normal">{currentRec.data.intro}</span></p>
                                {currentRec.data.list && <ul className="list-disc pl-5 space-y-2 mb-4">{currentRec.data.list.map((p, i) => <li key={i}>{p}</li>)}</ul>}
                                {/* Products logic here */}
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="mt-8 flex justify-center">
                     <Button onClick={() => window.location.reload()} variant="outline" className="px-8 py-3 rounded-full border-2 font-bold uppercase hover:bg-slate-50">RETAKE TEST</Button>
                </div>
            </div>
        );
    };

    // 2. BMI RENDER
    const renderBMIResult = () => {
        const bmi = parseFloat(bmiResult);
        let category = quizData.results.healthy; 

        if (bmi < 18.5) category = quizData.results.underweight;
        else if (bmi < 25) category = quizData.results.healthy;
        else if (bmi < 30) category = quizData.results.overweight;
        else if (bmi < 40) category = quizData.results.obese;
        else category = quizData.results.morbid;

        return (
            <div className="w-full bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 text-center">
                <h3 className="font-garet font-bold text-3xl text-slate-900 mb-6">Your Result (BMI)</h3>
                <div className="text-8xl font-black text-slate-900 mb-8">{bmi}</div>
                
                {/* Gauge */}
                <div className="relative w-64 h-32 mx-auto overflow-hidden mb-6">
                    <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[30px] border-gray-200 box-border" style={{ borderColor: category.color }}></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-32 bg-slate-800 origin-bottom transition-all duration-1000 ease-out" style={{ transform: `translateX(-50%) rotate(${category.rotation}deg)` }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full"></div>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-2xl font-bold text-slate-900">{category.label}</h4>
                    <p className="text-slate-500 font-medium">({category.range})</p>
                </div>
                <Button onClick={() => window.location.reload()} className="w-full h-14 rounded-full bg-[#F5A623] hover:bg-[#E0961F] text-white font-bold text-lg">Calculate</Button>
            </div>
        );
    };

    // 3. STANDARD RENDER
    const renderStandardResult = () => {
        const txt = quizData.resultTexts || {}; 
        // ... (Standart render kodun aynı kalabilir, sadece return yapısı)
        // Basitlik için sadece temel yapıyı koyuyorum, senin önceki kodundaki aynı kalmalı.
        if (totalFlags > 0) {
             return (
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b pb-6 mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Your result:</h2>
                        <div className="flex justify-between items-end mt-2">
                             <p className="text-3xl font-black text-slate-900">Score: {totalScore}/{calculatedTotalScore}</p>
                             <p className="text-xl font-bold text-red-600">Attention flags: {totalFlags}/{calculatedTotalFlags}</p>
                        </div>
                    </div>
                    <div className="prose max-w-none text-slate-600">
                        <p className="mb-4">{txt.redFlagIntro}</p>
                        <p className="font-bold text-slate-900 mb-2">As you answered yes to:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            {positiveAnswersList.map((text, idx) => <li key={idx} className="font-medium text-slate-800">{text}</li>)}
                        </ul>
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6"><p className="text-red-800 font-medium">{txt.redFlagWarning}</p></div>
                        <div className="space-y-4 mt-6 border-t pt-6 text-sm">{txt.commonInfo}</div>
                    </div>
                    <ResultButtons />
                </div>
            );
        } else {
             return (
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b pb-6 mb-6"><h2 className="text-xl font-bold text-slate-900">Your result:</h2></div>
                    <div className="prose max-w-none text-slate-600">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6"><p className="text-green-800 font-medium">Your answers indicate that you do not have symptoms.</p></div>
                        <div className="space-y-4 mt-6 border-t pt-6 text-sm">{txt.commonInfo}</div>
                    </div>
                    <ResultButtons />
                </div>
             );
        }
    };

    const ResultButtons = () => {
        const txt = quizData.resultTexts || {};
        return (
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="w-full h-14 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold uppercase text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all">
                    <Link href={txt.productLink || "#"}>{txt.productBtnText || "VIEW TEST KIT"}</Link>
                </Button>
            </div>
        );
    };

    // --- MAIN RENDER ---
    return (
        <div className="w-full">
            {/* ... Header ve Navigation aynı ... */}
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12 items-start'>
                <div className='w-full lg:w-1/4 shrink-0'>
                    <h1 className='font-garet font-bold text-xl md:text-2xl text-slate-900 leading-tight'>CHOOSE A HEALTH CONDITION QUESTIONNAIRE:</h1>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                        {quizList.map((q) => (
                            <Link key={q.id} href={`/health-check/${q.id}`} className="w-full">
                                <div className={cn("w-full h-full min-h-[32px] px-2 py-2 rounded-full text-[11px] md:text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center text-center leading-tight shadow-sm hover:shadow-md border border-transparent", q.id === quizData.id ? "bg-orange-400 text-white ring-2 ring-orange-200" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:border-gray-300")}>{q.label}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start min-h-[500px]">
                {/* SOL PANEL */}
                <div className="w-full md:w-1/3 pt-10">
                    <div className="relative inline-block">
                        <div className="relative z-10">
                            <h1 className="font-garet font-black text-4xl sm:text-5xl lg:text-5xl leading-[0.9] text-slate-900">{quizData.title}</h1>
                            {/* BMI Description Check */}
                            {quizData.description ? (
                                <div className="mt-6 text-sm text-slate-600 leading-relaxed font-inter">{quizData.description}</div>
                            ) : (
                                <p className="font-inter text-sm font-bold text-slate-400 uppercase tracking-wider mt-4">{quizData.subtitle}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* SAĞ PANEL */}
                <div className="w-full md:w-2/3">
                    {isFinished ? (
                        <div className="animate-in fade-in zoom-in-95 duration-500">
                            {quizData.id === 'bmi-calculator' ? renderBMIResult() : 
                             quizData.id === 'general-health-checker' ? renderGeneralHealthResult() : 
                             renderStandardResult()}
                        </div>
                    ) : (
                        <div>
                            {/* Step Indicator */}
                            <div className="mb-4">
                                <span className="text-sm font-bold text-slate-900">{currentStep.questions[0].stepLabel || `Step ${currentStepIndex + 1}/${totalSteps}`}</span>
                                <div className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-slate-900 transition-all duration-500" style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}></div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 mb-10 min-h-[200px]">
                                {currentStep.questions.map((question) => (
                                    <div key={question.id} className="flex flex-col gap-4">
                                        <h2 className="text-2xl font-bold text-slate-900">{question.text}</h2>
                                        
                                        {/* INPUT CHECK */}
                                        {question.type === 'input' ? (
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-full max-w-[200px]">
                                                    <input 
                                                        type={question.inputType} 
                                                        placeholder={question.placeholder}
                                                        className="w-full h-14 px-4 rounded-lg border-2 border-gray-300 text-xl font-medium focus:border-slate-900 focus:outline-none"
                                                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                                                    />
                                                </div>
                                                <span className="text-xl font-bold text-slate-900">{question.suffix}</span>
                                            </div>
                                        ) : (
                                            // RADIO/BUTTONS
                                            <div className="flex flex-col gap-3 justify-center items-center pt-8">
                                                {question.options && question.options.map((option) => {
                                                    const isSelected = answers[question.id] === option.value;
                                                    return (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => handleAnswer(question, option)}
                                                            className={cn(
                                                                "w-3/4 p-1 rounded-full mt-1 border-2 text-lg font-medium transition-all text-center",
                                                                isSelected 
                                                                    ? (quizData.id === 'bmi-calculator' ? "border-green-600 bg-green-600 text-white" : "border-slate-900 bg-slate-900 text-white") 
                                                                    : "border-gray-300 text-gray-500 hover:border-gray-400 bg-white"
                                                            )}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        )}
                                        {question.helperText && <p className="text-slate-500 text-sm">{question.helperText}</p>}
                                        {question.footerText && <p className="text-slate-500 text-sm mt-2">{question.footerText}</p>}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <button onClick={handleBack} disabled={currentStepIndex === 0} className="px-8 py-3 rounded-full bg-gray-400 text-white font-bold disabled:opacity-50 hover:bg-gray-500 transition">BACK</button>
                                <button 
                                    onClick={handleNext} 
                                    // Input kontrolü: Eğer input ise ve boşsa disable et
                                    disabled={currentStep.questions.some(q => {
                                        if (q.type === 'input') return !answers[q.id];
                                        return !answers[q.id];
                                    })}
                                    className="px-10 py-3 rounded-full bg-[#F5A623] text-white font-bold hover:bg-[#E0961F] transition disabled:opacity-50"
                                >
                                    {currentStepIndex === totalSteps - 1 ? "Calculate" : "NEXT"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
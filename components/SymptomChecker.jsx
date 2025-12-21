"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { symptomsData } from "@/lib/symptoms-data"; // Veriyi buradan çekeceğiz

export default function SymptomChecker() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState({}); // { 1: "male", 2: ["tiredness", "weightGain"] }
    const [gender, setGender] = useState(null);

    const totalSteps = symptomsData.steps.length;
    const stepData = symptomsData.steps.find(s => s.id === currentStep);

    // Seçim İşlemi
    const handleSelect = (option) => {
        // Adım 1 (Cinsiyet) - Tekli Seçim
        if (stepData.type === 'single') {
            setSelections(prev => ({ ...prev, [currentStep]: option.value }));
            if (currentStep === 1) setGender(option.value); // Cinsiyeti kaydet
        } 
        // Diğer Adımlar - Çoklu Seçim
        else {
            const currentSelections = selections[currentStep] || [];
            
            // Eğer "None of the above" seçildiyse diğerlerini temizle
            if (option.isNone) {
                setSelections(prev => ({ ...prev, [currentStep]: [option.value] }));
                return;
            }

            // Eğer "None" daha önce seçildiyse ve şimdi başka bir şeye tıklandıysa, "None"ı kaldır
            let newSelections = currentSelections.filter(v => v !== 'none');

            if (newSelections.includes(option.value)) {
                newSelections = newSelections.filter(v => v !== option.value); // Çıkar
            } else {
                newSelections.push(option.value); // Ekle
            }
            setSelections(prev => ({ ...prev, [currentStep]: newSelections }));
        }
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            setCurrentStep(totalSteps + 1); // Sonuç ekranı
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setSelections({});
        setGender(null);
    };

    // --- SONUÇ HESAPLAMA ---
    const getRecommendedTests = () => {
        const triggeredTests = new Set();

        // Tüm seçimleri gez
        Object.keys(selections).forEach(stepId => {
            // Sadece semptom adımlarını (2, 3, 4) kontrol et
            if (stepId === '1') return; 

            const selectedValues = selections[stepId] || [];
            
            // O adımdaki tüm seçenekleri bul
            const stepOptions = symptomsData.steps.find(s => s.id === parseInt(stepId)).options;

            selectedValues.forEach(val => {
                const option = stepOptions.find(o => o.value === val);
                if (option && option.triggers) {
                    option.triggers.forEach(testId => {
                        // Cinsiyet kontrolü (Örn: Erkekse menopoz önerme)
                        if (testId === 'menopause' && gender === 'male') return;
                        if (testId === 'male-fertility' && gender === 'female') return;
                        
                        triggeredTests.add(testId);
                    });
                }
            });
        });

        return Array.from(triggeredTests).map(id => symptomsData.tests[id]).filter(Boolean);
    };

    // --- SONUÇ EKRANI RENDER ---
    if (currentStep > totalSteps) {
        const results = getRecommendedTests();

        return (
            <div className="w-full max-w-4xl mx-auto py-12 px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
                    <h2 className="font-garet font-bold text-2xl md:text-3xl text-slate-900 mb-8 uppercase leading-tight">
                        Based on your answers you may want to check the following self-tests:
                    </h2>

                    {results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
                            {results.map((test, idx) => (
                                <Link 
                                    key={idx} 
                                    href={test.link} 
                                    className={`block w-full py-4 px-6 rounded-lg text-white font-bold uppercase tracking-wide shadow-md hover:shadow-lg hover:opacity-90 transition-all ${test.color || "bg-slate-900"}`}
                                >
                                    {test.title}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-10">
                            <p className="text-green-800 font-medium text-lg">
                                Based on your answers, we do not have specific test recommendations. 
                                However, if you are concerned about your health, please consult a GP.
                            </p>
                        </div>
                    )}

                    <div className="flex justify-center gap-4">
                        <Link href="/" className="px-8 py-3 rounded-full border-2 border-slate-300 text-slate-600 font-bold hover:bg-slate-50 transition">
                            HOME
                        </Link>
                        <Button onClick={handleReset} className="px-8 py-3 rounded-full bg-[#F5A623] hover:bg-[#E0961F] text-white font-bold">
                            START AGAIN
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // --- SORU EKRANI RENDER ---
    return (
        <div className="w-full min-h-screen bg-white py-12 px-4 flex flex-col items-center">
            
            {/* BAŞLIK VE DEKOR */}
            <div className="text-center mb-10 relative w-full max-w-2xl">
                <div className="absolute -top-10 -left-10 hidden md:block opacity-30">
                     <Image src="/silex-decorative.svg" width={80} height={80} alt="Decor" />
                </div>
                <h1 className="font-garet font-black text-4xl md:text-6xl text-slate-900 leading-none">
                    CHECK<br />SYMPTOMS
                </h1>
                <p className="font-inter text-slate-500 font-bold tracking-wider mt-2 uppercase">
                    {symptomsData.subtitle}
                </p>
                <div className="absolute -bottom-10 -right-10 hidden md:block opacity-30 rotate-180">
                     <Image src="/silex-decorative.svg" width={80} height={80} alt="Decor" />
                </div>
            </div>

            {/* SORU KARTI */}
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 relative z-10">
                
                {/* Adım Başlığı */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {stepData.title}
                    </h2>
                    <p className="text-sm font-bold text-slate-400">
                        Step {currentStep}/{totalSteps}
                    </p>
                </div>

                {/* Seçenekler */}
                <div className="flex flex-col gap-3">
                    {stepData.options.map((option, idx) => {
                        
                        // Cinsiyet Filtresi: Eğer soru sadece kadınlar içinse ve kullanıcı erkekse gösterme
                        if (option.type && option.type !== gender && gender && option.type !== 'all') {
                            return null;
                        }

                        // Seçili mi?
                        const isSelected = stepData.type === 'single' 
                            ? selections[currentStep] === option.value
                            : (selections[currentStep] || []).includes(option.value);

                        return (
                            <button
                                key={idx}
                                onClick={() => handleSelect(option)}
                                className={cn(
                                    "w-full py-4 px-6 rounded-lg border-2 text-lg font-medium transition-all text-left flex items-center justify-between group",
                                    isSelected 
                                        ? "border-slate-900 bg-slate-900 text-white shadow-md" 
                                        : "border-gray-200 text-slate-600 hover:border-gray-400 hover:bg-gray-50"
                                )}
                            >
                                <span>{option.label}</span>
                                {isSelected && <span className="text-xl">✓</span>}
                            </button>
                        );
                    })}
                </div>

                {/* Navigasyon Butonları */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
                    <div className="w-1/3">
                        {currentStep > 1 && (
                            <button 
                                onClick={handleBack}
                                className="px-6 py-2 rounded-full text-slate-500 font-bold hover:text-slate-900 transition flex items-center gap-1"
                            >
                                &lt; BACK
                            </button>
                        )}
                    </div>
                    
                    <div className="w-1/3 text-right">
                        <button 
                            onClick={handleNext}
                            // Eğer hiç seçim yapılmadıysa disable et
                            disabled={!selections[currentStep] || selections[currentStep].length === 0}
                            className="px-8 py-3 rounded-full bg-[#F5A623] text-white font-bold hover:bg-[#E0961F] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                            {currentStep === totalSteps ? "SUBMIT" : "NEXT"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/lib/i18n";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { symptomsData } from "@/lib/symptoms-data";

export default function SymptomChecker() {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState({});
    const [gender, setGender] = useState(null);

    const totalSteps = symptomsData.steps.length;
    const stepData = symptomsData.steps.find(s => s.id === currentStep);

    const handleSelect = (option) => {
        if (stepData.type === 'single') {
            setSelections(prev => ({ ...prev, [currentStep]: option.value }));
            if (currentStep === 1) setGender(option.value);
        } else {
            const currentSelections = selections[currentStep] || [];

            if (option.isNone) {
                setSelections(prev => ({ ...prev, [currentStep]: [option.value] }));
                return;
            }

            let newSelections = currentSelections.filter(v => v !== 'none');

            if (newSelections.includes(option.value)) {
                newSelections = newSelections.filter(v => v !== option.value);
            } else {
                newSelections.push(option.value);
            }
            setSelections(prev => ({ ...prev, [currentStep]: newSelections }));
        }
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            setCurrentStep(totalSteps + 1);
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

    const getRecommendedTests = () => {
        const triggeredTests = new Set();

        Object.keys(selections).forEach(stepId => {
            if (stepId === '1') return;

            const selectedValues = selections[stepId] || [];
            const stepOptions = symptomsData.steps.find(s => s.id === parseInt(stepId)).options;

            selectedValues.forEach(val => {
                const option = stepOptions.find(o => o.value === val);
                if (option && option.triggers) {
                    option.triggers.forEach(testId => {
                        if (testId === 'menopause' && gender === 'male') return;
                        if (testId === 'male-fertility' && gender === 'female') return;
                        triggeredTests.add(testId);
                    });
                }
            });
        });

        return Array.from(triggeredTests).map(id => symptomsData.tests[id]).filter(Boolean);
    };

    // --- SONUÇ EKRANI ---
    if (currentStep > totalSteps) {
        const results = getRecommendedTests();

        return (
            <div className="w-full max-w-4xl mx-auto py-12 px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
                    <h2 className="font-garet font-bold text-2xl md:text-3xl text-slate-900 mb-8 uppercase leading-tight">
                        {t('symptoms.results_title')}
                    </h2>

                    {results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
                            {results.map((test, idx) => (
                                <Link
                                    key={idx}
                                    href={test.link}
                                    className={`flex items-center justify-center w-full min-h-[50px] py-4 px-6 rounded-lg text-white font-bold uppercase tracking-wide shadow-md hover:shadow-lg hover:opacity-90 transition-all text-center leading-snug ${test.color || "bg-slate-900"}`}
                                >
                                    {t(test.titleKey)}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-10">
                            <p className="text-green-800 font-medium text-lg">
                                {t('symptoms.no_results')}
                            </p>
                        </div>
                    )}

                    <div className="flex justify-center gap-4 mt-8">
                        <div className="w-1/2">
                            <Link
                                href="/"
                                className="flex items-center justify-center px-8 py-3 h-12 rounded-full border-2 border-slate-300 text-slate-600 font-bold hover:bg-slate-50 transition uppercase w-full"
                            >
                                {t('symptoms.btn_home')}
                            </Link>
                        </div>
                        <div className="w-1/2">
                            <Button
                                onClick={handleReset}
                                className="px-8 py-3 h-12 rounded-full bg-[#F5A623] hover:bg-[#E0961F] text-white font-bold uppercase w-full"
                            >
                                {t('symptoms.btn_start_again')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- SORU EKRANI ---
    return (
        <div className="w-full min-h-screen bg-white py-12 px-4 flex flex-col items-center">

            {/* BAŞLIK */}
            <div className="text-center mb-10 relative w-full max-w-2xl">
                <div className="absolute -top-10 -left-10 hidden md:block opacity-30">
                    <Image src="/allvex-decorative.svg" width={80} height={80} alt="Decor" />
                </div>
                <h1 className="font-garet font-black text-4xl md:text-6xl text-slate-900 leading-none">
                    {t('symptoms.title_line1')}<br />{t('symptoms.title_line2')}
                </h1>
                <p className="font-inter text-slate-500 font-bold tracking-wider mt-2 uppercase">
                    {t('symptoms.subtitle')}
                </p>
                <div className="absolute -bottom-10 -right-10 hidden md:block opacity-30 rotate-180">
                    <Image src="/allvex-decorative.svg" width={80} height={80} alt="Decor" />
                </div>
            </div>

            {/* SORU KARTI */}
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-10 relative z-10">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {t(stepData.titleKey)}
                    </h2>
                    <p className="text-sm font-bold text-slate-400">
                        {t('symptoms.step_label', { current: currentStep, total: totalSteps })}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {stepData.options.map((option, idx) => {
                        // Cinsiyet filtresi
                        if (option.type && option.type !== gender && gender && option.type !== 'all') {
                            return null;
                        }

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
                                <span>{t(option.labelKey)}</span>
                                {isSelected && <span className="text-xl">✓</span>}
                            </button>
                        );
                    })}
                </div>

                <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
                    <div className="w-1/3">
                        {currentStep > 1 && (
                            <button
                                onClick={handleBack}
                                className="px-8 py-3 rounded-full bg-gray-400 text-white font-bold hover:bg-gray-500 transition shadow-sm"
                            >
                                {t('symptoms.btn_back')}
                            </button>
                        )}
                    </div>

                    <div className="w-1/3 text-right">
                        <button
                            onClick={handleNext}
                            disabled={!selections[currentStep] || selections[currentStep].length === 0}
                            className="px-8 py-3 rounded-full bg-[#F5A623] text-white font-bold hover:bg-[#E0961F] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                            {currentStep === totalSteps ? t('symptoms.btn_submit') : t('symptoms.btn_next')}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

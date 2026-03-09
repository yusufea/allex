"use client"

import { useState } from "react"
import Image from "next/image"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const TABS = [
    { id: "Overview",      labelKey: "uti.tabs.overview" },
    { id: "Test Contents", labelKey: "uti.tabs.test_contents" },
    { id: "Instructions",  labelKey: "uti.tabs.instructions" },
    { id: "Your Result",   labelKey: "uti.tabs.your_result" },
]

const BANNER_BADGES = [
    { labelKey: "uti.badges.urine",           icon: "/urine.png" },
    { labelKey: "uti.badges.accuracy",        icon: "/accuracy.png" },
    { labelKey: "uti.badges.clinically_tested", icon: "/clinically_tested.png" },
    { labelKey: "uti.badges.result_time",     icon: "/results-in-2-mins.png" },
]

const RESULT_KEYS = [
    { id: "negative", color: "bg-green-600 hover:bg-green-700", labelKey: "uti.your_result.negative_label", titleKey: "uti.your_result.negative_title", bodyKey: "uti.your_result.negative_body" },
    { id: "positive", color: "bg-red-600 hover:bg-red-700",    labelKey: "uti.your_result.positive_label", titleKey: "uti.your_result.positive_title", bodyKey: "uti.your_result.positive_body" },
]

const INSTRUCTION_SLIDES = Array.from({ length: 11 }, (_, i) => `/uti-instructions/Slide${i + 1}.PNG`)

export default function UTIPage() {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("Overview")
    const [instructionMode, setInstructionMode] = useState("video")
    const [slideIndex, setSlideIndex] = useState(0)
    const [activeResult, setActiveResult] = useState(null)

    const symptoms = [
        t("uti.overview.symptom_1"),
        t("uti.overview.symptom_2"),
        t("uti.overview.symptom_3"),
        t("uti.overview.symptom_4"),
        t("uti.overview.symptom_5"),
        t("uti.overview.symptom_6"),
        t("uti.overview.symptom_7"),
        t("uti.overview.symptom_8"),
    ]

    const activeResultData = RESULT_KEYS.find(r => r.id === activeResult)

    return (
        <div className="w-full bg-white min-h-screen">

            {/* ── BANNER ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Text column */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 leading-tight">
                                {t("uti.title")}
                            </h1>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("uti.description")}
                            </p>
                        </div>

                        {/* Image column */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Image
                                src="/uti-main.png"
                                alt={t("uti.title")}
                                width={520}
                                height={420}
                                className="w-full max-w-[480px] h-auto object-contain"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Banner badges */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-12">
                <ul className="flex flex-wrap gap-5 mt-2">
                    {BANNER_BADGES.map((b) => (
                        <li key={b.labelKey} className="flex flex-col items-center gap-2 text-center w-[100px]">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src={b.icon}
                                    alt={t(b.labelKey)}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 object-contain"
                                />
                            </div>
                            <span className="font-inter text-xs text-slate-600 leading-tight">{t(b.labelKey)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── TABS ── */}
            <section className="w-full border-t border-b border-slate-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex gap-0 overflow-x-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 px-6 py-4 font-garet font-black text-sm uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap
                                    ${activeTab === tab.id
                                        ? "border-slate-900 text-slate-900"
                                        : "border-transparent text-slate-400 hover:text-slate-700"
                                    }`}
                            >
                                {t(tab.labelKey)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TAB CONTENT ── */}
            <section className="w-full py-12 md:py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

                    {/* OVERVIEW */}
                    {activeTab === "Overview" && (
                        <div className="flex flex-col lg:flex-row gap-12">

                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                <h2 className="font-garet font-black text-2xl text-slate-900 uppercase">
                                    {t("uti.overview.title")}
                                </h2>
                                <video controls className="w-full rounded-xl border border-slate-200 shadow-sm">
                                    <source src="https://silex-videos.s3.eu-west-2.amazonaws.com/uti-overview.mp4" type="video/mp4" />
                                </video>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                <h2 className="font-garet font-black text-2xl text-slate-900 uppercase">
                                    {t("uti.overview.symptoms_title")}
                                </h2>
                                <p className="font-inter text-slate-500 text-sm">
                                    {t("uti.overview.symptoms_intro")}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {symptoms.map((s) => (
                                        <li key={s} className="flex items-start gap-3 font-inter text-slate-600">
                                            <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    )}

                    {/* TEST CONTENTS */}
                    {activeTab === "Test Contents" && (
                        <div className="flex flex-col lg:flex-row gap-12 items-start">

                            <div className="w-full lg:w-3/5 flex justify-center">
                                <Image
                                    src="/uti-test-contents.png"
                                    alt={t("uti.tabs.test_contents")}
                                    width={480}
                                    height={380}
                                    className="w-full max-w-[1240px] h-auto object-contain"
                                />
                            </div>

                            <div className="w-full lg:w-2/5 flex flex-col gap-4 items-center">
                                <h2 className="font-garet font-black text-2xl text-slate-900 uppercase self-start">
                                    {t("uti.test_contents.view_360")}
                                </h2>
                                <iframe
                                    title={t("uti.test_contents.view_360")}
                                    allowFullScreen
                                    style={{ border: "none" }}
                                    width="100%"
                                    height="420"
                                    src="https://www.pacdora.com/share?filter_url=psoc179mn8"
                                    className="rounded-xl border border-slate-200"
                                />
                            </div>

                        </div>
                    )}

                    {/* INSTRUCTIONS */}
                    {activeTab === "Instructions" && (
                        <div className="flex flex-col gap-8 max-w-3xl mx-auto">

                            <div className="flex gap-8">
                                {[
                                    { mode: "video",  labelKey: "uti.instructions.video_label" },
                                    { mode: "slides", labelKey: "uti.instructions.slides_label" },
                                ].map(({ mode, labelKey }) => (
                                    <label key={mode} className="flex items-center gap-2 cursor-pointer font-inter text-slate-700 font-medium">
                                        <input
                                            type="radio"
                                            name="instructionMode"
                                            checked={instructionMode === mode}
                                            onChange={() => { setInstructionMode(mode); setSlideIndex(0) }}
                                            className="accent-slate-900"
                                        />
                                        {t(labelKey)}
                                    </label>
                                ))}
                            </div>

                            {instructionMode === "video" && (
                                <video controls poster="/uti-instructions-thumbnail.jpg" className="w-full rounded-xl border border-slate-200 shadow-sm">
                                    <source src="https://silex-videos.s3.eu-west-2.amazonaws.com/uti-instructions.mp4" type="video/mp4" />
                                </video>
                            )}

                            {instructionMode === "slides" && (
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                        <Image
                                            src={INSTRUCTION_SLIDES[slideIndex]}
                                            alt={`Step ${slideIndex + 1}`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <button
                                            onClick={() => setSlideIndex(i => Math.max(0, i - 1))}
                                            disabled={slideIndex === 0}
                                            className="px-5 py-2 rounded-full bg-slate-200 text-slate-700 font-bold disabled:opacity-30 hover:bg-slate-300 transition"
                                        >
                                            {t("uti.instructions.prev")}
                                        </button>
                                        <span className="font-inter text-sm text-slate-500">
                                            {slideIndex + 1} / {INSTRUCTION_SLIDES.length}
                                        </span>
                                        <button
                                            onClick={() => setSlideIndex(i => Math.min(INSTRUCTION_SLIDES.length - 1, i + 1))}
                                            disabled={slideIndex === INSTRUCTION_SLIDES.length - 1}
                                            className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold disabled:opacity-30 hover:bg-slate-700 transition"
                                        >
                                            {t("uti.instructions.next")}
                                        </button>
                                    </div>
                                    <div className="flex gap-1.5 flex-wrap justify-center">
                                        {INSTRUCTION_SLIDES.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSlideIndex(i)}
                                                className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-slate-900" : "bg-slate-300"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* YOUR RESULT */}
                    {activeTab === "Your Result" && (
                        <div className="flex flex-col gap-8 items-center">
                            <h2 className="font-garet font-black text-2xl text-slate-900 uppercase">
                                {t("uti.your_result.title")}
                            </h2>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                {RESULT_KEYS.map((r) => (
                                    <button
                                        key={r.id}
                                        onClick={() => setActiveResult(r.id)}
                                        className={`${r.color} text-white font-garet font-black text-sm uppercase py-4 px-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-100`}
                                    >
                                        {t(r.labelKey)}
                                    </button>
                                ))}
                            </div>

                            {activeResult && activeResultData && (
                                <div className="w-full max-w-2xl bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 relative">
                                    <button
                                        onClick={() => setActiveResult(null)}
                                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold"
                                    >
                                        ✕
                                    </button>
                                    <h3 className="font-garet font-black text-xl text-slate-900 mb-3">
                                        {t(activeResultData.titleKey)}
                                    </h3>
                                    <p className="font-inter text-slate-600 leading-relaxed">
                                        {t(activeResultData.bodyKey)}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </section>

            {/* ── FAQs ── */}
            <section className="w-full py-12 md:py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 mb-10">
                        {t("uti.faqs.title")}
                    </h2>

                    <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
                        {[
                            { id: "q1", q: "uti.faqs.q1_q", a: "uti.faqs.q1_a" },
                            { id: "q2", q: "uti.faqs.q2_q", a: "uti.faqs.q2_a" },
                            { id: "q3", q: "uti.faqs.q3_q", a: "uti.faqs.q3_a" },
                            { id: "q4", q: "uti.faqs.q4_q", a: "uti.faqs.q4_a" },
                            { id: "q5", q: "uti.faqs.q5_q", a: "uti.faqs.q5_a" },
                            { id: "q6", q: "uti.faqs.q6_q", a: "uti.faqs.q6_a" },
                            { id: "q7", q: "uti.faqs.q7_q", a: "uti.faqs.q7_a" },
                            { id: "q8", q: "uti.faqs.q8_q", a: "uti.faqs.q8_a" },
                            { id: "q9", q: "uti.faqs.q9_q", a: "uti.faqs.q9_a" },
                        ].map(({ id, q, a }) => (
                            <AccordionItem key={id} value={id} className="bg-white border border-slate-200 rounded-xl px-6">
                                <AccordionTrigger className="font-garet font-black text-base text-slate-800 hover:no-underline py-5">
                                    {t(q)}
                                </AccordionTrigger>
                                <AccordionContent className="font-inter text-slate-600 leading-relaxed pb-5">
                                    {t(a)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

        </div>
    )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"

export default function OurStoryPage() {
    const { t } = useTranslation()

    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── 1. OUR STORY ── */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6">

                        {/* Text Column */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-6">
                            <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 leading-tight">
                                {t("ourStory.s1_title")}
                            </h1>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s1_p1")}
                            </p>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s1_p2")}
                            </p>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s1_p3")}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <Link
                                    href="/self-tests"
                                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-200 text-slate-800 px-6 py-2.5 rounded-full hover:bg-slate-300 transition-all duration-200"
                                >
                                    {t("ourStory.btn_take_test")}
                                </Link>
                                <Link
                                    href="/health-check/check-symptoms"
                                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-700 transition-all duration-200"
                                >
                                    {t("ourStory.btn_symptoms")}
                                </Link>
                                <Link
                                    href="/#aboutAllvexVideo"
                                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
                                >
                                    <span className="w-9 h-9 rounded-full border-2 border-slate-700 group-hover:border-slate-900 flex items-center justify-center flex-shrink-0">
                                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                    </span>
                                    <span className="font-garet font-black text-sm uppercase tracking-wide">
                                        {t("ourStory.btn_about")}
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <div className="relative w-full max-w-[480px]">
                                <Image
                                    src="/our-story-img.png"
                                    alt={t("ourStory.s1_title")}
                                    width={480}
                                    height={480}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 2. OUR MISSION ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-mission.png"
                                alt={t("ourStory.s2_title")}
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                {t("ourStory.s2_title")}
                            </h2>
                            <h3 className="font-garet font-black text-lg md:text-xl text-slate-700 leading-snug">
                                {t("ourStory.s2_subtitle")}
                            </h3>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s2_text")}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 3. OUR VISION ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-vision.png"
                                alt={t("ourStory.s3_title")}
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                {t("ourStory.s3_title")}
                            </h2>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s3_text")}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 4. CERTIFICATIONS ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16">

                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-values.png"
                                alt={t("ourStory.s4_title")}
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                {t("ourStory.s4_title")}
                            </h2>
                            <h3 className="font-garet font-black text-lg md:text-xl text-slate-700 leading-snug">
                                {t("ourStory.s4_subtitle")}
                            </h3>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                {t("ourStory.s4_text")}
                            </p>

                            {/* Cert Logos */}
                            <div className="flex flex-wrap items-center gap-6 mt-2">
                                <Image src="/ce.png"   alt="CE"   width={50} height={50} className="h-10 w-auto object-contain" />
                                <Image src="/md.png"   alt="MD"   width={50} height={50} className="h-10 w-auto object-contain" />
                                <Image src="/fida.png" alt="FIDA" width={70} height={40} className="h-8 w-auto object-contain" />
                                <Image src="/ivd.png"  alt="IVD"  width={50} height={50} className="h-10 w-auto object-contain" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

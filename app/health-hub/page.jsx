"use client"

import Image from "next/image"
import Link from "next/link"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"

const infoItems = [
    {
        id: "vitaminD",
        image: "/vitamin-d-info-hub.jpg",
        testHref: "/self-tests/vitamin-d",
        btnColor: "bg-yellow-400 text-yellow-900 hover:bg-yellow-300",
    },
    {
        id: "vaginalInfection",
        image: "/vaginal-infection-info-hub.jpg",
        testHref: "/self-tests/vaginal-infection",
        btnColor: "bg-pink-500 text-white hover:bg-pink-400",
    },
    {
        id: "uti",
        image: "/uti-info-hub.jpg",
        testHref: "/self-tests/uti",
        btnColor: "bg-blue-500 text-white hover:bg-blue-400",
    },
    {
        id: "thyroid",
        image: "/under-active-thyroid-info-hub.jpg",
        testHref: "/self-tests/under-active-thyroid",
        btnColor: "bg-purple-600 text-white hover:bg-purple-500",
    },
    {
        id: "menopause",
        image: "/menopause-info-hub.jpg",
        testHref: "/self-tests/menopause",
        btnColor: "bg-rose-500 text-white hover:bg-rose-400",
    },
    {
        id: "maleFertility",
        image: "/male-fertility-info-hub.jpg",
        testHref: "/self-tests/male-fertility",
        btnColor: "bg-blue-700 text-white hover:bg-blue-600",
    },
    {
        id: "ironDeficiency",
        image: "/iron-deficiency-info-hub.jpg",
        testHref: "/self-tests/iron-deficiency",
        btnColor: "bg-red-600 text-white hover:bg-red-500",
    },
    {
        id: "stomachHealth",
        image: "/stomach-health-info-hub.jpg",
        testHref: "/self-tests/stomach-health",
        btnColor: "bg-green-600 text-white hover:bg-green-500",
    },
    {
        id: "bowelHealth",
        image: "/bowel-health-info-hub.jpg",
        testHref: "/self-tests/bowel-health",
        btnColor: "bg-emerald-700 text-white hover:bg-emerald-600",
        hasList: true,
    },
]

export default function InfoHubPage() {
    const { t } = useTranslation()

    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── PAGE HEADER ── */}
            <div className="w-full py-12 md:py-16 px-6 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 uppercase">
                        {t("healthHub.page_title")}
                    </h1>
                </div>
            </div>

            {/* ── INFO CARDS GRID ── */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 md:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">

                    {infoItems.map((item) => {
                        const title = t(`healthHub.items.${item.id}.title`)
                        return (
                            <section
                                key={item.id}
                                className="flex flex-col sm:flex-row gap-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Image Column — smaller, centered */}
                                <div className="w-full sm:w-[160px] md:w-[180px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-4 min-h-[160px] sm:min-h-0">
                                    <Image
                                        src={item.image}
                                        alt={title.replace(/\n/g, " ")}
                                        width={130}
                                        height={130}
                                        className="w-[110px] h-[110px] object-contain"
                                    />
                                </div>

                                {/* Text Column */}
                                <div className="flex flex-col gap-4 p-5 sm:pl-0 sm:pr-5 sm:py-5 flex-1">
                                    <h2 className="font-garet font-black text-base md:text-lg text-slate-900 leading-snug uppercase whitespace-pre-line">
                                        {title}
                                    </h2>

                                    {!item.hasList && (
                                        <p className="font-inter text-sm text-slate-600 leading-relaxed">
                                            {t(`healthHub.items.${item.id}.text`)}
                                        </p>
                                    )}

                                    {item.hasList && (
                                        <>
                                            <p className="font-inter text-sm text-slate-600 leading-relaxed">
                                                {t(`healthHub.items.${item.id}.listIntro`)}
                                            </p>
                                            <ul className="flex flex-col gap-2 pl-4 list-disc">
                                                <li className="font-inter text-sm text-slate-600 leading-relaxed">
                                                    {t(`healthHub.items.${item.id}.list_1`)}
                                                </li>
                                                <li className="font-inter text-sm text-slate-600 leading-relaxed">
                                                    {t(`healthHub.items.${item.id}.list_2`)}
                                                </li>
                                            </ul>
                                        </>
                                    )}

                                    {/* Actions */}
                                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                                        <button className="font-garet font-black text-xs uppercase tracking-wide text-slate-500 hover:text-slate-900 transition-colors">
                                            {t("healthHub.read_more")} &gt;
                                        </button>
                                        <Link
                                            href={item.testHref}
                                            className={`font-garet font-black text-xs uppercase tracking-wide px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 ${item.btnColor}`}
                                        >
                                            {t(`healthHub.items.${item.id}.testLabel`)}
                                        </Link>
                                    </div>
                                </div>

                            </section>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

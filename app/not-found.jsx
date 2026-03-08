"use client"

import Link from "next/link"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">

            {/* Big 404 */}
            <p className="font-garet font-black text-[120px] md:text-[180px] leading-none text-slate-100 select-none">
                404
            </p>

            {/* Message */}
            <div className="-mt-6 flex flex-col items-center gap-4">
                <h1 className="font-garet font-black text-3xl md:text-4xl text-slate-900 uppercase">
                    {t("notFound.title")}
                </h1>
                <p className="font-inter text-base text-slate-500 max-w-md">
                    {t("notFound.subtitle")}
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <Link
                    href="/"
                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                >
                    {t("notFound.btn_home")}
                </Link>
                <Link
                    href="/health-check/check-symptoms"
                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-100 text-slate-800 px-8 py-3 rounded-full hover:bg-slate-200 transition-all duration-200"
                >
                    {t("notFound.btn_symptoms")}
                </Link>
            </div>

        </div>
    )
}

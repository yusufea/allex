"use client"

import * as React from "react"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react"

export default function ContactUsPage() {
    const { t } = useTranslation()
    const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: "" })
    const [submitted, setSubmitted] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate send (replace with real API call)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1200)
    }

    const infoCards = [
        {
            icon: <MapPin className="w-5 h-5 text-slate-700" />,
            label: t("contactUs.address_label"),
            value: t("contactUs.address_value"),
        },
        {
            icon: <Mail className="w-5 h-5 text-slate-700" />,
            label: t("contactUs.email_info_label"),
            value: t("contactUs.email_info_value"),
        },
        {
            icon: <Phone className="w-5 h-5 text-slate-700" />,
            label: t("contactUs.phone_label"),
            value: t("contactUs.phone_value"),
        },
        {
            icon: <Clock className="w-5 h-5 text-slate-700" />,
            label: t("contactUs.hours_label"),
            value: t("contactUs.hours_value"),
        },
    ]

    return (
        <div className="w-full min-h-screen bg-white">

            {/* Page Header */}
            <div className="w-full py-12 md:py-16 px-6 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 uppercase">
                        {t("contactUs.page_title")}
                    </h1>
                    <p className="mt-4 font-inter text-base md:text-lg text-slate-500 max-w-2xl">
                        {t("contactUs.subtitle")}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* LEFT — Info Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <h2 className="font-garet font-black text-2xl text-slate-900 uppercase">
                            {t("contactUs.info_title")}
                        </h2>

                        <div className="flex flex-col gap-4">
                            {infoCards.map((card) => (
                                <div
                                    key={card.label}
                                    className="flex items-start gap-4 p-5 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <p className="font-garet font-black text-xs uppercase tracking-wide text-slate-400 mb-0.5">
                                            {card.label}
                                        </p>
                                        <p className="font-inter text-sm text-slate-700">
                                            {card.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Form */}
                    <div className="lg:col-span-3">
                        <h2 className="font-garet font-black text-2xl text-slate-900 uppercase mb-8">
                            {t("contactUs.form_title")}
                        </h2>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                                <CheckCircle2 className="w-14 h-14 text-green-500" />
                                <p className="font-garet font-black text-xl text-slate-800">
                                    {t("contactUs.send_success")}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-garet font-black text-xs uppercase tracking-wide text-slate-500">
                                            {t("contactUs.name_label")}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder={t("contactUs.name_placeholder")}
                                            className="w-full border border-slate-200 rounded-lg px-4 py-3 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-garet font-black text-xs uppercase tracking-wide text-slate-500">
                                            {t("contactUs.email_label")}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder={t("contactUs.email_placeholder")}
                                            className="w-full border border-slate-200 rounded-lg px-4 py-3 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-garet font-black text-xs uppercase tracking-wide text-slate-500">
                                        {t("contactUs.subject_label")}
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder={t("contactUs.subject_placeholder")}
                                        className="w-full border border-slate-200 rounded-lg px-4 py-3 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-garet font-black text-xs uppercase tracking-wide text-slate-500">
                                        {t("contactUs.message_label")}
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder={t("contactUs.message_placeholder")}
                                        className="w-full border border-slate-200 rounded-lg px-4 py-3 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="self-start mt-2 font-garet font-black text-sm uppercase tracking-wide bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-slate-700 disabled:opacity-60 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                                >
                                    {loading ? "..." : t("contactUs.send_btn")}
                                </button>

                            </form>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

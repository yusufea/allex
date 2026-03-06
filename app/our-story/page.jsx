"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function OurStoryPage() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── 1. OUR STORY ── */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6">

                        {/* Text Column */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-6">
                            <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 leading-tight">
                                Our Story
                            </h1>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                Ever put off an appointment as you thought you would just get better,
                                or you didn&apos;t want the hassle of going to see a GP? Well, one of our
                                parents did, and unfortunately, they suffered as a result. His generic
                                symptoms of tiredness and breathlessness developed which contributed
                                to a lack of exercise and a generally unhealthy way of living. A
                                stubborn refusal to accept something might be wrong, meant nothing
                                changed in his lifestyle. His symptoms got more serious and his health
                                progressively worse, before any action was taken. But it was too late.
                                Sadly, this negative spiral developed into a more serious condition and
                                in time, his passing.
                            </p>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                We wondered, would things have been different if he had been forced to
                                see a GP, or could have had an early diagnosis at home? What if he
                                (or his wife) had the opportunity to understand his health better
                                through self-testing, to at least provide an early indication as to
                                whether he was suffering from something more serious? It is no
                                guarantee, but this certainly could have helped.
                            </p>

                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                So, with this in mind, we have decided to make a positive change in
                                the world of personal health. Silex Self-Tests are available for you
                                to take at home and cover a broad range of potentially underlying
                                health conditions. Silex doesn&apos;t have all the answers and doesn&apos;t
                                replace the role of your GP, but our Self-Tests do empower you to
                                better understand your overall health, provide early screening for
                                potential health conditions and start you on a positive health journey.
                                Silex Self-Tests start you on a journey that gets you on the front foot
                                with your health, with regular testing in the comfort of your own home.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <Link
                                    href="/self-tests"
                                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-200 text-slate-800 px-6 py-2.5 rounded-full hover:bg-slate-300 transition-all duration-200"
                                >
                                    Take a Test
                                </Link>
                                <Link
                                    href="/health-check/check-symptoms"
                                    className="font-garet font-black text-sm uppercase tracking-wide bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-700 transition-all duration-200"
                                >
                                    Check Symptoms
                                </Link>
                                <Link
                                    href="/#aboutSilexVideo"
                                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
                                >
                                    <span className="w-9 h-9 rounded-full border-2 border-slate-700 group-hover:border-slate-900 flex items-center justify-center flex-shrink-0">
                                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                    </span>
                                    <span className="font-garet font-black text-sm uppercase tracking-wide">
                                        About Silex
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        {/* Replace src with /our-story-img.png when available */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <div className="relative w-full max-w-[480px]">
                                <Image
                                    src="/our-story-img.png"
                                    alt="Our Story"
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

            {/* ── 2. OUR MISSION (with background) ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                        {/* Icon Column */}
                        {/* Replace src with /our-story-mission.png when available */}
                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-mission.png"
                                alt="Our Mission"
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                Our Mission
                            </h2>
                            <h3 className="font-garet font-black text-lg md:text-xl text-slate-700 leading-snug">
                                When it comes to your personal health,
                                being on the front foot is absolutely crucial.
                            </h3>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                Silex&apos;s mission is to make high quality healthcare
                                testing kits affordable and available for as many
                                people as possible. We provide consumers an opportunity
                                to monitor health and wellness outside of a clinic or hospital
                                setting, and to seek medical advice and treatment at the earliest
                                possible opportunity.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 3. OUR VISION ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                        {/* Icon Column */}
                        {/* Replace src with /our-story-vision.png when available */}
                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-vision.png"
                                alt="Our Vision"
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                Our Vision
                            </h2>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                With this in mind, we have created a Self-Test
                                range that empowers consumers to take control of their
                                own health. We have developed SILEX, a range of rapid
                                self-tests clinically proven to identify a range of
                                illnesses and specific conditions with the highest accuracy
                                readings that can be administered in the comfort and privacy
                                of your own home. Silex tests provide a swift results of a
                                potential healthcare condition, which can then be followed
                                up with an appointment with a healthcare provider.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 4. CERTIFICATIONS (with background) ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16">

                        {/* Icon Column */}
                        {/* Replace src with /our-story-values.png when available */}
                        <div className="w-full md:w-[280px] flex-shrink-0 flex justify-center">
                            <Image
                                src="/our-story-values.png"
                                alt="Certifications"
                                width={180}
                                height={180}
                                className="w-full max-w-[180px] md:max-w-[180px] h-auto object-contain"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col gap-5">
                            <h2 className="font-garet font-black text-3xl md:text-4xl text-slate-900 leading-tight">
                                Certifications
                            </h2>
                            <h3 className="font-garet font-black text-lg md:text-xl text-slate-700 leading-snug">
                                Our value is in providing one of the highest
                                quality tests on the UK market.
                            </h3>
                            <p className="font-inter text-base md:text-lg text-slate-600 leading-relaxed">
                                Silex Self-Tests are tested and certified to the
                                highest of standards on the UK market. All tests
                                hold accreditations validating their high accuracy
                                and ensuring they are eligible for sale on the UK and
                                European market. The manufacturing processes are
                                certified to ISO 9001 and crucially ISO 13485, the ISO
                                standard that governs the manufacture of medical devices.
                                In addition to this, all tests are registered with the MHRA
                                here in the UK and hold full CE certification from accredited
                                notified bodies for InVitro Diagnostic Medical Devices.
                                The devices are governed by the IVDD and more recently
                                the IVDR, which alongside the CE certification from notified
                                bodies and MHRA registration, validates their quality and
                                eligibility for use and sale in the UK and European market.
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

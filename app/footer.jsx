"use client"

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"; 
import "@/lib/i18n";

export default function Footer() {
    const { t } = useTranslation();

    const testsCol1 = [
        { key: "footer.links.vit_d", href: "/tests/vitamin-d" },
        { key: "footer.links.male_fertility", href: "/tests/male-fertility" },
        { key: "footer.links.iron", href: "/tests/iron" },
        { key: "footer.links.vaginal", href: "/tests/vaginal" },
        { key: "footer.links.stomach", href: "/tests/stomach" },
        { key: "footer.links.thyroid", href: "/tests/thyroid" },
    ];

    const testsCol2 = [
        { key: "footer.links.uti", href: "/tests/uti" },
        { key: "footer.links.bowel", href: "/tests/bowel" },
        { key: "footer.links.menopause", href: "/tests/menopause" },
        { key: "footer.links.inflammation", href: "/tests/inflammation" },
        { key: "footer.links.covid", href: "/tests/covid" },
        { key: "footer.links.pregnancy", href: "/tests/pregnancy" },
        { key: "footer.links.ovulation", href: "/tests/ovulation" },
    ];

    const quickLinks = [
        { key: "footer.links.take_test", href: "/health-check" },
        { key: "footer.links.our_story", href: "/our-story" },
        { key: "footer.links.health_profile", href: "/health-profile" },
        { key: "footer.links.symptoms", href: "/health-check/check-symptoms" },
        { key: "footer.links.info_hub", href: "/health-hub" },
        { key: "footer.links.contact", href: "/contact-us" },
    ];

    return (
        <footer className="w-full bg-[#F3F4F6] pt-16 pb-12 text-slate-700">
            {/* max-w-[1280px] yaparak içeriği biraz daha derli toplu hale getirdik */}
            <div className="container max-w-[1280px] mx-auto px-6 lg:px-6">

                {/* GÜNCELLENMİŞ GRID YAPISI: 
                    - Orta kısımdaki (Tests) 2.8fr'yi 2fr'ye düşürdük.
                    - Registrations kısmını 1.2fr yaptık.
                    - Bu sayede sağ taraf sıkışmadan hizalanır ama çok da yayılmaz.
                */}
                <div className="grid grid-cols-1 min-[1150px]:grid-cols-[1fr_2fr_0.8fr_1.2fr] gap-10 lg:gap-8">

                    {/* 1. KOLON: Logo, Copyright, Sosyal Medya */}
                    <div className="flex flex-col items-start gap-6 w-full">
                        <Link href="/" className="mb-2">
                            <Image
                                src="/allvex-logo-transparent-2.png"
                                alt="Allvex Logo"
                                width={200}
                                height={55}
                                className="w-[200px] h-auto object-contain"
                            />
                        </Link>

                        <p className="text-xs text-slate-500 font-inter">
                            {t('footer.copyright')}
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                            <Link href="#" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-black transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-black transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-black transition-colors"><Youtube className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-black transition-colors"><div className="w-5 h-5 border-[1.5px] border-current rounded-full flex items-center justify-center font-bold text-[10px]">P</div></Link>
                        </div>
                    </div>

                    {/* 2. KOLON: Our Tests (Orta Kısım) */}
                    <div className="flex flex-col">
                        <h3 className="font-garet font-black min-[1150px]:text-md text-xl uppercase text-black mb-6">
                            {t('footer.our_tests_title')}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            <div className="flex flex-col gap-2">
                                {testsCol1.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="font-garet font-normal min-[1150px]:text-sm text-lg text-slate-600 hover:text-black transition-colors font-inter whitespace-nowrap"
                                    >
                                        {t(item.key)}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2">
                                {testsCol2.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="font-garet font-normal min-[1150px]:text-sm text-lg text-slate-600 hover:text-black transition-colors font-inter whitespace-nowrap"
                                    >
                                        {t(item.key)}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. KOLON: Quick Links */}
                    <div className="flex flex-col pl-4 max-[1150px]:pl-0">
                        <h3 className="font-garet font-black min-[1150px]:text-md text-xl uppercase text-black mb-6">
                            {t('footer.quick_links_title')}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="font-garet font-normal min-[1150px]:text-sm text-lg text-slate-600 hover:text-black transition-colors font-inter whitespace-nowrap"
                                >
                                    {t(item.key)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 4. KOLON: Registrations (Logolar) */}
                    <div className="flex flex-col">
                        <h3 className="font-garet font-black min-[1150px]:text-md text-lg uppercase text-black mb-6">
                            {t('footer.registrations_title')}
                        </h3>

                        {/* ÖNEMLİ DEĞİŞİKLİK: 
                            - max-w-[260px]: Logoların yayılmasını engeller ve wrap olmaya zorlar.
                            - flex-wrap: Sığmayınca aşağı atar.
                        */}
                        <div className="flex flex-wrap gap-4 items-center max-w-[260px]">
                            {/* CE Logo */}
                            <div className=" max-[1150px]:h-12 h-10 w-auto relative">
                                <Image src="/ce.png" alt="CE" width={40} height={40} className="h-full w-auto object-contain" />
                            </div>
                            {/* MD Logo */}
                            <div className="max-[1150px]:h-12 h-10 w-auto relative border border-black p-1">
                                <Image src="/md.png" alt="MD" width={40} height={40} className="h-full w-auto object-contain" />
                            </div>
                            {/* IVD Logo */}
                            <div className="max-[1150px]:h-12 h-10 w-auto relative border border-black p-1">
                                <Image src="/ivd.png" alt="IVD" width={40} height={40} className="h-full w-auto object-contain" />
                            </div>
                            {/* FDA Logo */}
                            <div className="max-[1150px]:h-12 h-7 w-auto relative mt-1">
                                <Image src="/fida.png" alt="FDA" width={60} height={30} className="h-full w-auto object-contain" />
                            </div>
                            {/* ISO Logo */}
                            <div className="max-[1150px]:h-12 h-10 w-auto relative mt-1">
                                <Image src="/bsi.png" alt="BSI" width={50} height={50} className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
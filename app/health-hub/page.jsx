"use client"

import Image from "next/image"
import Link from "next/link"

const infoItems = [
    {
        id: "vitaminD",
        image: "/infohub/vitamin-d-info-hub.jpg",
        title: "WHY VITAMIN D IS\nSO IMPORTANT?",
        text: "Vitamin D is often said to be used for healthy bones and healthy teeth. This is true, however, Vitamin D is used by many other processes in the body. Having adequate levels of Vitamin D will increase muscle strength, improve the immune system, reduce falls risks and improve mood and energy levels.",
        testLabel: "VITAMIN D SELF TEST",
        testHref: "/self-tests/vitamin-d",
        btnColor: "bg-yellow-400 text-yellow-900 hover:bg-yellow-300",
    },
    {
        id: "vaginalInfection",
        image: "/infohub/vaginal-infection-info-hub.jpg",
        title: "HOW CAN I AVOID GETTING\nBACTERIAL VAGINOSIS?",
        text: "What is a vaginal infection? A vaginal infection is also known as bacterial vaginosis. It is not a sexually transmitted disease. It is a common condition caused by the overgrowth of bacteria in the vagina. This causes a change in the normal vaginal discharge which may become more noticeable or develop a fishy smell.",
        testLabel: "VAGINAL INFECTION SELF-TEST",
        testHref: "/self-tests/vaginal-infection",
        btnColor: "bg-pink-500 text-white hover:bg-pink-400",
    },
    {
        id: "uti",
        image: "/infohub/uti-info-hub.jpg",
        title: "WHO IS AT RISK OF URINARY TRACT\nINFECTION (UTI)?",
        text: "A UTI is an infection of anywhere along the urinary tract. This includes the urethra (the tube which we urinate out of), the bladder, the ureters (the tubes that connect the bladder to the kidneys), and the kidneys themselves. When doctors talk about a UTI, we tend to mean an infection of the bladder, also known as cystitis.",
        testLabel: "URINARY TRACT INFECTION SELF-TEST",
        testHref: "/self-tests/uti",
        btnColor: "bg-blue-500 text-white hover:bg-blue-400",
    },
    {
        id: "thyroid",
        image: "/infohub/under-active-thyroid-info-hub.jpg",
        title: "WHAT CAUSES AN UNDERACTIVE\nTHYROID AND HOW CAN I TREAT IT?",
        text: "An underactive thyroid is when your thyroid gland doesn't produce enough thyroid hormone (thyroxine). This condition is also known as underactive thyroid or hypothyroidism. Thyroxine is produced in the thyroid gland. The thyroid gland sits at the front of your neck.",
        testLabel: "UNDER-ACTIVE THYROID SELF-TEST",
        testHref: "/self-tests/under-active-thyroid",
        btnColor: "bg-purple-600 text-white hover:bg-purple-500",
    },
    {
        id: "menopause",
        image: "/infohub/menopause-info-hub.jpg",
        title: "WHAT IS MENOPAUSE AND HOW CAN I\nFEEL BETTER?",
        text: "Menopause is when your periods stop due to lower hormone levels. This usually happens between the ages of 45 and 55. Perimenopause is when you have symptoms before your periods have stopped. Symptoms of menopause can last for months or years and can change with time.",
        testLabel: "MENOPAUSE SELF-TEST",
        testHref: "/self-tests/menopause",
        btnColor: "bg-rose-500 text-white hover:bg-rose-400",
    },
    {
        id: "maleFertility",
        image: "/infohub/male-fertility-info-hub.jpg",
        title: "WHAT IS MALE INFERTILITY AND HOW\nDO I IMPROVE MY CHANCE OF\nBECOMING A FATHER?",
        text: "A low sperm count is also called \"oligozoospermia\". This is when an ejaculate has fewer than 15 million sperm per ml of semen. Having a low sperm count can make it more difficult to conceive naturally.",
        testLabel: "MALE FERTILITY SELF-TEST",
        testHref: "/self-tests/male-fertility",
        btnColor: "bg-blue-700 text-white hover:bg-blue-600",
    },
    {
        id: "ironDeficiency",
        image: "/infohub/iron-deficiency-info-hub.jpg",
        title: "IRON DEFICIENCY: WHAT SHOULD I DO\nTO IMPROVE IT?",
        text: "Iron is used to make haemoglobin which is found in red blood cells. Haemoglobin is important for carrying oxygen around the body. If you don't have enough haemoglobin then your body is not going to get the oxygen it requires to function at its best. This low level of haemoglobin/red blood cells is called anaemia. Iron is also important for the healthy growth of hair, skin and nails.",
        testLabel: "IRON DEFICIENCY SELF-TEST",
        testHref: "/self-tests/iron-deficiency",
        btnColor: "bg-red-600 text-white hover:bg-red-500",
    },
    {
        id: "stomachHealth",
        image: "/infohub/stomach-health-info-hub.jpg",
        title: "HOW H. PYLORI BACTERIA AFFECTS\nOUR STOMACH HEALTH?",
        text: "H. Pylori is a bacteria that can often be found in the stomach. It is one of the most common bacteria found in the human body. About 40% of the UK adult population have H. Pylori at any one time. The vast majority of people who are infected with H. Pylori do not suffer from any symptoms. However, H. Pylori affects the effectiveness of the protective lining of the stomach. Therefore the most common symptom of H. Pylori infection is indigestion.",
        testLabel: "STOMACH HEALTH SELF-TEST",
        testHref: "/self-tests/stomach-health",
        btnColor: "bg-green-600 text-white hover:bg-green-500",
    },
    {
        id: "bowelHealth",
        image: "/infohub/bowel-health-info-hub.jpg",
        title: "WHAT ARE THE SYMPTOMS OF BOWEL\nCANCER?",
        text: null,
        list: [
            "Change in bowel habits such as passing bowel motions more frequently or having looser and more runny motions;",
            "Unexpected weight loss - usually 5-10% of your weight in the past 6 months;",
        ],
        listIntro: "By noticing these symptoms early, you can prevent the development of bowel cancer:",
        testLabel: "BOWEL HEALTH SELF-TEST",
        testHref: "/self-tests/bowel-health",
        btnColor: "bg-emerald-700 text-white hover:bg-emerald-600",
    },
]

export default function InfoHubPage() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── PAGE HEADER ── */}
            <div className="w-full py-12 md:py-16 px-6 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="font-garet font-black text-4xl md:text-5xl text-slate-900 uppercase">
                        Information Hub
                    </h1>
                </div>
            </div>

            {/* ── INFO CARDS GRID ── */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 md:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">

                    {infoItems.map((item) => (
                        <section
                            key={item.id}
                            className="flex flex-col sm:flex-row gap-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Column */}
                            <div className="relative w-full sm:w-[200px] md:w-[220px] flex-shrink-0 min-h-[200px] sm:min-h-0 bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title.replace(/\n/g, " ")}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 220px"
                                />
                            </div>

                            {/* Text Column */}
                            <div className="flex flex-col gap-4 p-5 sm:pl-0 sm:pr-5 sm:py-5 flex-1">
                                <h2 className="font-garet font-black text-base md:text-lg text-slate-900 leading-snug uppercase whitespace-pre-line">
                                    {item.title}
                                </h2>

                                {item.text && (
                                    <p className="font-inter text-sm text-slate-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                )}

                                {item.list && (
                                    <>
                                        <p className="font-inter text-sm text-slate-600 leading-relaxed">
                                            {item.listIntro}
                                        </p>
                                        <ul className="flex flex-col gap-2 pl-4 list-disc">
                                            {item.list.map((li, i) => (
                                                <li key={i} className="font-inter text-sm text-slate-600 leading-relaxed">
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                                    <button className="font-garet font-black text-xs uppercase tracking-wide text-slate-500 hover:text-slate-900 transition-colors">
                                        READ MORE &gt;
                                    </button>
                                    <Link
                                        href={item.testHref}
                                        className={`font-garet font-black text-xs uppercase tracking-wide px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 ${item.btnColor}`}
                                    >
                                        {item.testLabel}
                                    </Link>
                                </div>
                            </div>

                        </section>
                    ))}

                </div>
            </div>

        </div>
    )
}

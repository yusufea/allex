"use client"

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function Home() {
  const { t } = useTranslation();

  const heroButtons = [
    { key: "hero.btn_symptoms", href: "/health-check/check-symptoms", color: "bg-blue-100 text-blue-700 hover:bg-blue-400" },
    { key: "hero.btn_conditions", href: "/health-check/vitamin-d-checker", color: "bg-green-100 text-green-700 hover:bg-green-400" },
    { key: "hero.btn_index", href: "/health-check/general-health-checker", color: "bg-purple-100 text-purple-700 hover:bg-purple-400" },
    { key: "hero.btn_allvex", href: "/self-tests", color: "bg-rose-100 text-rose-700 hover:bg-rose-400" },
    { key: "hero.btn_buy", href: "/where-to-buy", color: "bg-orange-100 text-orange-700 hover:bg-orange-400" },
    { key: "hero.btn_distributor", href: "/distributor", color: "bg-slate-300 text-slate-700 hover:bg-slate-300" }
  ];

  const features = [
    { id: 1, icon: '/clinically-approved.svg', titleKey: 'home.features.f1' },
    { id: 2, icon: '/rapid-results.svg', titleKey: 'home.features.f2' },
    { id: 3, icon: '/easy-to-use.svg', titleKey: 'home.features.f3' },
    { id: 4, icon: '/confidential.svg', titleKey: 'home.features.f4' },
    { id: 5, icon: '/convenient.svg', titleKey: 'home.features.f5' },
    { id: 6, icon: '/smart-extended-care.svg', titleKey: 'home.features.f6' }
  ]

  const socialIcons = [
    { src: '/instagram-logo-black.svg', alt: 'instagram' },
    { src: '/facebook-logo-black.svg', alt: 'facebook' },
    { src: '/linkedin-logo-black.svg', alt: 'linkedin' },
    { src: '/youtube-logo-black.svg', alt: 'youtube' },
    { src: '/pinterest-logo-black.svg', alt: 'pinterest' },
  ];

  const processSteps = [
    {
      id: 1,
      title: t('home.process.step1_title'),
      image: '/take-a-test.png',
      descriptions: [
        t('home.process.step1_d1'),
        t('home.process.step1_d2'),
      ]
    },
    {
      id: 2,
      title: t('home.process.step2_title'),
      image: '/track-your-results.png',
      descriptions: [
        t('home.process.step2_d1'),
        t('home.process.step2_d2'),
      ]
    },
    {
      id: 3,
      title: t('home.process.step3_title'),
      image: '/take-next-steps.png',
      descriptions: [
        t('home.process.step3_d1'),
        t('home.process.step3_d2'),
        t('home.process.step3_d3'),
        t('home.process.step3_d4'),
      ]
    }
  ]

  // Test Kategorileri ve İçerikleri
  const testCategories = [
    {
      title: t('tests.categories.wellbeing'),
      headerColor: "bg-[#F4D03F]",
      items: [
        { name: t('tests.items.vit_d'), href: "/self-tests/vitamin-d", barColor: "bg-[#F4D03F]" },
        { name: t('tests.items.iron'), href: "/self-tests/iron-deficiency", barColor: "bg-[#CD5C5C]" },
      ]
    },
    {
      title: t('tests.categories.fertility'),
      headerColor: "bg-[#9B59B6]",
      items: [
        { name: t('tests.items.male_fertility'), href: "/self-tests/male-fertility", barColor: "bg-[#1E90FF]" },
      ]
    },
    {
      title: t('tests.categories.sexual'),
      headerColor: "bg-[#E91E63]",
      items: [
        { name: t('tests.items.uti'), href: "/self-tests/uti", barColor: "bg-[#8FBC8F]" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center bg-white">

      {/* --- HERO SECTION --- */}
      <div className="container max-[800px]:p-5 max-[800px]:pt-8 max-[1200px]:p-6 mx-auto p-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">

          {/* SOL TARAF */}
          <div className="flex flex-col gap-8 w-full lg:w-3/5 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="font-garet font-black text-4xl sm:text-5xl lg:text-5xl leading-tight text-slate-900 text-start">
                {t('hero.title_1')} <br className="hidden lg:block" /> {t('hero.title_2')}
              </h1>
              <h2 className="font-garet font-normal text-xl sm:text-2xl text-slate-500 mt-2 text-start">
                {t('hero.subtitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {heroButtons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className={`
                    ${btn.color} 
                    font-garet font-black text-xs sm:text-sm 
                    h-7 px-4 rounded-full 
                    flex items-center justify-center
                    transition-all duration-200 
                    hover:scale-105 hover:shadow-md 
                    max-[600px]:h-12
                    uppercase tracking-wide whitespace-nowrap
                  `}
                >
                  {t(btn.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* SAĞ TARAF: Resim */}
          <div className="hidden lg:flex items-center justify-center w-2/5">
            <div className="relative w-full max-w-[350px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
              <Image
                src="/allvex-icon-hd.png"
                width={400}
                height={400}
                alt="Allex Home Visual"
                priority
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================= */
      /* --- OUR TESTS SECTION --- */
      /* ================================================================= */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-[25px] sm:px-[37px] md:px-[50px]">

          {/* Ana Başlık */}
          <h2 className="font-garet font-black text-4xl sm:text-5xl text-slate-900 mb-12 uppercase">
            {t('tests.main_title')}
          </h2>

          {/* Grid Yapısı */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12 items-start">

            {testCategories.map((category, index) => (
              <div key={index} className="flex flex-col gap-6 h-full">

                <div className={`w-full py-2.5 px-4 rounded-full text-center flex items-center justify-center min-h-[44px] ${category.headerColor}`}>
                  <h3 className="text-white font-garet font-bold text-sm sm:text-base uppercase tracking-wide leading-none">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="group flex flex-row items-stretch gap-3 hover:opacity-80 transition-opacity min-h-[40px]"
                    >
                      <span
                        className={`w-[6px] shrink-0 rounded-sm ${item.barColor}`}
                        aria-hidden="true"
                      ></span>
                      <span className="font-inter font-semibold text-sm sm:text-base text-slate-900 uppercase leading-snug flex items-center py-1">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      {/* Burada yapıyı Flex container içine aldık.
         Sol: Social Icons (sabit)
         Sağ: Features (Mobilde Grid, Masaüstünde Flex)
      */}
      <section className="w-full mt-[38px] sm:mt-[57px] md:mt-[76px] mb-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-row gap-6 md:gap-8 items-start">

            {/* 1. SÜTUN: SOCIAL ICONS (SOLDA SABİT) */}
            <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] pt-4 justify-start items-center flex-shrink-0">
              {socialIcons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px]"
                />
              ))}
            </div>

            {/* 2. SÜTUN: FEATURES LISTESI */}
            {/* - grid grid-cols-2: Mobilde 2 sütunlu ızgara.
                - lg:flex lg:flex-row: Geniş ekranda yan yana tek satır (eski hali).
                - w-full: Tüm alanı kaplasın.
            */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between w-full gap-y-8 gap-x-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col gap-[7px] items-center justify-start"
                >
                  <div className="relative h-[50px] sm:h-[75px] md:h-[100px] w-full flex justify-center">
                    <Image
                      src={feature.icon}
                      alt={t(feature.titleKey)}
                      width={100}
                      height={100}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-inter leading-tight text-center text-[#999999] max-w-[120px]">
                    {t(feature.titleKey)}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- PARALLAX BACKGROUND SECTION --- */}
      {/* - bg-fixed: Parallax etkisi (resim arkada sabit kalır).
          - bg-center bg-no-repeat: Resmi ortalar ve tekrar ettirmez.
          - bg-[length:80%_auto]: Mobilde genişlik %80.
          - md:bg-[length:50%_auto]: Masaüstünde genişlik %50 (yarı yarıya).
      */}
      <div
        className="w-full h-[300px] md:h-[200px] bg-fixed bg-center bg-no-repeat bg-[length:80%_auto] md:bg-[length:50%_auto]"
        style={{
          backgroundColor: 'rgb(229, 229, 229)', // İstediğin gri arka plan
          backgroundImage: "url('/paralax-row-img.png')", // Resim yolu
        }}
      >
        {/* İçerik gerekirse buraya eklenebilir, şu an sadece görsel arka plan. */}
      </div>
      <section className="w-full py-16 md:py-24 bg-white">
        {/* Container genişliğini biraz daha dar tutarak okumayı kolaylaştırıyoruz (max-w-5xl) */}
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">

          {/* Flex Container: Mobilde alt alta (flex-col), Masaüstünde yan yana (md:flex-row) */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* SOL TARAF: Resim Alanı (~%20 Width) */}
            {/* md:w-1/5 -> Masaüstünde %20 genişlik. flex-shrink-0 -> Küçülmesini engeller. */}
            <div className="w-full md:w-1/5 flex-shrink-0 flex justify-center md:justify-center">
              <Image
                src="/allvex-logo-yatay-2.png"
                alt="Author Name"
                width={200}
                height={40}
                className="w-full max-w-[160px] h-auto object-contain"
              />
            </div>

            {/* SAĞ TARAF: Alıntı İçeriği (~%80 Width) */}
            <div className="w-full md:w-4/5 flex flex-col relative">

              {/* Dekoratif Büyük Tırnak İkonu */}
              <span className="absolute -top-6 -left-4 text-8xl text-gray-100 select-none pointer-events-none font-serif leading-none">
                “
              </span>

              {/* Alıntı Metni */}
              <blockquote className="font-grant font-normal relative z-10 text-xl sm:text-xl md:text-2xl font-garet font-medium italic leading-relaxed text-slate-700 text-center md:text-left">
                &ldquo;{t('home.quote.text')}&rdquo;
              </blockquote>

              {/* Yazar ve Unvanı (Sağ Altta) */}
              <div className="font-grant font-normal  mt-8 flex flex-col items-center md:items-end text-center md:text-right">
                <cite className="font-garet font-normal text-xl italic text-slate-700 ">
                  {t('home.quote.author')}
                </cite>
                <span className="font-grant font-normal font-inter text-xl italic text-slate-700 ">
                  {t('home.quote.role')}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-4 md:py-6 bg-white">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">

          {/* Başlık */}
          <h3 className="font-garet font-black text-2xl md:text-2xl uppercase text-slate-900 text-left mb-8 md:mb-12 tracking-wide">
            {t('home.partners')}
          </h3>

          {/* Logo Grid */}
          {/* grid-cols-2 -> Mobilde 2'li */}
          {/* md:grid-cols-4 -> Tablet ve Masaüstünde 4'lü */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80">

            {/* Logo 1 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/waitrose-and-partners.png" // Buraya kendi logo yolunu yaz
                alt="Partner 1"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 2 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/day-lewis.png"
                alt="Partner 2"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 3 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/nhs.png"
                alt="Partner 3"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 4 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/cohens-chemist.png"
                alt="Partner 4"
                fill
                className="object-contain"
              />
            </div>
            {/* Logo 5 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/tesco.png"
                alt="Partner 4"
                fill
                className="object-contain"
              />
            </div>
            {/* Logo 6 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/asda.png"
                alt="Partner 4"
                fill
                className="object-contain"
              />
            </div>
            {/* Logo 7 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/morrisons.png"
                alt="Partner 4"
                fill
                className="object-contain"
              />
            </div>
            {/* Logo 8 */}
            <div className="w-full max-w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/peak-pharmacy.png"
                alt="Partner 4"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="w-full mt-[51px] sm:mt-[76px] md:mt-[102px] mb-16">
        <div className="w-full max-w-[1440px] mx-auto px-[25px] sm:px-[37px] md:px-[50px]">

          <div className="flex flex-col min-[850px]:flex-row justify-between items-start w-full gap-8">

            {/* --- Step 1: Take a Test --- */}
            {/* HER ZAMAN: Resim Üstte, Yazı Altta */}
            <div className="flex flex-col justify-start items-center w-full min-[850px]:w-[32%] mb-[30px] min-[850px]:mb-0">
              <div className="w-full relative mb-6">
                <Image
                  src={processSteps[0].image}
                  alt="Take a Test"
                  width={346}
                  height={312}
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-[18px] sm:text-[23px] md:text-[26px] font-garet font-black leading-tight text-center uppercase text-slate-900 mb-4 px-4">
                {processSteps[0].title}
              </h3>

              <ul className="flex flex-col gap-3 w-full px-4">
                {processSteps[0].descriptions.map((desc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0"></span>
                    <p className="text-[13px] sm:text-[15px] font-inter font-medium leading-relaxed text-slate-700">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Steps 2 & 3 Container --- */}
            <div className="flex flex-col min-[850px]:flex-row gap-8 min-[850px]:gap-12 flex-1 w-full">

              {/* --- Step 2: Track Your Results --- */}
              {/* ÖZEL DURUM: 
                  - Mobilde (Default): flex-col (Resim -> Yazı)
                  - Webde (min-[850px]): flex-col-reverse (Yazı -> Resim) 
              */}
              <div className="flex flex-col min-[850px]:flex-col-reverse justify-end items-center w-full min-[850px]:w-1/2">

                {/* 1. RESİM ALANI */}
                {/* Web'de "flex-col-reverse" olduğu için bu en alta düşecek. 
                   Bu yüzden web'de üstüne boşluk (mt-6) veriyoruz, alt boşluğu (mb-6) siliyoruz.
                */}
                <div className="w-full relative mb-6 min-[850px]:mb-0 min-[850px]:mt-6">
                  <Image
                    src={processSteps[1].image}
                    alt="Track Your Results"
                    width={346}
                    height={312}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* 2. YAZI ALANI */}
                {/* Web'de bu en üste çıkacak */}
                <div className="w-full">
                  <h3 className="text-[18px] sm:text-[23px] md:text-[26px] font-garet font-black leading-tight text-center uppercase text-slate-900 mb-4 px-4">
                    {processSteps[1].title}
                  </h3>

                  <ul className="flex flex-col gap-3 w-full px-4">
                    {processSteps[1].descriptions.map((desc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0"></span>
                        <p className="text-[13px] sm:text-[15px] font-inter font-medium leading-relaxed text-slate-700">
                          {desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* --- Step 3: Take Next Steps --- */}
              {/* HER ZAMAN: Resim Üstte, Yazı Altta */}
              <div className="flex flex-col justify-start items-center w-full min-[850px]:w-1/2">
                <div className="w-full relative mb-6">
                  <Image
                    src={processSteps[2].image}
                    alt="Take Next Steps"
                    width={346}
                    height={312}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="text-[18px] sm:text-[23px] md:text-[26px] font-garet font-black leading-tight text-center uppercase text-slate-900 mb-4 px-4">
                  {processSteps[2].title}
                </h3>

                <ul className="flex flex-col gap-3 w-full px-4">
                  {processSteps[2].descriptions.map((desc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0"></span>
                      <p className="text-[13px] sm:text-[15px] font-inter font-medium leading-relaxed text-slate-700">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-sm:py-12 md:py-24 py-0 bg-gradient-to-l from-yellow-400 via-yellow-300 to-white">
        <div className="w-full max-w-[1440px] mx-auto px-[25px] sm:px-[37px] md:px-[50px]">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

            {/* SOL TARAF: Başlık ve Paragraf */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">

              {/* Başlık */}
              <h2 className="font-garet font-black text-5xl leading-tight text-slate-900 mb-6">
                {t("home.mission.title")}
              </h2>

              <h2 className="font-garet font-black text-2xl leading-tight text-slate-900 mb-6">
                {t("home.mission.subtitle")}
              </h2>

              {/* Paragraf */}
              <p className="font-garet font-normal text-base sm:text-lg text-slate-800 leading-relaxed max-w-xl font-medium">
                {t("home.mission.text")}
              </p>

              {/* Opsiyonel Buton (Gerekirse açabilirsin) */}
              {/* <Link 
                href="/contact-us" 
                className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
              >
                HEMEN KEŞFET
              </Link> 
              */}
            </div>

            {/* SAĞ TARAF: Resim */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-md:hidden">
              <div className="relative w-full max-w-[450px] lg:max-w-[600px]">
                {/* Resim hafif gölgeli ve ortalı */}
                <Image
                  src="/our-mission-img.png" // Buraya görselinin yolunu yaz
                  alt="Yellow Section Visual"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* --- FULL WIDTH VIDEO SECTION --- */}
      {/* ================================================================= */}
      <section className="w-full relative bg-black">
        {/* w-full: Genişliği %100 yapar.
            aspect-video: 16:9 oranını korur (mobilde çok daralırsa h-[50vh] kullanılabilir).
            object-cover: Video alanın tamamını doldurur.
        */}
        <video
          className="w-full h-auto max-h-[600px] object-cover"
          controls // Kullanıcı oynatsın/durdursun istiyorsan
          playsInline // iOS cihazlarda tam ekrana geçmeden oynaması için şart
          // autoPlay // Otomatik başlaması için (genelde muted ile kullanılır)
          // muted // Otomatik başlayacaksa sessiz olmalı
          // loop // Sürekli dönmesi için
          poster="/allvex-about-video-thumbnail.jpg" // Video yüklenmeden önce görünecek kapak resmi
        >
          <source src="/about-allvex.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        {/* OPSİYONEL: Video Üzerine Yazı (Overlay) */}
        {/* Eğer video arkada dönerken üstüne yazı yazmak istersen bu bloğu açabilirsin */}

        {/* <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
          <h2 className="font-garet font-black text-3xl md:text-5xl text-white mb-4 drop-shadow-lg">
            NASIL ÇALIŞIR?
          </h2>
          <p className="font-inter text-white text-lg md:text-xl font-medium drop-shadow-md">
            Tanıtım videomuzu izleyin
          </p>
        </div> 
        */}

      </section>

    </div>
  );
}
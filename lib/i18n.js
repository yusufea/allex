import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri kaynaklarını doğrudan buraya ekliyoruz
const resources = {
  en: {
    translation: {
      language: "Language",
      nav: {
        home: "Home",
        health_checkgers: "HEALTH CHECKERS",
        self_tests: "SELF TESTS",
        our_story: "OUR STORY",
        health_hub: "HEALTH HUB",
        login: "YOUR HEALTH PROFILE | LOG IN",
        contact: "CONTACT US",
        symptoms: "Check Symptoms",
        conditions: "Check Health Conditions",
        iron: "Iron Deficiency (FERRITIN)",
        thyroid: "Under Active Thyroid (TSH)"
      },
      hero: {
        "title_1": "THE SMART WAY TO",
        "title_2": "CHECK YOUR HEALTH",
        "subtitle": "Self-tests with instant results",
        "btn_symptoms": "Check Symptoms",
        "btn_conditions": "Check Health Conditions",
        "btn_index": "Check Health Index",
        "btn_silex": "SILEX SELF-TESTS",
        "btn_buy": "WHERE TO BUY",
        "btn_distributor": "Become A Distributor"
      },
      "tests": {
        "main_title": "OUR TESTS",
        "categories": {
          "wellbeing": "WELLBEING & HEALTH",
          "organ": "ORGAN HEALTH",
          "fertility": "FERTILITY",
          "sexual": "SEXUAL HEALTH"
        },
        items: {
          "vit_d": "VITAMIN D SELF-TEST",
          "iron": "IRON DEFICIENCY SELF-TEST (FERRITIN)",
          "thyroid": "UNDER-ACTIVE THYROID SELF-TEST(TSH)",
          "covid": "COVID-19 SELF-TEST(SARS-COV-2)",
          "stomach": "STOMACH HEALTH SELF-TEST (H.PYLORI)",
          "bowel": "BOWEL HEALTH SELF-TEST (FOB)",
          "inflammation": "BODY INFLAMMATION SELF-TEST (CRP)",
          "menopause": "MENOPAUSE SELF-TEST(FSH)",
          "male_fertility": "MALE FERTILITY SELF-TEST (SP-10)",
          "vaginal": "VAGINAL INFECTION SELF-TEST",
          "uti": "URINARY TRACT INFECTION SELF-TEST (UTI)"
        }
      },
      home: {
        features: {
          f1: "Clinically approved",
          f2: "Rapid results",
          f3: "Easy to use",
          f4: "Confidential",
          f5: "Convenient",
          f6: "SMART extended care"
        },
        partners: "In Partnership With",
        quote: {
          text: "Rapid tests are becoming a part of a healthcare diagnostic process, which allows patients and healthcare professionals to get on the front foot with their health, optimise their time and obtain accurate and rapid results in almost any environment.",
          author: "Dr. Matthew Newman",
          role: "NHS Professional"
        },
        process: {
          step1_title: "Take a Test",
          step1_d1: "Do you have symptoms? Use our symptoms checker to recommend the test most relevant for you.",
          step1_d2: "No symptoms? Just select the test you want to check your health for.",
          step2_title: "Track Your Results",
          step2_d1: "Follow our instructions for use on the Test Page and record your results.",
          step2_d2: "Save your results to your Health Calendar.",
          step3_title: "Take Next Steps",
          step3_d1: "Based on your result, you will receive medically verified recommended actions.",
          step3_d2: "Book follow up GP appointments at your discretion.",
          step3_d3: "Build your Health Profile to Stay on Top of Your Health.",
          step3_d4: "Receive notifications for follow ups and testing recommendations based on your testing results and Health Profile."
        },
        mission: {
          title: "OUR MISSION",
          subtitle: "When it comes to your personal health, being on the front foot is absolutely crucial.",
          text: "Allvex's mission is to make high quality healthcare testing kits affordable and available for as many people as possible. We provide consumers an opportunity to monitor health and wellness outside of a clinic or hospital setting, and to seek medical advice and treatment at the earliest possible opportunity."
        }
      },
      footer: {
        "our_tests_title": "OUR TESTS:",
        "quick_links_title": "QUICK LINKS:",
        "registrations_title": "REGISTRATIONS:",
        "copyright": "© Copyright Silex. All Rights Reserved",
        "links": {
          "vit_d": "Vitamin D test",
          "male_fertility": "Male fertility test (SP-10)",
          "iron": "Iron deficiency test (FERRITIN)",
          "vaginal": "Vaginal infection test",
          "stomach": "Stomach health test (H.PYLORI)",
          "thyroid": "Under-active thyroid test (TSH)",
          "uti": "Urinary tract infection test (UTI)",
          "bowel": "Bowel health test (FOB)",
          "menopause": "Menopause test (FSH)",
          "inflammation": "Body Inflammation (CRP)",
          "covid": "Covid-19",
          "pregnancy": "Pregnancy test (HCG)",
          "ovulation": "Ovulation test (LH)",
          "take_test": "Take a test",
          "our_story": "Our story",
          "health_profile": "Health profile",
          "symptoms": "Symptoms checker",
          "info_hub": "Info Hub",
          "contact": "Contact us"
        }
      },
      symptoms: {
        step1_title: "Choose your gender:",
        step2_title: "Do you have any of these symptoms?",
        step3_title: "Do you have any of these symptoms?",
        step4_title: "Do you have any of these symptoms?",
        subtitle: "and get recommendation for your self-testing.",
        step_label: "Step {{current}}/{{total}}",
        btn_next: "NEXT",
        btn_back: "BACK",
        btn_submit: "SUBMIT",
        btn_home: "HOME",
        btn_start_again: "START AGAIN",
        results_title: "Based on your answers you may want to check the following self-tests:",
        no_results: "Based on your answers, we do not have specific test recommendations. However, if you are concerned about your health, please consult a GP.",
        options: {
          male: "Male",
          female: "Female",
          prefer_not: "Prefer not to answer",
          low_libido: "Low libido",
          weight_gain: "Weight gain",
          mood_change: "Change in mood / low mood",
          tiredness: "Tiredness",
          palpitations: "Palpitations",
          muscle_aches: "Muscles aches and joint pains",
          none: "None of the above",
          irregular_periods: "Irregular periods / no periods",
          poor_fertility: "Poor fertility",
          dysuria: "Pain / stinging when peeing",
          bloating: "Bloating",
          weight_loss: "Unexpected weight loss",
          indigestion: "Indigestion",
          male_complex: "Palpitations, bloating and foul smelling urine",
          foul_urine: "Foul smelling urine",
          memory: "Memory problems",
          general_aches: "General aches",
          heartburn: "Heartburn",
          vaginal_discomfort: "Vaginal discomfort",
          anxiety: "Anxiety"
        },
        tests: {
          vitamin_d: "VITAMIN D SELF-TEST",
          thyroid: "UNDER-ACTIVE THYROID SELF-TEST",
          menopause: "MENOPAUSE SELF-TEST",
          iron: "IRON DEFICIENCY SELF-TEST",
          vaginal: "VAGINAL INFECTION SELF-TEST",
          male_fertility: "MALE FERTILITY SELF-TEST",
          bowel: "BOWEL HEALTH SELF-TEST",
          stomach: "STOMACH HEALTH SELF-TEST",
          uti: "UTI SELF-TEST"
        }
      }
    }
  },
  tr: {
    translation: {
      language: "Dil",
      nav: {
        home: "Anasayfa",
        health_checkgers: "SAĞLIK KONTROLLERİ",
        self_tests: "KENDİNİ TEST ET",
        our_story: "HİKAYEMİZ",
        health_hub: "SAĞLIK MERKEZİ",
        login: "SAĞLIK PROFİLİNİZ | GİRİŞ",
        contact: "İLETİŞİM",
        symptoms: "Semptom Kontrolü",
        conditions: "Sağlık Durumu Kontrolü",
        iron: "Demir Eksikliği (FERRITIN)",
        thyroid: "Tiroid Tembelliği (TSH)"
      },
      hero: {
        "title_1": "SAĞLIĞINIZI KONTROL ETMENİN",
        "title_2": "AKILLI YOLU",
        "subtitle": "Anında sonuç veren evde test kitleri",
        "btn_symptoms": "Semptom Kontrolü",
        "btn_conditions": "Sağlık Durumu",
        "btn_index": "Sağlık Endeksi",
        "btn_silex": "SILEX KENDİNİ TEST ET",
        "btn_buy": "NEREDEN ALINIR",
        "btn_distributor": "Distribütör Ol"
      },
      "tests": {
        "main_title": "TESTLERİMİZ",
        "categories": {
          "wellbeing": "SAĞLIK & ZİNDELİK",
          "organ": "ORGAN SAĞLIĞI",
          "fertility": "DOĞURGANLIK",
          "sexual": "CİNSEL SAĞLIK"
        },
        items: {
          "vit_d": "D VİTAMİNİ TESTİ",
          "iron": "DEMİR EKSİKLİĞİ TESTİ (FERRİTİN)",
          "thyroid": "TİROİD TESTİ (TSH)",
          "covid": "COVID-19 TESTİ (SARS-COV-2)",
          "stomach": "MİDE SAĞLIĞI TESTİ (H.PYLORI)",
          "bowel": "BAĞIRSAK SAĞLIĞI TESTİ (FOB)",
          "inflammation": "VÜCUT ENFLAMASYON TESTİ (CRP)",
          "menopause": "MENOPOZ TESTİ (FSH)",
          "male_fertility": "ERKEK DOĞURGANLIK TESTİ (SP-10)",
          "vaginal": "VAJİNAL ENFEKSİYON TESTİ",
          "uti": "İDRAR YOLU ENFEKSİYONU TESTİ (UTI)"
        }
      },
      home: {
        features: {
          f1: "Klinik onaylı",
          f2: "Hızlı sonuçlar",
          f3: "Kullanımı kolay",
          f4: "Gizli",
          f5: "Pratik",
          f6: "AKILLI uzatılmış bakım"
        },
        partners: "İş Ortaklarımız",
        quote: {
          text: "Hızlı testler, hastaların ve sağlık profesyonellerinin sağlıklarında proaktif olmalarını, zamanlarını en iyi şekilde kullanmalarını ve neredeyse her ortamda doğru ve hızlı sonuçlar elde etmelerini sağlayan bir sağlık tanı sürecinin parçası haline gelmektedir.",
          author: "Dr. Matthew Newman",
          role: "NHS Uzmanı"
        },
        process: {
          step1_title: "Test Yap",
          step1_d1: "Semptomlarınız mı var? Sizin için en uygun testi önermek üzere semptom kontrolcümüzü kullanın.",
          step1_d2: "Semptomlarınız yok mu? Sağlığınızı kontrol etmek istediğiniz testi seçin.",
          step2_title: "Sonuçlarınızı Takip Edin",
          step2_d1: "Test Sayfasındaki kullanım talimatlarımızı takip edin ve sonuçlarınızı kaydedin.",
          step2_d2: "Sonuçlarınızı Sağlık Takviminize kaydedin.",
          step3_title: "Sonraki Adımları Atın",
          step3_d1: "Sonucunuza göre tıbbi açıdan doğrulanmış önerilen işlemleri alacaksınız.",
          step3_d2: "Takip GP randevularını kendi takdirinize göre ayarlayın.",
          step3_d3: "Sağlığınızın üstünde kalmak için Sağlık Profilinizi oluşturun.",
          step3_d4: "Test sonuçlarınıza ve Sağlık Profilinize göre takip ve test önerileri için bildirimler alın."
        },
        mission: {
          title: "MİSYONUMUZ",
          subtitle: "Kişisel sağlığınız söz konusu olduğunda, proaktif olmak son derece önemlidir.",
          text: "Allvex'in misyonu, yüksek kaliteli sağlık test kitlerini mümkün olduğunca fazla kişiye uygun fiyatlarla sunmaktır. Tüketicilere bir klinik veya hastane ortamı dışında sağlık ve refahlarını izleme fırsatı sunuyor ve mümkün olan en erken fırsatta tıbbi tavsiye ve tedavi almalarını sağlıyoruz."
        }
      },
      footer: {
        "our_tests_title": "TESTLERİMİZ:",
        "quick_links_title": "HIZLI LİNKLER:",
        "registrations_title": "SERTİFİKALAR:",
        "copyright": "© Copyright Silex. Tüm Hakları Saklıdır",
        "links": {
          "vit_d": "D Vitamini Testi",
          "male_fertility": "Erkek Doğurganlık Testi (SP-10)",
          "iron": "Demir Eksikliği Testi (FERRITIN)",
          "vaginal": "Vajinal Enfeksiyon Testi",
          "stomach": "Mide Sağlığı Testi (H.PYLORI)",
          "thyroid": "Tiroid Testi (TSH)",
          "uti": "İdrar Yolu Enfeksiyonu Testi (UTI)",
          "bowel": "Bağırsak Sağlığı Testi (FOB)",
          "menopause": "Menopoz Testi (FSH)",
          "inflammation": "Vücut Enflamasyon Testi (CRP)",
          "covid": "Covid-19 Testi",
          "pregnancy": "Gebelik Testi (HCG)",
          "ovulation": "Ovülasyon Testi (LH)",
          "take_test": "Test Yap",
          "our_story": "Hikayemiz",
          "health_profile": "Sağlık Profili",
          "symptoms": "Semptom Kontrolü",
          "info_hub": "Bilgi Merkezi",
          "contact": "İletişim"
        }
      },
      symptoms: {
        step1_title: "Cinsiyetinizi seçin:",
        step2_title: "Bu semptomlardan herhangi birine sahip misiniz?",
        step3_title: "Bu semptomlardan herhangi birine sahip misiniz?",
        step4_title: "Bu semptomlardan herhangi birine sahip misiniz?",
        subtitle: "cevaplarınıza göre test önerileri alın.",
        step_label: "Adım {{current}}/{{total}}",
        btn_next: "İLERİ",
        btn_back: "GERİ",
        btn_submit: "GÖNDER",
        btn_home: "ANA SAYFA",
        btn_start_again: "YENİDEN BAŞLA",
        results_title: "Cevaplarınıza göre aşağıdaki testleri incelemenizi öneririz:",
        no_results: "Cevaplarınıza göre belirli bir test önerimiz bulunmamaktadır. Sağlığınız hakkında endişeleriniz varsa lütfen bir doktora başvurun.",
        options: {
          male: "Erkek",
          female: "Kadın",
          prefer_not: "Belirtmek istemiyorum",
          low_libido: "Düşük cinsel istek",
          weight_gain: "Kilo alımı",
          mood_change: "Ruh hali değişikliği / düşük ruh hali",
          tiredness: "Yorgunluk",
          palpitations: "Çarpıntı",
          muscle_aches: "Kas ağrıları ve eklem ağrıları",
          none: "Hiçbiri",
          irregular_periods: "Düzensiz / olmayan adet",
          poor_fertility: "Düşük doğurganlık",
          dysuria: "İşerken ağrı / yanma",
          bloating: "Şişkinlik",
          weight_loss: "Beklenmedik kilo kaybı",
          indigestion: "Hazımsızlık",
          male_complex: "Çarpıntı, şişkinlik ve kötü kokulu idrar",
          foul_urine: "Kötü kokulu idrar",
          memory: "Hafıza sorunları",
          general_aches: "Genel ağrılar",
          heartburn: "Mide yanması",
          vaginal_discomfort: "Vajinal rahatsızlık",
          anxiety: "Anksiyete"
        },
        tests: {
          vitamin_d: "D VİTAMİNİ TESTİ",
          thyroid: "TİROİD TESTİ (TSH)",
          menopause: "MENOPOZ TESTİ",
          iron: "DEMİR EKSİKLİĞİ TESTİ",
          vaginal: "VAJİNAL ENFEKSİYON TESTİ",
          male_fertility: "ERKEK DOĞURGANLIK TESTİ",
          bowel: "BAĞIRSAK SAĞLIĞI TESTİ",
          stomach: "MİDE SAĞLIĞI TESTİ",
          uti: "İDRAR YOLU ENFEKSİYONU TESTİ"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // React Suspense hatasını önlemek için önemli:
    react: {
      useSuspense: false
    }
  });

export default i18n;
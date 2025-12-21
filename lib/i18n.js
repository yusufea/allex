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
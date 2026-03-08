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
        vitamin_d: "Vitamin D Self-Test",
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
      },
      vitaminD: {
        title: "Vitamin D Deficiency",
        description: "The Vitamin D Test (Fingerstick Whole blood) is used as a self-test to determine the level of Vitamin D in the blood. Vitamin D helps regulate the amount of calcium and phosphate in the body. These nutrients are needed to keep bones, teeth and muscles healthy.",
        badges: {
          fingerstick: "Fingerstick blood",
          accuracy: "Accuracy > 94%",
          clinically_tested: "Clinically Tested",
          result_time: "Result in 10 min."
        },
        tabs: {
          overview: "Overview",
          test_contents: "Test Contents",
          instructions: "Instructions",
          your_result: "Your Result"
        },
        overview: {
          title: "Test Overview",
          symptoms_title: "Symptoms",
          symptom_1: "Weakness",
          symptom_2: "Early fatigue or tiredness",
          symptom_3: "Muscle aches and pains",
          symptom_4: "Bone pain or fracturing bones without much force",
          no_symptoms_note: "A lot of people with vitamin D deficiency will not have any symptoms."
        },
        test_contents: {
          view_360: "360° View"
        },
        instructions: {
          video_label: "Video Instructions",
          slides_label: "Step-By-Step Instructions",
          prev: "‹ Prev",
          next: "Next ›"
        },
        your_result: {
          title: "What does your result mean?",
          deficient_label: "Deficient",
          deficient_title: "Deficient (< 30 nmol/L)",
          deficient_body: "Your result indicates a Vitamin D deficiency. We strongly recommend you consult your GP as soon as possible for further clinical testing and to discuss treatment options such as prescription-strength Vitamin D supplements.",
          insufficient_label: "Insufficient",
          insufficient_title: "Insufficient (30 – 50 nmol/L)",
          insufficient_body: "Your result indicates insufficient Vitamin D levels. Consider taking over-the-counter Vitamin D supplements (400–1000 IU daily) and speak to your GP about whether further testing or a higher dose is advisable.",
          sufficient_label: "Sufficient",
          sufficient_title: "Sufficient (> 50 nmol/L)",
          sufficient_body: "Your result indicates a sufficient Vitamin D level. Continue maintaining a healthy lifestyle, a balanced diet and moderate sun exposure. Consider retesting periodically, especially through winter months.",
          invalid_label: "Invalid",
          invalid_title: "Invalid Result",
          invalid_body: "Your test result is invalid. This may be caused by an error in the testing procedure. Please read the Instructions for Use carefully and perform a new test. If the problem persists, contact us for support."
        },
        faqs: {
          title: "FAQs",
          q1_q: "Why is Vitamin D important for the body?",
          q1_a: "Vitamin D is often said to be used for healthy bones and healthy teeth. This is true, however Vitamin D is used by many other processes in the body. Having adequate levels of Vitamin D will increase muscle strength, improve the immune system, reduce falls risks and improve mood and energy levels.",
          q2_q: "Where do I get vitamin D from?",
          q2_a: "There are two main sources of vitamin D — food and sunlight. Foods that contain vitamin D include sardines, tuna, salmon, egg yolks, red meat and liver.",
          q3_q: "How common is Vitamin D deficiency?",
          q3_a: "The UK National Diet and Nutrition Survey from 2008–2012 showed 23% of adults aged 19–64 years and 21% of adults aged 65 years and over suffered from vitamin D deficiency. Another survey which concluded in 2019 showed that from a population of nearly 6.5 million people, 1/3rd of people were deficient in Vitamin D.",
          q4_q: "What symptoms might I feel if I am deficient in vitamin D?",
          q4_a: "A lot of people with vitamin D deficiency will not have any symptoms. Sometimes the symptoms might be very vague. Below are some of the symptoms of vitamin D deficiency:",
          q4_list: ["Tiredness", "Feeling generally unwell", "Bone pain", "Muscle aches", "Joint pain", "Low mood"],
          q5_q: "Who is at risk of being vitamin D deficient?",
          q5_a: "The National Institute of Clinical Excellence puts the following people in the high-risk category of being vitamin D deficient:",
          q5_list: ["Over 65 year olds", "Those with low exposure to the sun (housebound, cultural reasons or confined indoors)", "Those with darker skin pigmentation", "Those who have had certain types of abdominal surgery", "Those with severe liver or kidney disease", "Women who are pregnant or breastfeeding", "Those with a BMI greater than 30 kg/m²"],
          q6_q: "How can I get more Vitamin D?",
          q6_a: "It is very difficult to get enough Vitamin D from sunlight in the UK. That is why the UK government recommends people in the UK take vitamin D supplements during the winter months.",
          q7_q: "How much Vitamin D supplement should I be taking?",
          q7_a: "It is recommended that all UK adults take 10 micrograms (400 International Units) a day from October to March. If you fall into one of the high-risk categories above, it is advised that you take a vitamin D supplement of 10 micrograms (400 International Units) a day all year round.",
          q8_q: "Who should not take Vitamin D supplements?",
          q8_a: "If you suffer from high calcium levels or some cancers, you should not take vitamin D supplements. Vitamin D supplements should also be taken with caution in patients on some heart medications and some blood pressure medications — speak with your doctor before starting. People with kidney disease, liver disease and those who suffer from kidney stones should also seek medical advice before starting Vitamin D supplements."
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
        vitamin_d: "D Vitamini Testi",
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
      },
      vitaminD: {
        title: "D Vitamini Eksikliği",
        description: "D Vitamini Testi (Parmak Ucu Tam Kanı), kandaki D Vitamini seviyesini belirlemek için kullanılan bir öz-testtir. D Vitamini, vücuttaki kalsiyum ve fosfat miktarını düzenlemeye yardımcı olur. Bu besinler, kemiklerin, dişlerin ve kasların sağlıklı kalması için gereklidir.",
        badges: {
          fingerstick: "Parmak ucu kanı",
          accuracy: "Doğruluk > %94",
          clinically_tested: "Klinik Test Edilmiş",
          result_time: "10 dk'da sonuç"
        },
        tabs: {
          overview: "Genel Bakış",
          test_contents: "Test İçeriği",
          instructions: "Talimatlar",
          your_result: "Sonucunuz"
        },
        overview: {
          title: "Test Genel Bakış",
          symptoms_title: "Belirtiler",
          symptom_1: "Halsizlik",
          symptom_2: "Erken yorgunluk veya bitkinlik",
          symptom_3: "Kas ağrıları",
          symptom_4: "Kemik ağrısı veya az kuvvetle kemik kırılması",
          no_symptoms_note: "D Vitamini eksikliği olan birçok kişide hiçbir belirti görülmeyebilir."
        },
        test_contents: {
          view_360: "360° Görünüm"
        },
        instructions: {
          video_label: "Video Talimatları",
          slides_label: "Adım Adım Talimatlar",
          prev: "‹ Önceki",
          next: "Sonraki ›"
        },
        your_result: {
          title: "Sonucunuz ne anlama geliyor?",
          deficient_label: "Eksik",
          deficient_title: "Eksik (< 30 nmol/L)",
          deficient_body: "Sonucunuz D Vitamini eksikliğine işaret etmektedir. Daha fazla klinik test yapılması ve reçeteli D Vitamini takviyesi gibi tedavi seçeneklerini görüşmek için en kısa sürede doktorunuza başvurmanızı öneririz.",
          insufficient_label: "Yetersiz",
          insufficient_title: "Yetersiz (30 – 50 nmol/L)",
          insufficient_body: "Sonucunuz yetersiz D Vitamini seviyesine işaret etmektedir. Eczaneden temin edebileceğiniz D Vitamini takviyesi almayı düşünün ve daha fazla test gerekip gerekmediğini doktorunuzla görüşün.",
          sufficient_label: "Yeterli",
          sufficient_title: "Yeterli (> 50 nmol/L)",
          sufficient_body: "Sonucunuz yeterli D Vitamini seviyesine işaret etmektedir. Sağlıklı yaşam tarzınızı, dengeli beslenmenizi ve ılımlı güneş ışığı maruziyetinizi sürdürmeye devam edin. Özellikle kış aylarında düzenli test yaptırmayı düşünün.",
          invalid_label: "Geçersiz",
          invalid_title: "Geçersiz Sonuç",
          invalid_body: "Test sonucunuz geçersizdir. Bu, test prosedüründe bir hata olmasından kaynaklanıyor olabilir. Lütfen kullanım talimatlarını dikkatle okuyun ve yeni bir test yapın. Sorun devam ederse bizimle iletişime geçin."
        },
        faqs: {
          title: "Sıkça Sorulan Sorular",
          q1_q: "D Vitamini neden vücut için önemlidir?",
          q1_a: "D Vitamini'nin sağlıklı kemikler ve sağlıklı dişler için kullanıldığı sıkça söylenir. Bu doğrudur, ancak D Vitamini vücuttaki pek çok başka süreçte de kullanılır. Yeterli D Vitamini seviyeleri kas gücünü artırır, bağışıklık sistemini iyileştirir, düşme riskini azaltır ve ruh halini ve enerji seviyelerini iyileştirir.",
          q2_q: "D Vitamini'ni nereden alabilirim?",
          q2_a: "D Vitamini'nin iki ana kaynağı vardır: yiyecekler ve güneş ışığı. D Vitamini içeren yiyecekler arasında sardalye, ton balığı, somon, yumurta sarısı, kırmızı et ve karaciğer bulunur.",
          q3_q: "D Vitamini eksikliği ne kadar yaygındır?",
          q3_a: "İngiltere Ulusal Diyet ve Beslenme Araştırması (2008-2012), 19-64 yaş arası yetişkinlerin %23'ünün ve 65 yaş üzeri yetişkinlerin %21'inin D Vitamini eksikliğinden muzdarip olduğunu göstermiştir. 2019'da sonuçlanan bir araştırma ise yaklaşık 6,5 milyon kişilik bir popülasyonun 1/3'ünün D Vitamini eksikliği yaşadığını ortaya koymuştur.",
          q4_q: "D Vitamini eksikliği yaşıyorsam hangi belirtileri hissedebilirim?",
          q4_a: "D Vitamini eksikliği olan birçok kişide hiçbir belirti görülmeyebilir. Bazen belirtiler çok belirsiz olabilir. D Vitamini eksikliğinin belirtilerinden bazıları aşağıdadır:",
          q4_list: ["Yorgunluk", "Genel olarak kendini iyi hissetmeme", "Kemik ağrısı", "Kas ağrıları", "Eklem ağrısı", "Düşük ruh hali"],
          q5_q: "D Vitamini eksikliği açısından kimler risk altındadır?",
          q5_a: "Ulusal Klinik Mükemmeliyet Enstitüsü, aşağıdaki kişileri D Vitamini eksikliği açısından yüksek risk kategorisine koymaktadır:",
          q5_list: ["65 yaş üzerindekiler", "Güneş ışığına az maruz kalanlar (eve bağlı, kültürel nedenler veya uzun süre kapalı alanda kalanlar)", "Koyu tenli bireyler", "D Vitamini emilimini olumsuz etkileyen karın ameliyatı geçirenler", "Ciddi karaciğer veya böbrek hastalığı olanlar", "Hamile veya emziren kadınlar", "Vücut kitle indeksi (VKİ) 30 kg/m²'nin üzerinde olanlar"],
          q6_q: "Daha fazla D Vitamini nasıl alabilirim?",
          q6_a: "İngiltere'de güneş ışığından yeterli D Vitamini almak çok zordur. Bu nedenle İngiliz hükümeti, İngiltere'deki kişilerin kış aylarında D Vitamini takviyesi almasını önermektedir.",
          q7_q: "Ne kadar D Vitamini takviyesi almalıyım?",
          q7_a: "Tüm İngiliz yetişkinlerin Ekim'den Mart'a kadar günde 10 mikrogram (400 Uluslararası Birim) alması önerilmektedir. Yukarıdaki yüksek riskli kategorilerden birine giriyorsanız, yıl boyunca günde 10 mikrogram D Vitamini takviyesi almanız tavsiye edilir.",
          q8_q: "D Vitamini takviyesi kimler almamalıdır?",
          q8_a: "Yüksek kalsiyum seviyeleri veya bazı kanserlerden muzdaripseniz D Vitamini takviyesi almamalısınız. Bazı kalp ve tansiyon ilaçları kullananlar dikkatli olmalı; başlamadan önce doktorunuzla konuşun. Böbrek hastalığı, karaciğer hastalığı ve böbrek taşı sorunu yaşayanlar da D Vitamini takviyesine başlamadan önce tıbbi tavsiye almalıdır."
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
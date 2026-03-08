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
        "btn_allvex": "ALLVEX SELF-TESTS",
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
        "copyright": "© Copyright Allvex. All Rights Reserved",
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
        title_line1: "CHECK",
        title_line2: "SYMPTOMS",
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
      },
      ourStory: {
        s1_title: "Our Story",
        s1_p1: "Ever put off an appointment as you thought you would just get better, or you didn't want the hassle of going to see a GP? Well, one of our parents did, and unfortunately, they suffered as a result. His generic symptoms of tiredness and breathlessness developed which contributed to a lack of exercise and a generally unhealthy way of living. A stubborn refusal to accept something might be wrong, meant nothing changed in his lifestyle. His symptoms got more serious and his health progressively worse, before any action was taken. But it was too late. Sadly, this negative spiral developed into a more serious condition and in time, his passing.",
        s1_p2: "We wondered, would things have been different if he had been forced to see a GP, or could have had an early diagnosis at home? What if he (or his wife) had the opportunity to understand his health better through self-testing, to at least provide an early indication as to whether he was suffering from something more serious? It is no guarantee, but this certainly could have helped.",
        s1_p3: "So, with this in mind, we have decided to make a positive change in the world of personal health. Allvex Self-Tests are available for you to take at home and cover a broad range of potentially underlying health conditions. Allvex doesn't have all the answers and doesn't replace the role of your GP, but our Self-Tests do empower you to better understand your overall health, provide early screening for potential health conditions and start you on a positive health journey. Allvex Self-Tests start you on a journey that gets you on the front foot with your health, with regular testing in the comfort of your own home.",
        btn_take_test: "Take a Test",
        btn_symptoms: "Check Symptoms",
        btn_about: "About Allvex",
        s2_title: "Our Mission",
        s2_subtitle: "When it comes to your personal health, being on the front foot is absolutely crucial.",
        s2_text: "Allvex's mission is to make high quality healthcare testing kits affordable and available for as many people as possible. We provide consumers an opportunity to monitor health and wellness outside of a clinic or hospital setting, and to seek medical advice and treatment at the earliest possible opportunity.",
        s3_title: "Our Vision",
        s3_text: "With this in mind, we have created a Self-Test range that empowers consumers to take control of their own health. We have developed ALLVEX, a range of rapid self-tests clinically proven to identify a range of illnesses and specific conditions with the highest accuracy readings that can be administered in the comfort and privacy of your own home. Allvex tests provide a swift results of a potential healthcare condition, which can then be followed up with an appointment with a healthcare provider.",
        s4_title: "Certifications",
        s4_subtitle: "Our value is in providing one of the highest quality tests on the UK market.",
        s4_text: "Allvex Self-Tests are tested and certified to the highest of standards on the UK market. All tests hold accreditations validating their high accuracy and ensuring they are eligible for sale on the UK and European market. The manufacturing processes are certified to ISO 9001 and crucially ISO 13485, the ISO standard that governs the manufacture of medical devices. In addition to this, all tests are registered with the MHRA here in the UK and hold full CE certification from accredited notified bodies for InVitro Diagnostic Medical Devices. The devices are governed by the IVDD and more recently the IVDR, which alongside the CE certification from notified bodies and MHRA registration, validates their quality and eligibility for use and sale in the UK and European market."
      },
      healthHub: {
        page_title: "Information Hub",
        read_more: "READ MORE",
        items: {
          vitaminD: {
            title: "WHY VITAMIN D IS\nSO IMPORTANT?",
            text: "Vitamin D is often said to be used for healthy bones and healthy teeth. This is true, however, Vitamin D is used by many other processes in the body. Having adequate levels of Vitamin D will increase muscle strength, improve the immune system, reduce falls risks and improve mood and energy levels.",
            testLabel: "VITAMIN D SELF TEST"
          },
          vaginalInfection: {
            title: "HOW CAN I AVOID GETTING\nBACTERIAL VAGINOSIS?",
            text: "What is a vaginal infection? A vaginal infection is also known as bacterial vaginosis. It is not a sexually transmitted disease. It is a common condition caused by the overgrowth of bacteria in the vagina. This causes a change in the normal vaginal discharge which may become more noticeable or develop a fishy smell.",
            testLabel: "VAGINAL INFECTION SELF-TEST"
          },
          uti: {
            title: "WHO IS AT RISK OF URINARY TRACT\nINFECTION (UTI)?",
            text: "A UTI is an infection of anywhere along the urinary tract. This includes the urethra (the tube which we urinate out of), the bladder, the ureters (the tubes that connect the bladder to the kidneys), and the kidneys themselves. When doctors talk about a UTI, we tend to mean an infection of the bladder, also known as cystitis.",
            testLabel: "URINARY TRACT INFECTION SELF-TEST"
          },
          thyroid: {
            title: "WHAT CAUSES AN UNDERACTIVE\nTHYROID AND HOW CAN I TREAT IT?",
            text: "An underactive thyroid is when your thyroid gland doesn't produce enough thyroid hormone (thyroxine). This condition is also known as underactive thyroid or hypothyroidism. Thyroxine is produced in the thyroid gland. The thyroid gland sits at the front of your neck.",
            testLabel: "UNDER-ACTIVE THYROID SELF-TEST"
          },
          menopause: {
            title: "WHAT IS MENOPAUSE AND HOW CAN I\nFEEL BETTER?",
            text: "Menopause is when your periods stop due to lower hormone levels. This usually happens between the ages of 45 and 55. Perimenopause is when you have symptoms before your periods have stopped. Symptoms of menopause can last for months or years and can change with time.",
            testLabel: "MENOPAUSE SELF-TEST"
          },
          maleFertility: {
            title: "WHAT IS MALE INFERTILITY AND HOW\nDO I IMPROVE MY CHANCE OF\nBECOMING A FATHER?",
            text: "A low sperm count is also called \"oligozoospermia\". This is when an ejaculate has fewer than 15 million sperm per ml of semen. Having a low sperm count can make it more difficult to conceive naturally.",
            testLabel: "MALE FERTILITY SELF-TEST"
          },
          ironDeficiency: {
            title: "IRON DEFICIENCY: WHAT SHOULD I DO\nTO IMPROVE IT?",
            text: "Iron is used to make haemoglobin which is found in red blood cells. Haemoglobin is important for carrying oxygen around the body. If you don't have enough haemoglobin then your body is not going to get the oxygen it requires to function at its best. This low level of haemoglobin/red blood cells is called anaemia. Iron is also important for the healthy growth of hair, skin and nails.",
            testLabel: "IRON DEFICIENCY SELF-TEST"
          },
          stomachHealth: {
            title: "HOW H. PYLORI BACTERIA AFFECTS\nOUR STOMACH HEALTH?",
            text: "H. Pylori is a bacteria that can often be found in the stomach. It is one of the most common bacteria found in the human body. About 40% of the UK adult population have H. Pylori at any one time. The vast majority of people who are infected with H. Pylori do not suffer from any symptoms. However, H. Pylori affects the effectiveness of the protective lining of the stomach. Therefore the most common symptom of H. Pylori infection is indigestion.",
            testLabel: "STOMACH HEALTH SELF-TEST"
          },
          bowelHealth: {
            title: "WHAT ARE THE SYMPTOMS OF BOWEL\nCANCER?",
            listIntro: "By noticing these symptoms early, you can prevent the development of bowel cancer:",
            list_1: "Change in bowel habits such as passing bowel motions more frequently or having looser and more runny motions;",
            list_2: "Unexpected weight loss - usually 5-10% of your weight in the past 6 months;",
            testLabel: "BOWEL HEALTH SELF-TEST"
          }
        }
      },
      notFound: {
        title: "Page Not Found",
        subtitle: "The page you are looking for doesn't exist or has been moved. Let's get you back on track.",
        btn_home: "Go Home",
        btn_symptoms: "Check Symptoms"
      },
      contactUs: {
        page_title: "Contact Us",
        subtitle: "We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.",
        form_title: "Send a Message",
        name_label: "Full Name",
        name_placeholder: "Your full name",
        email_label: "Email Address",
        email_placeholder: "your@email.com",
        subject_label: "Subject",
        subject_placeholder: "How can we help?",
        message_label: "Message",
        message_placeholder: "Tell us more about your enquiry...",
        send_btn: "Send Message",
        send_success: "Your message has been sent. We'll be in touch shortly!",
        info_title: "Get in Touch",
        address_label: "Address",
        address_value: "London, United Kingdom",
        email_info_label: "Email",
        email_info_value: "info@allvex.co.uk",
        phone_label: "Phone",
        phone_value: "+44 (0) 20 0000 0000",
        hours_label: "Office Hours",
        hours_value: "Monday – Friday, 9:00 AM – 5:00 PM"
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
        "btn_allvex": "ALLVEX KENDİNİ TEST ET",
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
        "copyright": "© Copyright Allvex. Tüm Hakları Saklıdır",
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
        title_line1: "SEMPTOM",
        title_line2: "KONTROLÜ",
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
      },
      ourStory: {
        s1_title: "Hikayemiz",
        s1_p1: "Bir randevuyu düşündünüz mü, 'İyileşirim' ya da 'Doktora gitmek zahmetli' diye erteliyor musunuz? Ebeveynlerimizden biri bunu yaptı ve maalesef bunun bedelini ödedi. Yorgunluk ve nefes darlığı gibi genel semptomları zamanla egzersizden uzaklaşmasına ve sağlıksız bir yaşam tarzına neden oldu. Bir şeylerin yanlış gidebileceğini kabul etmekteki inatçı tutumu, yaşam tarzında hiçbir şeyin değişmemesine yol açtı. Semptomları daha da ciddileşti ve sağlığı giderek kötüleşti; ta ki önlem almak için çok geç kalınana kadar. Ne yazık ki bu olumsuz sarmal zamanla daha ciddi bir hastalığa ve sonunda hayatını kaybetmesine neden oldu.",
        s1_p2: "Şunu merak ettik: Bir doktora gitmeye zorlanmış olsaydı ya da evde erken teşhis koyma imkânı olsaydı sonuç farklı mı olurdu? O (ya da eşi) öz-testler aracılığıyla sağlığını daha iyi anlama fırsatına sahip olsaydı; en azından daha ciddi bir şey yaşayıp yaşamadığına dair erken bir işaret elde edebilseydi? Bu bir garanti değil, ama kesinlikle yardımcı olabilirdi.",
        s1_p3: "Tüm bunları göz önünde bulundurarak, kişisel sağlık dünyasında olumlu bir değişim yaratmaya karar verdik. Allvex Öz-Testleri, evde uygulayabileceğiniz ve çok çeşitli potansiyel sağlık sorunlarını kapsayan testlerdir. Allvex'in tüm cevapları yoktur ve doktorunuzun yerini alamaz; ancak Öz-Testlerimiz, genel sağlığınızı daha iyi anlamanızı, olası sağlık sorunlarına yönelik erken tarama yapmanızı ve sağlıklı bir yolculuğa başlamanızı sağlar. Allvex Öz-Testleri, evinizin konforunda düzenli testlerle sağlığınızın bir adım önünde olmanıza yardımcı olur.",
        btn_take_test: "Test Yap",
        btn_symptoms: "Semptom Kontrolü",
        btn_about: "Allvex Hakkında",
        s2_title: "Misyonumuz",
        s2_subtitle: "Kişisel sağlığınız söz konusu olduğunda, proaktif olmak son derece önemlidir.",
        s2_text: "Allvex'in misyonu, yüksek kaliteli sağlık test kitlerini mümkün olduğunca fazla kişiye uygun fiyatlarla sunmaktır. Tüketicilere bir klinik veya hastane ortamı dışında sağlık ve refahlarını izleme fırsatı sunuyor ve mümkün olan en erken fırsatta tıbbi tavsiye ve tedavi almalarını sağlıyoruz.",
        s3_title: "Vizyonumuz",
        s3_text: "Bunu göz önünde bulundurarak, tüketicilerin kendi sağlıkları üzerinde kontrol sahibi olmalarını sağlayan bir Öz-Test serisi oluşturduk. ALLVEX'i geliştirdik; evinizin konforunda ve mahremiyetinde uygulanabilen, geniş bir hastalık ve özgül durumu en yüksek doğruluk oranlarıyla tespit etmek için klinik olarak kanıtlanmış hızlı öz-testlerin bir serisi. Allvex testleri, potansiyel bir sağlık sorunu hakkında hızlı sonuçlar sunarak, gerektiğinde bir sağlık uzmanıyla randevu alınmasına zemin hazırlar.",
        s4_title: "Sertifikalar",
        s4_subtitle: "Değerimiz, İngiltere pazarındaki en yüksek kaliteli testlerden birini sunmaktır.",
        s4_text: "Allvex Öz-Testleri, İngiltere pazarının en yüksek standartlarında test edilmiş ve sertifikalandırılmıştır. Tüm testler, yüksek doğruluklarını doğrulayan ve İngiltere ile Avrupa pazarında satışa uygunluklarını güvence altına alan akreditasyonlara sahiptir. Üretim süreçleri, tıbbi cihazların üretimini yöneten ISO standardı olan ISO 9001 ve özellikle ISO 13485 ile sertifikalandırılmıştır. Bunun yanı sıra, tüm testler İngiltere'de MHRA'ya kayıtlı olup, InVitro Tanısal Tıbbi Cihazlar için akredite onaylanmış kuruluşlardan tam CE sertifikasına sahiptir. Cihazlar IVDD ve daha yeni IVDR kapsamında düzenlenmekte; bu durum, onaylı kuruluşlardan alınan CE sertifikasyonu ve MHRA kaydıyla birlikte, İngiltere ve Avrupa pazarında kullanım ve satış için kalitelerini ve uygunluklarını doğrulamaktadır."
      },
      healthHub: {
        page_title: "Bilgi Merkezi",
        read_more: "DEVAMINI OKU",
        items: {
          vitaminD: {
            title: "D VİTAMİNİ NEDEN\nBU KADAR ÖNEMLİDİR?",
            text: "D Vitamininin sağlıklı kemikler ve sağlıklı dişler için kullanıldığı sıkça söylenir. Bu doğrudur; ancak D Vitamini vücuttaki pek çok başka süreçte de kullanılmaktadır. Yeterli D Vitamini seviyeleri kas gücünü artırır, bağışıklık sistemini iyileştirir, düşme riskini azaltır ve ruh halini ve enerji seviyelerini iyileştirir.",
            testLabel: "D VİTAMİNİ ÖZ-TESTİ"
          },
          vaginalInfection: {
            title: "BAKTERİYEL VAJİNOZİS NASIL\nÖNLENİR?",
            text: "Vajinal enfeksiyon nedir? Vajinal enfeksiyon, bakteriyel vajinoz olarak da bilinir. Cinsel yolla bulaşan bir hastalık değildir. Vajinada bakteri aşırı büyümesinden kaynaklanan yaygın bir durumdur. Bu durum, normal vajinal akıntıda değişikliğe yol açar ve akıntı daha belirgin hale gelebilir ya da balık kokusu geliştirebilir.",
            testLabel: "VAJİNAL ENFEKSİYON ÖZ-TESTİ"
          },
          uti: {
            title: "İDRAR YOLU ENFEKSİYONU (İYE)\nİÇİN KİMLER RİSK ALTINDADIR?",
            text: "İYE, idrar yolunun herhangi bir bölgesinde görülen bir enfeksiyondur. Üretra, mesane, üreterler ve böbrekleri kapsar. Doktorlar İYE'den söz ederken genellikle mesane enfeksiyonunu, yani sistiti kasteder.",
            testLabel: "İDRAR YOLU ENFEKSİYONU ÖZ-TESTİ"
          },
          thyroid: {
            title: "TİROİD TEMBELLİĞİNİN NEDENLERİ\nNELERDİR VE NASIL TEDAVİ EDİLİR?",
            text: "Tembel tiroid, tiroid bezinin yeterli tiroid hormonu (tiroksin) üretememesi durumudur. Bu durum hipoiroidi olarak da bilinir. Tiroid bezi, boyunun ön kısmında yer alır.",
            testLabel: "TİROİD TEMBELLİĞİ ÖZ-TESTİ"
          },
          menopause: {
            title: "MENOPOZ NEDİR VE DAHA İYİ\nHİSSETMEK İÇİN NE YAPABİLİRİM?",
            text: "Menopoz, düşen hormon seviyeleri nedeniyle adet dönemlerinin sona ermesidir. Bu durum genellikle 45-55 yaşları arasında gerçekleşir. Perimenopoz ise adetler tamamen sona ermeden önce belirtilerin yaşandığı dönemdir. Menopoz belirtileri aylarca veya yıllarca sürebilir ve zaman içinde değişebilir.",
            testLabel: "MENOPOZ ÖZ-TESTİ"
          },
          maleFertility: {
            title: "ERKEK KISIRLIĞI NEDİR VE BABA\nOLMA ŞANSIMI NASIL ARTIRABİLİRİM?",
            text: "Düşük sperm sayısı 'oligozoospermi' olarak adlandırılır. Bu durum, bir ejakülatın meni mililitresi başına 15 milyondan az sperm içermesi anlamına gelir. Düşük sperm sayısı, doğal yollarla çocuk sahibi olmayı zorlaştırabilir.",
            testLabel: "ERKEK DOĞURGANLIK ÖZ-TESTİ"
          },
          ironDeficiency: {
            title: "DEMİR EKSİKLİĞİ: İYİLEŞTİRMEK\nİÇİN NE YAPMALIYIM?",
            text: "Demir, kırmızı kan hücrelerinde bulunan hemoglobinin yapımında kullanılır. Hemoglobin, oksijeni vücutta taşımak için önemlidir. Yeterli hemoglobin yoksa vücut ihtiyacı olan oksijeni alamaz. Bu düşük hemoglobin/kırmızı kan hücresi seviyesine anemi denir. Demir ayrıca saç, cilt ve tırnakların sağlıklı büyümesi için de önemlidir.",
            testLabel: "DEMİR EKSİKLİĞİ ÖZ-TESTİ"
          },
          stomachHealth: {
            title: "H. PYLORİ BAKTERİSİ MİDE\nSAĞLIĞIMIZI NASIL ETKİLER?",
            text: "H. Pylori, midede sıkça bulunan bir bakteridir ve insan vücudunda en yaygın görülen bakterilerden biridir. İngiltere'deki yetişkin nüfusun yaklaşık %40'ında H. Pylori bulunur. Enfekte kişilerin büyük çoğunluğunda herhangi bir belirti görülmez. Ancak H. Pylori, midenin koruyucu mukoza tabakasının etkinliğini azaltır. Bu nedenle H. Pylori enfeksiyonunun en yaygın belirtisi hazımsızlıktır.",
            testLabel: "MİDE SAĞLIĞI ÖZ-TESTİ"
          },
          bowelHealth: {
            title: "BAĞIRSAK KANSERİNİN BELİRTİLERİ\nNELERDİR?",
            listIntro: "Bu belirtileri erken fark ederek bağırsak kanseri gelişimini önleyebilirsiniz:",
            list_1: "Daha sık dışkılama ya da daha gevşek ve sulu dışkı gibi bağırsak alışkanlıklarında değişiklik;",
            list_2: "Beklenmedik kilo kaybı - genellikle son 6 ayda kilonuzun %5-10'u;",
            testLabel: "BAĞIRSAK SAĞLIĞI ÖZ-TESTİ"
          }
        }
      },
      notFound: {
        title: "Sayfa Bulunamadı",
        subtitle: "Aradığınız sayfa mevcut değil veya taşınmış olabilir. Sizi doğru yöne yönlendirelim.",
        btn_home: "Ana Sayfaya Dön",
        btn_symptoms: "Semptom Kontrolü"
      },
      contactUs: {
        page_title: "İletişim",
        subtitle: "Sizden haber almaktan mutluluk duyarız. Bize mesaj gönderin, en kısa sürede size döneceğiz.",
        form_title: "Mesaj Gönderin",
        name_label: "Ad Soyad",
        name_placeholder: "Adınız ve soyadınız",
        email_label: "E-posta Adresi",
        email_placeholder: "sizin@email.com",
        subject_label: "Konu",
        subject_placeholder: "Size nasıl yardımcı olabiliriz?",
        message_label: "Mesaj",
        message_placeholder: "Sorunuzu veya talebinizi daha ayrıntılı açıklayın...",
        send_btn: "Mesaj Gönder",
        send_success: "Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz!",
        info_title: "İletişime Geçin",
        address_label: "Adres",
        address_value: "Londra, Birleşik Krallık",
        email_info_label: "E-posta",
        email_info_value: "info@allvex.co.uk",
        phone_label: "Telefon",
        phone_value: "+44 (0) 20 0000 0000",
        hours_label: "Çalışma Saatleri",
        hours_value: "Pazartesi – Cuma, 09:00 – 17:00"
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
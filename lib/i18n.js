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
        uti: "Urinary Tract Infection (UTI)",
        male_fertility: "Male Fertility (SP-10)",
        thyroid: "Under Active Thyroid (TSH)",
        vitamin_d_checker: "Vitamin D Deficiency",
        iron_deficiency_checker: "Iron Deficiency",
        uti_checker: "Urinary Tract Infection",
        male_fertility_checker: "Male Infertility"
      },
      checker: {
        nav_title: "CHOOSE A HEALTH CONDITION QUESTIONNAIRE:",
        btn_back: "BACK",
        btn_next: "NEXT",
        btn_submit: "GET RESULT",
        btn_calculate: "Calculate",
        btn_retake: "RETAKE TEST",
        result_your_result: "Your result:",
        result_score: "Score:",
        result_flags: "Attention flags:",
        result_answered_yes: "As you answered yes to:",
        result_no_symptoms: "Your answers indicate that you do not currently have significant symptoms. If you are concerned, please consult your GP.",
        view_test: "VIEW SELF-TEST",
        common: {
          choose_gender: "Choose your gender:",
          male: "Male",
          female: "Female",
          yes: "Yes",
          no: "No"
        },
        vitaminD: {
          title: "Could I have low Vitamin D?",
          subtitle: "VITAMIN D DEFICIENCY CONDITION CHECKER",
          productBtnText: "ALLVEX® VITAMIN D DEFICIENCY SELF-TEST",
          redFlagIntro: "Your answers indicate that you may have low Vitamin D. You can check for this using the Allvex Vitamin D deficiency self-test kit.",
          redFlagWarning: "You should also discuss this symptom with your GP as soon as you can, as it may need further investigation.",
          positiveIntro: "Your answers indicate that you may have low Vitamin D levels. You can check for this using the Allvex Vitamin D deficiency self-test kit.",
          positiveWarning: "If you are generally concerned about any of your symptoms or your vitamin D levels are normal on this test, we would advise speaking with your GP.",
          negativeIntro: "Your answers indicate that you do not have symptoms of Vitamin D Deficiency. Many people however have no symptoms with low Vitamin D and doctors will often not check Vitamin D so it is important to check your levels and increase your intake if low. You may therefore want to use the Allvex Vitamin D Deficiency self-test kit to check.",
          commonInfo_1: "Vitamin D is important for our overall health, being used to influence the levels of calcium and phosphate in our bodies. These are all vital for bone, teeth and muscle health.",
          commonInfo_2: "Unfortunately, up to 4 in 10 adults across Europe may have low levels of Vitamin D.",
          commonInfo_3: "When levels are low, there is an increased risk of bony pains, fatigue and cramps. Many people however have no symptoms and doctors will often not check Vitamin D levels so it is important to check your levels and increase your intake of vitamin D if low.",
          q_tired: "Are you always tired?",
          q_muscles_weak: "Do you feel your muscles are weak?",
          q_bony_pain: "Do you get bony pain?",
          q_age_60: "Are you >60 years of age?",
          q_pins: "Do you have pins and needles in your arms or legs?",
          q_cramps: "Do you get pains or cramps in your muscles?",
          q_infections: "Do you get recurrent infections?"
        },
        ironDeficiency: {
          title: "Could I have Iron Deficiency?",
          subtitle: "IRON DEFICIENCY CONDITION CHECKER",
          productBtnText: "ALLVEX® IRON DEFICIENCY SELF-TEST",
          redFlagIntro: "Your answers indicate that you may have low iron levels. You can check for this using the Allvex Iron deficiency self-test kit.",
          redFlagWarning: "You should also discuss this symptom with your GP as soon as you can, as it may need further investigation.",
          positiveIntro: "Your answers indicate that you may have low iron levels. You can check for this using the Allvex Iron deficiency self-test kit.",
          positiveWarning: "If you are generally concerned about any of your symptoms or your iron levels are normal on this test, we would advise speaking with your GP.",
          negativeIntro: "Your answers indicate that you do not have the more common symptoms of low Iron levels. Many people however have no symptoms with low Iron so you may therefore want to use the Allvex Iron Deficiency self-test kit to check.",
          commonInfo_1: "Iron is important for producing red blood cells, which are the cells which store and carry Oxygen in our blood. Low levels of Iron mean that your body is not carrying around as much Oxygen as it needs.",
          commonInfo_2: "This can lead to symptoms such as tiredness, dizziness and shortness of breath.",
          commonInfo_3: "Risk factors include a vegetarian diet, heavy menstrual periods or conditions like coeliac disease.",
          commonInfo_4: "If your iron levels are low, you can make changes to your diet to improve this or take supplements. You should also speak with your GP as you will need further investigations into why your iron is low.",
          q_heavy_periods: "Do you have heavy periods?",
          q_tired: "Are you always tired?",
          q_short_breath: "Are you feeling short of breath?",
          q_skin_paler: "Is your skin paler than usual?",
          q_dizzy: "Are you feeling dizzy, especially on standing?",
          q_heart: "Are you getting irregular heart beats?",
          q_weak: "Are you feeling generally weak?",
          q_chest: "Do you get chest pains?",
          q_headaches: "Do you get headaches?"
        },
        uti: {
          title: "Could I have Urinary Tract Infection?",
          subtitle: "UTI HEALTH CHECKER",
          productBtnText: "ALLVEX® URINARY TRACT INFECTION SELF-TEST",
          redFlagIntro: "Your answers indicate that you may have a urine infection. You should use the Allvex UTI self-test kit to check.",
          redFlagWarning: "You should also discuss this symptom with your GP as soon as you can, as it may need further investigation.",
          positiveIntro: "Your answers indicate that you may have a urine infection. You can check for this using the Allvex UTI self-test kit.",
          positiveWarning: "If you are generally concerned about any of your symptoms, we would advise speaking with your GP.",
          negativeIntro: "Your answers indicate that you do not currently have the common symptoms of a urine infection. If your symptoms persist or worsen, you may want to use the Allvex UTI self-test kit to check.",
          commonInfo_1: "A urine infection (UTI) is an infection of the urinary tract, most commonly affecting the bladder (cystitis). UTIs are more common in women but can affect anyone.",
          commonInfo_2: "Common symptoms include passing urine more often than usual, a burning or stinging sensation when urinating, and a sudden urge to urinate.",
          commonInfo_3: "Other symptoms include cloudy or smelly urine, pain in your lower tummy or sides, and blood in the urine.",
          commonInfo_4: "If left untreated, a UTI can spread to the kidneys and cause a more serious infection. Early detection and treatment with antibiotics is important.",
          q_frequency: "Do you pass urine more often than usual?",
          q_pain_peeing: "Do you have pain or a stinging feeling when you pee?",
          q_urge: "Do you have a sudden urge to pass urine?",
          q_bladder: "Do you feel you cannot empty your bladder fully?",
          q_tummy_pain: "Do you have pain in your lower tummy or sides?",
          q_cloudy: "Is your urine smelly or cloudy?",
          q_blood: "Have you noticed blood in your urine?",
          q_accidents: "Do you have accidents when you cannot get to the bathroom in time?"
        },
        maleFertility: {
          title: "Could I have Male Infertility?",
          subtitle: "MALE FERTILITY SYMPTOMS CHECKER",
          productBtnText: "ALLVEX® MALE FERTILITY SELF-TEST",
          positiveIntro: "Your answers indicate that you may have reduced fertility or are being proactive in your reproductive health. You can check for this using our Allvex Male fertility self-test kit.",
          positiveWarning: "If you are generally concerned about any of your answers or your fertility test is normal but there are still difficulties with conceiving, we would advise speaking with your GP.",
          negativeIntro: "Your answers do not indicate that you have risk factors for reduced fertility. However, approximately 1 in 14 men may experience reduced fertility through their life and if you are keen on being proactive and checking your reproductive health, you can do so with our easy-to-use Allvex Male fertility self-test kit.",
          commonInfo_1: "Fertility is the ability of a couple to conceive through normal sexual activity. Up to 1 in 7 couples may have difficulty conceiving throughout their lives. Reduced male fertility plays a role in approximately half of these cases.",
          commonInfo_2: "While some of the risk factors for this can unfortunately not be changed, some can be, such as smoking and adequate control of diabetes.",
          q_conceive: "Have you been trying actively to conceive for at least 6 months?",
          q_std: "Have you ever had any sexually transmitted diseases?",
          q_smoke: "Do you smoke?",
          q_diabetes: "Do you have diabetes?",
          q_bmi: "Do you have a raised body mass index (BMI) of >25?",
          q_blood_pressure: "Do you have high blood pressure?",
          q_mumps: "Have you ever had mumps?",
          q_surgery: "Have you ever had surgery on your urinary tract?",
          q_testosterone: "Do you take testosterone supplements?"
        }
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
      ironDeficiency: {
        title: "Iron Deficiency (Ferritin)",
        description: "An early detection test for iron deficiency anaemia (IDA). This test is used to check your iron stores in the blood by checking the ferritin level in a blood sample taken from a fingerstick.",
        badges: {
          fingerstick: "Fingerstick blood",
          accuracy: "Accuracy > 95%",
          clinically_tested: "Clinically Tested",
          result_time: "Result in 5 min."
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
          symptom_1: "Fatigue",
          symptom_2: "Getting tired quickly during exercise",
          symptom_3: "Looking pale",
          symptom_4: "Memory problems",
          symptom_5: "Brittle hair and nails",
          symptom_6: "Difficulty concentrating",
          symptom_7: "Becoming short of breath more quickly than normal",
          symptom_8: "Slow wound healing",
          symptoms_intro: "If you have iron deficiency, you may experience a wide range of symptoms, including:"
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
          normal_label: "Normal",
          normal_title: "Normal",
          normal_body: "Your result indicates normal iron (ferritin) levels. Continue maintaining a balanced diet rich in iron-containing foods such as red meat, legumes and leafy greens. Consider retesting periodically, especially if you experience fatigue or other symptoms.",
          abnormal_label: "Abnormal",
          abnormal_title: "Abnormal – Iron Deficiency Detected",
          abnormal_body: "Your result indicates low iron (ferritin) levels, which may suggest iron deficiency anaemia. We recommend consulting your GP as soon as possible for further clinical testing and to discuss treatment options, including iron supplements or dietary changes.",
          invalid_label: "Invalid",
          invalid_title: "Invalid Result",
          invalid_body: "Your test result is invalid. This may be caused by an error in the testing procedure. Please read the Instructions for Use carefully and perform a new test. If the problem persists, contact us for support."
        },
        faqs: {
          title: "FAQs",
          q1_q: "Why is iron important for the body?",
          q1_a: "Iron is used to make haemoglobin which is found in red blood cells. Haemoglobin is important for carrying oxygen around the body. If you don't have enough haemoglobin then your body is not going to get the oxygen it requires to function at its best. This low level of haemoglobin/red blood cells is called anaemia. Iron is also important for the healthy growth of hair, skin and nails.",
          q2_q: "What are the symptoms of iron deficiency?",
          q2_a: "If you have iron deficiency, you may experience a wide range of symptoms including: fatigue, getting tired quickly during exercise, looking pale, memory problems, brittle hair and nails, difficulty concentrating, becoming short of breath more quickly than normal, and slow wound healing. If your iron deficiency is left untreated, it can cause other problems in your body such as heart problems, liver problems and a reduced ability to fight infections.",
          q3_q: "What can cause iron deficiency?",
          q3_a: "It should be noted that in the vast majority of people, iron deficiency is caused by easily manageable conditions such as heavy periods or a poor diet. Iron deficiency can sometimes also be caused by conditions such as a stomach ulcer, bowel inflammation and some cancers.",
          q4_q: "Is there anything I can do to improve my iron levels?",
          q4_a: "Yes — three things: 1. Take an iron supplement: these can be obtained over the counter or on prescription. 2. Improve your diet: foods high in iron include liver (should not be eaten during pregnancy), red meat, pulses (e.g. kidney beans and chickpeas), nuts and dried fruit. 3. See your doctor: if your iron deficiency/anaemia is caused by a medical condition, you will need to treat that condition.",
          q5_q: "If I am found to be iron deficient, will I need further tests?",
          q5_a: "When iron deficiency is diagnosed, it is important to find out why. Your doctor will probably want further blood tests to check on other things such as your kidney and liver function. They may also want a urine and stool sample. If the reason can be easily found and treated, further tests are usually not required; however, if your doctor cannot find the reason, you may need further tests such as an ultrasound or camera tests of your bowels."
        }
      },
      uti: {
        title: "Urinary Tract Infection (UTI)",
        description: "Urinary Tract Infection Test (UTI) for the detection of leukocytes and nitrates in urine. This test is designed for the early detection of urinary tract infections and helps you to understand whether you may be suffering from a UTI.",
        badges: {
          urine: "Urine sample",
          accuracy: "Accuracy > 99.5%",
          clinically_tested: "Clinically Tested",
          result_time: "Result in 2 mins"
        },
        tabs: {
          overview: "Overview",
          test_contents: "Test Contents",
          instructions: "Instructions",
          your_result: "Your Result"
        },
        overview: {
          title: "Overview of the Test",
          symptoms_title: "Symptoms",
          symptoms_intro: "If you have a urinary tract infection, you may experience a wide range of symptoms including:",
          symptom_1: "A burning sensation when urinating",
          symptom_2: "A frequent urge to urinate",
          symptom_3: "Passing small amounts of urine",
          symptom_4: "Cloudy urine",
          symptom_5: "Strong-smelling urine",
          symptom_6: "Pelvic pain (in women)",
          symptom_7: "Blood in the urine",
          symptom_8: "Lower abdominal pain"
        },
        test_contents: {
          view_360: "360° View"
        },
        instructions: {
          video_label: "Video Instructions",
          slides_label: "Step-by-Step Instructions",
          prev: "‹ Prev",
          next: "Next ›"
        },
        your_result: {
          title: "What does your result mean?",
          negative_label: "Negative",
          negative_title: "Negative – No UTI Detected",
          negative_body: "Your result indicates no signs of a urinary tract infection. If you continue to experience symptoms, we recommend consulting your GP for further evaluation.",
          positive_label: "Positive",
          positive_title: "Positive – UTI Detected",
          positive_body: "Your result indicates the presence of leukocytes and/or nitrites in your urine, which may suggest a urinary tract infection. We recommend consulting your GP as soon as possible for a clinical diagnosis and appropriate antibiotic treatment."
        },
        faqs: {
          title: "FAQs",
          q1_q: "What is a urinary tract infection (UTI)?",
          q1_a: "A UTI is an infection of anywhere along the urinary tract. This includes the urethra (the tube which we urinate out of), the bladder, the ureters (the tubes that connect the bladder to the kidneys), and the kidneys themselves. When doctors talk about a UTI, we tend to mean an infection of the bladder, also known as cystitis.",
          q2_q: "What are the symptoms of a UTI?",
          q2_a: "The symptoms of a UTI include: a burning sensation when passing urine, needing to pass urine more often than usual, feeling an urgent need to pass urine, feeling that your bladder has not emptied properly after passing urine, blood in the urine (haematuria), lower abdominal pain, and a strong unpleasant smell from your urine.",
          q3_q: "Who is at risk of a UTI?",
          q3_a: "UTIs are more common in women than men. This is because women have a shorter urethra, which means bacteria can reach the bladder more easily. Other risk factors include: being sexually active, using a diaphragm for contraception, going through the menopause, having a urinary catheter, having diabetes, having a weakened immune system, and having a condition that causes urinary obstruction.",
          q4_q: "How is a UTI treated?",
          q4_a: "Most UTIs are treated with a short course of antibiotics. The type of antibiotic and how long you need to take it will depend on the type of UTI and which bacteria are causing it. You can also help relieve your symptoms by drinking plenty of fluids, taking paracetamol or ibuprofen, and holding a hot water bottle against your lower abdomen.",
          q5_q: "Can I prevent a UTI?",
          q5_a: "There are several things you can do to reduce your risk of getting a UTI. These include: drinking plenty of fluids, wiping from front to back after going to the toilet, not holding in your urine for too long, emptying your bladder after sex, and avoiding the use of perfumed soap or deodorant spray around your genitals.",
          q6_q: "When should I see a doctor?",
          q6_a: "You should see a doctor if your symptoms are severe, if you have not improved within 3 days of starting self-care measures, if you are pregnant, if you are a man with UTI symptoms (as this is less common and more likely to indicate a more serious underlying condition), if you have recurring UTIs (2 or more in 6 months), or if you are concerned about your symptoms.",
          q7_q: "Are UTIs dangerous?",
          q7_a: "Most UTIs are not dangerous and will clear up on their own or with a short course of antibiotics. However, if a UTI is left untreated, it can spread to the kidneys and cause a more serious infection called pyelonephritis. Symptoms of a kidney infection include a high temperature, pain in your side or back, shivering and chills, feeling very unwell, and nausea and vomiting.",
          q8_q: "Can men get UTIs?",
          q8_a: "Yes, men can get UTIs, but they are less common in men than in women. Men are more likely to get UTIs if they have an enlarged prostate gland, kidney stones, or a urinary catheter. UTIs in men are more likely to spread to the kidneys, so it is important to seek medical advice promptly.",
          q9_q: "What does this test detect?",
          q9_a: "This test detects the presence of leukocytes (white blood cells) and nitrites in urine. The presence of these substances in urine can indicate a urinary tract infection. Leukocytes are produced by the body in response to infection, and nitrites are produced by the bacteria that commonly cause UTIs."
        }
      },
      maleFertility: {
        title: "Male Fertility (SP-10)",
        description: "Allvex's Male Fertility Test measures your sperm concentration in the comfort of your home. The test indicates a normal or low sperm count.",
        badges: {
          semen: "Semen",
          accuracy: "Accuracy > 98%",
          clinically_tested: "Clinically Tested",
          result_time: "Result in 5 min."
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
          symptoms_intro: "The main sign of male infertility is the inability to conceive a child. There may be no other obvious signs or symptoms. In some cases, however, an underlying problem does have signs and symptoms. These may include:",
          symptom_p1: "A condition that affects your testicles may cause: pain and swelling in your testicles or prominent veins on your testicles.",
          symptom_p2: "A problem with your prostate gland or tube that carries sperm from your testicles may cause: blood in your semen, pain when ejaculating or trouble ejaculating when you have sex.",
          symptom_p3: "Low hormone levels may cause: problems getting or keeping an erection, changes to your mood, tiredness, weight gain, lower sex drive (libido), growth of male breasts, or less facial hair."
        },
        test_contents: {
          view_360: "360° View"
        },
        instructions: {
          video_label: "Video Instructions",
          slides_label: "Step-by-Step Instructions",
          prev: "‹ Prev",
          next: "Next ›"
        },
        your_result: {
          title: "What does your result mean?",
          normal_label: "Normal",
          normal_title: "Normal – Sperm Count Within Range",
          normal_body: "Your result indicates a normal sperm concentration (≥15 million sperm/ml of semen). If you and your partner are still having difficulty conceiving, we recommend consulting your GP for further evaluation.",
          abnormal_label: "Abnormal",
          abnormal_title: "Abnormal – Low Sperm Count Detected",
          abnormal_body: "Your result indicates a low sperm concentration (<15 million sperm/ml of semen). This is known as oligozoospermia. We recommend consulting your GP as soon as possible to discuss further clinical testing and treatment options.",
          invalid_label: "Invalid",
          invalid_title: "Invalid Result",
          invalid_body: "Your test result is invalid. This may be caused by an error in the testing procedure. Please read the Instructions for Use carefully and perform a new test. If the problem persists, contact us for support."
        },
        faqs: {
          title: "FAQs",
          q1_q: "How do I improve my chance of becoming a father?",
          q1_a: "One of the main things is having regular vaginal sex (every 2–3 days). You can also optimise timing around your partner's ovulation. Lifestyle changes that can help include: keeping testicles cool (avoid tight underwear, hot baths/hot tubs), stopping smoking, limiting alcohol to within recommended weekly units (14 units), avoiding recreational drugs (cannabis, cocaine, anabolic steroids), discussing any medicines you take with your doctor, and maintaining a healthy diet and weight.",
          q2_q: "How often is male infertility the cause of couple infertility?",
          q2_a: "Sperm problems may be the cause of infertility in 50% of couples suffering from infertility.",
          q3_q: "What are the causes of male infertility?",
          q3_a: "Causes include: sperm disorders (not enough sperm, sperm that don't move fast enough, or abnormally shaped sperm); hormonal problems such as hypogonadism (insufficient testosterone); and ejaculation disorders. Other factors include smoking, alcohol, illegal drugs, infections, overheating of the scrotum, certain medicines, and obesity.",
          q4_q: "What are the symptoms of male infertility?",
          q4_a: "The main sign of male infertility is the inability to conceive a child. In some cases an underlying problem may cause: pain and swelling in the testicles or prominent veins; blood in semen, pain or trouble ejaculating; or low hormone symptoms such as erection problems, mood changes, tiredness, weight gain, reduced libido, growth of male breasts, or less facial hair.",
          q5_q: "What does this male infertility test look at?",
          q5_a: "The test assesses the number/concentration of your sperm. An average sperm count is 15 million sperm/ml of semen. The test indicates whether your sperm count is above or below this threshold. Problems with sperm account for approximately 50% of cases of male infertility.",
          q6_q: "What is low sperm count?",
          q6_a: "A low sperm count is also called 'oligozoospermia'. This is when an ejaculate has fewer than 15 million sperm per ml of semen. Having a low sperm count can make it more difficult to conceive naturally.",
          q7_q: "What are the causes of low sperm count?",
          q7_a: "In many cases the cause is not obvious. Known causes include: hormone imbalance, genetic problems (e.g. Klinefelter's syndrome), undescended testicles in infancy, structural problems (e.g. blocked tubes), genital infections (e.g. chlamydia), varicoceles, overheated testicles, certain medications, excessive alcohol/smoking, and being overweight or obese.",
          q8_q: "What are the treatments for low sperm count?",
          q8_a: "Options include lifestyle changes (stopping smoking, limiting alcohol, avoiding recreational drugs, healthy diet and weight, keeping testicles cool) and continuing to try to conceive — it may just take longer. If conception still does not occur, assisted conception options include IVF (in vitro fertilisation), ICSI (intracytoplasmic sperm injection), or gonadotrophin medicine to stimulate sperm production."
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
        uti: "İdrar Yolu Enfeksiyonu (UTI)",
        male_fertility: "Erkek Doğurganlığı (SP-10)",
        thyroid: "Tiroid Tembelliği (TSH)",
        vitamin_d_checker: "D Vitamini Eksikliği",
        iron_deficiency_checker: "Demir Eksikliği",
        uti_checker: "İdrar Yolu Enfeksiyonu",
        male_fertility_checker: "Erkek Kısırlığı"
      },
      checker: {
        nav_title: "SAĞLIK DURUMU ANKETİ SEÇİN:",
        btn_back: "GERİ",
        btn_next: "İLERİ",
        btn_submit: "SONUCU GÖR",
        btn_calculate: "Hesapla",
        btn_retake: "TEKRar YAP",
        result_your_result: "Sonucunuz:",
        result_score: "Puan:",
        result_flags: "Dikkat bayrakları:",
        result_answered_yes: "Evet yanıtladıklarınız:",
        result_no_symptoms: "Cevaplarınız şu an önemli bir belirti göstermemektedir. Endişeleriniz varsa doktorunuza başvurun.",
        view_test: "TESTİ GÖR",
        common: {
          choose_gender: "Cinsiyetinizi seçin:",
          male: "Erkek",
          female: "Kadın",
          yes: "Evet",
          no: "Hayır"
        },
        vitaminD: {
          title: "D Vitamini eksikliğim olabilir mi?",
          subtitle: "D VİTAMİNİ EKSİKLİĞİ DURUM KONTROLÜ",
          productBtnText: "ALLVEX® D VİTAMİNİ EKSİKLİĞİ TESTİ",
          redFlagIntro: "Cevaplarınız düşük D Vitamini seviyeniz olabileceğini göstermektedir. Allvex D Vitamini eksikliği testi ile bunu kontrol edebilirsiniz.",
          redFlagWarning: "Ayrıca bu belirtilerinizi en kısa sürede doktorunuzla görüşmelisiniz; daha fazla araştırma gerekebilir.",
          positiveIntro: "Cevaplarınız düşük D Vitamini seviyeniz olabileceğini göstermektedir. Allvex D Vitamini eksikliği testi ile bunu kontrol edebilirsiniz.",
          positiveWarning: "Herhangi bir belirtiniz için endişeleniyorsanız veya bu testte D Vitamini seviyeniz normal çıkıyorsa doktorunuzla görüşmenizi öneririz.",
          negativeIntro: "Cevaplarınız D Vitamini eksikliğinin yaygın belirtilerini taşımadığınızı göstermektedir. Ancak pek çok kişide belirti görülmez; bu nedenle seviyenizi kontrol etmeniz önemlidir.",
          commonInfo_1: "D Vitamini, vücudumuzdaki kalsiyum ve fosfat seviyelerini etkilemek için kullanılan genel sağlığımız açısından önemlidir. Bunlar kemik, diş ve kas sağlığı için hayati öneme sahiptir.",
          commonInfo_2: "Ne yazık ki Avrupa'daki yetişkinlerin 10'da 4'ünün düşük D Vitamini seviyesine sahip olabileceği tahmin edilmektedir.",
          commonInfo_3: "Seviyeler düşük olduğunda kemik ağrısı, yorgunluk ve kramp riski artar. Pek çok kişide belirti görülmediğinden seviyenizi kontrol ettirmeniz önemlidir.",
          q_tired: "Her zaman yorgun musunuz?",
          q_muscles_weak: "Kaslarınızın zayıf olduğunu hissediyor musunuz?",
          q_bony_pain: "Kemik ağrısı yaşıyor musunuz?",
          q_age_60: "60 yaşın üzerinde misiniz?",
          q_pins: "Kollarınızda veya bacaklarınızda uyuşma ya da karıncalanma hissediyor musunuz?",
          q_cramps: "Kaslarınızda ağrı veya kramp yaşıyor musunuz?",
          q_infections: "Tekrarlayan enfeksiyonlar geçiriyor musunuz?"
        },
        ironDeficiency: {
          title: "Demir eksikliğim olabilir mi?",
          subtitle: "DEMİR EKSİKLİĞİ DURUM KONTROLÜ",
          productBtnText: "ALLVEX® DEMİR EKSİKLİĞİ TESTİ",
          redFlagIntro: "Cevaplarınız düşük demir seviyeniz olabileceğini göstermektedir. Allvex Demir eksikliği testi ile bunu kontrol edebilirsiniz.",
          redFlagWarning: "Ayrıca bu belirtilerinizi en kısa sürede doktorunuzla görüşmelisiniz; daha fazla araştırma gerekebilir.",
          positiveIntro: "Cevaplarınız düşük demir seviyeniz olabileceğini göstermektedir. Allvex Demir eksikliği testi ile bunu kontrol edebilirsiniz.",
          positiveWarning: "Herhangi bir belirtiniz için endişeleniyorsanız veya bu testte demir seviyeniz normal çıkıyorsa doktorunuzla görüşmenizi öneririz.",
          negativeIntro: "Cevaplarınız düşük demir seviyesinin yaygın belirtilerini taşımadığınızı göstermektedir. Ancak pek çok kişide belirti görülmediğinden Allvex Demir Eksikliği testi ile kontrol etmek isteyebilirsiniz.",
          commonInfo_1: "Demir, kanımızda oksijen depolayan ve taşıyan kırmızı kan hücrelerinin üretimi için önemlidir. Düşük demir seviyeleri vücudunuzun yeterli oksijen taşıyamamasına neden olur.",
          commonInfo_2: "Bu durum yorgunluk, baş dönmesi ve nefes darlığı gibi belirtilere yol açabilir.",
          commonInfo_3: "Risk faktörleri arasında vejetaryen beslenme, ağır adet kanamaları veya çölyak hastalığı sayılabilir.",
          commonInfo_4: "Demir seviyeniz düşükse beslenmenizi düzenleyebilir veya takviye alabilirsiniz. Ayrıca nedenini araştırmak için doktorunuza başvurmanız gerekecektir.",
          q_heavy_periods: "Ağır adet kanamaları yaşıyor musunuz?",
          q_tired: "Her zaman yorgun musunuz?",
          q_short_breath: "Nefes darlığı çekiyor musunuz?",
          q_skin_paler: "Cildiniz normalden daha soluk mu?",
          q_dizzy: "Özellikle ayağa kalkarken baş dönmesi yaşıyor musunuz?",
          q_heart: "Düzensiz kalp atışları yaşıyor musunuz?",
          q_weak: "Genel olarak kendinizi zayıf hissediyor musunuz?",
          q_chest: "Göğüs ağrısı çekiyor musunuz?",
          q_headaches: "Baş ağrısı çekiyor musunuz?"
        },
        uti: {
          title: "İdrar yolu enfeksiyonum olabilir mi?",
          subtitle: "İDRAR YOLU ENFEKSİYONU SAĞLIK KONTROLÜ",
          productBtnText: "ALLVEX® İDRAR YOLU ENFEKSİYONU TESTİ",
          redFlagIntro: "Cevaplarınız idrar yolu enfeksiyonunuz olabileceğini göstermektedir. Allvex UTI testi ile bunu kontrol etmenizi öneririz.",
          redFlagWarning: "Ayrıca bu belirtilerinizi en kısa sürede doktorunuzla görüşmelisiniz; daha fazla araştırma gerekebilir.",
          positiveIntro: "Cevaplarınız idrar yolu enfeksiyonunuz olabileceğini göstermektedir. Allvex UTI testi ile bunu kontrol edebilirsiniz.",
          positiveWarning: "Herhangi bir belirtiniz için endişeleniyorsanız doktorunuzla görüşmenizi öneririz.",
          negativeIntro: "Cevaplarınız idrar yolu enfeksiyonunun yaygın belirtilerini taşımadığınızı göstermektedir. Belirtileriniz devam ederse Allvex UTI testi ile kontrol etmek isteyebilirsiniz.",
          commonInfo_1: "İdrar yolu enfeksiyonu (İYE/UTI) en yaygın olarak mesaneyi (sistit) etkiler. Kadınlarda daha sık görülse de herkesi etkileyebilir.",
          commonInfo_2: "Yaygın belirtiler: normalden daha sık idrara çıkma, idrara çıkarken yanma veya batma hissi ve ani idrara çıkma ihtiyacı.",
          commonInfo_3: "Diğer belirtiler arasında bulanık veya kokulu idrar, alt karın veya yanlarda ağrı ve idrarda kan sayılabilir.",
          commonInfo_4: "Tedavi edilmezse enfeksiyon böbreklere yayılabilir. Erken teşhis ve antibiyotik tedavisi büyük önem taşımaktadır.",
          q_frequency: "Normalden daha sık idrara çıkıyor musunuz?",
          q_pain_peeing: "İdrara çıkarken ağrı veya batma hissediyor musunuz?",
          q_urge: "Ani idrara çıkma ihtiyacı hissediyor musunuz?",
          q_bladder: "Mesanenizi tam olarak boşaltamadığınızı hissediyor musunuz?",
          q_tummy_pain: "Alt karında veya yanlarda ağrı hissediyor musunuz?",
          q_cloudy: "İdrarınız kokulu veya bulanık mı?",
          q_blood: "İdrarda kan fark ettiniz mi?",
          q_accidents: "Tuvalete yetişemeden kaza yaşıyor musunuz?"
        },
        maleFertility: {
          title: "Erkek kısırlığım olabilir mi?",
          subtitle: "ERKEK DOĞURGANLIĞI BELİRTİ KONTROLÜ",
          productBtnText: "ALLVEX® ERKEK DOĞURGANLIĞI TESTİ",
          positiveIntro: "Cevaplarınız azalmış doğurganlık risk faktörleriniz olabileceğini veya üreme sağlığınız konusunda proaktif davrandığınızı göstermektedir. Allvex Erkek Doğurganlığı testi ile bunu kontrol edebilirsiniz.",
          positiveWarning: "Cevaplarınızdan herhangi biri hakkında endişeleriniz varsa veya test normal çıkmasına rağmen çocuk sahibi olmakta güçlük yaşıyorsanız doktorunuzla görüşmenizi öneririz.",
          negativeIntro: "Cevaplarınız azalmış doğurganlık için risk faktörleriniz olduğunu göstermemektedir. Ancak yaklaşık her 14 erkekten 1'i yaşamı boyunca azalmış doğurganlık yaşayabilir. Proaktif olmak istiyorsanız Allvex Erkek Doğurganlığı testini kullanabilirsiniz.",
          commonInfo_1: "Doğurganlık, bir çiftin normal cinsel yolla çocuk sahibi olma yeteneğidir. Her 7 çiftten 1'i yaşamları boyunca çocuk sahibi olmakta güçlük çekebilir. Erkek doğurganlığının azalması bu vakaların yaklaşık yarısında rol oynamaktadır.",
          commonInfo_2: "Bu risk faktörlerinin bir kısmı ne yazık ki değiştirilemezken, sigara içmek ve diyabet kontrolü gibi bazıları değiştirilebilir.",
          q_conceive: "En az 6 aydır aktif olarak çocuk sahibi olmaya mı çalışıyorsunuz?",
          q_std: "Daha önce hiç cinsel yolla bulaşan hastalık geçirdiniz mi?",
          q_smoke: "Sigara içiyor musunuz?",
          q_diabetes: "Diyabetiniz var mı?",
          q_bmi: "Vücut kitle indeksiniz (VKİ) 25'in üzerinde mi?",
          q_blood_pressure: "Yüksek tansiyonunuz var mı?",
          q_mumps: "Daha önce kabakulak geçirdiniz mi?",
          q_surgery: "Daha önce idrar yollarınızda ameliyat geçirdiniz mi?",
          q_testosterone: "Testosteron takviyesi kullanıyor musunuz?"
        }
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
      ironDeficiency: {
        title: "Demir Eksikliği (Ferritin)",
        description: "Demir eksikliği anemisi (IDA) için erken tanı testi. Bu test, parmak ucundan alınan kan örneğindeki ferritin seviyesini kontrol ederek kanınızdaki demir depolarını incelemek için kullanılır.",
        badges: {
          fingerstick: "Parmak ucundan alınan kan örneği",
          accuracy: "Doğruluk oranı > %95",
          clinically_tested: "Klinik Olarak Test Edildi",
          result_time: "5 dakikada sonuç"
        },
        tabs: {
          overview: "Genel Bakış",
          test_contents: "Test İçeriği",
          instructions: "Talimatlar",
          your_result: "Sonucunuz"
        },
        overview: {
          title: "Teste Genel Bakış",
          symptoms_title: "Belirtiler",
          symptom_1: "Yorgunluk",
          symptom_2: "Egzersiz sırasında çabuk yorulmak",
          symptom_3: "Solgun görünmek",
          symptom_4: "Hafıza sorunları",
          symptom_5: "Kırılgan saçlar ve tırnaklar",
          symptom_6: "Konsantrasyon bozukluğu",
          symptom_7: "Normalden daha çabuk nefes nefese kalmak",
          symptom_8: "Yara iyileşmesinin yavaşlaması",
          symptoms_intro: "Demir eksikliğiniz varsa, çok çeşitli belirtiler yaşayabilirsiniz:"
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
          normal_label: "Normal",
          normal_title: "Normal",
          normal_body: "Sonucunuz normal demir (ferritin) seviyesine işaret etmektedir. Kırmızı et, baklagiller ve yeşil yapraklı sebzeler gibi demir içeren besinlerle dengeli beslenmeye devam edin. Yorgunluk veya başka belirtiler yaşarsanız periyodik olarak test yaptırmayı düşünün.",
          abnormal_label: "Anormal",
          abnormal_title: "Anormal – Demir Eksikliği Tespit Edildi",
          abnormal_body: "Sonucunuz düşük demir (ferritin) seviyesine işaret etmekte olup demir eksikliği anemisine işaret edebilir. Daha fazla klinik test yapılması ve demir takviyeleri veya beslenme değişiklikleri dahil tedavi seçeneklerini görüşmek için en kısa sürede doktorunuza başvurmanızı öneririz.",
          invalid_label: "Geçersiz",
          invalid_title: "Geçersiz Sonuç",
          invalid_body: "Test sonucunuz geçersizdir. Bu, test prosedüründe bir hata olmasından kaynaklanıyor olabilir. Lütfen kullanım talimatlarını dikkatle okuyun ve yeni bir test yapın. Sorun devam ederse bizimle iletişime geçin."
        },
        faqs: {
          title: "Sıkça Sorulan Sorular",
          q1_q: "Demir vücut için neden önemlidir?",
          q1_a: "Demir, kırmızı kan hücrelerinde bulunan hemoglobinin yapımında kullanılır. Hemoglobin, vücutta oksijen taşınması için önemlidir. Yeterli hemoglobininiz yoksa, vücudunuz en iyi şekilde işlev görmesi için gereken oksijeni alamaz. Hemoglobin/kırmızı kan hücrelerinin bu düşük seviyesine anemi denir. Demir, saç, cilt ve tırnakların sağlıklı gelişimi için de önemlidir.",
          q2_q: "Demir eksikliğinin belirtileri nelerdir?",
          q2_a: "Demir eksikliğiniz varsa çok çeşitli belirtiler yaşayabilirsiniz: yorgunluk, egzersiz sırasında çabuk yorulmak, solgun görünmek, hafıza sorunları, kırılgan saçlar ve tırnaklar, konsantrasyon bozukluğu, normalden daha çabuk nefes nefese kalmak ve yara iyileşmesinin yavaşlaması. Demir eksikliği tedavi edilmezse kalp sorunları, karaciğer sorunları ve enfeksiyonlarla savaşma yeteneğinde azalma gibi başka sorunlara yol açabilir.",
          q3_q: "Demir eksikliğine ne sebep olabilir?",
          q3_a: "Unutulmamalıdır ki insanların büyük çoğunluğunda demir eksikliği, ağır adet kanamaları veya yetersiz beslenme gibi kolayca yönetilebilen durumlardan kaynaklanır. Demir eksikliğine bazen mide ülseri, bağırsak iltihabı ve bazı kanserler gibi hastalıklar da neden olabilir.",
          q4_q: "Demir seviyemi iyileştirmek için yapabileceğim bir şey var mı?",
          q4_a: "Evet, üç şey: 1. Demir takviyesi alın: Bunlar reçetesiz veya reçeteyle temin edilebilir. 2. Beslenmenizi iyileştirin: Demir açısından zengin besinler şunlardır: karaciğer (hamilelik döneminde tüketilmemelidir), kırmızı et, baklagiller (örneğin kırmızı barbunya ve nohut), kuruyemişler ve kuru meyveler. 3. Doktorunuza danışın: Demir eksikliğiniz/anemisi bir hastalıktan kaynaklanıyorsa, o hastalığı tedavi etmeniz gerekir.",
          q5_q: "Demir eksikliğim tespit edilirse daha fazla test yaptırmam gerekecek mi?",
          q5_a: "Demir eksikliği teşhis edildiğinde nedenini bulmak önemlidir. Doktorunuz muhtemelen böbrek ve karaciğer fonksiyonlarınız gibi diğer şeyleri kontrol etmek için daha fazla kan testi isteyecektir. Ayrıca idrar ve dışkı örneği de isteyebilirler. Neden kolayca tespit edilip tedavi edilebiliyorsa genellikle daha fazla teste gerek duyulmaz; ancak doktorunuz nedeni bulamazsa bağırsaklarınızın ultrason veya kamera testleri gibi daha ileri testlere başvurmanız gerekebilir."
        }
      },
      uti: {
        title: "İdrar Yolu Enfeksiyonu (UTI)",
        description: "İdrarda lökosit ve nitrat tespiti için İdrar Yolu Enfeksiyonu Testi (UTI). Bu test, idrar yolu enfeksiyonlarının erken tespiti için tasarlanmıştır ve bir UTI'dan muzdarip olup olmadığınızı anlamanıza yardımcı olur.",
        badges: {
          urine: "İdrar örneği",
          accuracy: "Doğruluk oranı > %99,5",
          clinically_tested: "Klinik Olarak Test Edildi",
          result_time: "2 dakikada sonuç"
        },
        tabs: {
          overview: "Genel Bakış",
          test_contents: "Test İçeriği",
          instructions: "Talimatlar",
          your_result: "Sonucunuz"
        },
        overview: {
          title: "Teste Genel Bakış",
          symptoms_title: "Belirtiler",
          symptoms_intro: "İdrar yolu enfeksiyonunuz varsa çok çeşitli belirtiler yaşayabilirsiniz:",
          symptom_1: "İdrar yaparken yanma hissi",
          symptom_2: "Sık idrara çıkma isteği",
          symptom_3: "Az miktarda idrar yapma",
          symptom_4: "Bulanık idrar",
          symptom_5: "Güçlü kokulu idrar",
          symptom_6: "Pelvik ağrı (kadınlarda)",
          symptom_7: "İdrarda kan",
          symptom_8: "Alt karın ağrısı"
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
          negative_label: "Negatif",
          negative_title: "Negatif – UTI Tespit Edilmedi",
          negative_body: "Sonucunuz idrar yolu enfeksiyonu belirtisi olmadığını göstermektedir. Belirtileriniz devam ederse, daha fazla değerlendirme için doktorunuza başvurmanızı öneririz.",
          positive_label: "Pozitif",
          positive_title: "Pozitif – UTI Tespit Edildi",
          positive_body: "Sonucunuz idrarda lökosit ve/veya nitrit varlığına işaret etmektedir; bu durum idrar yolu enfeksiyonunu düşündürebilir. Klinik tanı ve uygun antibiyotik tedavisi için en kısa sürede doktorunuza başvurmanızı öneririz."
        },
        faqs: {
          title: "Sıkça Sorulan Sorular",
          q1_q: "İdrar yolu enfeksiyonu (UTI) nedir?",
          q1_a: "UTI, idrar yolu boyunca herhangi bir yerin enfeksiyonudur. Bu; üretra (idrar çıkardığımız tüp), mesane, üreterler (mesaneyi böbreklere bağlayan tüpler) ve böbreklerin kendisini kapsar. Doktorlar bir UTI'dan söz ettiğinde genellikle sistit olarak da bilinen mesane enfeksiyonunu kastederiz.",
          q2_q: "UTI'nin belirtileri nelerdir?",
          q2_a: "UTI belirtileri şunlardır: idrar yaparken yanma hissi, normalden daha sık idrara çıkma ihtiyacı, acil idrara çıkma hissi, idrar yaptıktan sonra mesanenin tam olarak boşalmadığı hissi, idrarda kan, alt karın ağrısı ve idrardan gelen güçlü ve hoş olmayan koku.",
          q3_q: "UTI riski taşıyanlar kimlerdir?",
          q3_a: "UTI'lar erkeklere göre kadınlarda daha yaygındır. Bunun nedeni kadınların daha kısa bir üretraya sahip olması ve bakterilerin mesaneye daha kolay ulaşabilmesidir. Diğer risk faktörleri şunlardır: cinsel aktif olmak, diyafram kontrasepsiyon yöntemi kullanmak, menopozda olmak, üriner kateter kullanmak, diyabet, bağışıklık sisteminin zayıflaması ve idrar tıkanıklığına neden olan bir hastalığın bulunması.",
          q4_q: "UTI nasıl tedavi edilir?",
          q4_a: "Çoğu UTI, kısa süreli bir antibiyotik kürüyle tedavi edilir. Kullanılacak antibiyotiğin türü ve süresi, UTI'nin tipine ve hangi bakterilerin neden olduğuna bağlıdır. Bol sıvı içmek, parasetamol veya ibuprofen almak ve alt karnınıza sıcak su torbası uygulamak semptomlarınızı hafifletmeye yardımcı olabilir.",
          q5_q: "UTI'yi önleyebilir miyim?",
          q5_a: "UTI riskini azaltmak için yapabileceğiniz birkaç şey vardır: bol sıvı içmek, tuvaletten sonra önden arkaya doğru silmek, idrarı uzun süre tutmamak, ilişkiden sonra mesaneyi boşaltmak ve cinsel bölgede kokulu sabun veya deodorant sprey kullanmaktan kaçınmak.",
          q6_q: "Ne zaman doktora gitmeliyim?",
          q6_a: "Belirtileriniz şiddetliyse, öz-bakım önlemlerine başladıktan 3 gün içinde iyileşme olmadıysa, hamileyseniz, UTI belirtileri olan bir erkekseniz, tekrarlayan UTI'larınız varsa (6 ayda 2 veya daha fazla) veya belirtilerinizden endişeleniyorsanız doktora gitmelisiniz.",
          q7_q: "UTI tehlikeli midir?",
          q7_a: "Çoğu UTI tehlikeli değildir ve kendi kendine ya da kısa süreli antibiyotik tedavisiyle geçer. Ancak UTI tedavi edilmezse böbreklere yayılabilir ve pyelonefrit adı verilen daha ciddi bir enfeksiyona neden olabilir. Böbrek enfeksiyonu belirtileri: yüksek ateş, yan veya sırt ağrısı, titreme, çok kötü hissetme, bulantı ve kusma.",
          q8_q: "Erkekler UTI'ye yakalanabilir mi?",
          q8_a: "Evet, erkekler de UTI'ye yakalanabilir; ancak kadınlara kıyasla daha az görülür. Büyümüş prostat bezi, böbrek taşları veya üriner kateter kullanan erkeklerde UTI riski daha yüksektir. Erkeklerde UTI'nin böbreklere yayılma olasılığı daha fazladır, bu nedenle hızlı tıbbi müdahale önemlidir.",
          q9_q: "Bu test ne tespit eder?",
          q9_a: "Bu test, idrarda lökosit (beyaz kan hücreleri) ve nitrit varlığını tespit eder. Bu maddelerin idrarda bulunması idrar yolu enfeksiyonuna işaret edebilir. Lökositler vücut tarafından enfeksiyona yanıt olarak üretilir; nitritler ise UTI'lere genellikle neden olan bakteriler tarafından üretilir."
        }
      },
      maleFertility: {
        title: "Erkek Doğurganlığı (SP-10)",
        description: "Allvex'in Erkek Doğurganlığı Testi, evinizin konforunda sperm konsantrasyonunuzu ölçer. Test, normal veya düşük sperm sayısını gösterir.",
        badges: {
          semen: "Meni örneği",
          accuracy: "Doğruluk oranı > %98",
          clinically_tested: "Klinik Olarak Test Edildi",
          result_time: "5 dakikada sonuç"
        },
        tabs: {
          overview: "Genel Bakış",
          test_contents: "Test İçeriği",
          instructions: "Talimatlar",
          your_result: "Sonucunuz"
        },
        overview: {
          title: "Teste Genel Bakış",
          symptoms_title: "Belirtiler",
          symptoms_intro: "Erkek kısırlığının temel belirtisi çocuk sahibi olamamaktır. Başka belirgin işaret veya semptom olmayabilir. Ancak bazı durumlarda altta yatan bir sorun belirti verebilir:",
          symptom_p1: "Testislerinizi etkileyen bir durum şunlara yol açabilir: testislerinizde ağrı ve şişlik veya testislerinizdeki belirgin damarlar.",
          symptom_p2: "Prostat bezinizdeki veya sperm taşıyan borularınızdaki bir sorun şunlara neden olabilir: menide kan, boşalma sırasında ağrı veya cinsel ilişki sırasında boşalma güçlüğü.",
          symptom_p3: "Düşük hormon seviyeleri şunlara neden olabilir: ereksiyon sağlama veya sürdürme güçlüğü, ruh hali değişiklikleri, yorgunluk, kilo alma, düşük cinsel istek (libido), meme büyümesi veya yüz kıllarının azalması."
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
          normal_label: "Normal",
          normal_title: "Normal – Sperm Sayısı Normal Aralıkta",
          normal_body: "Sonucunuz normal sperm konsantrasyonuna işaret etmektedir (≥15 milyon sperm/ml meni). Siz ve partneriniz bebek sahibi olmakta hâlâ güçlük çekiyorsanız, daha fazla değerlendirme için doktorunuza başvurmanızı öneririz.",
          abnormal_label: "Anormal",
          abnormal_title: "Anormal – Düşük Sperm Sayısı Tespit Edildi",
          abnormal_body: "Sonucunuz düşük sperm konsantrasyonuna işaret etmektedir (meni başına 15 milyon spermin altında). Bu durum oligozoospermi olarak bilinir. Daha ileri klinik testler ve tedavi seçeneklerini görüşmek için en kısa sürede doktorunuza başvurmanızı öneririz.",
          invalid_label: "Geçersiz",
          invalid_title: "Geçersiz Sonuç",
          invalid_body: "Test sonucunuz geçersizdir. Bu, test prosedüründe bir hata olmasından kaynaklanıyor olabilir. Lütfen kullanım talimatlarını dikkatle okuyun ve yeni bir test yapın. Sorun devam ederse bizimle iletişime geçin."
        },
        faqs: {
          title: "Sıkça Sorulan Sorular",
          q1_q: "Baba olma şansımı nasıl artırabilirim?",
          q1_a: "Temel yöntemlerden biri düzenli vajinal ilişkidir (her 2-3 günde bir). Aynı zamanda cinsel ilişki zamanlamasını partnerinizin yumurtlama dönemiyle eşleştirebilirsiniz. Yaşam tarzı değişiklikleri de yardımcı olabilir: testislerin serin tutulması (dar iç çamaşırından ve sıcak banyolardan kaçınmak), sigara bırakmak, alkolü önerilen haftalık sınırda (14 birim) tutmak, uyuşturucu kullanmamak, aldığınız ilaçları doktorunuzla görüşmek ve sağlıklı bir diyet ile kilonuzu korumak.",
          q2_q: "Erkek kısırlığı çift kısırlığının ne sıklıkla nedenidir?",
          q2_a: "Sperm sorunları, kısırlık yaşayan çiftlerin %50'sinde kısırlığın nedeni olabilir.",
          q3_q: "Erkek kısırlığının nedenleri nelerdir?",
          q3_a: "Nedenler şunları içerir: sperm bozuklukları (yetersiz sperm, yeterince hızlı hareket etmeyen veya anormal şekilli sperm); hipogonadizm gibi hormonal sorunlar (yetersiz testosteron); ve boşalma bozuklukları. Diğer faktörler arasında sigara, alkol, yasadışı uyuşturucular, enfeksiyonlar, testislerin aşırı ısınması, bazı ilaçlar ve obezite sayılabilir.",
          q4_q: "Erkek kısırlığının belirtileri nelerdir?",
          q4_a: "Temel belirti çocuk sahibi olamamaktır. Bazı durumlarda altta yatan bir sorun şunlara yol açabilir: testislerde ağrı ve şişlik veya belirgin damarlar; menide kan, boşalma sırasında ağrı veya güçlük; ya da düşük hormon belirtileri (ereksiyon güçlüğü, ruh hali değişiklikleri, yorgunluk, kilo alma, düşük libido, meme büyümesi veya yüz kıllarının azalması).",
          q5_q: "Bu erkek kısırlığı testi neye bakıyor?",
          q5_a: "Test, sperm sayınızı/konsantrasyonunuzu değerlendirir. Ortalama sperm sayısı meni başına 15 milyon spermdir. Test, sperm sayınızın bu eşiğin üstünde mi yoksa altında mı olduğunu gösterir. Sperm sorunları erkek kısırlığı vakalarının yaklaşık %50'sini oluşturmaktadır.",
          q6_q: "Düşük sperm sayısı nedir?",
          q6_a: "Düşük sperm sayısı 'oligozoospermi' olarak da adlandırılır. Bu, bir boşalmada meni başına 15 milyondan az sperm bulunması durumudur. Düşük sperm sayısı, doğal yollarla gebeliği zorlaştırabilir.",
          q7_q: "Düşük sperm sayısının nedenleri nelerdir?",
          q7_a: "Çoğu durumda neden açık değildir. Bilinen nedenler şunlardır: hormon dengesizliği, genetik sorunlar (örneğin Klinefelter sendromu), bebeklikte inmemiş testis, yapısal sorunlar (örneğin tıkalı tüpler), genital enfeksiyonlar (örneğin klamidya), varikoseller, testislerin aşırı ısınması, belirli ilaçlar, aşırı alkol/sigara ve fazla kilo veya obezite.",
          q8_q: "Düşük sperm sayısının tedavileri nelerdir?",
          q8_a: "Seçenekler şunlardır: yaşam tarzı değişiklikleri (sigara bırakmak, alkolü sınırlamak, uyuşturucudan kaçınmak, sağlıklı diyet ve kilo, testisleri serin tutmak) ve gebeliği denemeye devam etmek — sadece daha uzun sürebilir. Gebelik yine de gerçekleşmezse yardımcı üreme seçenekleri şunlardır: IVF (in vitro fertilizasyon), ICSI (intrasitoplazmatik sperm enjeksiyonu) veya sperm üretimini uyarmak için gonadotropin ilaçları."
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
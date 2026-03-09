// lib/quiz-data.js

const yn = (flags = false) => [
  { labelKey: "checker.common.yes", value: "yes", score: 1, ...(flags ? { isRedFlag: true } : {}) },
  { labelKey: "checker.common.no",  value: "no",  score: 0 }
];

export const quizzes = {
  "vitamin-d-checker": {
    id: "vitamin-d-checker",
    titleKey: "checker.vitaminD.title",
    subtitleKey: "checker.vitaminD.subtitle",
    totalPossibleScore: 6,
    totalPossibleFlags: 3,
    resultTexts: {
      productLink: "/self-tests/vitamin-d",
      productBtnTextKey: "checker.vitaminD.productBtnText",
      commonInfoKeys: ["checker.vitaminD.commonInfo_1", "checker.vitaminD.commonInfo_2", "checker.vitaminD.commonInfo_3"],
      redFlagIntroKey: "checker.vitaminD.redFlagIntro",
      redFlagWarningKey: "checker.vitaminD.redFlagWarning",
      positiveIntroKey: "checker.vitaminD.positiveIntro",
      positiveWarningKey: "checker.vitaminD.positiveWarning",
      negativeIntroKey: "checker.vitaminD.negativeIntro"
    },
    steps: [
      { id: "step-1", questions: [{ id: "gender", textKey: "checker.common.choose_gender", stepLabel: "Step 1/7", type: "radio", options: [{ labelKey: "checker.common.male", value: "male", score: 0 }, { labelKey: "checker.common.female", value: "female", score: 0 }] }] },
      { id: "step-2", questions: [{ id: "tired",              textKey: "checker.vitaminD.q_tired",        stepLabel: "Step 2/7", type: "yes-no", options: yn(true) }] },
      { id: "step-3", questions: [{ id: "muscles-weak",       textKey: "checker.vitaminD.q_muscles_weak",  stepLabel: "Step 3/7", type: "yes-no", options: yn() }] },
      { id: "step-4", questions: [
        { id: "bony-pain",  textKey: "checker.vitaminD.q_bony_pain", stepLabel: "Step 4/7", type: "yes-no", options: yn(true) },
        { id: "age-check",  textKey: "checker.vitaminD.q_age_60",    stepLabel: "Step 4/7", type: "yes-no", options: [{ labelKey: "checker.common.yes", value: "yes", score: 0 }, { labelKey: "checker.common.no", value: "no", score: 0 }] }
      ]},
      { id: "step-5", questions: [{ id: "pins-needles",       textKey: "checker.vitaminD.q_pins",          stepLabel: "Step 5/7", type: "yes-no", options: yn() }] },
      { id: "step-6", questions: [{ id: "cramps",             textKey: "checker.vitaminD.q_cramps",         stepLabel: "Step 6/7", type: "yes-no", options: yn() }] },
      { id: "step-7", questions: [{ id: "recurrent-infections", textKey: "checker.vitaminD.q_infections",   stepLabel: "Step 7/7", type: "yes-no", options: yn(true) }] }
    ]
  },

  "iron-deficiency-checker": {
    id: "iron-deficiency-checker",
    titleKey: "checker.ironDeficiency.title",
    subtitleKey: "checker.ironDeficiency.subtitle",
    totalPossibleScore: 9,
    totalPossibleFlags: 5,
    resultTexts: {
      productLink: "/self-tests/iron-deficiency",
      productBtnTextKey: "checker.ironDeficiency.productBtnText",
      commonInfoKeys: ["checker.ironDeficiency.commonInfo_1", "checker.ironDeficiency.commonInfo_2", "checker.ironDeficiency.commonInfo_3", "checker.ironDeficiency.commonInfo_4"],
      redFlagIntroKey: "checker.ironDeficiency.redFlagIntro",
      redFlagWarningKey: "checker.ironDeficiency.redFlagWarning",
      positiveIntroKey: "checker.ironDeficiency.positiveIntro",
      positiveWarningKey: "checker.ironDeficiency.positiveWarning",
      negativeIntroKey: "checker.ironDeficiency.negativeIntro"
    },
    steps: [
      { id: "step-1",  questions: [{ id: "gender",          textKey: "checker.common.choose_gender",           stepLabel: "Step 1/10",  type: "radio",  options: [{ labelKey: "checker.common.male", value: "male", score: 0 }, { labelKey: "checker.common.female", value: "female", score: 0 }] }] },
      { id: "step-2",  condition: { questionId: "gender", expectedValue: "female" },
                       questions: [{ id: "heavy-periods",    textKey: "checker.ironDeficiency.q_heavy_periods", stepLabel: "Step 2/10",  type: "yes-no", options: yn(true) }] },
      { id: "step-3",  questions: [{ id: "always-tired",     textKey: "checker.ironDeficiency.q_tired",         stepLabel: "Step 3/10",  type: "yes-no", options: yn(true) }] },
      { id: "step-4",  questions: [{ id: "short-breath",     textKey: "checker.ironDeficiency.q_short_breath",  stepLabel: "Step 4/10",  type: "yes-no", options: yn(true) }] },
      { id: "step-5",  questions: [{ id: "skin-paler",       textKey: "checker.ironDeficiency.q_skin_paler",    stepLabel: "Step 5/10",  type: "yes-no", options: yn(true) }] },
      { id: "step-6",  questions: [{ id: "dizzy",            textKey: "checker.ironDeficiency.q_dizzy",         stepLabel: "Step 6/10",  type: "yes-no", options: yn() }] },
      { id: "step-7",  questions: [{ id: "irregular-heart",  textKey: "checker.ironDeficiency.q_heart",         stepLabel: "Step 7/10",  type: "yes-no", options: yn() }] },
      { id: "step-8",  questions: [{ id: "gen-weak",         textKey: "checker.ironDeficiency.q_weak",          stepLabel: "Step 8/10",  type: "yes-no", options: yn() }] },
      { id: "step-9",  questions: [{ id: "chest-pain",       textKey: "checker.ironDeficiency.q_chest",         stepLabel: "Step 9/10",  type: "yes-no", options: yn(true) }] },
      { id: "step-10", questions: [{ id: "headaches",        textKey: "checker.ironDeficiency.q_headaches",     stepLabel: "Step 10/10", type: "yes-no", options: yn() }] }
    ]
  },

  "uti-checker": {
    id: "uti-checker",
    titleKey: "checker.uti.title",
    subtitleKey: "checker.uti.subtitle",
    totalPossibleScore: 8,
    totalPossibleFlags: 4,
    resultTexts: {
      productLink: "/self-tests/uti",
      productBtnTextKey: "checker.uti.productBtnText",
      commonInfoKeys: ["checker.uti.commonInfo_1", "checker.uti.commonInfo_2", "checker.uti.commonInfo_3", "checker.uti.commonInfo_4"],
      redFlagIntroKey: "checker.uti.redFlagIntro",
      redFlagWarningKey: "checker.uti.redFlagWarning",
      positiveIntroKey: "checker.uti.positiveIntro",
      positiveWarningKey: "checker.uti.positiveWarning",
      negativeIntroKey: "checker.uti.negativeIntro"
    },
    steps: [
      { id: "step-1", questions: [{ id: "gender",        textKey: "checker.common.choose_gender", stepLabel: "Step 1/9", type: "radio",  options: [{ labelKey: "checker.common.male", value: "male", score: 0 }, { labelKey: "checker.common.female", value: "female", score: 0 }] }] },
      { id: "step-2", questions: [{ id: "frequency",     textKey: "checker.uti.q_frequency",      stepLabel: "Step 2/9", type: "yes-no", options: [{ labelKey: "checker.common.yes", value: "yes", score: 2, isRedFlag: true }, { labelKey: "checker.common.no", value: "no", score: 0 }] }] },
      { id: "step-3", questions: [{ id: "pain-peeing",   textKey: "checker.uti.q_pain_peeing",    stepLabel: "Step 3/9", type: "yes-no", options: yn() }] },
      { id: "step-4", questions: [{ id: "urge",          textKey: "checker.uti.q_urge",           stepLabel: "Step 4/9", type: "yes-no", options: [{ labelKey: "checker.common.yes", value: "yes", score: 1, isRedFlag: true }, { labelKey: "checker.common.no", value: "no", score: 0 }] }] },
      { id: "step-5", condition: { questionId: "gender", expectedValue: "male" }, questions: [{ id: "bladder",      textKey: "checker.uti.q_bladder",        stepLabel: "Step 5/9", type: "yes-no", options: yn() }] },
      { id: "step-6", questions: [{ id: "tummy-pain",    textKey: "checker.uti.q_tummy_pain",     stepLabel: "Step 6/9", type: "yes-no", options: yn() }] },
      { id: "step-7", questions: [{ id: "cloudy-urine",  textKey: "checker.uti.q_cloudy",         stepLabel: "Step 7/9", type: "yes-no", options: yn() }] },
      { id: "step-8", questions: [{ id: "blood-urine",   textKey: "checker.uti.q_blood",          stepLabel: "Step 8/9", type: "yes-no", options: [{ labelKey: "checker.common.yes", value: "yes", score: 2, isRedFlag: true }, { labelKey: "checker.common.no", value: "no", score: 0 }] }] },
      { id: "step-9", questions: [{ id: "accidents",     textKey: "checker.uti.q_accidents",      stepLabel: "Step 9/9", type: "yes-no", options: [{ labelKey: "checker.common.yes", value: "yes", score: 1, isRedFlag: true }, { labelKey: "checker.common.no", value: "no", score: 0 }] }] }
    ]
  },

  "male-fertility-checker": {
    id: "male-fertility-checker",
    titleKey: "checker.maleFertility.title",
    subtitleKey: "checker.maleFertility.subtitle",
    totalPossibleScore: 9,
    totalPossibleFlags: 0,
    resultTexts: {
      productLink: "/self-tests/male-fertility",
      productBtnTextKey: "checker.maleFertility.productBtnText",
      commonInfoKeys: ["checker.maleFertility.commonInfo_1", "checker.maleFertility.commonInfo_2"],
      positiveIntroKey: "checker.maleFertility.positiveIntro",
      positiveWarningKey: "checker.maleFertility.positiveWarning",
      negativeIntroKey: "checker.maleFertility.negativeIntro"
    },
    steps: [
      { id: "step-1", questions: [{ id: "trying-conceive", textKey: "checker.maleFertility.q_conceive",      stepLabel: "Step 1/9", type: "yes-no", options: yn() }] },
      { id: "step-2", questions: [{ id: "std",             textKey: "checker.maleFertility.q_std",            stepLabel: "Step 2/9", type: "yes-no", options: yn() }] },
      { id: "step-3", questions: [{ id: "smoke",           textKey: "checker.maleFertility.q_smoke",          stepLabel: "Step 3/9", type: "yes-no", options: yn() }] },
      { id: "step-4", questions: [{ id: "diabetes",        textKey: "checker.maleFertility.q_diabetes",       stepLabel: "Step 4/9", type: "yes-no", options: yn() }] },
      { id: "step-5", questions: [{ id: "bmi",             textKey: "checker.maleFertility.q_bmi",            stepLabel: "Step 5/9", type: "yes-no", options: yn() }] },
      { id: "step-6", questions: [{ id: "blood-pressure",  textKey: "checker.maleFertility.q_blood_pressure", stepLabel: "Step 6/9", type: "yes-no", options: yn() }] },
      { id: "step-7", questions: [{ id: "mumps",           textKey: "checker.maleFertility.q_mumps",          stepLabel: "Step 7/9", type: "yes-no", options: yn() }] },
      { id: "step-8", questions: [{ id: "surgery",         textKey: "checker.maleFertility.q_surgery",        stepLabel: "Step 8/9", type: "yes-no", options: yn() }] },
      { id: "step-9", questions: [{ id: "testosterone",    textKey: "checker.maleFertility.q_testosterone",   stepLabel: "Step 9/9", type: "yes-no", options: yn() }] }
    ]
  },

  "general-health-checker": {
    id: "general-health-checker",
    title: "What is my General Health Index score?",
    subtitle: "GENERAL HEALTH INDEX",
    isScoreBased: true,
    trackGender: true,
    results: {
      low: {
        title: "Low Result",
        message: "Your Allvex® Health Index has shown a low result, indicating that significant changes are needed to improve your health. Based on your responses, we recommend considering the following:",
        color: "bg-red-500",
        borderColor: "#ef4444"
      },
      medium: {
        title: "Medium Result",
        message: "Your Allvex® Health Index has shown a medium result, indicating that there is room for improvement in your health. Making adjustments to your daily routine could help you feel better and enhance your overall health and wellbeing. Based on your answers, we would recommend considering the following:",
        color: "bg-yellow-500",
        borderColor: "#eab308"
      },
      high: {
        title: "High Result",
        message: "Your Allvex® Health Index indicates a generally good result. However, some responses have raised red flags, suggesting areas where there is room for improvement in your health. Based on your answers, we would recommend considering the following:",
        color: "bg-green-500",
        borderColor: "#22c55e"
      },
      perfect: {
        title: "Perfect Result",
        message: "Your Allvex® Health Index has shown positive results overall, indicating that your health, based on your answers, is in good condition.",
        color: "bg-emerald-600",
        borderColor: "#059669"
      }
    },
    steps: [
      {
        id: "step-1",
        questions: [
          {
            id: "gender",
            text: "Choose your gender:",
            stepLabel: "Step 1/6",
            type: "radio",
            options: [
              { label: "Male", value: "male", score: 0 },
              { label: "Female", value: "female", score: 0 },
              { label: "Prefer not to answer", value: "other", score: 0 }
            ]
          }
        ]
      },
      {
        id: "step-2",
        questions: [
          {
            id: "smoke",
            text: "How often do you smoke?",
            stepLabel: "Step 2/6",
            type: "radio",
            options: [
              { label: "I smoke daily or on most days", value: "daily", score: 0, isRedFlag: true },
              { label: "I smoke only occasionally", value: "occasionally", score: 0, isRedFlag: true },
              { label: "I never smoke", value: "never", score: 20 }
            ],
            recommendation: {
              intro: "You may want to consider quitting smoking as it brings a list of benefits to your health and wellbeing:",
              list: [
                "You might notice healthier, younger-looking skin, as well as improved lung function and circulation, which can lead to more energy.",
                "Breathing becomes easier and the risk of respiratory infections decreases.",
                "The likelihood of heart attacks, strokes, and other cardiovascular diseases is reduced and the chances of developing various cancers, such as lung, throat, and mouth cancer, are significantly lowered.",
                "Your body can become more effective at fighting off infections and better blood flow can reduce the risk of blood clots and enhance overall health.",
                "Financial Savings: Money previously spent on cigarettes can be saved or used for other things."
              ],
              conditionText: "smoke",
              products: [
                { gender: "male", name: "Male fertility test", link: "/products/male-fertility", desc: "Smoking can impact on male fertility, including sperm volume, mobility, and viability. If you smoke therefore and are planning to/ in the process of trying to conceive now, this test may be beneficial." },
                { gender: "all", name: "Stomach health", link: "/products/stomach-health", desc: "H pylori is a bacterium that infects our stomach and affects up to half of the world’s population. H pylori treatment is less likely to work and the infection more likely to cause stomach cancer if you are still smoking. It is therefore even more important to make sure that it is treated if you have it. You may want to take the Allvex stomach health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with number of cigarettes smoked, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may want to take the Allvex bowel health test, particularly if you have the symptoms listed here." }
              ]
            }
          }
        ]
      },
      {
        id: "step-3",
        questions: [
          {
            id: "sleep",
            text: "How much sleep do you get on average per day?",
            stepLabel: "Step 3/6",
            type: "radio",
            options: [
              { label: "Less than 7 hours", value: "less", score: 5, isRedFlag: true },
              { label: "7 hours or more", value: "more", score: 20 }
            ],
            recommendation: {
              intro: "While everyone needs slightly different amounts of sleep depending on various factors, including their age and physical activity, an average of 7 hours per night is generally recommended. Getting more than 7 hours of sleep per day is essential for maintaining overall health, supporting physical and mental functions, and enhancing quality of life.",
              list: [
                "Go to bed and wake up at the same time every day, even on weekends, to regulate your body's internal clock.",
                "Engage in calming activities before bed, such as reading, taking a warm bath.",
                "Ensure your bedroom is cool, quiet, and dark.",
                "Reduce screen time from TVs, computers, and smartphones at least an hour before bed."
              ],
              conditionText: "have issues with sleep",
              products: [
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is difficulty sleeping. If you’re having difficulty sleeping therefore, or any of the symptoms listed here, you may want to take the Allvex self-test kit." },
                { gender: "female", name: "Menopause", link: "/products/menopause", desc: "Difficulty sleeping can be one of the first symptoms of the onset of menopause. This affects all women at some stage in their lives, usually in their 40s or 50s. If you’re having difficulty sleeping therefore, or any of the symptoms listed here, you may want to take the Allvex self-test kit." }
              ]
            }
          }
        ]
      },
      {
        id: "step-4",
        questions: [
          {
            id: "alcohol",
            text: "How much alcohol do you drink in an average week?",
            stepLabel: "Step 4/6",
            type: "radio",
            options: [
              { label: "More than 14 units per week", value: "more14", score: 0, isRedFlag: true },
              { label: "Less than 14 units per week", value: "less14", score: 5, isRedFlag: true },
              { label: "Not regularly but I do binge when I do drink", value: "binge", score: 0, isRedFlag: true },
              { label: "I don't drink alcohol", value: "none", score: 20 }
            ],
            recommendation: {
              intro: "Alcohol is a common part of many of our lives. In the UK, the maximum recommended alcohol intake is 14 units a week, spread across 3 days or more. Reducing your alcohol intake or stopping entirely can help you lose weight, boost your energy levels, and improve your overall wellbeing.",
              list: [
                "Replace alcoholic drinks with alcohol-free options.",
                "Choose to drink only with meals.",
                "Plan social events that don't involve alcohol."
              ],
              conditionText: "drink alcohol",
              products: [
                { gender: "male", name: "Male fertility test", link: "/products/male-fertility", desc: "Alcohol can impact on male fertility, including sperm volume, mobility, and viability. If you drink alcohol therefore and are planning to/ in the process of trying to conceive now, this test may be beneficial." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with alcohol consumption, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may want to take the Allvex bowel health test, particularly if you have the symptoms listed here." }
              ]
            }
          }
        ]
      },
      {
        id: "step-5",
        questions: [
          {
            id: "muscle-strength",
            text: "Muscle strengthening exercises:",
            stepLabel: "Step 5/6",
            type: "radio",
            options: [
              { label: "1 day a week or less", value: "1day", score: 5, isRedFlag: true },
              { label: "At least 2 days a week", value: "2day", score: 10 }
            ],
            recommendation: {
              intro: "Physical activity is incredibly beneficial for both physical and mental health, making it one of the most important things you can do for your wellbeing. Even if you currently lead a very sedentary lifestyle, any increase in physical activity is beneficial and better than none.",
              list: [
                "Aim for 150-300 mins moderate exercise OR 75-150 mins vigorous exercise.",
                "Do muscle-strengthening exercises at least 2 days a week.",
                "Spread activity throughout the week."
              ],
              conditionText: "are not doing enough physical activity",
              products: [
                { gender: "all", name: "Vitamin D", link: "/products/vitamin-d", desc: "Vitamin D is a vital part of our overall health. However, many adults across Europe have low Vitamin D levels and there are studies showing that regular exercise is associated with higher levels of Vitamin D. You may therefore want to take the Allvex Vitamin D test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Increased levels of physical activity have a protective effect against bowel cancer and polyps. You may therefore want to take the Allvex bowel health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Iron", link: "/products/iron", desc: "Iron is important to help us carry oxygen around the blood and symptoms can include tiredness, shortness of breath and dizziness. If you feel that fatigue may be influencing the amount of exercise you are doing, particularly if you have the symptoms listed here, you may want to take the Allvex Iron test." },
                { gender: "male", name: "Male fertility test", link: "/products/male-fertility", desc: "Lack of physical activity and a sedentary lifestyle can have an impact on male fertility, reducing the likelihood of conceiving. If your exercise levels are not at the recommended levels and you are planning to/ in the process of trying to conceive now, this test may be beneficial." },
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is fatigue. If you’re fatigued therefore and this is affecting your ability to exercise, or you have any of the symptoms listed here, you may want to take the Allvex self-test kit." }
              ]
            }
          },
          {
            id: "vigorous-activity",
            text: "Vigorous intensity physical activity:",
            stepLabel: "Step 5/6",
            type: "radio",
            options: [
              { label: "Less than 75 min vigorous / 150 min moderate", value: "low", score: 0, isRedFlag: true },
              { label: "75-150 min vigorous / 150-300 min moderate", value: "mid", score: 5, isRedFlag: true },
              { label: "More than 150 min vigorous / 300 min moderate", value: "high", score: 10 }
            ]
          }
        ]
      },
      {
        id: "step-6",
        questions: [
          {
            id: "bmi",
            text: "What is your BMI?",
            stepLabel: "Step 6/6",
            type: "radio",
            options: [
              { label: "BMI < 18.5", value: "under", score: 5, isRedFlag: true },
              { label: "BMI 18.5-24.9", value: "normal", score: 20 },
              { label: "BMI 25-29.9", value: "over", score: 5, isRedFlag: true },
              { label: "BMI > 30", value: "obese", score: 5, isRedFlag: true },
              { label: "BMI > 40", value: "morbid", score: 0, isRedFlag: true }
            ],
            recommendation: {
              intro: "Body mass index (BMI) is a tool to assess weight when related to height. While it does not accurately cover everyone, for example those with large muscle mass, it does provide an indication for recommended weight. A normal BMI is within the 18.5-24.9 range. Unfortunately, being overweight or obese increases health risks across the board, including diabetes, heart disease, stroke, cancers, and depression.",
              list: [
                "Burn more calories than you consume. Aim to reduce by an average of 600 calories per day to begin with.",
                "Try to maintain a healthy balanced diet, cutting back on foods high in fat and sugar.",
                "Exercise is vital. Try to engage in moderate physical activity for at least 150 minutes a week, spread throughout."
              ],
              conditionText: "are overweight",
              products: [
                { gender: "male", name: "Male fertility test", link: "/products/male-fertility", desc: "Being either overweight or underweight can impact on male fertility, reducing the likelihood of conceiving. If your BMI is therefore above or below the recommended levels and you are planning to/ in the process of trying to conceive now, this test may be beneficial." },
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is weight gain. If your BMI indicates that you are overweight or obese therefore, or if you have any of the symptoms listed here, you may want to take the Allvex self-test kit." },
                { gender: "female", name: "Menopause", link: "/products/menopause", desc: "Weight gain can be one of the first symptoms of the onset of menopause. This affects all women at some stage in their lives, usually in their 40s or 50s. If you’re gaining weight therefore or have any of the symptoms listed here, and fit within this age range, you may want to take the Allvex self-test kit." },
                { gender: "all", name: "Stomach health", link: "/products/stomach-health", desc: "H pylori is a bacterium that infects our stomach and affects up to half of the world’s population. There is evidence that patients with an increase BMI are at higher risk of H pylori. You may therefore want to take the Allvex stomach health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with increased BMI, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may therefore want to take the Allvex bowel health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Iron", link: "/products/iron", desc: "An increased BMI is linked with reduced levels of iron in the blood. Iron is important to help us carry oxygen around the blood. Symptoms can include tiredness, shortness of breath and dizziness. You may therefore want to take the Allvex Iron test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Urine infection", link: "/products/uti", desc: "An increased BMI is linked with risk of urine infections. Urine infections generally come with symptoms such as increased frequency or stinging of urination. You may therefore want to take the Allvex Urine infection test, if you have the symptoms listed here." },
                { gender: "all", name: "Vitamin D", link: "/products/vitamin-d", desc: "Vitamin D is a vital part of our overall health, helping maintain healthy bones, teeth, and immune systems. However, many adults across Europe have low Vitamin D levels and there are studies showing that people with raised BMI are more likely to have low Vitamin D levels. People often have no symptoms but there are ways to increase your levels, including dietary changes and supplements. You may therefore want to take the Allvex Vitamin D test, particularly if you have the symptoms listed here." }
              ]
            }
          }
        ]
      }
    ]
  },
  "bmi-calculator": {
    id: "bmi-calculator",
    title: "What is my Body mass index (BMI)?",
    subtitle: "BMI CALCULATOR",
    isCalculator: true, // BU ÖNEMLİ: Bu bir quiz değil, hesap makinesi.

    // Açıklama metni (Başlık altında)
    description: (
      <>
        <p>The BMI is calculated by dividing an adult's weight in kilograms by their height in metres squared.</p>
        <p className="mt-2">For example, if you weigh 70kg and are 1.73m tall:</p>
        <ul className="list-decimal pl-5 mt-2 space-y-1">
          <li>squaring your height: 1.73 x 1.73 = 2.99</li>
          <li>dividing weight: 70 ÷ 2.99 = 23.41</li>
        </ul>
      </>
    ),

    steps: [
      {
        id: "step-1",
        questions: [
          {
            id: "age-check",
            text: "Are you aged 18 or over?",
            type: "radio", // Önce yaş kontrolü (Radio)
            options: [
              { label: "Yes, I am 18 or over", value: "yes" },
              { label: "No", value: "no", isStop: true } // "No" derse durdur veya uyarı ver
            ],
            footerText: "This tool will only give accurate BMI results for adults aged 18 years and over."
          }
        ]
      },
      {
        id: "step-2",
        questions: [
          {
            id: "weight",
            text: "What is your weight (Kilograms)?",
            type: "input", // YENİ TİP: INPUT
            inputType: "number",
            placeholder: "90",
            suffix: "kg",
            helperText: "For example: 75"
          },
          {
            id: "height",
            text: "What is your height (m)?",
            type: "input",
            inputType: "number",
            placeholder: "1.8",
            suffix: "meter",
            helperText: "For example: 1.8"
          }
        ]
      }
    ],

    // BMI Sonuç Aralıkları
    results: {
      underweight: { label: "Underweight", range: "BMI < 18.5", color: "#3b82f6", rotation: -45 }, // Mavi
      healthy: { label: "Healthy Weight", range: "BMI 18.5 to 24.9", color: "#22c55e", rotation: 0 }, // Yeşil
      overweight: { label: "Overweight", range: "BMI 25 to 29.9", color: "#eab308", rotation: 45 }, // Sarı
      obese: { label: "Obese", range: "BMI 30 to 39.9", color: "#f97316", rotation: 90 }, // Turuncu
      morbid: { label: "Severely Obese", range: "BMI > 40", color: "#ef4444", rotation: 135 } // Kırmızı
    }
  },
};

export const quizList = [
  { id: "vitamin-d-checker",      label: "VITAMIN D DEFICIENCY" },
  { id: "iron-deficiency-checker", label: "IRON DEFICIENCY" },
  { id: "uti-checker",            label: "URINARY TRACT INFECTION" },
  { id: "male-fertility-checker", label: "MALE FERTILITY" },
];
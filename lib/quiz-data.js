// lib/quiz-data.js

export const quizzes = {
  // ... (vitamin-d and iron-deficiency remain unchanged) ...
  "vitamin-d-checker": {
    id: "vitamin-d-checker",
    title: "Could I have low Vitamin D?",
    subtitle: "VITAMIN D DEFICIENCY CONDITION CHECKER",
    totalPossibleScore: 9,
    totalPossibleFlags: 5,
    resultTexts: {
      productName: "Silex Vitamin D Deficiency",
      productLink: "/products/vitamin-d",
      productBtnText: "SILEX® VITAMIN D DEFICIENCY SELF-TEST",
      commonInfo: (
        <>
          <p>Vitamin D is important for our overall health, being used to influence the levels of calcium and phosphate in our bodies. These are all vital for bone, teeth and muscle health.</p>
          <p className="mt-2">Unfortunately, up to 4 in 10 adults across Europe may have low levels of Vitamin D.</p>
          <p className="mt-2">When levels are low, there is an increased risk of bony pains, fatigue and cramps. Many people however have no symptoms and doctors will often not check VItamin D levels so it is important to check your levels and increase your intake of vitamin D if low.</p>
          <p className="mt-2">If you would like to find out more information, please click <a href="#" className="underline font-bold">here</a>, where we have more information on Vitamin D deficiency, how you can increase your intake and more resources on improving your general health.</p>
        </>
      ),
      redFlagIntro: "Your answers indicate that you may have low Vitamin D. You can check for this using the Silex Vitamin D deficiency self-test kit.",
      redFlagWarning: "You should also discuss this symptom with your GP as soon as you can, as it may need further investigation.",
      positiveIntro: "Your answers indicate that you may have low Vitamin D levels. You can check for this using the Silex Vitamin D deficiency self-test kit.",
      positiveWarning: "If you are generally concerned about any of your symptoms or your vitamin D levels are normal on this test, we would advise speaking with your GP.",
      negativeIntro: "Your answers indicate that you do not have symptoms of Vitamin D Deficiency. Many people however have no symptoms with low Vitamin D and doctors will often not check Vitamin D so it is important to check your levels and increase your intake if low. You may therefore want to use the Silex Vitamin D Deficiency self-test kit to check."
    },
    steps: [
      {
        id: "step-1",
        questions: [
          { id: "gender", text: "Choose your gender:", stepLabel: "Step 1/7", type: "radio", options: [{ label: "Male", value: "male", score: 0 }, { label: "Female", value: "female", score: 0 }] }
        ]
      },
      {
        id: "step-2",
        questions: [
          { id: "tired", text: "2. Are you always tired?", stepLabel: "Step 2/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-3",
        questions: [
          { id: "muscles-weak", text: "3. Do you feel your muscles are weak?", stepLabel: "Step 3/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-4",
        questions: [
          { id: "bony-pain", text: "4a. Do you get bony pain?", stepLabel: "Step 4/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] },
          { id: "age-check", text: "4b. Are you >60 years of age?", stepLabel: "Step 4/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 0 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-5",
        questions: [
          { id: "pins-needles", text: "5. Do you have pins and needles in your arms or legs?", stepLabel: "Step 5/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-6",
        questions: [
          { id: "cramps", text: "6. Do you get pains or cramps in your muscles?", stepLabel: "Step 6/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-7",
        questions: [
          { id: "recurrent-infections", text: "7. Do you get recurrent infections?", stepLabel: "Step 7/7", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      }
    ]
  },
  "iron-deficiency-checker": {
    id: "iron-deficiency-checker",
    title: "Could I have Iron Deficiency?",
    subtitle: "IRON DEFICIENCY CONDITION CHECKER",
    totalPossibleScore: 9,
    totalPossibleFlags: 5,
    resultTexts: {
      productName: "Silex Iron Deficiency",
      productLink: "/products/iron-deficiency",
      productBtnText: "SILEX® IRON DEFICIENCY SELF-TEST",
      commonInfo: (
        <>
          <p>Iron is important for producing red blood cells, which are the cells which store and carry Oxygen in our blood. Low levels of Iron mean that your body is not carrying around as much Oxygen as it needs.</p>
          <p className="mt-2">This can lead to symptoms such as tiredness, dizziness and shortness of breath.</p>
          <p className="mt-2">Risk factors include a vegetarian diet, heavy menstrual periods or conditions like coeliac disease.</p>
          <p className="mt-2">If your iron levels are low, you can make changes to your diet to improve this or take supplements. You should also speak with your GP as you will need further investigations into why your iron is low.</p>
          <p className="mt-2">If you would like to find out more information, please click <a href="#" className="underline font-bold">here</a>, where we have more information on Iron deficiency, how you can increase your intake and more on improving your general health.</p>
        </>
      ),
      redFlagIntro: "Your answers indicate that you may have low iron levels. You can check for this using the Silex Iron deficiency self-test kit.",
      redFlagWarning: "You should also discuss this symptom with your GP as soon as you can, as it may need further investigation.",
      positiveIntro: "Your answers indicate that you may have low iron levels. You can check for this using the Silex Iron deficiency self-test kit.",
      positiveWarning: "If you are generally concerned about any of your symptoms or your iron levels are normal on this test, we would advise speaking with your GP.",
      negativeIntro: "Your answers indicate that you do not have the more common symptoms of low Iron levels. Many people however have no symptoms with low Iron so you may therefore want to use the Silex Iron Deficiency self-test kit to check."
    },
    steps: [
      {
        id: "step-1",
        questions: [
          { id: "gender", text: "Choose your gender:", stepLabel: "Step 1/10", type: "radio", options: [{ label: "Male", value: "male", score: 0 }, { label: "Female", value: "female", score: 0 }] }
        ]
      },
      {
        id: "step-2",
        condition: { questionId: "gender", expectedValue: "female" },
        questions: [
          { id: "heavy-periods", text: "Do you have heavy periods?", stepLabel: "Step 2/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-3",
        questions: [
          { id: "always-tired", text: "Are you always tired?", stepLabel: "Step 3/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-4",
        questions: [
          { id: "short-breath", text: "Are you feeling short of breath?", stepLabel: "Step 4/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-5",
        questions: [
          { id: "skin-paler", text: "Is your skin paler than usual?", stepLabel: "Step 5/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-6",
        questions: [
          { id: "dizzy", text: "Are you feeling dizzy, especially on standing?", stepLabel: "Step 6/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-7",
        questions: [
          { id: "irregular-heart", text: "Are you getting irregular heart beats?", stepLabel: "Step 7/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-8",
        questions: [
          { id: "gen-weak", text: "Are you feeling generally weak?", stepLabel: "Step 8/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-9",
        questions: [
          { id: "chest-pain", text: "Do you get chest pains?", stepLabel: "Step 9/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1, isRedFlag: true }, { label: "No", value: "no", score: 0 }] }
        ]
      },
      {
        id: "step-10",
        questions: [
          { id: "headaches", text: "Do you get headaches?", stepLabel: "Step 10/10", type: "yes-no", options: [{ label: "Yes", value: "yes", score: 1 }, { label: "No", value: "no", score: 0 }] }
        ]
      }
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
        message: "Your Silex® Health Index has shown a low result, indicating that significant changes are needed to improve your health. Based on your responses, we recommend considering the following:",
        color: "bg-red-500",
        borderColor: "#ef4444"
      },
      medium: {
        title: "Medium Result",
        message: "Your Silex® Health Index has shown a medium result, indicating that there is room for improvement in your health. Making adjustments to your daily routine could help you feel better and enhance your overall health and wellbeing. Based on your answers, we would recommend considering the following:",
        color: "bg-yellow-500",
        borderColor: "#eab308"
      },
      high: {
        title: "High Result",
        message: "Your Silex® Health Index indicates a generally good result. However, some responses have raised red flags, suggesting areas where there is room for improvement in your health. Based on your answers, we would recommend considering the following:",
        color: "bg-green-500",
        borderColor: "#22c55e"
      },
      perfect: {
        title: "Perfect Result",
        message: "Your Silex® Health Index has shown positive results overall, indicating that your health, based on your answers, is in good condition.",
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
                { gender: "all", name: "Stomach health", link: "/products/stomach-health", desc: "H pylori is a bacterium that infects our stomach and affects up to half of the world’s population. H pylori treatment is less likely to work and the infection more likely to cause stomach cancer if you are still smoking. It is therefore even more important to make sure that it is treated if you have it. You may want to take the Silex stomach health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with number of cigarettes smoked, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may want to take the Silex bowel health test, particularly if you have the symptoms listed here." }
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
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is difficulty sleeping. If you’re having difficulty sleeping therefore, or any of the symptoms listed here, you may want to take the Silex self-test kit." },
                { gender: "female", name: "Menopause", link: "/products/menopause", desc: "Difficulty sleeping can be one of the first symptoms of the onset of menopause. This affects all women at some stage in their lives, usually in their 40s or 50s. If you’re having difficulty sleeping therefore, or any of the symptoms listed here, you may want to take the Silex self-test kit." }
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
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with alcohol consumption, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may want to take the Silex bowel health test, particularly if you have the symptoms listed here." }
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
                { gender: "all", name: "Vitamin D", link: "/products/vitamin-d", desc: "Vitamin D is a vital part of our overall health. However, many adults across Europe have low Vitamin D levels and there are studies showing that regular exercise is associated with higher levels of Vitamin D. You may therefore want to take the Silex Vitamin D test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Increased levels of physical activity have a protective effect against bowel cancer and polyps. You may therefore want to take the Silex bowel health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Iron", link: "/products/iron", desc: "Iron is important to help us carry oxygen around the blood and symptoms can include tiredness, shortness of breath and dizziness. If you feel that fatigue may be influencing the amount of exercise you are doing, particularly if you have the symptoms listed here, you may want to take the Silex Iron test." },
                { gender: "male", name: "Male fertility test", link: "/products/male-fertility", desc: "Lack of physical activity and a sedentary lifestyle can have an impact on male fertility, reducing the likelihood of conceiving. If your exercise levels are not at the recommended levels and you are planning to/ in the process of trying to conceive now, this test may be beneficial." },
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is fatigue. If you’re fatigued therefore and this is affecting your ability to exercise, or you have any of the symptoms listed here, you may want to take the Silex self-test kit." }
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
                { gender: "all", name: "Underactive Thyroid", link: "/products/thyroid", desc: "The thyroid gland produces thyroxine, a hormone which helps control functions throughout the body. One of the common symptoms found in people with underactive thyroid is weight gain. If your BMI indicates that you are overweight or obese therefore, or if you have any of the symptoms listed here, you may want to take the Silex self-test kit." },
                { gender: "female", name: "Menopause", link: "/products/menopause", desc: "Weight gain can be one of the first symptoms of the onset of menopause. This affects all women at some stage in their lives, usually in their 40s or 50s. If you’re gaining weight therefore or have any of the symptoms listed here, and fit within this age range, you may want to take the Silex self-test kit." },
                { gender: "all", name: "Stomach health", link: "/products/stomach-health", desc: "H pylori is a bacterium that infects our stomach and affects up to half of the world’s population. There is evidence that patients with an increase BMI are at higher risk of H pylori. You may therefore want to take the Silex stomach health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Bowel health", link: "/products/bowel-health", desc: "Bowel cancer risk increases with increased BMI, as does risk of polyps (non-cancer growths in the bowel which can turn into cancer). You may therefore want to take the Silex bowel health test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Iron", link: "/products/iron", desc: "An increased BMI is linked with reduced levels of iron in the blood. Iron is important to help us carry oxygen around the blood. Symptoms can include tiredness, shortness of breath and dizziness. You may therefore want to take the Silex Iron test, particularly if you have the symptoms listed here." },
                { gender: "all", name: "Urine infection", link: "/products/uti", desc: "An increased BMI is linked with risk of urine infections. Urine infections generally come with symptoms such as increased frequency or stinging of urination. You may therefore want to take the Silex Urine infection test, if you have the symptoms listed here." },
                { gender: "all", name: "Vitamin D", link: "/products/vitamin-d", desc: "Vitamin D is a vital part of our overall health, helping maintain healthy bones, teeth, and immune systems. However, many adults across Europe have low Vitamin D levels and there are studies showing that people with raised BMI are more likely to have low Vitamin D levels. People often have no symptoms but there are ways to increase your levels, including dietary changes and supplements. You may therefore want to take the Silex Vitamin D test, particularly if you have the symptoms listed here." }
              ]
            }
          }
        ]
      }
    ]
  },
  "bmi-checker": {
    id: "bmi-checker",
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
  { id: "vitamin-d-checker", label: "VITAMIN D DEFICIENCY" },
  { id: "iron-deficiency-checker", label: "IRON DEFICIENCY" },
  { id: "thyroid-checker", label: "HYPOTHYROIDISM" },
  { id: "pylori-checker", label: "H. PYLORI RISK" },
  { id: "menopause-checker", label: "MENOPAUSE" },
  { id: "bacterial-vaginosis-checker", label: "BACTERIAL VAGINOSIS" },
  { id: "bowel-cancer-checker", label: "BOWEL CANCER RISK" },
  { id: "uti-checker", label: "URINARY TRACT INFECTION" },
  { id: "diabetes-checker", label: "DIABETES RISK" },
  { id: "male-infertility-checker", label: "MALE INFERTILITY" },
  { id: "general-health-checker", label: "GENERAL HEALTH INDEX" },
  { id: "bmi-checker", label: "BMI Calculator" },
];
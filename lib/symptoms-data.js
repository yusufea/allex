// lib/symptoms-data.js

export const symptomsData = {
  steps: [
    {
      id: 1,
      titleKey: "symptoms.step1_title",
      type: "single",
      options: [
        { labelKey: "symptoms.options.male", value: "male" },
        { labelKey: "symptoms.options.female", value: "female" },
        { labelKey: "symptoms.options.prefer_not", value: "other" }
      ]
    },
    {
      id: 2,
      titleKey: "symptoms.step2_title",
      type: "multi",
      options: [
        { labelKey: "symptoms.options.low_libido", value: "lowLibido", triggers: ["thyroid", "iron"] },
        { labelKey: "symptoms.options.weight_gain", value: "weightGain", triggers: ["thyroid"] },
        { labelKey: "symptoms.options.mood_change", value: "changeInMood", triggers: ["thyroid", "vitamin-d"] },
        { labelKey: "symptoms.options.tiredness", value: "tiredness", triggers: ["iron", "vitamin-d", "thyroid"] },
        { labelKey: "symptoms.options.palpitations", value: "palpitations", type: "female", triggers: ["menopause", "thyroid"] },
        { labelKey: "symptoms.options.muscle_aches", value: "musclesAches", triggers: ["vitamin-d", "iron"] },
        { labelKey: "symptoms.options.none", value: "none", isNone: true }
      ]
    },
    {
      id: 3,
      titleKey: "symptoms.step3_title",
      type: "multi",
      options: [
        { labelKey: "symptoms.options.irregular_periods", value: "irregularPeriods", type: "female", triggers: ["menopause"] },
        { labelKey: "symptoms.options.poor_fertility", value: "poorFertility", triggers: ["male-fertility", "menopause"] },
        { labelKey: "symptoms.options.dysuria", value: "dysuria", type: "female", triggers: ["uti", "vaginal-infection"] },
        { labelKey: "symptoms.options.bloating", value: "bloating", type: "female", triggers: ["bowel", "vaginal-infection"] },
        { labelKey: "symptoms.options.weight_loss", value: "unexpectedWeightLoss", triggers: ["bowel", "stomach"] },
        { labelKey: "symptoms.options.indigestion", value: "indigestion", triggers: ["stomach"] },
        { labelKey: "symptoms.options.male_complex", value: "maleComplex", type: "male", triggers: ["uti", "stomach"] },
        { labelKey: "symptoms.options.none", value: "none", isNone: true }
      ]
    },
    {
      id: 4,
      titleKey: "symptoms.step4_title",
      type: "multi",
      options: [
        { labelKey: "symptoms.options.foul_urine", value: "foulUrine", type: "female", triggers: ["uti"] },
        { labelKey: "symptoms.options.memory", value: "memory", triggers: ["thyroid", "vitamin-d"] },
        { labelKey: "symptoms.options.general_aches", value: "generalAches", triggers: ["vitamin-d", "iron"] },
        { labelKey: "symptoms.options.heartburn", value: "heartburn", triggers: ["stomach"] },
        { labelKey: "symptoms.options.vaginal_discomfort", value: "vaginalDiscomfort", type: "female", triggers: ["vaginal-infection"] },
        { labelKey: "symptoms.options.anxiety", value: "anxiety", triggers: ["thyroid"] },
        { labelKey: "symptoms.options.none", value: "none", isNone: true }
      ]
    }
  ],

  tests: {
    "vitamin-d":       { titleKey: "symptoms.tests.vitamin_d",    link: "/self-tests/vitamin-d",          color: "bg-yellow-400" },
    "iron":            { titleKey: "symptoms.tests.iron",          link: "/self-tests/iron-deficiency",    color: "bg-red-500" },
    "thyroid":         { titleKey: "symptoms.tests.thyroid",       link: "/self-tests/under-active-thyroid", color: "bg-purple-600" },
    "menopause":       { titleKey: "symptoms.tests.menopause",     link: "/self-tests/menopause",          color: "bg-pink-500" },
    "uti":             { titleKey: "symptoms.tests.uti",           link: "/self-tests/uti",                color: "bg-green-500" },
    "male-fertility":  { titleKey: "symptoms.tests.male_fertility",link: "/self-tests/male-fertility",     color: "bg-blue-600" },
    "bowel":           { titleKey: "symptoms.tests.bowel",         link: "/self-tests/bowel-health",       color: "bg-emerald-600" },
    "stomach":         { titleKey: "symptoms.tests.stomach",       link: "/self-tests/stomach-health",     color: "bg-cyan-500" },
    "vaginal-infection":{ titleKey: "symptoms.tests.vaginal",      link: "/self-tests/vaginal-infection",  color: "bg-rose-400" },
  }
};

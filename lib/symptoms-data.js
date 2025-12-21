// lib/symptoms-data.js

export const symptomsData = {
  title: "Check Symptoms",
  subtitle: "and get recommendation for your self-testing.",
  
  steps: [
    {
      id: 1,
      title: "Choose your gender:",
      type: "single", // Tekli seçim
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Prefer not to answer", value: "other" }
      ]
    },
    {
      id: 2,
      title: "Do you have any of these symptoms?",
      type: "multi", // Çoklu seçim
      options: [
        { label: "Low libido", value: "lowLidido", triggers: ["testosterone", "thyroid"] },
        { label: "Weight gain", value: "weightGain", triggers: ["thyroid", "diabetes"] },
        { label: "Change in mood / low mood", value: "changeInMood", triggers: ["thyroid", "vitamin-d"] },
        { label: "Tiredness", value: "tiredness", triggers: ["iron", "vitamin-d", "thyroid"] },
        { label: "Palpitations", value: "palpitations", type: "female", triggers: ["menopause", "thyroid"] },
        { label: "Muscles aches and joint pains", value: "musclesAches", triggers: ["vitamin-d"] },
        { label: "None of the above", value: "none", isNone: true }
      ]
    },
    {
      id: 3,
      title: "Do you have any of these symptoms?",
      type: "multi",
      options: [
        { label: "Irregular periods/ no periods", value: "irregularPeriods", type: "female", triggers: ["menopause", "pcos"] },
        { label: "Poor fertility", value: "poorFertility", triggers: ["male-fertility", "female-fertility"] }, // Cinsiyete göre ayrışacak
        { label: "Pain/stinging when peeing", value: "dysuria", type: "female", triggers: ["uti", "bacterial-vaginosis"] },
        { label: "Bloating", value: "bloating", type: "female", triggers: ["ovarian", "bowel"] },
        { label: "Unexpected weight loss", value: "weightLoss", triggers: ["bowel", "diabetes"] },
        { label: "Indigestion", value: "indigestion", triggers: ["h-pylori"] },
        { label: "Palpitations, bloating and foul smelling urine", value: "maleComplex", type: "male", triggers: ["uti", "prostate"] },
        { label: "None of the above", value: "none", isNone: true }
      ]
    },
    {
      id: 4,
      title: "Do you have any of these symptoms?",
      type: "multi",
      options: [
        { label: "Foul smelling urine", value: "foulUrine", type: "female", triggers: ["uti"] },
        { label: "Memory problems", value: "memory", triggers: ["thyroid", "vitamin-b12"] },
        { label: "General aches", value: "aches", triggers: ["vitamin-d", "flu"] },
        { label: "Heartburn", value: "heartburn", triggers: ["h-pylori"] },
        { label: "Vaginal discomfort", value: "vaginalDiscomfort", type: "female", triggers: ["bacterial-vaginosis", "thrush"] },
        { label: "Anxiety", value: "anxiety", triggers: ["thyroid"] },
        { label: "None of the above", value: "none", isNone: true }
      ]
    }
  ],

  // Sonuçta önerilecek testlerin listesi
  tests: {
    "vitamin-d": { title: "VITAMIN D SELF-TEST", link: "/products/vitamin-d", color: "bg-yellow-400" },
    "iron": { title: "IRON DEFICIENCY SELF-TEST", link: "/products/iron-deficiency", color: "bg-red-400" },
    "thyroid": { title: "UNDER-ACTIVE THYROID SELF-TEST", link: "/products/thyroid", color: "bg-purple-600" },
    "menopause": { title: "MENOPAUSE SELF-TEST", link: "/products/menopause", color: "bg-purple-400" },
    "uti": { title: "URINARY TRACT INFECTION (UTI)", link: "/products/uti", color: "bg-green-400" },
    "male-fertility": { title: "MALE FERTILITY", link: "/products/male-fertility", color: "bg-blue-600" },
    "bowel": { title: "BOWEL HEALTH", link: "/products/bowel-health", color: "bg-green-600" },
    "h-pylori": { title: "STOMACH HEALTH (H. PYLORI)", link: "/products/stomach-health", color: "bg-cyan-500" },
    "bacterial-vaginosis": { title: "VAGINAL INFECTION", link: "/products/vaginal-infection", color: "bg-pink-400" },
    // ... diğerleri
  }
};
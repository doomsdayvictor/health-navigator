import { Stethoscope, Activity, Shield, Moon, Heart, Droplets } from "lucide-react";

export interface Treatment {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  details: string;
  benefits: string[];
}

export interface TreatmentCategory {
  slug: string;
  title: string;
  description: string;
  icon: typeof Stethoscope;
  treatments: Treatment[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    slug: "mens-health",
    title: "Men's Wellness",
    description: "Lifestyle and wellness information tailored for men of every age.",
    icon: Stethoscope,
    treatments: [
      {
        slug: "energy-vitality",
        title: "Energy & Vitality",
        category: "Men's Wellness",
        categorySlug: "mens-health",
        description: "Educational guidance to help you understand everyday energy, focus, and overall vitality.",
        details: "Many men experience changes in energy, motivation, and confidence at different life stages. Our wellness team helps you understand the lifestyle, sleep, nutrition, and stress factors that influence how you feel — and points you toward licensed providers when a deeper conversation is the right next step.",
        benefits: ["Lifestyle and habit review", "Sleep and recovery education", "Nutrition awareness", "Connection to qualified providers"],
      },
      {
        slug: "confidence-wellbeing",
        title: "Confidence & Wellbeing",
        category: "Men's Wellness",
        categorySlug: "mens-health",
        description: "A supportive, judgment-free space to talk about wellbeing topics that matter to you.",
        details: "Wellbeing is more than physical — it's how you feel day to day. Our specialists offer a private, educational conversation to help you understand your wellness picture and explore next steps with a licensed professional when appropriate.",
        benefits: ["Confidential conversation", "Holistic wellbeing review", "Educational resources", "Provider referral guidance"],
      },
    ],
  },
  {
    slug: "hormone-support",
    title: "Hormonal Balance Education",
    description: "Understand how hormonal health influences mood, energy, and overall wellness.",
    icon: Activity,
    treatments: [
      {
        slug: "hormonal-wellness",
        title: "Hormonal Wellness Education",
        category: "Hormonal Balance Education",
        categorySlug: "hormone-support",
        description: "Learn how hormonal health connects to everyday wellbeing.",
        details: "Hormonal balance plays a role in sleep, energy, mood, and recovery. Our team provides plain-language education about how hormonal health works and helps you prepare an informed conversation with a licensed healthcare provider.",
        benefits: ["Plain-language education", "Personalized wellness questions", "What-to-ask-your-doctor checklist", "Connection to qualified providers"],
      },
      {
        slug: "balance-lifestyle",
        title: "Lifestyle for Hormonal Balance",
        category: "Hormonal Balance Education",
        categorySlug: "hormone-support",
        description: "Lifestyle, nutrition, and movement habits that support hormonal wellness.",
        details: "Daily routines have a meaningful impact on hormonal wellbeing. We share educational content on movement, nutrition, sleep, and stress so you can build sustainable habits — always alongside guidance from a licensed provider.",
        benefits: ["Habit-building guidance", "Nutrition awareness", "Sleep and stress education", "Sustainable wellness routines"],
      },
    ],
  },
  {
    slug: "immune-recovery",
    title: "Immune & Recovery Wellness",
    description: "Educational guidance on supporting your body's natural recovery and resilience.",
    icon: Shield,
    treatments: [
      {
        slug: "immune-education",
        title: "Immune Wellness Education",
        category: "Immune & Recovery Wellness",
        categorySlug: "immune-recovery",
        description: "Understand habits that support a resilient, well-functioning body.",
        details: "Resilience comes from consistent, simple habits. Our team shares educational content about sleep, hydration, nutrition, and stress so you can support your body day to day — and points you to a licensed provider whenever clinical care is appropriate.",
        benefits: ["Daily habit education", "Recovery and rest awareness", "Nutrition fundamentals", "Provider connection guidance"],
      },
    ],
  },
  {
    slug: "sleep-wellness",
    title: "Sleep & Mind Wellness",
    description: "Guidance for better sleep, focus, and mental clarity.",
    icon: Moon,
    treatments: [
      {
        slug: "sleep-quality",
        title: "Sleep Quality Education",
        category: "Sleep & Mind Wellness",
        categorySlug: "sleep-wellness",
        description: "Practical, evidence-informed habits for better sleep.",
        details: "Quality sleep shapes nearly every aspect of how you feel. We share educational content on sleep environment, evening routines, and lifestyle factors that influence rest — and help you know when it's time to speak with a licensed professional.",
        benefits: ["Sleep routine education", "Environment and habit tips", "Stress and wind-down guidance", "Know-when-to-see-a-pro signals"],
      },
      {
        slug: "focus-clarity",
        title: "Focus & Mental Clarity",
        category: "Sleep & Mind Wellness",
        categorySlug: "sleep-wellness",
        description: "Wellness habits that support concentration, mood, and mental clarity.",
        details: "Focus and clarity are influenced by sleep, movement, nutrition, and stress. Our wellness specialists share educational frameworks to help you understand what supports your best thinking — never as a substitute for clinical care.",
        benefits: ["Focus-supporting routines", "Nutrition and hydration basics", "Stress management education", "When to seek a professional"],
      },
    ],
  },
  {
    slug: "heart-blood",
    title: "Heart & Circulation Wellness",
    description: "Educational content for everyday cardiovascular wellbeing.",
    icon: Heart,
    treatments: [
      {
        slug: "heart-healthy-living",
        title: "Heart-Healthy Living",
        category: "Heart & Circulation Wellness",
        categorySlug: "heart-blood",
        description: "Lifestyle education to support a healthy heart and circulation.",
        details: "Small daily choices add up. Our wellness team shares educational content on movement, nutrition, sleep, and stress that support cardiovascular wellbeing — always recommending a licensed provider for any clinical decisions.",
        benefits: ["Movement and activity education", "Heart-friendly nutrition basics", "Stress awareness", "Provider connection guidance"],
      },
    ],
  },
  {
    slug: "metabolic",
    title: "Metabolic Wellness",
    description: "Education on healthy metabolism, weight, and energy balance.",
    icon: Droplets,
    treatments: [
      {
        slug: "metabolic-balance",
        title: "Metabolic Balance Education",
        category: "Metabolic Wellness",
        categorySlug: "metabolic",
        description: "Understand the everyday habits that support metabolic wellbeing.",
        details: "Metabolic wellness is shaped by sleep, movement, nutrition, and stress. Our team shares clear, educational guidance — and helps you prepare an informed conversation with a licensed healthcare provider when needed.",
        benefits: ["Nutrition fundamentals", "Movement habit education", "Sleep and stress awareness", "Questions to bring to a provider"],
      },
    ],
  },
];

export const getAllTreatments = (): Treatment[] =>
  treatmentCategories.flatMap((cat) => cat.treatments);

export const getTreatmentBySlug = (slug: string): Treatment | undefined =>
  getAllTreatments().find((t) => t.slug === slug);

export const getCategoryBySlug = (slug: string): TreatmentCategory | undefined =>
  treatmentCategories.find((cat) => cat.slug === slug);

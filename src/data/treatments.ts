import { Stethoscope, Activity, Pill, Moon, Heart, Droplets } from "lucide-react";

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
    title: "Men's Health",
    description: "Vitality and wellness solutions tailored for men's unique needs.",
    icon: Stethoscope,
    treatments: [
      {
        slug: "testosterone-support",
        title: "Testosterone Support",
        category: "Men's Health",
        categorySlug: "mens-health",
        description: "Comprehensive support for optimizing testosterone levels naturally and through guided therapy.",
        details: "Our testosterone support program provides personalized guidance for men experiencing low energy, decreased libido, or other symptoms associated with suboptimal testosterone levels. We work with you to explore both natural optimization strategies and, when appropriate, therapeutic interventions under professional supervision.",
        benefits: ["Personalized hormone assessment", "Natural optimization strategies", "Expert-guided therapy options", "Ongoing monitoring and adjustment"],
      },
      {
        slug: "vitality-solutions",
        title: "Vitality Solutions",
        category: "Men's Health",
        categorySlug: "mens-health",
        description: "Reclaim your energy and confidence with our comprehensive vitality programs.",
        details: "Our vitality solutions address the full spectrum of men's wellness — from energy and performance to confidence and overall well-being. Each program is tailored to your individual health profile and goals.",
        benefits: ["Energy optimization", "Performance support", "Lifestyle guidance", "Holistic wellness approach"],
      },
    ],
  },
  {
    slug: "hormone-support",
    title: "Hormone Therapy",
    description: "Balanced hormone therapy options for optimal health outcomes.",
    icon: Activity,
    treatments: [
      {
        slug: "trt-options",
        title: "TRT Options",
        category: "Hormone Therapy",
        categorySlug: "hormone-support",
        description: "Explore testosterone replacement therapy options with expert guidance.",
        details: "Testosterone Replacement Therapy (TRT) can be transformative for men with clinically low testosterone. Our support team helps you understand your options, navigate the process, and access quality care throughout your journey.",
        benefits: ["Clinical assessment support", "Multiple therapy format options", "Dosage optimization guidance", "Regular progress monitoring"],
      },
      {
        slug: "estrogen-therapy",
        title: "Estrogen Therapy Support",
        category: "Hormone Therapy",
        categorySlug: "hormone-support",
        description: "Guidance on estrogen therapy for balanced hormonal health.",
        details: "Proper estrogen balance is crucial for overall health. Our support team provides guidance on estrogen therapy options, helping you work with healthcare providers to achieve optimal hormonal balance.",
        benefits: ["Comprehensive hormone panel guidance", "Therapy option education", "Balance optimization", "Side effect management support"],
      },
    ],
  },
  {
    slug: "infections",
    title: "Infections & Antibiotics",
    description: "Treatment support and guidance for common infections.",
    icon: Pill,
    treatments: [
      {
        slug: "antibiotic-guidance",
        title: "Antibiotic Guidance",
        category: "Infections & Antibiotics",
        categorySlug: "infections",
        description: "Expert guidance on appropriate antibiotic treatment support.",
        details: "Understanding when and how antibiotics should be used is crucial for effective treatment and preventing resistance. Our team provides educational support and helps connect you with qualified healthcare providers for proper assessment.",
        benefits: ["Treatment education", "Resistance awareness", "Provider connection support", "Follow-up care guidance"],
      },
    ],
  },
  {
    slug: "sleep-wellness",
    title: "Sleep & Wellness",
    description: "Improve your sleep quality and cognitive wellness.",
    icon: Moon,
    treatments: [
      {
        slug: "sleep-support",
        title: "Sleep Support",
        category: "Sleep & Wellness",
        categorySlug: "sleep-wellness",
        description: "Comprehensive support for better sleep quality and duration.",
        details: "Quality sleep is foundational to health. Our sleep support program addresses the root causes of sleep difficulties, from lifestyle factors to potential underlying conditions, providing you with actionable strategies and treatment support options.",
        benefits: ["Sleep pattern analysis", "Lifestyle optimization tips", "Treatment option guidance", "Ongoing improvement tracking"],
      },
      {
        slug: "cognitive-wellness",
        title: "Cognitive Wellness",
        category: "Sleep & Wellness",
        categorySlug: "sleep-wellness",
        description: "Enhance focus, memory, and mental clarity with our cognitive wellness support.",
        details: "Mental performance matters. Our cognitive wellness program combines nutritional guidance, lifestyle optimization, and when appropriate, supplementation support to help you perform at your best.",
        benefits: ["Cognitive assessment tools", "Nutrition guidance", "Focus optimization strategies", "Progress tracking"],
      },
    ],
  },
  {
    slug: "heart-blood",
    title: "Heart & Blood Care",
    description: "Cardiovascular and circulatory health support.",
    icon: Heart,
    treatments: [
      {
        slug: "circulation-support",
        title: "Circulation Support",
        category: "Heart & Blood Care",
        categorySlug: "heart-blood",
        description: "Support for healthy circulation and cardiovascular wellness.",
        details: "Good cardiovascular health is essential for overall well-being. Our circulation support program provides guidance on lifestyle changes, nutritional strategies, and treatment support options to help maintain healthy blood flow and heart function.",
        benefits: ["Cardiovascular risk assessment guidance", "Lifestyle modification support", "Nutritional guidance", "Monitoring recommendations"],
      },
    ],
  },
  {
    slug: "diabetes",
    title: "Diabetes Support",
    description: "Blood sugar management and comprehensive diabetes care.",
    icon: Droplets,
    treatments: [
      {
        slug: "blood-sugar-management",
        title: "Blood Sugar Management",
        category: "Diabetes Support",
        categorySlug: "diabetes",
        description: "Comprehensive support for managing blood sugar levels effectively.",
        details: "Managing blood sugar is a daily commitment. Our diabetes support program provides education, lifestyle guidance, and treatment support to help you maintain healthy glucose levels and reduce complications.",
        benefits: ["Blood sugar monitoring guidance", "Dietary planning support", "Medication management education", "Complication prevention strategies"],
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

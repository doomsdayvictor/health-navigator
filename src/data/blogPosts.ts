export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: string;
};

const DISCLAIMER =
  '<p><em>This article is for educational and informational purposes only. We are not a pharmacy or prescriber and do not provide medical diagnosis or treatment. Always consult a qualified healthcare professional before making changes to your health routine.</em></p>';

export const blogPosts: BlogPost[] = [
  {
    slug: "mens-vitality-tips",
    title: "5 Natural Ways to Boost Men's Vitality",
    excerpt:
      "Discover evidence-based lifestyle strategies for improving energy, focus, and overall vitality.",
    category: "Men's Health",
    date: "2026-03-28",
    content: `
      <p>Maintaining peak vitality often starts with simple daily habits. Here are five evidence-based strategies that can naturally support your energy, focus, and overall well-being.</p>
      <h2>1. Optimize Your Sleep</h2>
      <p>Quality sleep is the foundation of vitality. Aim for 7–9 hours of uninterrupted rest each night and keep a consistent schedule, even on weekends.</p>
      <h2>2. Move With Purpose</h2>
      <p>Resistance training and brisk activity a few times a week supports healthy energy levels and mood.</p>
      <h2>3. Manage Stress</h2>
      <p>Chronic stress can drain energy and affect sleep. Build in short daily resets — breathing exercises, walks outside, or quiet reading.</p>
      <h2>4. Eat for Energy</h2>
      <p>Focus on whole foods rich in protein, healthy fats, and colourful produce. Stable blood sugar means steadier energy through the day.</p>
      <h2>5. Stay Hydrated</h2>
      <p>Even mild dehydration can affect focus and energy. Keep water within reach and sip steadily throughout the day.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "sleep-improvement-guide",
    title: "The Ultimate Guide to Better Sleep",
    excerpt:
      "How sleep quality shapes every part of your wellbeing — and steps you can take tonight for better rest.",
    category: "Sleep & Wellness",
    date: "2026-03-25",
    content: `
      <p>Sleep is one of the most powerful tools for whole-body wellness. Here's a practical guide to getting more of it.</p>
      <h2>Why Sleep Matters</h2>
      <p>During sleep your body recovers, consolidates memories, and balances key systems. Consistent rest supports energy, mood, and long-term health.</p>
      <h2>Build Your Sleep Environment</h2>
      <p>Aim for a cool, dark, quiet bedroom. Blackout curtains, a fan or white-noise app, and screens-out-of-the-bedroom can all help.</p>
      <h2>The Power of Routine</h2>
      <p>A wind-down ritual — dim lights, gentle reading, no scrolling — signals your body that sleep is coming.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "hormone-balance-basics",
    title: "Understanding Hormone Balance: What You Need to Know",
    excerpt:
      "Hormones influence mood, energy, and metabolism. Here's a plain-language overview of how they work.",
    category: "Hormone Support",
    date: "2026-03-20",
    content: `
      <p>Hormones are chemical messengers that regulate nearly every process in your body. Understanding the basics is the first step toward informed conversations with a qualified provider.</p>
      <h2>Common Signs to Pay Attention To</h2>
      <p>Unexplained fatigue, mood shifts, sleep changes, or shifts in body composition can sometimes point to hormonal changes worth discussing with a professional.</p>
      <h2>Lifestyle Foundations</h2>
      <p>Sleep, nutrition, movement, and stress management are core supports for healthy hormone function at any age.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "infection-awareness",
    title: "Common Infections: When to Seek Support",
    excerpt: "Knowing when to seek professional guidance can make a meaningful difference in outcomes.",
    category: "Infections & Antibiotics",
    date: "2026-03-15",
    content: `
      <p>Understanding when an infection deserves professional attention can help you act sooner and recover faster.</p>
      <h2>When to Seek Help</h2>
      <p>If symptoms persist beyond a few days, worsen, or come with high fever, severe pain, or breathing difficulty, reach out to a licensed healthcare provider.</p>
      <h2>Be a Smart Patient</h2>
      <p>If a clinician recommends a treatment plan, complete it as prescribed and ask questions whenever something is unclear.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "stress-management-toolkit",
    title: "A Simple Toolkit for Everyday Stress",
    excerpt:
      "Practical, low-effort techniques you can weave into a busy day to feel calmer and more focused.",
    category: "Mind & Mood",
    date: "2026-04-02",
    content: `
      <p>Stress is part of modern life, but small daily habits can change how it lands. Try a few of these and see what fits.</p>
      <h2>Box Breathing</h2>
      <p>Inhale for four counts, hold for four, exhale for four, hold for four. Repeat for two minutes whenever you feel pressure rising.</p>
      <h2>Movement Snacks</h2>
      <p>Five-minute walks between tasks reset your nervous system and improve focus.</p>
      <h2>Digital Boundaries</h2>
      <p>Pick one screen-free hour a day. The mental quiet adds up quickly.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "nutrition-foundations",
    title: "Nutrition Foundations for Long-Term Wellness",
    excerpt: "Forget fads — these simple principles support energy, mood, and metabolic health for the long run.",
    category: "Nutrition",
    date: "2026-04-05",
    content: `
      <p>Healthy eating doesn't need to be complicated. A handful of consistent habits do most of the heavy lifting.</p>
      <h2>Protein at Every Meal</h2>
      <p>Aim for a palm-sized portion of quality protein each meal to support satiety and muscle.</p>
      <h2>Half Your Plate Plants</h2>
      <p>Vegetables and fruit deliver fibre and micronutrients that keep your gut and energy steady.</p>
      <h2>Mindful Hydration</h2>
      <p>Most adults feel sharper with consistent water through the day — keep a bottle visible.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "heart-health-everyday",
    title: "Everyday Habits That Support Heart Health",
    excerpt: "Small, sustainable choices that look after your cardiovascular wellbeing for decades to come.",
    category: "Heart & Blood",
    date: "2026-04-08",
    content: `
      <p>Heart health is built one ordinary day at a time. These habits add up.</p>
      <h2>Move Often</h2>
      <p>Aim for at least 150 minutes of moderate activity each week — walking absolutely counts.</p>
      <h2>Mind Your Plate</h2>
      <p>Lean proteins, fibre-rich plants, and healthy fats from olive oil, nuts, and fish are heart-friendly staples.</p>
      <h2>Know Your Numbers</h2>
      <p>Regular check-ups with a licensed provider help you track blood pressure, cholesterol, and other markers over time.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "metabolic-wellness-basics",
    title: "Understanding Metabolic Wellness",
    excerpt: "What metabolic health actually means and the everyday levers that keep it strong.",
    category: "Diabetes",
    date: "2026-04-12",
    content: `
      <p>Metabolic wellness is about how efficiently your body turns food into energy and manages blood sugar over time.</p>
      <h2>Stable Energy Through the Day</h2>
      <p>Balanced meals with protein, fibre, and healthy fats help avoid blood-sugar swings.</p>
      <h2>Movement After Meals</h2>
      <p>A 10-minute walk after eating can support healthier blood-sugar responses.</p>
      <h2>Sleep Is a Metabolic Tool</h2>
      <p>Poor sleep can shift hunger hormones the next day. Protecting rest is protecting metabolism.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "energy-fatigue-causes",
    title: "Tired All the Time? Common Reasons for Low Energy",
    excerpt: "A look at everyday factors that drain energy — and gentle ways to start feeling brighter.",
    category: "Men's Health",
    date: "2026-04-15",
    content: `
      <p>Fatigue has many roots. Often, several small factors stack up. Here are common ones worth noticing.</p>
      <h2>Sleep Quality (Not Just Quantity)</h2>
      <p>Eight hours of fragmented sleep can feel worse than six solid ones. Track how rested you actually feel.</p>
      <h2>Hydration & Nutrition</h2>
      <p>Skipped meals, low protein, and dehydration are easy energy thieves to fix.</p>
      <h2>When to Seek Guidance</h2>
      <p>If low energy lingers despite lifestyle changes, a conversation with a licensed provider can help rule out underlying causes.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "mens-mental-wellbeing",
    title: "Men's Mental Wellbeing: Starting the Conversation",
    excerpt: "Why opening up matters and simple first steps to look after your mental health.",
    category: "Mind & Mood",
    date: "2026-04-18",
    content: `
      <p>Mental wellbeing is a core part of overall health. Talking about it is one of the strongest things you can do.</p>
      <h2>Notice the Signals</h2>
      <p>Persistent low mood, irritability, or withdrawal from things you used to enjoy are worth paying attention to.</p>
      <h2>Small Steps Help</h2>
      <p>Daylight, movement, sleep, and human connection are powerful baseline supports.</p>
      <h2>Reach Out</h2>
      <p>Speaking with a qualified professional — a GP, counsellor, or helpline — is a sign of strength, not weakness.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "screen-time-eye-wellness",
    title: "Screen Time and Eye Wellness",
    excerpt: "Simple habits to reduce eye strain and protect your vision in a screen-heavy world.",
    category: "Sleep & Wellness",
    date: "2026-04-21",
    content: `
      <p>Most of us spend hours looking at screens. A few small habits can make a real difference for comfort and long-term eye wellness.</p>
      <h2>The 20-20-20 Rule</h2>
      <p>Every 20 minutes, look at something 20 feet away for 20 seconds.</p>
      <h2>Blink and Hydrate</h2>
      <p>We blink less when staring at screens. Conscious blinking and lubricating drops can ease dryness.</p>
      <h2>Light It Right</h2>
      <p>Avoid working in dark rooms with bright screens — match ambient light to reduce strain.</p>
      ${DISCLAIMER}
    `,
  },
  {
    slug: "habits-that-stick",
    title: "How to Build Wellness Habits That Actually Stick",
    excerpt: "A friendly guide to making small changes that last — without burnout or guilt.",
    category: "Mind & Mood",
    date: "2026-04-25",
    content: `
      <p>The best wellness habit is the one you actually keep. Here's how to make change feel doable.</p>
      <h2>Start Smaller Than Feels Useful</h2>
      <p>One push-up. One glass of water. Tiny wins build identity and momentum.</p>
      <h2>Anchor to What You Already Do</h2>
      <p>Stack a new habit on top of an existing one — stretches after brushing teeth, for example.</p>
      <h2>Be Kind to Off Days</h2>
      <p>Missing once is human. Missing twice in a row is the pattern to watch.</p>
      ${DISCLAIMER}
    `,
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
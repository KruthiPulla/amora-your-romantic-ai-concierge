import type { DatePlan } from "@/components/DatePlanResult";
import type { DateIdea } from "@/components/InspireMe";
import type { PlanFormData } from "@/components/PlanForm";

export function generateMockPlan(data: PlanFormData): DatePlan {
  const themeLabels: Record<string, string> = {
    romantic: "Romantic",
    adventurous: "Adventurous",
    foodie: "Foodie",
    chill: "Chill",
    luxury: "Luxury",
    surprise: "Surprise",
  };

  return {
    title: `A ${themeLabels[data.theme] || "Perfect"} Evening in ${data.city}`,
    tagline: "Where every moment whispers love...",
    theme: data.theme,
    timeline: [
      {
        time: data.time || "6:00 PM",
        activity: "Sunset Walk at the Waterfront",
        detail: "Start with a peaceful walk along the promenade as the golden hour paints the sky.",
        icon: "🌅",
      },
      {
        time: "7:30 PM",
        activity: "Candlelit Dinner for Two",
        detail: "A cozy corner table at a highly-rated restaurant with a curated tasting menu.",
        icon: "🕯️",
      },
      {
        time: "9:00 PM",
        activity: "Dessert & Rooftop Views",
        detail: "Share artisan desserts at a rooftop café while stargazing together.",
        icon: "🍰",
      },
      {
        time: "10:00 PM",
        activity: "Night Stroll & Surprise",
        detail: "A quiet walk through illuminated streets, ending with a small surprise gift.",
        icon: "🌙",
      },
    ],
    foodRecs: [
      { name: "The Romantic Table", type: "Continental · Fine Dining", cost: "₹2,000" },
      { name: "Crème de la Crème", type: "Dessert · Artisanal", cost: "₹600" },
      { name: "Chai & Co.", type: "Café · Rooftop", cost: "₹400" },
    ],
    costBreakdown: [
      { item: "Dinner for two", cost: "₹2,000" },
      { item: "Desserts", cost: "₹600" },
      { item: "Drinks & Chai", cost: "₹400" },
      { item: "Cab / Transport", cost: "₹300" },
      { item: "Small surprise gift", cost: "₹500" },
    ],
    totalCost: "₹3,800",
    surpriseTips: [
      "Write a handwritten love note and slip it into their pocket when they're not looking.",
      "Pre-order a single red rose to be delivered to the restaurant table.",
      "Create a small Spotify playlist of your special songs for the walk back.",
      "Carry a polaroid camera for spontaneous memories.",
    ],
  };
}

export function generateMockIdeas(): DateIdea[] {
  return [
    {
      id: "1",
      title: "Starlit Rooftop Dinner",
      description: "Dine under a canopy of fairy lights on a private rooftop, with handpicked roses and a three-course meal that tastes like poetry.",
      budget: "₹3,000–5,000",
      duration: "3–4 hours",
      tags: ["Romantic", "Dinner", "Rooftop"],
      emoji: "🌟",
    },
    {
      id: "2",
      title: "Sunrise Picnic by the Lake",
      description: "Wake before dawn, spread a blanket by the water, and watch the world wake up together — with fresh pastries, fruits, and warm cocoa.",
      budget: "₹800–1,500",
      duration: "2–3 hours",
      tags: ["Chill", "Outdoors", "Morning"],
      emoji: "🧺",
    },
    {
      id: "3",
      title: "Secret Garden Cafe Crawl",
      description: "Discover hidden cafés through winding lanes — each stop a chapter: poetry at one, dessert at the next, music at the last.",
      budget: "₹1,500–3,000",
      duration: "4–5 hours",
      tags: ["Foodie", "Adventure", "Explore"],
      emoji: "🌿",
    },
    {
      id: "4",
      title: "Art & Wine Evening",
      description: "Paint each other's portraits at a couple's art workshop, then toast with fine wine under soft amber lights.",
      budget: "₹2,000–4,000",
      duration: "3 hours",
      tags: ["Luxury", "Creative", "Indoor"],
      emoji: "🎨",
    },
    {
      id: "5",
      title: "Midnight Dessert Drive",
      description: "Drive through the sleeping city, chasing the best late-night desserts — waffles, gelato, chai — with your favourite songs on shuffle.",
      budget: "₹500–1,200",
      duration: "2 hours",
      tags: ["Adventurous", "Night", "Desserts"],
      emoji: "🚗",
    },
  ];
}

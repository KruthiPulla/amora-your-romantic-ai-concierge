import type { DatePlan } from "@/components/DatePlanResult";
import type { DateIdea } from "@/components/InspireMe";
import type { PlanFormData } from "@/components/PlanForm";

type CityData = {
  spots: {
    romantic: { walk: string; walkDetail: string; dinner: string; dinnerDetail: string; dessert: string; dessertDetail: string; night: string; nightDetail: string };
    adventurous: { walk: string; walkDetail: string; dinner: string; dinnerDetail: string; dessert: string; dessertDetail: string; night: string; nightDetail: string };
    foodie: { walk: string; walkDetail: string; dinner: string; dinnerDetail: string; dessert: string; dessertDetail: string; night: string; nightDetail: string };
    chill: { walk: string; walkDetail: string; dinner: string; dinnerDetail: string; dessert: string; dessertDetail: string; night: string; nightDetail: string };
  };
  foodRecs: { name: string; type: string; address: string }[];
};

const cityDatabase: Record<string, CityData> = {
  mumbai: {
    spots: {
      romantic: {
        walk: "Marine Drive Sunset Stroll",
        walkDetail: "Walk along the Queen's Necklace at Marine Drive as the sun sets over the Arabian Sea. Find a spot on the tetrapods and watch the sky turn golden.",
        dinner: "Candlelit Dinner at Bastian, Bandra",
        dinnerDetail: "Book a private table at Bastian on Linking Road, Bandra — known for its intimate coastal vibe, fresh seafood, and signature cocktails.",
        dessert: "Dessert at Le15 Patisserie, Colaba",
        dessertDetail: "Share macarons and a chocolate fondant at Le15 Patisserie on Colaba Causeway — a cozy French-style dessert café.",
        night: "Night Walk at Bandstand Promenade",
        nightDetail: "Stroll along Bandstand Promenade in Bandra, enjoy the sea breeze and the lit-up Bandra–Worli Sea Link view.",
      },
      adventurous: {
        walk: "Hike to Kanheri Caves, Sanjay Gandhi National Park",
        walkDetail: "Take the trail through Sanjay Gandhi National Park to the ancient Kanheri Caves — a peaceful escape right inside Mumbai.",
        dinner: "Dinner at The Table, Colaba",
        dinnerDetail: "Enjoy farm-to-table global cuisine at The Table on Colaba's Kalapesi Trust building — fresh, inventive, and memorable.",
        dessert: "Kulfi at Bachelorr's, Chowpatty",
        dessertDetail: "Grab their legendary sitaphal or mango kulfi at Bachelorr's near Girgaum Chowpatty Beach.",
        night: "Late-night at Carter Road Amphitheatre",
        nightDetail: "Sit at the Carter Road amphitheatre steps in Bandra, watching the waves with a warm chai from a nearby tapri.",
      },
      foodie: {
        walk: "Street Food Trail at Mohammad Ali Road",
        walkDetail: "Start at Mohammad Ali Road near Minara Masjid — try seekh kebabs at Sarvi, malpua at Suleman Usman Mithaiwala, and naan at Noor Mohammadi.",
        dinner: "Dinner at Bombay Canteen, Lower Parel",
        dinnerDetail: "Modern Indian cuisine at Bombay Canteen in Kamala Mills — try the Pulled Jackfruit Kati Roll and their seasonal tasting menu.",
        dessert: "Parsi Dairy Farm, Princess Street",
        dessertDetail: "End with their famous caramel custard and mawa cake — a 100-year-old Parsi institution in Fort.",
        night: "Chai at Tapri, Powai",
        nightDetail: "Cozy up with cutting chai and maggi at Tapri near Powai Lake, open till late.",
      },
      chill: {
        walk: "Evening at Versova Beach",
        walkDetail: "Relax on the quieter Versova Beach, watch local fishermen return, and enjoy the gentle evening tide.",
        dinner: "Dinner at Yoga House, Bandra",
        dinnerDetail: "Healthy, wholesome food in a calm garden setting at Yoga House on Hill Road, Bandra. Perfect for a peaceful dinner.",
        dessert: "Gelato at Movenpick, Powai",
        dessertDetail: "Share a cup of Swiss gelato at Movenpick near Hiranandani, Powai — peaceful and premium.",
        night: "Night Drive on Worli Sea Face",
        nightDetail: "A slow drive along Worli Sea Face, windows down, your favourite playlist on — the city lights reflecting on the water.",
      },
    },
    foodRecs: [
      { name: "Bastian", type: "Seafood · Fine Dining", address: "Linking Road, Bandra West" },
      { name: "Bombay Canteen", type: "Modern Indian", address: "Kamala Mills, Lower Parel" },
      { name: "Le15 Patisserie", type: "French Desserts · Café", address: "Colaba Causeway" },
    ],
  },
  delhi: {
    spots: {
      romantic: {
        walk: "Sunset at Lodhi Garden",
        walkDetail: "Walk through the Mughal-era tombs at Lodhi Garden as the evening light filters through ancient trees. One of Delhi's most romantic green spaces.",
        dinner: "Dinner at Indian Accent, The Lodhi",
        dinnerDetail: "Book a table at Indian Accent inside The Lodhi hotel — India's most awarded restaurant, serving inventive Indian cuisine with global finesse.",
        dessert: "Dessert at Elma's Bakery, Hauz Khas",
        dessertDetail: "Try their molten chocolate cake and rose panna cotta at Elma's in the leafy lanes of Hauz Khas Village.",
        night: "Night Walk at India Gate",
        nightDetail: "Stroll around the beautifully lit India Gate and the new Kartavya Path — grand, open, and magical at night.",
      },
      adventurous: {
        walk: "Explore Mehrauli Archaeological Park",
        walkDetail: "Discover the hidden ruins of Balban's Tomb, Jamali Kamali Mosque, and Rajon ki Baoli — lesser-known gems near Qutub Minar.",
        dinner: "Dinner at Bukhara, ITC Maurya",
        dinnerDetail: "Experience the legendary Dal Bukhara and tandoori dishes at Bukhara, ITC Maurya — a bucket-list restaurant since 1978.",
        dessert: "Kulfi at Roshan Di Kulfi, Karol Bagh",
        dessertDetail: "Try their famous faluda kulfi — a 70-year-old family recipe on Ajmal Khan Road, Karol Bagh.",
        night: "Drive to Asola Bhatti Wildlife Sanctuary viewpoint",
        nightDetail: "A short drive to the Asola ridge area for stargazing away from the city lights — surprisingly serene.",
      },
      foodie: {
        walk: "Old Delhi Food Walk — Chandni Chowk",
        walkDetail: "Start at Paranthe Wali Gali for stuffed parathas, then Natraj Dahi Bhalle, Karim's for kebabs, and Jalebi Wala near Dariba Kalan.",
        dinner: "Dinner at SodaBottleOpenerWala, Khan Market",
        dinnerDetail: "Enjoy Parsi comfort food — berry pulao, dhansak, and caramel custard — at this quirky Irani café in Khan Market.",
        dessert: "Rabri at Old Famous Jalebi Wala, Chandni Chowk",
        dessertDetail: "Finish at Old Famous Jalebi Wala near the Red Fort — crispy jalebis with thick rabri since 1884.",
        night: "Chai at Chaayos, Connaught Place",
        nightDetail: "Wind down with masala chai and a meri wali chai at Chaayos in the inner circle of CP.",
      },
      chill: {
        walk: "Stroll through The Garden of Five Senses",
        walkDetail: "A peaceful walk through this landscaped park in Saket — themed gardens, art installations, and fragrant herbs.",
        dinner: "Dinner at Perch, Khan Market",
        dinnerDetail: "A calm rooftop café in Khan Market — European comfort food, soft lighting, and a bookish charm.",
        dessert: "Waffles at The Big Chill, Khan Market",
        dessertDetail: "Their Oreo shake and Belgian waffle are legendary — a warm, cozy spot to end the evening.",
        night: "Night at Dilli Haat, INA",
        nightDetail: "Browse handicrafts and sip hot chocolate at the open-air Dilli Haat market — festive and unhurried.",
      },
    },
    foodRecs: [
      { name: "Indian Accent", type: "Modern Indian · Fine Dining", address: "The Lodhi, Lodhi Road" },
      { name: "Bukhara", type: "North Indian · Tandoor", address: "ITC Maurya, Chanakyapuri" },
      { name: "Elma's Bakery", type: "European Desserts · Café", address: "Hauz Khas Village" },
    ],
  },
  jaipur: {
    spots: {
      romantic: {
        walk: "Sunset at Nahargarh Fort",
        walkDetail: "Drive up to Nahargarh Fort and watch the sunset paint the Pink City in shades of orange and gold from the fort walls.",
        dinner: "Dinner at 1135 AD, Amer Fort",
        dinnerDetail: "Dine inside the royal chambers of Amer Fort at 1135 AD — regal Rajasthani cuisine with live folk music and heritage ambiance.",
        dessert: "Ghewar at Laxmi Mishthan Bhandar (LMB), Johari Bazaar",
        dessertDetail: "Try the iconic Rajasthani ghewar and mawa kachori at LMB — a 200-year-old sweet shop in the heart of the old city.",
        night: "Night Walk at Jal Mahal Viewpoint",
        nightDetail: "See the illuminated Jal Mahal floating on Man Sagar Lake — a magical sight under the stars from the lakeside promenade.",
      },
      adventurous: {
        walk: "Hot Air Balloon Ride over Jaipur",
        walkDetail: "Take a sunrise hot air balloon ride over the forts and palaces of Jaipur — book with SkyWaltz for an unforgettable aerial experience.",
        dinner: "Dinner at Suvarna Mahal, Rambagh Palace",
        dinnerDetail: "Dine in the gold-leaf painted hall of Suvarna Mahal at the Rambagh Palace — once the dining room of the Maharaja.",
        dessert: "Lassi at Lassiwala, MI Road",
        dessertDetail: "The famous street-side Lassiwala on MI Road — thick, creamy lassi served in clay cups since 1944.",
        night: "Night Market Walk at Bapu Bazaar",
        nightDetail: "Explore the colorful Bapu Bazaar by night — pick up Jaipuri bangles, leather juttis, and block-printed textiles.",
      },
      foodie: {
        walk: "Street Food at Masala Chowk",
        walkDetail: "Visit Masala Chowk near Ram Niwas Garden — a curated street food plaza with 21 stalls offering the best of Rajasthani and Indian street food.",
        dinner: "Dinner at Spice Court, Civil Lines",
        dinnerDetail: "Authentic Rajasthani thali at Spice Court — laal maas, gatte ki sabzi, dal baati churma in a courtyard setting.",
        dessert: "Kulfi Faluda at Pandit Kulfi",
        dessertDetail: "Creamy malai kulfi with rose faluda at Pandit Kulfi near Sanganeri Gate — a local favourite for decades.",
        night: "Rooftop Chai at Wind View Café, Nahargarh",
        nightDetail: "Sip masala chai at a rooftop café near Nahargarh with panoramic views of the lit-up Jaipur skyline.",
      },
      chill: {
        walk: "Morning at Sisodia Rani Garden",
        walkDetail: "A peaceful garden built by a king for his queen — tiered fountains, frescoes, and quiet pathways away from the tourist rush.",
        dinner: "Dinner at Bar Palladio, Narain Niwas Palace",
        dinnerDetail: "Italian food in a stunning blue-and-white heritage setting at Bar Palladio — one of Jaipur's most beautiful dining spaces.",
        dessert: "Tea at Anokhi Café, C-Scheme",
        dessertDetail: "Organic teas, fresh bakes, and a calm courtyard vibe at Anokhi Café — perfect for winding down.",
        night: "Stargazing at Jaigarh Fort area",
        nightDetail: "Drive up to the quiet roads near Jaigarh Fort for clear skies and minimal light pollution — carry a blanket.",
      },
    },
    foodRecs: [
      { name: "1135 AD", type: "Rajasthani · Royal Dining", address: "Amer Fort" },
      { name: "Bar Palladio", type: "Italian · Heritage", address: "Narain Niwas Palace, Kanota Bagh" },
      { name: "LMB", type: "Sweets · Traditional", address: "Johari Bazaar" },
    ],
  },
};

const defaultSpots = {
  romantic: {
    walk: "Sunset Walk at the Waterfront",
    walkDetail: "Start with a peaceful walk along the nearest promenade or lake as the golden hour paints the sky.",
    dinner: "Candlelit Dinner at a Top-Rated Restaurant",
    dinnerDetail: "Book a cozy corner table at a highly-rated local restaurant known for intimate dining and great food.",
    dessert: "Dessert at a Charming Local Café",
    dessertDetail: "Share artisan desserts at a well-reviewed café — look for places with outdoor seating or rooftop views.",
    night: "Night Stroll through the Old Quarter",
    nightDetail: "Walk through the most charming, well-lit streets of the city — discover hidden lanes and local stories.",
  },
  adventurous: {
    walk: "Explore a Local Heritage Site",
    walkDetail: "Visit the most iconic historical landmark nearby — forts, ruins, or nature trails make great starting points.",
    dinner: "Dinner at an Iconic Local Restaurant",
    dinnerDetail: "Try the city's most talked-about restaurant — the one locals always recommend to visitors.",
    dessert: "Street-Side Dessert Stop",
    dessertDetail: "Find the best-rated street dessert spot — every city has that one legendary sweet shop.",
    night: "Late-Night Viewpoint Drive",
    nightDetail: "Drive to the nearest hilltop or scenic viewpoint for a quiet moment under the stars.",
  },
  foodie: {
    walk: "Street Food Trail",
    walkDetail: "Start at the city's most famous street food hub — try at least 3 different stalls for the full experience.",
    dinner: "Dinner at a Local Favourite",
    dinnerDetail: "Book a table at the city's most loved restaurant — the kind that has a queue on weekends.",
    dessert: "Famous Local Sweet Shop",
    dessertDetail: "Every city has its legendary dessert spot — find it, order the signature item, and savour it.",
    night: "Chai at a Late-Night Tapri",
    nightDetail: "End the night with cutting chai and conversation at a beloved local chai stall.",
  },
  chill: {
    walk: "Evening at a Peaceful Park or Garden",
    walkDetail: "Find the city's best garden or park — somewhere with trees, benches, and minimal crowds.",
    dinner: "Dinner at a Quiet, Cozy Café",
    dinnerDetail: "Choose a calm café with good food, soft music, and a relaxed vibe — no rush, just presence.",
    dessert: "Gelato or Ice Cream at a Premium Parlour",
    dessertDetail: "Share a scoop of something special — artisan gelato or a local ice cream favourite.",
    night: "Slow Drive with Your Favourite Playlist",
    nightDetail: "A night drive through quiet streets, windows down, your favourite songs playing — sometimes the simplest moments are the best.",
  },
};

function getSpots(city: string, theme: string) {
  const key = city.toLowerCase().trim();
  const themeKey = (theme === "luxury" || theme === "surprise") ? "romantic" : theme;
  const cityData = cityDatabase[key];
  if (cityData) {
    return cityData.spots[themeKey as keyof typeof cityData.spots] || cityData.spots.romantic;
  }
  return defaultSpots[themeKey as keyof typeof defaultSpots] || defaultSpots.romantic;
}

function getFoodRecs(city: string) {
  const key = city.toLowerCase().trim();
  return cityDatabase[key]?.foodRecs || [
    { name: "Top-rated local restaurant", type: "Multi-cuisine · Fine Dining", address: "City centre" },
    { name: "Best local dessert spot", type: "Desserts · Café", address: "Popular market area" },
    { name: "Iconic street food stall", type: "Street Food · Local", address: "Old town" },
  ];
}

function computeTimeline(startTime: string, durationHrs: string) {
  const [h, m] = startTime.split(":").map(Number);
  const fmt = (hour: number, min: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12;
    return `${h12}:${min.toString().padStart(2, "0")} ${period}`;
  };
  const dur = parseInt(durationHrs) || 4;
  const gap = Math.floor((dur * 60) / 4);
  return [0, 1, 2, 3].map((i) => {
    const totalMin = (h * 60 + m) + i * gap;
    return fmt(Math.floor(totalMin / 60) % 24, totalMin % 60);
  });
}

function scaleCosts(budget: string) {
  const b = parseInt(budget) || 3000;
  const dinner = Math.round(b * 0.45);
  const dessert = Math.round(b * 0.15);
  const drinks = Math.round(b * 0.1);
  const transport = Math.round(b * 0.12);
  const surprise = Math.round(b * 0.13);
  const misc = b - dinner - dessert - drinks - transport - surprise;
  return { dinner, dessert, drinks, transport, surprise, misc, total: b };
}

export function generateMockPlan(data: PlanFormData): DatePlan {
  const themeLabels: Record<string, string> = {
    romantic: "Romantic",
    adventurous: "Adventurous",
    foodie: "Foodie",
    chill: "Chill",
    luxury: "Luxury",
    surprise: "Surprise",
  };

  const spots = getSpots(data.city, data.theme);
  const foodRecs = getFoodRecs(data.city);
  const times = computeTimeline(data.time || "18:00", data.duration || "4");
  const costs = scaleCosts(data.budget);
  const label = themeLabels[data.theme] || "Perfect";

  return {
    title: `A ${label} Evening in ${data.city}`,
    tagline: "Curated just for you by Amora",
    description: `Amora has designed a ${label.toLowerCase()} date in ${data.city}, fitting within your ₹${data.budget} budget. Starting at ${times[0]} and spanning ${data.duration || "4"} hours, this plan takes you through handpicked places — from scenic spots to the best food the city offers.`,
    theme: data.theme,
    timeline: [
      { time: times[0], activity: spots.walk, detail: spots.walkDetail, icon: "🌅" },
      { time: times[1], activity: spots.dinner, detail: spots.dinnerDetail, icon: "🕯️" },
      { time: times[2], activity: spots.dessert, detail: spots.dessertDetail, icon: "🍰" },
      { time: times[3], activity: spots.night, detail: spots.nightDetail, icon: "🌙" },
    ],
    foodRecs: foodRecs.map((f, i) => ({
      name: f.name,
      type: f.type,
      cost: i === 0 ? `₹${costs.dinner.toLocaleString()}` : i === 1 ? `₹${costs.dessert.toLocaleString()}` : `₹${costs.drinks.toLocaleString()}`,
      address: f.address,
    })),
    costBreakdown: [
      { item: "Dinner for two", cost: `₹${costs.dinner.toLocaleString()}` },
      { item: "Desserts", cost: `₹${costs.dessert.toLocaleString()}` },
      { item: "Drinks & extras", cost: `₹${costs.drinks.toLocaleString()}` },
      { item: "Transport", cost: `₹${costs.transport.toLocaleString()}` },
      { item: "Surprise gift", cost: `₹${costs.surprise.toLocaleString()}` },
    ],
    totalCost: `₹${costs.total.toLocaleString()}`,
    surpriseTips: [
      "Write a handwritten love note and slip it into their pocket.",
      "Pre-order a single red rose to be delivered to the restaurant table.",
      "Create a small Spotify playlist of your special songs for the walk.",
      "Carry a polaroid camera for spontaneous memories.",
    ],
  };
}

export function generateMockIdeas(): DateIdea[] {
  const allIdeas: DateIdea[] = [
    {
      id: "1",
      title: "Starlit Rooftop Dinner",
      description: "Dine under fairy lights on a rooftop, with roses and a three-course meal that feels like poetry.",
      budget: "₹3,000–5,000",
      duration: "3–4 hours",
      tags: ["Romantic", "Dinner", "Rooftop"],
      emoji: "🌟",
    },
    {
      id: "2",
      title: "Sunrise Picnic by the Lake",
      description: "Spread a blanket by the water, watch the world wake up with pastries, fruits, and warm cocoa.",
      budget: "₹800–1,500",
      duration: "2–3 hours",
      tags: ["Chill", "Outdoors", "Morning"],
      emoji: "🧺",
    },
    {
      id: "3",
      title: "Secret Café Crawl",
      description: "Discover hidden cafés through winding lanes — poetry at one, dessert at the next, music at the last.",
      budget: "₹1,500–3,000",
      duration: "4–5 hours",
      tags: ["Foodie", "Adventure", "Explore"],
      emoji: "🌿",
    },
    {
      id: "4",
      title: "Art & Wine Evening",
      description: "Paint each other's portraits at a couples art workshop, then toast with wine under amber lights.",
      budget: "₹2,000–4,000",
      duration: "3 hours",
      tags: ["Luxury", "Creative", "Indoor"],
      emoji: "🎨",
    },
    {
      id: "5",
      title: "Midnight Dessert Drive",
      description: "Chase the best late-night desserts across the city — waffles, gelato, chai — with your songs on shuffle.",
      budget: "₹500–1,200",
      duration: "2 hours",
      tags: ["Adventurous", "Night", "Desserts"],
      emoji: "🚗",
    },
  ];
  // Shuffle and return 3-5
  const shuffled = allIdeas.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3 + Math.floor(Math.random() * 3));
}

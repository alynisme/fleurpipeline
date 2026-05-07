export interface FlowerRecommendation {
  id: string;
  name: string;
  imageUrl: string;
  priceRange: string;
  meaning: string;
  tags: {
    status: string[];
    situasi: string[];
    budget: string[];
    kepribadian: string[];
  };
}

export const FLOWER_DATA: FlowerRecommendation[] = [
  {
    id: "premium-red-roses",
    name: "Premium Red Roses",
    imageUrl: "https://images.unsplash.com/photo-1548840504-297ebef769ce?auto=format&fit=crop&q=80&w=800",
    priceRange: "> 500rb",
    meaning: "Simbol cinta sejati dan gairah yang tak lekang oleh waktu.",
    tags: {
      status: ["Pacar", "Istri"],
      situasi: ["Anniversary", "Minta Maaf"],
      budget: ["> 500rb"],
      kepribadian: ["Mewah/Glamor"],
    },
  },
  {
    id: "white-lilies",
    name: "White Lilies Elegance",
    imageUrl: "https://images.unsplash.com/photo-1554585148-73599a0ed382?auto=format&fit=crop&q=80&w=800",
    priceRange: "200rb-500rb",
    meaning: "Melambangkan kemurnian, keanggunan, dan ketulusan hati.",
    tags: {
      status: ["Istri", "Ibu"],
      situasi: ["Ulang Tahun", "Minta Maaf"],
      budget: ["200rb-500rb", "> 500rb"],
      kepribadian: ["Minimalis/Simpel", "Mewah/Glamor"],
    },
  },
  {
    id: "sunflowers",
    name: "Radiant Sunflowers",
    imageUrl: "https://images.unsplash.com/photo-1558500203-b09ee8652d3a?auto=format&fit=crop&q=80&w=800",
    priceRange: "< 200rb",
    meaning: "Membawa kebahagiaan, keceriaan, dan kehangatan seperti sinar matahari.",
    tags: {
      status: ["Teman", "Gebetan", "Pacar"],
      situasi: ["Ulang Tahun", "Kejutan Spontan"],
      budget: ["< 200rb"],
      kepribadian: ["Minimalis/Simpel", "Unik/Eksotis"],
    },
  },
  {
    id: "blue-hydrangeas",
    name: "Ocean Blue Hydrangeas",
    imageUrl: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&q=80&w=800",
    priceRange: "200rb-500rb",
    meaning: "Rasa syukur yang mendalam dan pemahaman antar dua hati.",
    tags: {
      status: ["Ibu", "Istri", "Pacar"],
      situasi: ["Anniversary", "Minta Maaf"],
      budget: ["200rb-500rb"],
      kepribadian: ["Unik/Eksotis"],
    },
  },
  {
    id: "pink-peonies",
    name: "Blushing Pink Peonies",
    imageUrl: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800",
    priceRange: "> 500rb",
    meaning: "Romansa, kemakmuran, dan kebahagiaan dalam hubungan.",
    tags: {
      status: ["Pacar", "Istri"],
      situasi: ["Anniversary", "Ulang Tahun"],
      budget: ["> 500rb"],
      kepribadian: ["Mewah/Glamor", "Unik/Eksotis"],
    },
  },
  {
    id: "babys-breath",
    name: "Ethereal Baby's Breath",
    imageUrl: "https://images.unsplash.com/photo-1628157778917-d2e85a538258?auto=format&fit=crop&q=80&w=800",
    priceRange: "< 200rb",
    meaning: "Cinta yang murni, ketulusan, dan kepolosan abadi.",
    tags: {
      status: ["Gebetan", "Teman"],
      situasi: ["Kejutan Spontan"],
      budget: ["< 200rb", "200rb-500rb"],
      kepribadian: ["Minimalis/Simpel"],
    },
  },
];

export function getFlowerRecommendation(
  status: string,
  situasi: string,
  budget: string,
  kepribadian: string
): FlowerRecommendation | null {
  // Simple scoring algorithm
  let bestMatch: FlowerRecommendation | null = null;
  let highestScore = -1;

  for (const flower of FLOWER_DATA) {
    let score = 0;
    if (flower.tags.status.includes(status)) score += 2;
    if (flower.tags.situasi.includes(situasi)) score += 2;
    if (flower.tags.budget.includes(budget)) score += 3; // budget is highly restrictive
    if (flower.tags.kepribadian.includes(kepribadian)) score += 1;

    // Slight randomization for ties could be added, but keeping it deterministic for now
    if (score > highestScore) {
      highestScore = score;
      bestMatch = flower;
    }
  }

  return bestMatch || FLOWER_DATA[0]; // fallback
}

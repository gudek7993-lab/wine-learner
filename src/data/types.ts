export interface Region {
  id: string;
  nameKo: string;
  nameEn: string;
  parentId: string | null;
  children: string[];
  level: 'country' | 'region' | 'sub-region' | 'appellation';
  /** One or two sentence overview shown at the top of the region page. */
  summary?: string;

  climate: {
    type: string[];
    description: string;
    influencingFactors: string[];
  };

  soils: {
    type: string[];
    description: string;
  }[];

  grapes: {
    grapeId: string;
    role: 'primary' | 'secondary' | 'permitted';
    notes?: string;
  }[];

  classifications?: {
    name: string;
    description: string;
    levels?: { name: string; description: string }[];
  }[];

  wineStyles: {
    name: string;
    description: string;
  }[];

  keyFacts: string[];
  examTips: string[];
}

export interface GrapeVariety {
  id: string;
  nameKo: string;
  nameEn: string;
  color: 'red' | 'white';

  characteristics: {
    aromas: string[];
    body: string;
    tannin?: string;
    acidity?: string;
    alcohol?: string;
    agingPotential?: string;
    otherNotes?: string;
  };

  regions: {
    regionId: string;
    localName?: string;
    significance: string;
  }[];

  winemaking: string[];
  examTips: string[];
}

export interface WinemakingTechnique {
  id: string;
  nameKo: string;
  nameEn: string;
  category: 'viticulture' | 'vinification' | 'aging' | 'sparkling-method' | 'fortification';
  description: string;
  effect: string;
  usedIn: string[];
}

export interface WineStyle {
  id: string;
  nameKo: string;
  nameEn: string;
  category: 'still-red' | 'still-white' | 'still-rose' | 'sparkling' | 'fortified' | 'sweet';
  description: string;
  techniques: string[];
  regions: string[];
  grapes: string[];
  subStyles?: {
    name: string;
    description: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'essay';
  chapter: number;
  questionKo: string;
  options?: string[];
  correctAnswer: string | number;
  explanationKo: string;
}

export interface SATCategory {
  nameKo: string;
  nameEn: string;
  items: {
    nameKo: string;
    options: string[];
    description?: string;
  }[];
}

export interface SATFramework {
  appearance: SATCategory;
  nose: SATCategory;
  palate: SATCategory;
  conclusions: SATCategory;
}

/** 1 = lowest, 5 = highest (Wine Folly-style taste profile scale). */
export type Level = 1 | 2 | 3 | 4 | 5;

export type WineStyleFamily =
  | 'bold-red'
  | 'medium-red'
  | 'light-red'
  | 'rich-white'
  | 'light-white'
  | 'aromatic-white';

export interface GrapeProfile {
  /** One-sentence character summary in Korean. */
  summary: string;
  style: WineStyleFamily;
  taste: {
    sweetness: Level;
    body: Level;
    tannin: Level;
    acidity: Level;
    alcohol: Level;
  };
  /** Exactly five signature flavors, Korean. */
  primaryFlavors: string[];
  serving: {
    tempC: string;      // e.g. "15-18°C"
    glass: string;      // Korean, e.g. "보르도 글라스 (대형)"
    decant: string;     // e.g. "1시간"
    cellar: string;     // e.g. "10년 이상"
  };
  /** 3-5 food pairings, Korean. */
  pairings: string[];
  /** Origin / parentage one-liner, Korean. */
  origin: string;
  synonyms?: string[];
}

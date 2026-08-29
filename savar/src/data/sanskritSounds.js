export const vowels = [
  {
    id: "a",
    symbol: "अ",
    transliteration: "a",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठ्य",
    description: "Short open vowel"
  },
  {
    id: "aa",
    symbol: "आ",
    transliteration: "ā",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठ्य",
    description: "Long open vowel"
  },
  {
    id: "i",
    symbol: "इ",
    transliteration: "i",
    type: "Vowel",
    category: "स्वर",
    articulation: "तालव्य",
    description: "Short front vowel"
  },
  {
    id: "ii",
    symbol: "ई",
    transliteration: "ī",
    type: "Vowel",
    category: "स्वर",
    articulation: "तालव्य",
    description: "Long front vowel"
  },
  {
    id: "u",
    symbol: "उ",
    transliteration: "u",
    type: "Vowel",
    category: "स्वर",
    articulation: "ओष्ठ्य",
    description: "Short rounded vowel"
  },
  {
    id: "uu",
    symbol: "ऊ",
    transliteration: "ū",
    type: "Vowel",
    category: "स्वर",
    articulation: "ओष्ठ्य",
    description: "Long rounded vowel"
  },
  {
    id: "ri",
    symbol: "ऋ",
    transliteration: "ṛ",
    type: "Vowel",
    category: "स्वर",
    articulation: "मूर्धन्य",
    description: "Vocalic r"
  },
  {
    id: "e",
    symbol: "ए",
    transliteration: "e",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठतालव्य",
    description: "Long vowel"
  },
  {
    id: "ai",
    symbol: "ऐ",
    transliteration: "ai",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठतालव्य",
    description: "Diphthong"
  },
  {
    id: "o",
    symbol: "ओ",
    transliteration: "o",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठोष्ठ्य",
    description: "Long rounded vowel"
  },
  {
    id: "au",
    symbol: "औ",
    transliteration: "au",
    type: "Vowel",
    category: "स्वर",
    articulation: "कण्ठोष्ठ्य",
    description: "Diphthong"
  }
];

export const consonantGroups = [
  {
    name: "क-वर्ग",
    english: "Ka Group",
    articulation: "कण्ठ्य",
    place: "Throat",
    sounds: ["क", "ख", "ग", "घ", "ङ"]
  },
  {
    name: "च-वर्ग",
    english: "Cha Group",
    articulation: "तालव्य",
    place: "Palate",
    sounds: ["च", "छ", "ज", "झ", "ञ"]
  },
  {
    name: "ट-वर्ग",
    english: "Ta Group",
    articulation: "मूर्धन्य",
    place: "Retroflex",
    sounds: ["ट", "ठ", "ड", "ढ", "ण"]
  },
  {
    name: "त-वर्ग",
    english: "Ta Group",
    articulation: "दन्त्य",
    place: "Teeth",
    sounds: ["त", "थ", "द", "ध", "न"]
  },
  {
    name: "प-वर्ग",
    english: "Pa Group",
    articulation: "ओष्ठ्य",
    place: "Lips",
    sounds: ["प", "फ", "ब", "भ", "म"]
  }
];

export const otherConsonants = [
  {
    symbol: "य",
    name: "य",
    type: "Semi-vowel",
    articulation: "तालव्य"
  },
  {
    symbol: "र",
    name: "र",
    type: "Semi-vowel",
    articulation: "मूर्धन्य"
  },
  {
    symbol: "ल",
    name: "ल",
    type: "Semi-vowel",
    articulation: "दन्त्य"
  },
  {
    symbol: "व",
    name: "व",
    type: "Semi-vowel",
    articulation: "ओष्ठ्य"
  },
  {
    symbol: "श",
    name: "श",
    type: "Sibilant",
    articulation: "तालव्य"
  },
  {
    symbol: "ष",
    name: "ष",
    type: "Sibilant",
    articulation: "मूर्धन्य"
  },
  {
    symbol: "स",
    name: "स",
    type: "Sibilant",
    articulation: "दन्त्य"
  },
  {
    symbol: "ह",
    name: "ह",
    type: "Aspirate",
    articulation: "कण्ठ्य"
  }
];
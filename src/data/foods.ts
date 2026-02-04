// Food database derived from nutrition-hub logseq content
// Foods organized by age appropriateness with Italian names and DSI-informed nutritional context

export interface Food {
  id: string;
  name: string;
  italianName: string;
  category: 'protein' | 'fat' | 'vegetable' | 'fruit' | 'grain' | 'dairy' | 'legume' | 'herb' | 'fermented';
  ageStart: number;  // Months when this food can be introduced
  nutrients: string[];
  dsiRationale?: string;  // Connection to Developmental Substrate Integrity
  preparation?: string;
  safetyNotes?: string[];
  sourcingItaly?: string;
}

export const foods: Food[] = [
  // FERMENTED FOODS - First introduction (gut maturity first)
  {
    id: 'yogurt',
    name: 'Full-Fat Yogurt',
    italianName: 'Yogurt intero',
    category: 'fermented',
    ageStart: 7,
    nutrients: ['Probiotics', 'Calcium', 'Protein', 'B12'],
    dsiRationale: 'Gut ecology must support safe iron absorption. Ferments establish beneficial bacteria before nutrient-dense foods.',
    preparation: 'Start with ¼ tsp, build to 1 tbsp over 2 weeks',
    sourcingItaly: 'Yogurt intero from any supermercato; seek out bianco naturale (plain)'
  },
  {
    id: 'kefir',
    name: 'Kefir',
    italianName: 'Kefir',
    category: 'fermented',
    ageStart: 7,
    nutrients: ['Probiotics', 'Calcium', 'B vitamins', 'Protein'],
    dsiRationale: 'Broader probiotic spectrum than yogurt. Prepares gut for nutrient-dense foods.',
    preparation: 'Start with ¼ tsp, build to 1 tbsp over 2 weeks',
    sourcingItaly: 'Increasingly available in supermercati; check health food stores'
  },

  // EGG YOLK - Priority for myelination
  {
    id: 'egg-yolk',
    name: 'Egg Yolk',
    italianName: 'Tuorlo d\'uovo',
    category: 'protein',
    ageStart: 7,
    nutrients: ['Choline', 'Cholesterol', 'DHA', 'Vitamin D', 'B12'],
    dsiRationale: 'Cholesterol is rate-limiting for myelination. The infant brain is building myelin sheaths that will last a lifetime.',
    preparation: 'Soft-cooked 4-minute method (jammy center). Start ½ tsp, build to full yolk.',
    safetyNotes: ['Contains vitamin A - factor into daily total', 'Egg whites often delayed to 12+ months'],
    sourcingItaly: 'Uova da galline allevate a terra (free-range) minimum; seek pastured from local farms'
  },

  // LIVER - Most nutrient-dense food
  {
    id: 'chicken-liver',
    name: 'Chicken Liver',
    italianName: 'Fegatini di pollo',
    category: 'protein',
    ageStart: 8,
    nutrients: ['Vitamin A', 'Iron (heme)', 'B12', 'Folate', 'Copper'],
    dsiRationale: 'Heme iron absorption 15-35% vs fortified cereal 2-5%. Provides bioavailable micronutrients for tissue construction.',
    preparation: 'Frozen grated over food, or pâté in ice cube portions. ½-1 tsp serving, 2-3× per week.',
    safetyNotes: [
      'Cap at 1-2 tsp, 2-3× per week',
      'NEVER combine with cod liver oil (vitamin A stacking)',
      'Introduce AFTER 2 weeks of ferments (gut readiness)'
    ],
    sourcingItaly: 'Fegato di pollo from macelleria; ask for pollo ruspante (free-range)'
  },

  // BONE BROTH
  {
    id: 'bone-broth',
    name: 'Bone Broth',
    italianName: 'Brodo di ossa',
    category: 'protein',
    ageStart: 7,
    nutrients: ['Glycine', 'Collagen', 'Gelatin', 'Minerals'],
    dsiRationale: 'Glycine is conditionally essential during growth. Gelatin supports gut lining integrity.',
    preparation: 'Weekly batch. Should gel when cold. No salt. 2-3 oz/day maximum.',
    safetyNotes: ['No salt before 12 months - immature renal filtration'],
    sourcingItaly: 'Beef bones (ossa per brodo) from macelleria; chicken carcasses from butcher'
  },

  // FISH - Preformed DHA
  {
    id: 'wild-salmon',
    name: 'Wild Salmon',
    italianName: 'Salmone selvaggio',
    category: 'protein',
    ageStart: 8,
    nutrients: ['DHA', 'EPA', 'Protein', 'Vitamin D', 'Selenium'],
    dsiRationale: 'Preformed DHA is structural component of brain gray matter. Conversion from plant omega-3 is <5%.',
    preparation: 'Poached or baked, mashed with bone broth. Soft flakes.',
    sourcingItaly: 'Salmone selvaggio at fish counter (not allevamento/farmed)'
  },
  {
    id: 'sardines',
    name: 'Sardines',
    italianName: 'Sardine',
    category: 'protein',
    ageStart: 9,
    nutrients: ['DHA', 'Calcium (with bones)', 'Vitamin D', 'Selenium'],
    dsiRationale: 'Small fish = lower mercury accumulation. Bones provide calcium.',
    preparation: 'Canned in olive oil, mashed. Remove large bones for younger babies.',
    sourcingItaly: 'Sardine in scatola widely available; choose in olio d\'oliva'
  },

  // FATS
  {
    id: 'avocado',
    name: 'Avocado',
    italianName: 'Avocado',
    category: 'fat',
    ageStart: 7,
    nutrients: ['Vitamin E', 'Folate', 'Potassium', 'Monounsaturated fats'],
    preparation: 'Ripe, mashed. Can mix with egg yolk.',
  },
  {
    id: 'butter',
    name: 'Grass-Fed Butter',
    italianName: 'Burro da pascolo',
    category: 'fat',
    ageStart: 7,
    nutrients: ['Vitamin A', 'Vitamin K2', 'Butyrate', 'CLA'],
    dsiRationale: 'Fat-soluble vitamins in bioavailable form. K2 important for calcium metabolism.',
    preparation: 'Add to vegetables, egg yolk, or grains.',
    sourcingItaly: 'Burro da pascolo or burro alpino from specialty shops'
  },
  {
    id: 'cod-liver-oil',
    name: 'Cod Liver Oil',
    italianName: 'Olio di fegato di merluzzo',
    category: 'fat',
    ageStart: 7,
    nutrients: ['Vitamin A', 'Vitamin D', 'DHA', 'EPA'],
    dsiRationale: 'Concentrated fat-soluble vitamins. Supports membrane construction.',
    preparation: '¼ tsp daily maximum',
    safetyNotes: [
      'SKIP on liver days (vitamin A stacking: combined can reach 7,000-9,000 IU vs limit 2,000-3,000 IU)',
      'Fat-soluble vitamins accumulate'
    ],
    sourcingItaly: 'Olio di fegato di merluzzo at farmacia or health food stores'
  },

  // VEGETABLES
  {
    id: 'zucchini',
    name: 'Zucchini',
    italianName: 'Zucchina',
    category: 'vegetable',
    ageStart: 7,
    nutrients: ['Vitamin C', 'Potassium', 'Fiber'],
    preparation: 'Steamed until very soft, mashed with butter or bone broth.',
    sourcingItaly: 'Seasonal from ortofrutta; excellent in summer'
  },
  {
    id: 'carrots',
    name: 'Carrots',
    italianName: 'Carote',
    category: 'vegetable',
    ageStart: 7,
    nutrients: ['Beta-carotene', 'Fiber', 'Vitamin K'],
    preparation: 'Steamed until very soft, mashed with fat for absorption.',
    safetyNotes: ['High in beta-carotene - skin can turn orange (harmless)']
  },
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    italianName: 'Patata dolce',
    category: 'vegetable',
    ageStart: 7,
    nutrients: ['Beta-carotene', 'Vitamin C', 'Fiber', 'Potassium'],
    preparation: 'Baked or steamed, mashed with butter.'
  },

  // FRUITS
  {
    id: 'pear',
    name: 'Pear',
    italianName: 'Pera',
    category: 'fruit',
    ageStart: 7,
    nutrients: ['Fiber', 'Vitamin C', 'Copper'],
    preparation: 'Very ripe, mashed. Steamed if needed for softer texture.'
  },
  {
    id: 'banana',
    name: 'Banana',
    italianName: 'Banana',
    category: 'fruit',
    ageStart: 7,
    nutrients: ['Potassium', 'Vitamin B6', 'Fiber'],
    preparation: 'Ripe with brown spots, mashed.'
  },

  // DAIRY
  {
    id: 'pecorino',
    name: 'Pecorino',
    italianName: 'Pecorino',
    category: 'dairy',
    ageStart: 10,
    nutrients: ['Calcium', 'Protein', 'Vitamin A', 'CLA'],
    preparation: 'Finely grated over vegetables or grains.',
    safetyNotes: ['High sodium - use sparingly before 12 months'],
    sourcingItaly: 'Pecorino romano or toscano; aged versions are easier to digest'
  },

  // LEGUMES
  {
    id: 'lentils',
    name: 'Lentils',
    italianName: 'Lenticchie',
    category: 'legume',
    ageStart: 9,
    nutrients: ['Iron', 'Protein', 'Folate', 'Fiber'],
    preparation: 'Red lentils cook softest. Well-cooked and mashed.',
    dsiRationale: 'Plant iron source - pair with vitamin C for absorption. Not a replacement for heme iron.',
    sourcingItaly: 'Lenticchie di Castelluccio are prized Italian variety'
  },

  // HERBS
  {
    id: 'basil',
    name: 'Basil',
    italianName: 'Basilico',
    category: 'herb',
    ageStart: 8,
    nutrients: ['Vitamin K', 'Iron', 'Antioxidants'],
    preparation: 'Fresh, finely chopped. Introduce flavors early.',
    sourcingItaly: 'Fresh basilico genovese from any market'
  },
];

// Category display info
export const categoryInfo = {
  fermented: { icon: '🥛', label: 'Fermented', color: 'sage' },
  protein: { icon: '🥚', label: 'Protein', color: 'terracotta' },
  fat: { icon: '🫒', label: 'Fats', color: 'cream' },
  vegetable: { icon: '🥕', label: 'Vegetables', color: 'sage' },
  fruit: { icon: '🍐', label: 'Fruits', color: 'terracotta' },
  dairy: { icon: '🧀', label: 'Dairy', color: 'cream' },
  legume: { icon: '🫘', label: 'Legumes', color: 'sage' },
  grain: { icon: '🌾', label: 'Grains', color: 'cream' },
  herb: { icon: '🌿', label: 'Herbs', color: 'sage' },
};

// Filter foods by age
export function getFoodsForAge(age: number): Food[] {
  return foods.filter(food => food.ageStart <= age);
}

// Get introduction sequence for early months
export const introductionSequence = [
  {
    weeks: '1-2',
    age: 7,
    focus: 'Gut Maturity',
    foods: ['Fermented foods (yogurt/kefir)'],
    amounts: '¼ tsp → 1 tbsp',
    rationale: 'Establish beneficial gut bacteria before introducing nutrient-dense foods'
  },
  {
    weeks: '2-3',
    age: 7,
    focus: 'Myelination Priority',
    foods: ['Egg yolk'],
    amounts: '½ tsp → 1 full yolk',
    rationale: 'Cholesterol is rate-limiting for myelin construction'
  },
  {
    weeks: '3-4',
    age: 8,
    focus: 'Bioavailable Iron',
    foods: ['Liver (frozen grated)'],
    amounts: '½ tsp, 2-3×/week',
    rationale: 'Heme iron after gut is prepared'
  },
  {
    weeks: '4+',
    age: 8,
    focus: 'Preformed DHA',
    foods: ['Fish (wild salmon)'],
    amounts: 'Mashed with broth',
    rationale: 'Structural component of brain gray matter'
  }
];

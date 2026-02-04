// Recipe database derived from nutrition-hub and nutrition-recipe-guide logseq content
// Recipes organized by age with DSI-informed nutritional context

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  prepTime: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  dsiRationale?: string;
  safetyNotes?: string[];
  pillar: 'gut' | 'cholesterol' | 'micronutrients' | 'glycine' | 'dha';
}

export const recipes: Recipe[] = [
  // FOUNDATION PREPARATIONS
  {
    id: 'bone-broth',
    title: 'Weekly Bone Broth',
    description: 'The foundation of nourishing baby food. Gelatin-rich broth that gels when cold, providing glycine and collagen for gut and tissue development.',
    ageRange: '7+',
    prepTime: '24-48 hours (mostly passive)',
    tags: ['foundation', 'glycine', 'collagen', 'gut healing', 'batch cooking'],
    pillar: 'glycine',
    ingredients: [
      '2-3 lbs beef bones or chicken carcasses',
      '2 tbsp apple cider vinegar',
      'Filtered water to cover',
      'Optional: 1 onion, 2 carrots, celery (no salt!)'
    ],
    instructions: [
      'Place bones in large pot or slow cooker',
      'Add apple cider vinegar (helps extract minerals)',
      'Cover with filtered water by 2 inches',
      'Bring to boil, then reduce to lowest simmer',
      'Cook 24-48 hours (chicken) or up to 72 hours (beef)',
      'Strain through fine mesh. Should gel when cold.',
      'Store in glass jars. Use within 5 days or freeze.'
    ],
    dsiRationale: 'Glycine is conditionally essential during growth. Gelatin supports gut lining integrity. Minerals extracted in bioavailable form.',
    safetyNotes: ['NO SALT before 12 months', 'Max 2-3 oz/day for baby']
  },
  {
    id: 'soft-egg-yolk',
    title: 'Soft-Cooked Egg Yolk (4-Minute Method)',
    description: 'The priority first food. Jammy, cholesterol-rich yolk that provides building blocks for myelination.',
    ageRange: '7-8',
    prepTime: '5 minutes',
    tags: ['egg yolk', 'cholesterol', 'brain food', 'first foods', 'quick'],
    pillar: 'cholesterol',
    ingredients: [
      '1 pasture-raised egg',
      '½ tsp grass-fed butter (optional)'
    ],
    instructions: [
      'Bring small pot of water to gentle boil',
      'Lower egg carefully with spoon',
      'Set timer for exactly 4 minutes',
      'Transfer to ice water immediately',
      'Peel carefully, separate yolk from white',
      'Mash yolk with butter if desired',
      'Start with ½ tsp, build to full yolk over 2 weeks'
    ],
    dsiRationale: 'Cholesterol is rate-limiting for myelination. The infant brain is building myelin sheaths that will last a lifetime. Egg yolk is nature\'s perfect delivery system.',
    safetyNotes: ['Egg whites often delayed to 12+ months', 'Contains vitamin A - factor into daily total']
  },
  {
    id: 'liver-pate',
    title: 'Mild Liver Pâté',
    description: 'The most nutrient-dense food on earth, made mild and palatable. Freeze in ice cube portions for easy serving.',
    ageRange: '8+',
    prepTime: '20 minutes + freezing',
    tags: ['liver', 'iron', 'vitamin A', 'B12', 'batch cooking'],
    pillar: 'micronutrients',
    ingredients: [
      '½ lb chicken livers (free-range)',
      '3 tbsp grass-fed butter',
      '1 small shallot, minced',
      '¼ cup bone broth',
      'Pinch of thyme (optional)'
    ],
    instructions: [
      'Rinse livers, trim any connective tissue',
      'Melt 1 tbsp butter, sauté shallot until soft',
      'Add livers, cook 3-4 minutes per side until just cooked through',
      'Transfer to blender with remaining butter and broth',
      'Blend until completely smooth',
      'Pour into ice cube tray, freeze',
      'Pop out cubes, store in freezer bag',
      'Serve ½-1 tsp, 2-3× per week'
    ],
    dsiRationale: 'Heme iron absorption 15-35% vs fortified cereal 2-5%. Provides vitamin A, B12, folate, copper in bioavailable forms for tissue construction.',
    safetyNotes: [
      'NEVER on same day as cod liver oil (vitamin A stacking)',
      'Cap at 1-2 tsp, 2-3× per week',
      'Start AFTER 2 weeks of fermented foods'
    ]
  },

  // 7-8 MONTHS RECIPES
  {
    id: 'first-yogurt',
    title: 'First Fermented Food',
    description: 'The crucial first step: establishing gut ecology before nutrient-dense foods. Plain, full-fat yogurt or kefir.',
    ageRange: '7',
    prepTime: '1 minute',
    tags: ['fermented', 'probiotics', 'first foods', 'gut health'],
    pillar: 'gut',
    ingredients: [
      'Full-fat plain yogurt OR kefir',
      'Optional: tiny pinch of cinnamon after week 1'
    ],
    instructions: [
      'Day 1-3: Offer ¼ tsp on clean spoon',
      'Day 4-7: Increase to ½ tsp',
      'Week 2: Build to 1 tbsp',
      'Observe for any digestive changes',
      'Continue daily throughout weaning journey'
    ],
    dsiRationale: 'The iron paradox: breast milk is intentionally low in iron (lactoferrin starves pathogens). Introducing high-dose heme iron before gut flora are established can feed pathogenic bacteria. Ferments-first approach.',
    safetyNotes: ['Must precede liver and other nutrient-dense foods by 2 weeks']
  },
  {
    id: 'yolk-avocado-mash',
    title: 'Yolk & Avocado Mash',
    description: 'Combining two perfect first foods: cholesterol-rich yolk and vitamin E from avocado.',
    ageRange: '7-8',
    prepTime: '7 minutes',
    tags: ['egg yolk', 'avocado', 'brain food', 'quick', 'no cook'],
    pillar: 'cholesterol',
    ingredients: [
      '1 soft-cooked egg yolk (4-minute method)',
      '2 tbsp ripe avocado',
      '1 tsp bone broth (optional, for texture)'
    ],
    instructions: [
      'Prepare egg yolk using 4-minute method',
      'Mash avocado until smooth',
      'Combine yolk and avocado',
      'Add broth if too thick',
      'Serve immediately'
    ],
    dsiRationale: 'Cholesterol + healthy fats + choline = optimal membrane construction materials.'
  },

  // 9-10 MONTHS RECIPES
  {
    id: 'salmon-broth-mash',
    title: 'Wild Salmon with Broth',
    description: 'Preformed DHA for brain development. Wild-caught salmon poached in bone broth.',
    ageRange: '9+',
    prepTime: '15 minutes',
    tags: ['fish', 'DHA', 'omega-3', 'brain food'],
    pillar: 'dha',
    ingredients: [
      '2 oz wild salmon fillet (boneless)',
      '½ cup bone broth',
      '1 tsp butter',
      'Steamed vegetables (optional)'
    ],
    instructions: [
      'Bring broth to gentle simmer',
      'Add salmon, poach 8-10 minutes until flaky',
      'Remove skin if present',
      'Mash thoroughly with fork',
      'Mix with butter and vegetables if desired',
      'Ensure no bones remain'
    ],
    dsiRationale: 'Preformed DHA is structural component of brain gray matter. Conversion from plant omega-3 (ALA) is <5%. Fish provides the real thing.',
    safetyNotes: ['Use wild-caught to minimize mercury', 'Check carefully for bones']
  },
  {
    id: 'liver-bites',
    title: 'Liver Bites (Finger Food)',
    description: 'Soft, iron-rich finger foods for self-feeding practice.',
    ageRange: '9-10',
    prepTime: '25 minutes',
    tags: ['liver', 'finger food', 'iron', 'self-feeding'],
    pillar: 'micronutrients',
    ingredients: [
      '4 oz chicken liver, finely minced',
      '1 egg yolk',
      '2 tbsp coconut flour',
      '1 tbsp butter for cooking'
    ],
    instructions: [
      'Blend liver until very smooth',
      'Mix with egg yolk and coconut flour',
      'Form into small, flat ovals',
      'Cook in butter over medium heat, 3-4 min per side',
      'Cool completely before serving',
      'Should squish easily between fingers'
    ],
    safetyNotes: ['Same liver day rules apply: no CLO', 'Cap at 2-3 per serving']
  },

  // 11-12 MONTHS RECIPES
  {
    id: 'hidden-liver-meatballs',
    title: 'Mini Meatballs (Hidden Liver)',
    description: 'For the liver-resistant baby. Beef meatballs with 20% liver hidden inside.',
    ageRange: '11-12',
    prepTime: '30 minutes',
    tags: ['meatballs', 'hidden liver', 'finger food', 'family food'],
    pillar: 'micronutrients',
    ingredients: [
      '8 oz ground beef',
      '2 oz chicken liver, finely minced',
      '1 egg yolk',
      '2 tbsp grated zucchini',
      'Pinch of dried herbs'
    ],
    instructions: [
      'Blend liver until completely smooth (key to hiding it)',
      'Combine all ingredients in bowl',
      'Mix thoroughly - liver should be invisible',
      'Form into marble-sized balls',
      'Bake at 375°F for 15 minutes or pan-fry in butter',
      'Cool and serve 2-3 per meal',
      'Freeze extras in single layer'
    ],
    dsiRationale: 'Same nutrient density, better acceptance. The "hiding liver" technique maintains micronutrient intake when babies develop texture preferences.'
  },
  {
    id: 'bone-marrow-spread',
    title: 'Roasted Bone Marrow',
    description: 'Traditional nutrient powerhouse. Rich in fat-soluble vitamins and stem cell factors.',
    ageRange: '11+',
    prepTime: '25 minutes',
    tags: ['bone marrow', 'traditional', 'fats', 'minerals'],
    pillar: 'glycine',
    ingredients: [
      '2 beef marrow bones (cut lengthwise by butcher)',
      'Pinch of herbs (optional)'
    ],
    instructions: [
      'Soak bones in salted water 12-24 hours (draws out blood)',
      'Rinse and pat dry',
      'Roast cut-side up at 450°F for 15-20 minutes',
      'Marrow should be soft and slightly bubbly',
      'Scoop out with small spoon',
      'Spread on soft bread or mix into vegetables',
      'Serve 1-2 tsp per meal'
    ],
    dsiRationale: 'Bone marrow contains factors not found in muscle meat: glycine, minerals, fat-soluble vitamins in their natural matrix.'
  },

  // 13-14 MONTHS RECIPES
  {
    id: 'liver-bolognese',
    title: 'Liver-Hidden Bolognese',
    description: 'Family-friendly sauce where liver vanishes into the tomato. Everyone eats the same meal.',
    ageRange: '13-14',
    prepTime: '45 minutes',
    tags: ['pasta', 'hidden liver', 'family food', 'batch cooking', 'Italian'],
    pillar: 'micronutrients',
    ingredients: [
      '1 lb ground beef',
      '4 oz chicken liver, blended smooth',
      '1 can crushed tomatoes (no salt added)',
      '1 small onion, minced',
      '2 cloves garlic',
      '1 carrot, grated',
      'Fresh basil',
      'Olive oil'
    ],
    instructions: [
      'Sauté onion and carrot in olive oil until soft',
      'Add garlic, cook 1 minute',
      'Add ground beef, break up and brown',
      'Stir in blended liver (it will disappear)',
      'Add tomatoes, simmer 30 minutes',
      'Season adult portions with salt AFTER removing baby portion',
      'Serve over small pasta shapes',
      'Freeze in portions'
    ],
    safetyNotes: ['Remove baby portion before adding salt', 'Same liver day rules: no CLO']
  },
  {
    id: 'sardine-mash',
    title: 'Sardine & Vegetable Mash',
    description: 'Calcium-rich small fish with low mercury load. Mashed with seasonal vegetables.',
    ageRange: '13-14',
    prepTime: '10 minutes',
    tags: ['sardines', 'DHA', 'calcium', 'quick', 'no cook'],
    pillar: 'dha',
    ingredients: [
      '2 sardines (canned in olive oil)',
      '2 tbsp mashed sweet potato',
      '1 tsp lemon juice',
      'Fresh herbs (optional)'
    ],
    instructions: [
      'Drain sardines, remove large bones (small ones are fine - calcium!)',
      'Mash thoroughly with fork',
      'Combine with sweet potato',
      'Add lemon juice and herbs',
      'Serve as is or spread on soft bread'
    ],
    dsiRationale: 'Small fish = lower mercury accumulation. Bones provide highly bioavailable calcium. Preformed DHA for ongoing brain development.'
  }
];

// Five Pillars - core framework from the recipe guide
export const fivePillars = [
  {
    id: 'gut',
    number: 1,
    title: 'Gut Maturity First',
    icon: '🦠',
    description: 'Fermented foods before nutrient-dense foods. Breast milk is low in iron by design.',
    keyFoods: ['Yogurt', 'Kefir'],
    timing: 'Weeks 1-2 of weaning',
    dsiConnection: 'Gut ecology must support safe iron absorption. The "iron paradox" - lactoferrin in breast milk starves pathogens.'
  },
  {
    id: 'cholesterol',
    number: 2,
    title: 'Cholesterol & Stable Fats',
    icon: '🧠',
    description: 'Rate-limiting for myelination. Egg yolk is the priority first food.',
    keyFoods: ['Egg yolk', 'Butter', 'Animal fats'],
    timing: 'From week 2 onwards',
    dsiConnection: 'The infant brain is building myelin sheaths that will last a lifetime. Cholesterol is the essential building block.'
  },
  {
    id: 'micronutrients',
    number: 3,
    title: 'Bioavailable Micronutrients',
    icon: '⚡',
    description: 'Heme iron 15-35% absorption vs fortified cereal 2-5%. Dose matters.',
    keyFoods: ['Liver', 'Egg yolk', 'Fish'],
    timing: 'From week 3-4, after gut preparation',
    dsiConnection: 'Traditional first foods across cultures: liver, egg yolk, bone broth. These provide building blocks that preserve geometric fidelity during tissue construction.'
  },
  {
    id: 'glycine',
    number: 4,
    title: 'Glycine & Collagen',
    icon: '🦴',
    description: 'Conditionally essential during growth. Bone broth 2-3 oz/day max.',
    keyFoods: ['Bone broth', 'Bone marrow', 'Skin-on meats'],
    timing: 'Throughout weaning',
    dsiConnection: 'Glycine is needed for collagen synthesis, detoxification, and neurotransmitter balance. Babies can\'t make enough on their own.'
  },
  {
    id: 'dha',
    number: 5,
    title: 'Preformed DHA',
    icon: '🐟',
    description: 'Structural component of brain gray matter. Conversion from plant omega-3 <5%.',
    keyFoods: ['Wild salmon', 'Sardines', 'Cod liver oil', 'Fish eggs'],
    timing: 'From month 8 onwards',
    dsiConnection: 'The brain is literally made of DHA. Plant sources (flax, chia) convert at <5%. Fatty fish provides the real thing.'
  }
];

// Critical safety rules
export const safetyRules = [
  {
    rule: 'Liver days = NO cod liver oil',
    rationale: 'Vitamin A stacking: combined sources can reach 7,000-9,000 IU vs limit 2,000-3,000 IU',
    severity: 'critical'
  },
  {
    rule: 'No salt before 12 months',
    rationale: 'Immature renal filtration capacity',
    severity: 'critical'
  },
  {
    rule: 'Ferments BEFORE liver',
    rationale: 'Gut ecology must support safe iron absorption',
    severity: 'important'
  },
  {
    rule: 'Liver capped at 1-2 tsp, 2-3×/week',
    rationale: 'More liver ≠ better iron; pathogen-feeding risk',
    severity: 'important'
  },
  {
    rule: 'CLO ¼ tsp daily, skip liver days',
    rationale: 'Fat-soluble vitamin accumulation',
    severity: 'important'
  },
  {
    rule: 'Wild-caught fish only',
    rationale: 'Farmed fish higher in inflammatory omega-6, lower in DHA',
    severity: 'recommendation'
  }
];

// Weekly rotation template for 13-14 months
export const weeklyRotation = [
  { day: 'Monday', liver: true, clo: false, mainProtein: 'Beef + liver (bolognese)' },
  { day: 'Tuesday', liver: false, clo: true, mainProtein: 'Salmon' },
  { day: 'Wednesday', liver: true, clo: false, mainProtein: 'Lamb + liver (meatballs)' },
  { day: 'Thursday', liver: false, clo: true, mainProtein: 'Eggs + cheese' },
  { day: 'Friday', liver: true, clo: false, mainProtein: 'Shepherd\'s pie (hidden liver)' },
  { day: 'Saturday', liver: false, clo: true, mainProtein: 'Sardines' },
  { day: 'Sunday', liver: false, clo: true, mainProtein: 'Chicken' },
];

import { motion } from 'framer-motion';

interface FoodCardProps {
  name: string;
  italianName?: string;
  category: string;
  ageStart: number;
  nutrients: string[];
  preparation?: string;
  onClick?: () => void;
}

const categoryIcons: Record<string, string> = {
  fruit: "🍎",
  vegetable: "🥕",
  grain: "🌾",
  protein: "🥚",
  dairy: "🧀",
  legume: "🫘",
  fat: "🫒",
  herb: "🌿",
};

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  fruit: { bg: "bg-terracotta-50", border: "border-terracotta-200", text: "text-terracotta-700" },
  vegetable: { bg: "bg-sage-50", border: "border-sage-200", text: "text-sage-700" },
  grain: { bg: "bg-cream-100", border: "border-cream-300", text: "text-cream-800" },
  protein: { bg: "bg-terracotta-100", border: "border-terracotta-300", text: "text-terracotta-800" },
  dairy: { bg: "bg-cream-50", border: "border-cream-200", text: "text-cream-700" },
  legume: { bg: "bg-sage-100", border: "border-sage-300", text: "text-sage-800" },
  fat: { bg: "bg-cream-200", border: "border-cream-400", text: "text-cream-900" },
  herb: { bg: "bg-sage-50", border: "border-sage-200", text: "text-sage-600" },
};

export default function FoodCard({
  name,
  italianName,
  category,
  ageStart,
  nutrients,
  preparation,
  onClick
}: FoodCardProps) {
  const colors = categoryColors[category] || categoryColors.vegetable;
  const icon = categoryIcons[category] || "🥗";

  return (
    <motion.button
      onClick={onClick}
      className={`card-food p-4 text-left w-full ${colors.bg} ${colors.border} group`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3">
        {/* Category icon with bloom animation */}
        <motion.div
          className="text-2xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>

        <div className="flex-1 min-w-0">
          {/* Name */}
          <h4 className={`font-serif font-medium ${colors.text} group-hover:text-olive-900 transition-colors`}>
            {name}
          </h4>

          {/* Italian name */}
          {italianName && (
            <p className="text-xs text-cream-600 italic mt-0.5">
              {italianName}
            </p>
          )}

          {/* Age badge */}
          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
              ageStart <= 8 ? 'bg-sage-100 text-sage-700' :
              ageStart <= 10 ? 'bg-cream-200 text-cream-800' :
              'bg-terracotta-100 text-terracotta-700'
            }`}>
              {ageStart}+ months
            </span>
          </div>

          {/* Key nutrients */}
          <div className="flex flex-wrap gap-1 mt-2">
            {nutrients.slice(0, 3).map((nutrient) => (
              <span
                key={nutrient}
                className="text-xs text-cream-600 bg-white/60 px-1.5 py-0.5 rounded"
              >
                {nutrient}
              </span>
            ))}
          </div>
        </div>

        {/* Expand indicator */}
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        >
          <svg className="w-5 h-5 text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
}

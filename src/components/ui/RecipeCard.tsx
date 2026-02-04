import { motion } from 'framer-motion';

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  ageRange: string;
  tags: string[];
  image?: string;
  onClick?: () => void;
}

const ageColors: Record<string, string> = {
  "7-8": "age-badge-7-8",
  "9-10": "age-badge-9-10",
  "11-12": "age-badge-11-12",
  "13-14": "age-badge-13-14",
  "7+": "age-badge-7-8",
  "9+": "age-badge-9-10",
  "12+": "age-badge-13-14",
};

export default function RecipeCard({
  title,
  description,
  prepTime,
  ageRange,
  tags,
  image,
  onClick
}: RecipeCardProps) {
  return (
    <motion.article
      className="card-recipe p-6 cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: -4, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image placeholder with botanical decoration */}
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-cream-100">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {/* Decorative food illustration placeholder */}
            <svg className="w-20 h-20 text-cream-300" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="30" fill="currentColor" />
              <circle cx="40" cy="40" r="20" fill="var(--color-cream-200)" />
              <ellipse cx="35" cy="35" rx="4" ry="3" fill="var(--color-sage-300)" />
              <ellipse cx="48" cy="38" rx="3" ry="4" fill="var(--color-terracotta-300)" />
              <ellipse cx="40" cy="48" rx="5" ry="3" fill="var(--color-sage-400)" />
            </svg>
          </div>
        )}

        {/* Aged paper corner effect */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path d="M48 0 L48 48 L0 48 Z" fill="var(--color-cream-200)" opacity="0.8" />
            <path d="M48 0 L48 48 L0 48 Z" fill="url(#fold-shadow)" />
            <defs>
              <linearGradient id="fold-shadow" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Tags row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`age-badge ${ageColors[ageRange] || 'age-badge-9-10'}`}>
            {ageRange} months
          </span>
          <span className="text-caption flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {prepTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-heading-2 text-lg group-hover:text-terracotta-700 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-cream-700 line-clamp-2">
          {description}
        </p>

        {/* Ingredient tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-sage-50 text-sage-700 rounded-full border border-sage-200"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-cream-600">
              +{tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      >
        <div className="w-8 h-8 rounded-full bg-terracotta-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </motion.article>
  );
}

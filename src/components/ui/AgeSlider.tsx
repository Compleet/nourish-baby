import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AgeSliderProps {
  onChange?: (age: number) => void;
  initialAge?: number;
}

const ageDescriptions: Record<number, { label: string; description: string }> = {
  7: { label: "7 months", description: "First tastes - single ingredients, smooth purées" },
  8: { label: "8 months", description: "Building variety - soft mashes, new flavors" },
  9: { label: "9 months", description: "Texture time - lumpy foods, soft finger foods" },
  10: { label: "10 months", description: "Self-feeding begins - more finger foods" },
  11: { label: "11 months", description: "Family foods adapted - small soft pieces" },
  12: { label: "12 months", description: "One year! - most family foods, cow's milk OK" },
  13: { label: "13 months", description: "Confident eater - varied textures, utensil practice" },
  14: { label: "14 months", description: "Little gourmand - almost everything!" },
};

export default function AgeSlider({ onChange, initialAge = 9 }: AgeSliderProps) {
  const [age, setAge] = useState(initialAge);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = useCallback((newAge: number) => {
    setAge(newAge);
    onChange?.(newAge);
  }, [onChange]);

  const currentInfo = ageDescriptions[age];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Age display with animation */}
      <div className="text-center mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={age}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-display text-terracotta-600">
              {currentInfo.label}
            </span>
            <p className="text-body-lg text-cream-700 mt-2">
              {currentInfo.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom slider track */}
      <div className="relative h-16 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-3 bg-cream-200 rounded-full" />

        {/* Filled portion */}
        <motion.div
          className="absolute left-0 h-3 bg-gradient-to-r from-sage-400 to-terracotta-400 rounded-full"
          style={{ width: `${((age - 7) / 7) * 100}%` }}
          layout
        />

        {/* Month markers */}
        <div className="absolute inset-x-0 flex justify-between px-1">
          {[7, 8, 9, 10, 11, 12, 13, 14].map((month) => (
            <button
              key={month}
              onClick={() => handleChange(month)}
              className="relative group"
            >
              <motion.div
                className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                  month <= age
                    ? 'bg-terracotta-400 border-terracotta-500'
                    : 'bg-cream-100 border-cream-300 hover:border-cream-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium transition-colors ${
                month === age ? 'text-terracotta-600' : 'text-cream-500'
              }`}>
                {month}
              </span>
            </button>
          ))}
        </div>

        {/* Draggable thumb */}
        <input
          type="range"
          min="7"
          max="14"
          value={age}
          onChange={(e) => handleChange(parseInt(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
        />

        {/* Visual thumb */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ left: `calc(${((age - 7) / 7) * 100}% - 14px)` }}
          animate={{ scale: isDragging ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className={`w-7 h-7 rounded-full bg-white border-3 border-terracotta-500 shadow-lg flex items-center justify-center transition-shadow ${
            isDragging ? 'shadow-xl ring-4 ring-terracotta-200' : ''
          }`}>
            <div className="w-2 h-2 rounded-full bg-terracotta-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

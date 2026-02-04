import { motion } from 'framer-motion';

interface HangingPlantProps {
  className?: string;
  variant?: 'left' | 'right' | 'small';
}

export default function HangingPlant({ className = '', variant = 'left' }: HangingPlantProps) {
  const swayDuration = variant === 'small' ? 5 : 6;
  const swayAmount = variant === 'small' ? 1.5 : 2;

  return (
    <motion.svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 300"
      fill="none"
      animate={{
        rotate: [-swayAmount, swayAmount, -swayAmount],
      }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: 'top center' }}
    >
      {/* Hanging rope/chain */}
      <motion.path
        d="M100 0 L100 70"
        stroke="var(--color-cream-400)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* Terracotta pot */}
      <ellipse cx="100" cy="85" rx="30" ry="10" fill="var(--color-terracotta-400)" />
      <path
        d="M70 85 L75 130 L125 130 L130 85"
        fill="var(--color-terracotta-300)"
      />
      <ellipse cx="100" cy="130" rx="25" ry="6" fill="var(--color-terracotta-400)" />

      {/* Trailing vines with leaves */}
      {variant === 'left' || variant === 'small' ? (
        <>
          {/* Main vine left */}
          <motion.path
            d="M80 130 Q50 180 60 240 Q65 280 45 340"
            stroke="var(--color-sage-500)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          {/* Main vine center */}
          <motion.path
            d="M100 130 Q95 190 100 250 Q102 290 95 340"
            stroke="var(--color-sage-400)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
          />
          {/* Main vine right */}
          <motion.path
            d="M120 130 Q150 170 140 220 Q135 270 155 320"
            stroke="var(--color-sage-500)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.4 }}
          />

          {/* Leaves on left vine */}
          <motion.ellipse
            cx="55" cy="200"
            rx="15" ry="9"
            fill="var(--color-sage-300)"
            transform="rotate(-25 55 200)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          />
          <motion.ellipse
            cx="62" cy="260"
            rx="12" ry="7"
            fill="var(--color-sage-400)"
            transform="rotate(15 62 260)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          />

          {/* Leaves on center vine */}
          <motion.ellipse
            cx="95" cy="180"
            rx="14" ry="8"
            fill="var(--color-sage-300)"
            transform="rotate(-10 95 180)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
          />
          <motion.ellipse
            cx="102" cy="230"
            rx="16" ry="10"
            fill="var(--color-sage-400)"
            transform="rotate(8 102 230)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring" }}
          />
          <motion.ellipse
            cx="98" cy="280"
            rx="13" ry="8"
            fill="var(--color-sage-500)"
            transform="rotate(-5 98 280)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          />

          {/* Leaves on right vine */}
          <motion.ellipse
            cx="145" cy="190"
            rx="14" ry="9"
            fill="var(--color-sage-300)"
            transform="rotate(30 145 190)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          />
          <motion.ellipse
            cx="138" cy="250"
            rx="11" ry="7"
            fill="var(--color-sage-400)"
            transform="rotate(-15 138 250)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          />
        </>
      ) : (
        /* Right variant - mirrored */
        <>
          <motion.path
            d="M120 130 Q150 180 140 240 Q135 280 155 340"
            stroke="var(--color-sage-500)"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            d="M100 130 Q105 190 100 250 Q98 290 105 340"
            stroke="var(--color-sage-400)"
            strokeWidth="2.5"
            fill="none"
          />
          <motion.path
            d="M80 130 Q50 170 60 220 Q65 270 45 320"
            stroke="var(--color-sage-500)"
            strokeWidth="2"
            fill="none"
          />
          <motion.ellipse cx="145" cy="200" rx="15" ry="9" fill="var(--color-sage-300)" transform="rotate(25 145 200)" />
          <motion.ellipse cx="55" cy="190" rx="14" ry="9" fill="var(--color-sage-300)" transform="rotate(-30 55 190)" />
        </>
      )}
    </motion.svg>
  );
}

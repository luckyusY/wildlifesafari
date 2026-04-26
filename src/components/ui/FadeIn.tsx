"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 48 },
  down:  { y: -48 },
  left:  { x: 48 },
  right: { x: -48 },
  none:  {},
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.65,
  direction = "up",
  once = true,
  amount = 0.15,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}

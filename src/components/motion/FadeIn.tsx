"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;   // 0.0, 0.1, ...
  y?: number;       // 初期の下方向オフセット(px)
  once?: boolean;
  className?: string;
};

export default function FadeIn({ children, delay = 0, y = 12, once = true, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px", once });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

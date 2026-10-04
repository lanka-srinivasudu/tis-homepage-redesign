import { motion, useScroll, useTransform } from "framer-motion";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, (value) => Math.min(1, Math.max(0, value)));
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      aria-hidden="true"
      data-testid="scroll-progress"
    />
  );
}

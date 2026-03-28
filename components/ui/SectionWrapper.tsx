"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={shouldReduce ? {} : fadeUpVariant}
      className={cn("py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full", className)}
    >
      {children}
    </motion.section>
  );
}

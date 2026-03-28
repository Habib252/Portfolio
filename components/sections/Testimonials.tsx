"use client";
import { motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
          Kind Words
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold font-serif text-[#F0EDE8] leading-tight">
          Testimonials
        </h2>
        <p className="mt-4 text-[#9896A0] max-w-xl mx-auto">
          What collaborators and clients say about working with me.
        </p>
      </div>

      <motion.div
        variants={shouldReduce ? {} : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {TESTIMONIALS.map((t) => (
          <motion.div key={t.author} variants={shouldReduce ? {} : fadeUpVariant}>
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import ProjectCard from "@/components/ui/ProjectCard";

export default function CaseStudies() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 w-full" style={{ backgroundColor: "#0D0D14" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
            Selected Work
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold font-serif text-[#F0EDE8] leading-tight">
            Case Studies
          </h2>
          <p className="mt-4 text-[#9896A0] max-w-xl mx-auto">
            A selection of UX/UI projects at the intersection of design craft
            and healthcare expertise.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={shouldReduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

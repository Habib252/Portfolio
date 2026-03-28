"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Palette, Users, Heart, MessageSquare } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/constants";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import SkillBadge from "@/components/ui/SkillBadge";

const ICONS = { Palette, Users, Heart, MessageSquare };

export default function Skills() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
          Expertise
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold font-serif text-[#F0EDE8] leading-tight">
          Skills & Tools
        </h2>
        <p className="mt-4 text-[#9896A0] max-w-xl mx-auto">
          A unique combination of design craft and healthcare domain knowledge.
        </p>
      </div>

      <motion.div
        variants={shouldReduce ? {} : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 gap-8"
      >
        {SKILL_GROUPS.map((group) => {
          const Icon = ICONS[group.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={group.category}
              variants={shouldReduce ? {} : fadeUpVariant}
              className="bg-[#111118] border border-[#1A1A24] rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-semibold text-[#F0EDE8]">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

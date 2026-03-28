"use client";
import { motion, useReducedMotion } from "framer-motion";
import { scaleInVariant } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  accentColor: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  category,
  gradient,
  accentColor,
}: ProjectCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : scaleInVariant}
      className="group relative bg-[#111118] border border-[#1A1A24] rounded-2xl overflow-hidden flex flex-col hover:border-[#C9A84C]/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]"
    >
      {/* Image placeholder */}
      <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-serif"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          {title[0]}
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 text-[#9896A0] backdrop-blur-sm border border-white/10">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div>
          <p className="text-xs text-[#9896A0] font-medium mb-1 uppercase tracking-wider">{subtitle}</p>
          <h3 className="text-xl font-bold font-serif text-[#F0EDE8] group-hover:text-[#C9A84C] transition-colors duration-200">
            {title}
          </h3>
        </div>
        <p className="text-[#9896A0] text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <SkillBadge key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-[#1A1A24]">
          <span className="inline-flex items-center gap-1.5 text-sm text-[#C9A84C] font-medium group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
            View Case Study
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

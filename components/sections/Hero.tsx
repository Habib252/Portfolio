"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.10), transparent)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        variants={shouldReduce ? {} : staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Eyebrow badge */}
        <motion.div variants={shouldReduce ? {} : fadeUpVariant}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={shouldReduce ? {} : fadeUpVariant}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif text-[#F0EDE8] leading-[1.05] tracking-tight"
        >
          Kerolos
          <br />
          <span className="text-[#C9A84C]">Refaat</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={shouldReduce ? {} : fadeUpVariant}
          className="text-lg sm:text-xl md:text-2xl text-[#9896A0] font-medium tracking-wide"
        >
          UX/UI Designer · Pharmacist
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={shouldReduce ? {} : fadeUpVariant}
          className="max-w-2xl text-[#9896A0] text-base md:text-lg leading-relaxed"
        >
          I bridge the gap between healthcare complexity and elegant digital
          experiences — creating interfaces that are both clinically accurate
          and delightfully intuitive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduce ? {} : fadeUpVariant}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Button href="#work" size="lg">
            View My Work
          </Button>
          <Button
            href={SITE_CONFIG.linkedin}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={shouldReduce ? {} : fadeUpVariant}
          className="flex gap-8 mt-6 pt-6 border-t border-[#1A1A24] w-full justify-center"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
            { value: "2", label: "Domains: Design & Pharmacy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold font-serif text-[#C9A84C]">{stat.value}</p>
              <p className="text-xs text-[#5A5966] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A5966]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

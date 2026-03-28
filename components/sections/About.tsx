"use client";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { slideInLeftVariant, slideInRightVariant, staggerContainer } from "@/lib/animations";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function About() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
      <motion.div
        variants={shouldReduce ? {} : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Text */}
        <motion.div
          variants={shouldReduce ? {} : slideInLeftVariant}
          className="flex flex-col gap-6"
        >
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
              About Me
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold font-serif text-[#F0EDE8] leading-tight">
              Designing for humans, informed by science
            </h2>
          </div>

          <div className="space-y-4 text-[#9896A0] leading-relaxed">
            <p>
              I&apos;m Kerolos Refaat — a UX/UI Designer with 3 years of hands-on
              experience creating digital products, and a licensed pharmacist with
              a deep understanding of healthcare systems and patient needs.
            </p>
            <p>
              This dual background gives me a unique lens: I don&apos;t just design
              for aesthetics — I design for clinical accuracy, regulatory
              awareness, and real-world patient outcomes. Whether it&apos;s a mobile
              health app or a pharmacy management dashboard, I ensure every
              interaction is purposeful.
            </p>
            <p>
              My primary tool is Figma, where I bring ideas from rough sketches
              to high-fidelity prototypes, collaborating closely with developers,
              product managers, and clinicians throughout the process.
            </p>
          </div>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-3">
            {[
              "3 Years in UX/UI Design",
              "Licensed Pharmacist",
              "Figma Expert",
              "Healthcare Specialist",
            ].map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 bg-[#111118] border border-[#1A1A24] rounded-full text-sm text-[#9896A0] font-medium"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-2">
            <Button
              href={SITE_CONFIG.linkedin}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-4 h-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          variants={shouldReduce ? {} : slideInRightVariant}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Main avatar card */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-[#111118] to-[#1A1A24] border border-[#2A2A34] flex items-center justify-center shadow-[0_0_60px_rgba(201,168,76,0.06)]">
              <span className="text-8xl font-bold font-serif text-[#C9A84C]">KR</span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#111118] border border-[#C9A84C]/30 rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <p className="text-xs text-[#5A5966]">Experience</p>
              <p className="text-lg font-bold font-serif text-[#C9A84C]">3 Years</p>
            </div>

            {/* Top badge */}
            <div className="absolute -top-4 -left-4 bg-[#111118] border border-[#1A1A24] rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <p className="text-xs text-[#5A5966]">Primary Tool</p>
              <p className="text-sm font-semibold text-[#F0EDE8]">Figma</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

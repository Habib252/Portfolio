"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { slideInLeftVariant, slideInRightVariant, staggerContainer } from "@/lib/animations";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const shouldReduce = useReducedMotion();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 w-full"
      style={{ backgroundColor: "#0D0D14" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={shouldReduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left: intro */}
          <motion.div
            variants={shouldReduce ? {} : slideInLeftVariant}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
                Get In Touch
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold font-serif text-[#F0EDE8] leading-tight">
                Let&apos;s work together
              </h2>
            </div>

            <p className="text-[#9896A0] leading-relaxed">
              Whether you have a healthcare product that needs a design
              overhaul, a new app idea, or just want to connect — I&apos;d love to
              hear from you. I&apos;m currently available for freelance projects.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-[#9896A0]">Available for freelance projects</span>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9896A0] hover:text-[#C9A84C] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111118] border border-[#1A1A24] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-[#9896A0] hover:text-[#C9A84C] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111118] border border-[#1A1A24] flex items-center justify-center group-hover:border-[#C9A84C]/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={shouldReduce ? {} : slideInRightVariant}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#111118] border border-[#1A1A24] rounded-2xl p-8 flex flex-col gap-5"
            >
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#9896A0]">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#0A0A0F] border border-[#1A1A24] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#5A5966] focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#9896A0]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-[#0A0A0F] border border-[#1A1A24] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#5A5966] focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#9896A0]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-[#0A0A0F] border border-[#1A1A24] rounded-lg px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#5A5966] focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors resize-none"
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full justify-center"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0A0A0F]/30 border-t-[#0A0A0F] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A24] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold font-serif text-[#C9A84C]">KR</div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#5A5966] hover:text-[#F0EDE8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5A5966] hover:text-[#C9A84C] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[#5A5966] hover:text-[#C9A84C] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1A1A24] text-center">
          <p className="text-xs text-[#5A5966]">
            © {new Date().getFullYear()} Kerolos Refaat. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

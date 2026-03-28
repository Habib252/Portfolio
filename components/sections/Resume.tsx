import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Resume() {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20 w-full"
      style={{ backgroundColor: "#0D0D14" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="border border-[#1A1A24] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#111118] hover:border-[#C9A84C]/20 transition-colors duration-300">
          <div className="text-center md:text-left">
            <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
              Resume
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#F0EDE8]">
              Want to see more?
            </h2>
            <p className="mt-3 text-[#9896A0] max-w-md">
              Download my full CV to explore my work experience, education,
              and detailed project history.
            </p>
          </div>
          <Button
            href="/cv/kerolos-refaat-cv.pdf"
            size="lg"
            download
            className="flex-shrink-0"
          >
            <Download className="w-5 h-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}

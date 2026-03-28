interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#111118] border border-[#1A1A24] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C9A84C]/30 transition-colors duration-300">
      {/* Quote mark */}
      <div className="text-6xl font-serif text-[#C9A84C]/30 leading-none select-none">"</div>
      <blockquote className="text-[#9896A0] text-[0.95rem] leading-relaxed italic flex-1 -mt-6">
        {quote}
      </blockquote>
      <div className="flex items-center gap-4 pt-2 border-t border-[#1A1A24]">
        <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-sm font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-[#F0EDE8] font-semibold text-sm">{author}</p>
          <p className="text-[#5A5966] text-xs">{role} · {company}</p>
        </div>
      </div>
    </div>
  );
}

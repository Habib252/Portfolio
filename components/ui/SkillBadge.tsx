import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
}

export default function SkillBadge({ label, variant = "default", className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-150",
        variant === "default"
          ? "bg-[#1A1A24] text-[#9896A0] border border-[#2A2A34] hover:border-[#C9A84C]/40 hover:text-[#F0EDE8]"
          : "bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30",
        className
      )}
    >
      {label}
    </span>
  );
}

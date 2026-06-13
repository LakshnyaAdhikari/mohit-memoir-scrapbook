import type { ReactNode } from "react";

interface StickyNoteProps {
  children: ReactNode;
  rotate?: number;
  color?: "yellow" | "rose" | "mint" | "cream";
  className?: string;
}

const palette = {
  yellow: "bg-[oklch(0.92_0.12_95)]",
  rose:   "bg-[oklch(0.86_0.08_25)]",
  mint:   "bg-[oklch(0.88_0.06_150)]",
  cream:  "bg-[oklch(0.94_0.04_85)]",
};

export function StickyNote({ children, rotate = -3, color = "yellow", className = "" }: StickyNoteProps) {
  return (
    <div
      className={`${palette[color]} p-5 shadow-[0_8px_18px_-10px_rgba(60,40,20,0.4)] font-hand-alt text-ink text-lg leading-snug ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

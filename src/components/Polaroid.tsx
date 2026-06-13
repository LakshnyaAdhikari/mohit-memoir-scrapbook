import type { ReactNode } from "react";

interface PolaroidProps {
  src?: string;
  alt?: string;
  caption?: string;
  rotate?: number;
  tape?: "top" | "left" | "right" | "none";
  className?: string;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-44",
  md: "w-60",
  lg: "w-80",
};

export function Polaroid({
  src, alt = "", caption, rotate = -2, tape = "top", className = "", children, size = "md",
}: PolaroidProps) {
  return (
    <div
      className={`polaroid relative inline-block ${sizes[size]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ["--r" as string]: `${rotate}deg` }}
    >
      {tape !== "none" && (
        <div
          className="tape-strip"
          style={
            tape === "top"
              ? { top: -12, left: "50%", transform: "translateX(-50%) rotate(-4deg)" }
              : tape === "left"
              ? { top: 18, left: -28, transform: "rotate(-40deg)" }
              : { top: 18, right: -28, transform: "rotate(40deg)" }
          }
        />
      )}
      <div className="aspect-square w-full overflow-hidden bg-sepia/20">
        {src ? (
          <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          children ?? (
            <div className="w-full h-full grid place-items-center font-hand text-cocoa/40 text-xl text-center px-4">
              a photo lives here
            </div>
          )
        )}
      </div>
      {caption && (
        <p className="font-hand text-cocoa text-xl text-center mt-3 leading-tight">{caption}</p>
      )}
    </div>
  );
}

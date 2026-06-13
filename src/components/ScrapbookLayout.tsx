import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About Him" },
  { to: "/memory-lane", label: "Memory Lane" },
  { to: "/food",        label: "Food Ratings" },
  { to: "/business",    label: "The Business Chapter" },
  { to: "/letters",     label: "Letters" },
];

export function ScrapbookLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="above-grain min-h-screen flex flex-col">
      <header className="px-4 sm:px-8 pt-6 pb-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <Link to="/" className="font-hand text-3xl sm:text-4xl text-cocoa tracking-wide hover:rotate-[-1deg] transition-transform">
            The Mohit Files
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base sm:text-lg">
            {nav.map((item, i) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`font-hand-alt scrap-link ${active ? "text-cocoa" : "text-ink/70"}`}
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.6}deg)` }}
                >
                  <span className={active ? "ink-underline" : ""}>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="w-full max-w-4xl border-t border-dashed border-cocoa/30" />
        </div>
      </header>

      <main key={pathname} className="flex-1 px-4 sm:px-8 pb-16 animate-page-flip">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>

      <footer className="px-4 pb-8 text-center">
        <p className="font-hand text-cocoa/70 text-lg">
          made with love, for Papa · est. 11.05.1975
        </p>
      </footer>
    </div>
  );
}

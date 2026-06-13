import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";

export const Route = createFileRoute("/letters")({
  head: () => ({
    meta: [
      { title: "Letters & Reasons — The Mohit Files" },
      { name: "description", content: "Open any reason. Read the letter inside." },
      { property: "og:title", content: "Letters & Reasons We Love You" },
      { property: "og:description", content: "Personal notes from your daughters — and the rest of the four." },
    ],
  }),
  component: Letters,
});

interface Reason { title: string; letter: string; }

const reasons: Reason[] = [
  { title: "for your love",
    letter: "You love the way some people pray — quietly, daily, without needing it to be seen. We grew up inside that quiet, and we didn't even know it was rare until we left the house and saw the rest of the world." },
  { title: "for your sacrifices",
    letter: "We will never know all of them. That's the point of a sacrifice — it goes uncounted on purpose. But we see the shape of them in the life we got to have, and we will spend the rest of ours being grateful for the math you did in silence." },
  { title: "for your strength",
    letter: "You carry weight like it doesn't weigh anything. Seventeen years in one chapter and then the courage to open a new one — that's not stubbornness, that's spine. We're learning from it." },
  { title: "for your humour",
    letter: "You don't try to be funny. You just are. Your pronunciations, your timing, calling Mumma \u201CPrenka\u201D with full conviction — the house has its own laugh track because you live in it." },
  { title: "for your courage",
    letter: "Starting again at any age is hard. Starting again with a family looking up at you is harder. You did it anyway. Quietly. Like it was the obvious thing to do." },
  { title: "for your patience",
    letter: "For every dropped vessel, every shouted answer to a calm question, every late-night phone call we made when we should've slept — you stayed steady. That patience is the floor we walk on." },
  { title: "for always showing up",
    letter: "Birthdays. Bad days. Tiny days nobody else noticed were a big deal. You were there. Often the first one to be there. Sometimes the only one. We noticed every single time." },
  { title: "for teaching us resilience",
    letter: "Not with a lecture. With the way you live. You didn't tell us to be strong — you let us watch what it looks like, and we copied the homework." },
  { title: "for always pushing us forward",
    letter: "UPSC or otherwise — you believed in our heads before we did. You bet on us when we were still figuring out what the bet was. Whatever we become, the first hand on the wheel was yours." },
];

function Letters() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <ScrapbookLayout>
      <header className="pt-4 pb-10">
        <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-sm">File 06</p>
        <h1 className="font-hand text-6xl sm:text-7xl text-cocoa">Letters &amp; Reasons</h1>
        <p className="font-serif italic text-ink/75 max-w-2xl mt-2">
          Pick a reason. The note is inside. Read slowly — it was written that way.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reasons.map((r, i) => (
          <button
            key={r.title}
            onClick={() => setOpenIdx(i)}
            className="paper-card text-left p-6 relative hover:-translate-y-1 hover:rotate-[-0.5deg] transition-transform cursor-pointer"
            style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.8}deg)` }}
          >
            <div className="tape-strip" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-3deg)" }} />
            <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-xs">
              Reason № {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-hand text-3xl text-cocoa mt-2 mb-3">{r.title}</h2>
            <p className="font-hand-alt text-gold text-lg">open the letter →</p>
          </button>
        ))}
      </section>

      <section className="paper-card p-10 sm:p-14 max-w-3xl mx-auto text-center relative">
        <div className="tape-strip" style={{ top: -10, left: 40, transform: "rotate(-6deg)" }} />
        <div className="tape-strip" style={{ top: -10, right: 40, transform: "rotate(6deg)" }} />
        <p className="font-serif italic text-cocoa/80 text-lg mb-4">— a closing note —</p>
        <p className="font-hand text-3xl sm:text-4xl text-cocoa leading-snug">
          We are a family of four. Three of us are the lucky ones,
          because one of us is you.
        </p>
        <p className="font-hand-alt text-xl text-ink mt-6">
          Happy birthday, Papa. Thank you for being the soft, steady,
          quietly hilarious centre of everything.
        </p>
        <p className="font-hand text-cocoa/70 mt-5 text-xl">— your daughters (and Prenka) 🤎</p>
      </section>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-ink/40 backdrop-blur-sm animate-ink-in"
          onClick={() => setOpenIdx(null)}
        >
          <article
            className="paper-card relative max-w-xl w-full p-8 sm:p-10 animate-page-flip max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
          >
            <div className="tape-strip" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-3deg)" }} />
            <button
              onClick={() => setOpenIdx(null)}
              aria-label="Close letter"
              className="absolute top-3 right-4 font-hand text-2xl text-cocoa/60 hover:text-cocoa"
            >
              ✕
            </button>
            <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-xs">
              Reason № {String(openIdx + 1).padStart(2, "0")}
            </p>
            <h2 id="letter-title" className="font-hand text-4xl text-cocoa mt-1 mb-5">
              {reasons[openIdx].title}
            </h2>
            <p className="font-serif text-lg text-ink/90 leading-relaxed whitespace-pre-line">
              {reasons[openIdx].letter}
            </p>
            <p className="font-hand text-cocoa/70 text-right mt-6 text-xl">— with love</p>
          </article>
        </div>
      )}
    </ScrapbookLayout>
  );
}

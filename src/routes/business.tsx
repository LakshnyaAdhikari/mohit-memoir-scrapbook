import { createFileRoute } from "@tanstack/react-router";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";
import { StickyNote } from "@/components/StickyNote";
import sunrise from "@/assets/sunrise-hills.jpg";

export const Route = createFileRoute("/business")({
  component: Business,
});

const milestones = [
  { year: "11 yrs", title: "In banking",            body: "Bank Manager. Suited up. Showed up. Built trust, one client at a time." },
  { year: "now",    title: "A new road",            body: "Building his own path — financial advisor, new ventures, fresh ground." },
  { year: "always", title: "Family at the center",  body: "Every decision routed through one question: is this good for them?" },
];

const symbols = [
  { glyph: "⛰", label: "the mountain" },
  { glyph: "↗", label: "the upward road" },
  { glyph: "☼", label: "sunrise over hills" },
  { glyph: "⌂", label: "home, always" },
  { glyph: "✦", label: "first light" },
  { glyph: "↺", label: "begin again" },
];

function Business() {
  return (
    <ScrapbookLayout>
      <header className="pt-4 pb-10">
        <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-sm">File 05</p>
        <h1 className="font-hand text-6xl sm:text-7xl text-cocoa">The Business Chapter</h1>
        <p className="font-serif italic text-ink/75 max-w-2xl mt-2">Some chapters aren't loud. They're brave.</p>
      </header>

      <section className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center mb-16">
        <div className="paper-card p-3 relative">
          <div className="tape-strip" style={{ top: -10, left: "20%", transform: "rotate(-6deg)" }} />
          <div className="tape-strip" style={{ top: -10, right: "20%", transform: "rotate(6deg)" }} />
          <img
            src={sunrise}
            alt="A winding road toward sunrise over hills"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover sepia-[0.15]"
          />
          <p className="font-hand text-cocoa text-2xl text-center py-3">
            the road keeps going. so does he.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-hand text-4xl text-cocoa leading-tight">
            11 years of building.<br/>
            <span className="ink-underline">Then the courage to begin again.</span>
          </h2>
          <p className="font-serif text-lg text-ink/85 leading-relaxed">
            For eleven years he wore the bank like a second skin — became its Manager,
            steward of other people's plans. And then, one quieter morning,
            he chose to build something of his own.
          </p>
          <p className="font-serif text-lg text-ink/85 leading-relaxed">
            Not because the old chapter failed. Because a new one was knocking.
            He answered, the way he always does — quietly, with both feet, with us in mind.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <article
              key={m.title}
              className="paper-card p-6 relative"
              style={{ transform: `rotate(${(i - 1) * 1.2}deg)` }}
            >
              <p className="font-marker text-gold text-2xl tracking-widest">{m.year}</p>
              <h3 className="font-hand text-3xl text-cocoa mt-1 mb-2">{m.title}</h3>
              <p className="font-serif italic text-ink/80">{m.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <blockquote className="paper-card p-10 sm:p-14 relative max-w-3xl mx-auto text-center">
          <div className="tape-strip" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-3deg)" }} />
          <p className="font-hand text-3xl sm:text-4xl text-cocoa leading-tight">
            "Whatever he builds, he builds for us first.
            That's the part no résumé will ever say."
          </p>
          <footer className="font-typewriter uppercase tracking-widest text-cocoa/60 text-xs mt-6">
            — entered into the family record
          </footer>
        </blockquote>
      </section>

      <section>
        <h2 className="font-hand text-4xl text-cocoa mb-2">small symbols, big meanings</h2>
        <p className="font-serif italic text-ink/70 mb-6">a glossary of the road so far</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {symbols.map((s, i) => (
            <StickyNote key={s.label} color={i % 2 ? "cream" : "yellow"} rotate={(i % 2 ? 1 : -1) * 2}>
              <span className="text-4xl text-cocoa font-serif block mb-1">{s.glyph}</span>
              <span className="font-hand text-xl text-ink">{s.label}</span>
            </StickyNote>
          ))}
        </div>
      </section>
    </ScrapbookLayout>
  );
}

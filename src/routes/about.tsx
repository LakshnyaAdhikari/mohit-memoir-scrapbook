import { createFileRoute } from "@tanstack/react-router";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";
import { StickyNote } from "@/components/StickyNote";

export const Route = createFileRoute("/about")({
  component: About,
});

const traits = [
  "deeply affectionate",
  "family first, always",
  "selfless to a fault",
  "happiest when we're happy",
  "accidentally hilarious",
  "the family news channel",
  "professional Netflix marathoner",
  "suspense-thriller scholar",
  "certified foodie",
  "sweet tooth, no shame",
  "always thinking three steps ahead",
  "UPSC believer (no matter the field)",
];

const classified = [
  { title: "Breaking News Bureau",            body: "Probably knows the headline before the news channels do.",         rotate: -2 },
  { title: "Netflix Executive (unofficial)",  body: "Has watched enough seasons to deserve producer credits.",           rotate: 1.5 },
  { title: "Food Critic of the House",        body: "Can rate a meal better than any restaurant reviewer.",              rotate: -1 },
  { title: "Mentally Elsewhere",              body: "Sometimes disappears into his thoughts while sitting right beside us.", rotate: 2 },
  { title: "Personal Pronunciation Dictionary", body: "Has his own dialect. We've stopped correcting. It's lore now.",   rotate: -2.5 },
  { title: "UPSC Evangelist",                 body: "Strongly believes UPSC is the answer to every career question ever asked.", rotate: 1 },
];

const insideJokes = [
  { color: "rose"   as const, text: "Calls Mumma \u201CPrenka\u201D instead of Priyanka. We're not allowed to correct him.", rotate: -3 },
  { color: "yellow" as const, text: "Could write a book: \u201C100 Ways to Ignore Your Children Without Them Noticing.\u201D", rotate: 2.5 },
  { color: "mint"   as const, text: "Emotionally present. Mentally halfway through a Netflix plot twist.", rotate: -2 },
];

function About() {
  return (
    <ScrapbookLayout>
      <header className="pt-4 pb-10">
        <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-sm">File 02</p>
        <h1 className="font-hand text-6xl sm:text-7xl text-cocoa">About Him.</h1>
        <p className="font-serif italic text-xl text-ink/75 mt-3 max-w-2xl">
          Subject: Mohit Adhikari. Husband. Papa. Remote-control authority.
          Quietly the best person in any room he forgets to leave.
        </p>
      </header>

      <section className="paper-card p-8 mb-14 relative">
        <div className="tape-strip" style={{ top: -10, left: 40, transform: "rotate(-6deg)" }} />
        <div className="tape-strip" style={{ top: -10, right: 60, transform: "rotate(8deg)" }} />
        <h2 className="font-hand text-4xl text-cocoa mb-5">Field notes</h2>
        <ul className="flex flex-wrap gap-3">
          {traits.map((t, i) => (
            <li
              key={t}
              className="font-hand-alt text-lg px-4 py-1 border border-cocoa/40 rounded-full bg-cream/60 text-ink"
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
          <h2 className="font-hand text-5xl text-cocoa">Classified Facts</h2>
          <span className="stamp text-sm">Top Secret · Family Only</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classified.map((c) => (
            <article
              key={c.title}
              className="paper-card p-6 relative"
              style={{ transform: `rotate(${c.rotate}deg)` }}
            >
              <div className="absolute -top-3 left-4 font-typewriter text-xs bg-cocoa text-cream px-2 py-1 tracking-widest">FILE</div>
              <h3 className="font-marker text-xl text-cocoa mb-2 leading-tight">{c.title}</h3>
              <p className="font-hand-alt text-ink/85 text-lg leading-snug">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-hand text-5xl text-cocoa mb-2">Inside jokes (do not redistribute)</h2>
        <p className="font-serif italic text-ink/70 mb-8">family-only addendum</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {insideJokes.map((j, i) => (
            <StickyNote key={i} color={j.color} rotate={j.rotate}>{j.text}</StickyNote>
          ))}
        </div>
      </section>
    </ScrapbookLayout>
  );
}

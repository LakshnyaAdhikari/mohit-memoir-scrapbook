import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";
import { Polaroid } from "@/components/Polaroid";
import { StickyNote } from "@/components/StickyNote";
import heroPhoto from "@/assets/polaroid-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Mohit Files — Home" },
      { name: "description", content: "A scrapbook of stories, laughter, chaos, food reviews, mountains, and love — for Papa." },
      { property: "og:title", content: "The Mohit Files" },
      { property: "og:description", content: "An interactive memory album for Papa." },
    ],
  }),
  component: Home,
});

const previews = [
  { to: "/about",       label: "About Him",            note: "the man, the myth, the remote-control king", rotate: -3 },
  { to: "/memory-lane", label: "Memory Lane",          note: "polaroids, trekking, vada at the top",        rotate:  2 },
  { to: "/food",        label: "Dad-Approved Ratings", note: "khatti dal · madra · mithai · 10/10",         rotate: -2 },
  { to: "/business",    label: "The Business Chapter", note: "17 years of banking · then a brave new road", rotate:  3 },
  { to: "/letters",     label: "Letters & Reasons",    note: "click any reason. read the note inside.",     rotate: -1 },
] as const;

function Home() {
  return (
    <ScrapbookLayout>
      <section className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center pt-6 pb-16">
        <div className="space-y-6 animate-ink-in">
          <p className="font-typewriter text-cocoa/70 tracking-widest text-sm uppercase">
            Volume i · a family archive
          </p>
          <h1 className="font-hand text-6xl sm:text-7xl lg:text-8xl text-cocoa leading-[0.95]">
            The <span className="ink-underline">Mohit</span> Files
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-ink/80 max-w-xl leading-snug">
            A collection of stories, laughter, chaos, food reviews,
            mountains, and love.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="stamp text-sm">Property of Family</span>
            <span className="stamp text-sm" style={{ transform: "rotate(4deg)" }}>Handle with care</span>
          </div>
        </div>

        <div className="relative h-[440px] sm:h-[520px]">
          <Polaroid
            src={heroPhoto}
            alt="The family"
            caption="us, somewhere in the in-between"
            rotate={-5}
            size="lg"
            className="absolute top-4 left-2 sm:left-10 animate-drift"
          />
          <StickyNote rotate={6} color="yellow" className="absolute bottom-2 right-0 max-w-[220px]">
            <span className="font-marker text-sm text-cocoa/80 tracking-wider block mb-1">p.s.</span>
            Happy Birthday,<br />Papa. 🤎
          </StickyNote>
          <div className="absolute -bottom-4 left-0 font-hand text-cocoa/70 text-xl rotate-[-4deg]" aria-hidden>
            ↳ turn the page →
          </div>
        </div>
      </section>

      <div className="border-t border-dashed border-cocoa/30 my-4" />

      <section className="py-10">
        <h2 className="font-hand text-4xl sm:text-5xl text-cocoa mb-2">Chapters</h2>
        <p className="font-serif italic text-ink/70 mb-10">tap a card. open the drawer. read the entry.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previews.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="paper-card relative block p-6 pt-10 hover:-translate-y-1 hover:rotate-[-0.5deg] transition-transform"
              style={{ transform: `rotate(${p.rotate * 0.5}deg)` }}
            >
              <div className="tape-strip" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-3deg)" }} />
              <p className="font-typewriter text-xs uppercase tracking-widest text-cocoa/60 mb-2">Chapter</p>
              <h3 className="font-hand text-3xl text-cocoa mb-3">{p.label}</h3>
              <p className="font-hand-alt text-ink/80 text-lg leading-snug">{p.note}</p>
              <p className="font-hand text-gold mt-4 text-xl">open →</p>
            </Link>
          ))}
        </div>
      </section>
    </ScrapbookLayout>
  );
}

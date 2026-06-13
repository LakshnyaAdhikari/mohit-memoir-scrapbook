import { createFileRoute } from "@tanstack/react-router";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";
import { Polaroid } from "@/components/Polaroid";
import { StickyNote } from "@/components/StickyNote";
import mountains from "@/assets/polaroid-mountains.jpg";
import kerala from "@/assets/polaroid-kerala.jpg";
import food from "@/assets/polaroid-food.jpg";
import family from "@/assets/polaroid-family.jpg";

export const Route = createFileRoute("/memory-lane")({
  component: MemoryLane,
});

const polaroids = [
  { caption: "the one with the misty pines", rotate: -4, src: mountains, top: "2%",  left: "4%",  size: "md" as const },
  { caption: "us, mid-laughter",             rotate:  3, src: family,    top: "18%", left: "38%", size: "md" as const },
  { caption: "still water, slow morning",    rotate: -2, src: kerala,    top: "52%", left: "8%",  size: "md" as const },
  { caption: "the thali that started it all",rotate:  5, src: food,      top: "58%", left: "55%", size: "sm" as const },
];

const memoryNotes = [
  { text: "family treks to Indrunag in Dharamshala — boots crunching pine, Papa always 10 steps ahead.", color: "yellow" as const, rotate: -4 },
  { text: "the vada at the top of the trek. earned, devoured, never forgotten.", color: "rose" as const, rotate: 3 },
  { text: "Kerala. backwaters slow as syrup. coconut on every breeze.", color: "mint" as const, rotate: -2 },
  { text: "mountain walks where nobody had to say anything.", color: "cream" as const, rotate: 4 },
  { text: "those quiet afternoons — Papa, the TV, the rest of us pretending to read.", color: "yellow" as const, rotate: -3 },
];

const doodles = ["♡", "✿", "★", "✈", "☼", "❀"];

function MemoryLane() {
  return (
    <ScrapbookLayout>
      <header className="pt-4 pb-8 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-sm">File 03</p>
          <h1 className="font-hand text-6xl sm:text-7xl text-cocoa">Memory Lane</h1>
          <p className="font-serif italic text-ink/75 max-w-xl">
            no order. no timeline. just the way memory actually works —
            half a smell, half a photograph, half a laugh.
          </p>
        </div>
        <span className="stamp text-sm" style={{ transform: "rotate(8deg)" }}>Do Not Sort</span>
      </header>

      <section className="paper-card relative h-[820px] sm:h-[760px] overflow-hidden p-4">
        {doodles.map((d, i) => (
          <span
            key={i}
            className="absolute font-hand text-3xl text-cocoa/40 select-none"
            style={{
              top: `${5 + (i * 17) % 80}%`,
              left: `${3 + (i * 23) % 90}%`,
              transform: `rotate(${(i % 2 ? 1 : -1) * (5 + i * 3)}deg)`,
            }}
            aria-hidden
          >
            {d}
          </span>
        ))}

        {polaroids.map((c, i) => (
          <div
            key={i}
            className="absolute animate-drift"
            style={{ top: c.top, left: c.left, ["--r" as string]: `${c.rotate}deg`, animationDelay: `${i * 0.5}s` }}
          >
            <Polaroid src={c.src} caption={c.caption} rotate={c.rotate} size={c.size} tape={i % 2 ? "left" : "top"} />
          </div>
        ))}

        <StickyNote rotate={-6} color="yellow" className="absolute top-[6%] right-[4%] max-w-[200px]">
          remember the rain in Dharamshala? you said "ek aur chai" three times. legend.
        </StickyNote>
        <StickyNote rotate={5} color="rose" className="absolute bottom-[6%] right-[8%] max-w-[220px]">
          and that one Kerala morning — fish curry for breakfast. you didn't even blink.
        </StickyNote>

        <p className="absolute bottom-3 left-6 font-hand text-cocoa/70 text-2xl" style={{ transform: "rotate(-3deg)" }}>
          ~ everything important happened off-camera ~
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-hand text-4xl text-cocoa mb-6">scribbles in the margin</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoryNotes.map((n, i) => (
            <StickyNote key={i} color={n.color} rotate={n.rotate}>{n.text}</StickyNote>
          ))}
        </div>
      </section>
    </ScrapbookLayout>
  );
}

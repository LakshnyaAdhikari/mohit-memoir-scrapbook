import { createFileRoute } from "@tanstack/react-router";
import { ScrapbookLayout } from "@/components/ScrapbookLayout";
import { Polaroid } from "@/components/Polaroid";
import foodPhoto from "@/assets/polaroid-food.jpg";

export const Route = createFileRoute("/food")({
  component: Food,
});

const dishes = [
  { name: "Himachali khatti dal", rating: 10, badge: "Papa Approved",        sweetTooth: false, note: "the comfort dish. nothing comes close." },
  { name: "Madra",                rating: 10, badge: "Would Order Again",    sweetTooth: false, note: "chickpeas in yogurt. quiet genius." },
  { name: "Kachori",              rating:  9, badge: "Eats Everything",      sweetTooth: false, note: "breakfast? lunch? evening? yes." },
  { name: "Nani's kitchen",       rating: 11, badge: "Off the Charts",       sweetTooth: false, note: "the original 5-star establishment." },
  { name: "Mithai (any kind)",    rating: 10, badge: "Sweet Tooth Approved", sweetTooth: true,  note: "dessert always has room. always." },
  { name: "Anything experimental", rating: 8, badge: "No Food Left Behind",  sweetTooth: false, note: "willing to try. won't lie about it." },
];

function stars(n: number) {
  const full = Math.min(n, 10);
  return "★".repeat(full) + (n > 10 ? "✦" : "") + "☆".repeat(Math.max(0, 10 - full));
}

const badges = ["Eats everything", "Experimental eater", "No food left behind", "Dessert always has room"];

function Food() {
  return (
    <ScrapbookLayout>
      <header className="pt-4 pb-10">
        <p className="font-typewriter uppercase tracking-widest text-cocoa/60 text-sm">File 04</p>
        <h1 className="font-hand text-6xl sm:text-7xl text-cocoa">Dad-Approved Ratings</h1>
        <p className="font-serif italic text-ink/75 max-w-2xl mt-2">
          A registry of meals that have passed through Papa's kitchen tribunal.
          Verdicts final. Appeals welcome (over chai).
        </p>
      </header>

      <section className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center mb-14">
        <Polaroid src={foodPhoto} caption="exhibit A: the thali" rotate={-4} size="lg" />
        <div className="paper-card p-8 relative">
          <div className="tape-strip" style={{ top: -10, left: "30%", transform: "rotate(-5deg)" }} />
          <h2 className="font-hand text-5xl text-cocoa mb-3">"Would Papa eat this?"</h2>
          <p className="font-serif italic text-ink/80 text-lg">A three-step household algorithm:</p>
          <ol className="font-hand-alt text-xl text-ink mt-3 space-y-1 list-decimal list-inside">
            <li>Does it have spice? <span className="text-cocoa">→ probably yes.</span></li>
            <li>Is it sweet? <span className="text-cocoa">→ definitely yes.</span></li>
            <li>Did Nani make it? <span className="text-cocoa">→ already on the plate.</span></li>
          </ol>
          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((b, i) => (
              <span
                key={b}
                className="font-marker text-sm bg-gold/30 border border-cocoa/30 text-cocoa px-3 py-1"
                style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 1.5}deg)` }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-hand text-5xl text-cocoa mb-6">Official Papa Ratings</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="paper-card p-6 relative"
              style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.8}deg)` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-hand text-3xl text-cocoa leading-tight">{d.name}</h3>
                {d.sweetTooth && (
                  <span className="font-marker text-xs bg-rose/40 text-cocoa px-2 py-1 border border-cocoa/30">
                    sweet tooth
                  </span>
                )}
              </div>
              <p className="font-serif italic text-ink/70 mt-1">{d.note}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-gold text-2xl tracking-widest leading-none" aria-label={`${d.rating} out of 10`}>
                  {stars(d.rating)}
                </span>
                <span className="stamp text-xs">{d.badge}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 text-center">
        <p className="font-hand text-3xl text-cocoa rotate-[-1deg] inline-block">
          honorary mention: chai. always chai.
        </p>
      </section>
    </ScrapbookLayout>
  );
}

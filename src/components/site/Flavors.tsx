type FlavorProps = { no: string; name: string; tag: string; note: string };

function Flavor({ no, name, tag, note }: FlavorProps) {
  return (
    <article className="group flex min-h-[15rem] flex-col justify-between bg-nude p-6 transition-colors hover:bg-paper md:min-h-[18rem] md:p-8">
      <div className="flex items-center justify-between">
        <span className="kicker text-muted-foreground">No. {no}</span>
        <span className="pill-cheetah">
          <span>{tag}</span>
        </span>
      </div>
      <div>
        <h3 className="font-display text-3xl font-semibold leading-[1.02] md:text-4xl">{name}</h3>
        <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-muted-foreground md:text-base">{note}</p>
      </div>
    </article>
  );
}

export function Flavors() {
  return (
    <section id="flavors" className="bg-nude">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="kicker">03 — Tasting notes</span>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] md:text-7xl">
              The house <em className="font-normal">flavors</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:text-right">
            Six signatures, made to pour into any Signature Latte ($6.75). Pick one — or ask Cassie for today’s favorite.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-espresso">
          <div className="grid gap-px bg-espresso sm:grid-cols-2 lg:grid-cols-3">
            <Flavor no="01" name="Hazelnut" tag="Nutty" note="Rich, toasted roasted-nut sweetness." />
            <Flavor no="02" name="Mocha" tag="Chocolate" note="Velvety, indulgent dark chocolate." />
            <Flavor no="03" name="Caramel" tag="Buttery" note="Smooth, buttery golden caramel." />
            <Flavor
              no="04"
              name="Biscoff Cookie Butter"
              tag="Spiced"
              note="Spiced caramelized cookie spread blended into a cozy syrup."
            />
            <Flavor
              no="05"
              name="Banana Bread"
              tag="Fresh-baked"
              note="Warm, sweet baked banana with hints of vanilla and spice."
            />
            <Flavor
              no="06"
              name="Cinnamon Toast Crunch"
              tag="Nostalgic"
              note="Nostalgic sweet cinnamon-sugar cereal milk vibe."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

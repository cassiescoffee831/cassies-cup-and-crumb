import { Cookie } from "lucide-react";

type BakeProps = { name: string; price: string; note: string };

function BakeRow({ name, price, note }: BakeProps) {
  return (
    <li className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-6 last:border-b-0">
      <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">{name}</h3>
      <span className="price text-xl text-primary md:text-2xl">{price}</span>
      <p className="col-span-2 mt-1.5 text-sm leading-relaxed text-muted-foreground">{note}</p>
    </li>
  );
}

export function Bakery() {
  return (
    <section id="bakery" className="border-y border-line bg-oat">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="relative md:col-span-5">
          <span className="kicker inline-flex items-center gap-2">
            <Cookie className="size-4 text-amber" aria-hidden />
            04 — The Bakery
          </span>
          <h2 className="mt-4 font-display text-6xl font-bold leading-[0.9] md:text-8xl">
            The
            <br />
            <em className="font-bold">Crumb</em>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
            Cassie’s homemade cookies and pastries — rolled, baked and boxed in small batches, the same morning you
            eat them.
          </p>

          {/* Rotating bakes stamp */}
          <div className="mt-10 inline-flex size-36 -rotate-6 items-center justify-center rounded-full bg-card p-1.5 shadow-card md:size-40">
            <div className="flex size-full flex-col items-center justify-center rounded-full border-2 border-dashed border-amber text-center">
              <span className="kicker">Baked daily</span>
              <span className="mt-1 font-display text-lg font-bold leading-tight">
                Fresh in
                <br />
                Watsonville
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-10">
          <div className="card-warm bg-nude px-6 md:px-10">
            <ul>
              <BakeRow
                name="Brown Butter Chocolate Chip Cookie"
                price="$4.00"
                note="Nutty brown butter, pools of dark chocolate, flaky sea salt."
              />
              <BakeRow
                name="Cinnamon Sugar Crumb Cookie"
                price="$3.75"
                note="Soft-baked, rolled in cinnamon sugar, finished with buttery crumb."
              />
              <BakeRow
                name="Rotating Weekly Pastry"
                price="$4.50"
                note="Something new every week — ask what’s fresh out of the oven."
              />
            </ul>
          </div>
          <p className="mt-5 text-sm italic text-muted-foreground">
            Daily bakes rotate fresh in Watsonville. Custom cookie boxes available by pre-order.
          </p>
        </div>
      </div>
    </section>
  );
}

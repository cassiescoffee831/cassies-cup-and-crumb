import { Coffee, Milk } from "lucide-react";

type RowProps = { name: string; price: string; note: string; tag?: string };

function MenuRow({ name, price, note, tag }: RowProps) {
  return (
    <li className="border-t border-line py-6 first:border-t-0 md:py-7">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-2xl font-semibold md:text-3xl">{name}</h3>
        {tag ? <span className="kicker hidden text-muted-foreground sm:inline">{tag}</span> : null}
        <span className="leader" aria-hidden />
        <span className="price text-xl text-primary md:text-2xl">{price}</span>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{note}</p>
    </li>
  );
}

export function MenuBoard() {
  return (
    <section id="menu" className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <span className="kicker inline-flex items-center gap-2">
            <Coffee className="size-4 text-amber" aria-hidden />
            01 — The Menu Board
          </span>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Coffee
            <br />
            <em className="font-bold">&amp; drinks</em>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Every drink is pulled to order on specialty espresso. Ask for it hot or iced.
          </p>
        </div>

        <div className="md:col-span-8">
          <div className="card-warm px-6 md:px-10">
            <ul>
              <MenuRow
                name="Classic Latte"
                tag="Hot / Iced"
                price="$5.75"
                note="Velvety micro-foam over specialty espresso, hot or iced."
              />
              <MenuRow
                name="Shaken Espresso"
                tag="Iced"
                price="$6.00"
                note="Freshly pulled espresso shaken over ice with your choice of Brown Sugar or Hazelnut syrup, topped with a splash of milk."
              />
              <MenuRow
                name="Signature Latte"
                tag="House flavors"
                price="$6.75"
                note="Crafted with any of our house specialty flavors."
              />
            </ul>
          </div>
        </div>
      </div>

      {/* Milk substitution callout bar */}
      <div className="border-y border-line bg-oat">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-10">
          <div className="flex items-center gap-4">
            <span className="pill-cheetah">
              <span>Milk swap</span>
            </span>
            <p className="flex items-center gap-2 font-display text-xl font-bold md:text-2xl">
              <Milk className="size-5 text-amber" aria-hidden />
              Oat Milk Substitution
            </p>
          </div>
          <p className="price text-2xl text-primary">+ $1.25</p>
        </div>
      </div>
    </section>
  );
}

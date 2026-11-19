import { Sparkles } from "lucide-react";

type UpgradeProps = { name: string; price: string; note: string };

function Upgrade({ name, price, note }: UpgradeProps) {
  return (
    <li className="flex flex-col gap-3 rounded-lg transition-transform duration-200 hover:-translate-y-1 border-t border-nude/25 py-7 md:border-l md:border-t-0 md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0">
      <span className="price text-4xl md:text-5xl">
        <span className="mr-1 font-normal text-amber">+</span>
        {price}
      </span>
      <h3 className="kicker text-nude">{name}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-nude/70">{note}</p>
    </li>
  );
}

export function Upgrades() {
  return (
    <section id="upgrades" className="bg-espresso text-nude">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-12 md:items-center md:px-10 md:py-20">
        <div className="md:col-span-3">
          <span className="kicker inline-flex items-center gap-2 text-amber">
            <Sparkles className="size-4" aria-hidden />
            02 — Make it yours
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none md:text-5xl">
            Toppings
            <br />
            <em className="text-amber">&amp; upgrades</em>
          </h2>
        </div>
        <ul className="grid md:col-span-9 md:grid-cols-3">
          <Upgrade
            name="Extra Espresso Shot"
            price="$0.50"
            note="Add an extra pull of rich specialty espresso to any drink."
          />
          <Upgrade
            name="Cold Foam"
            price="$0.50"
            note="Thick, velvety sweet cream cold foam poured over any iced drink."
          />
          <Upgrade
            name="Cinnamon Topping"
            price="$0.50"
            note="Warm, aromatic freshly dusted cinnamon finish."
          />
        </ul>
      </div>
    </section>
  );
}

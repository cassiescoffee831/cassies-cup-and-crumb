import { ArrowDown, ArrowUpRight, Coffee } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-10 md:grid-cols-12 md:gap-8 md:px-10 md:pb-20 md:pt-16">
        {/* Copy column */}
        <div className="flex flex-col justify-between md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="pill-cheetah">
              <span>Watsonville, CA</span>
            </span>
            <span className="kicker inline-flex items-center gap-2 text-muted-foreground">
              <Coffee className="size-4 text-amber" aria-hidden />
              Issue No. 01 — The House Menu
            </span>
          </div>

          <h1 className="mt-8 font-display text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.02em] sm:text-7xl lg:text-[5.75rem]">
            Good espresso.
            <br />
            <em>Better</em> crumbs.
          </h1>

          <div className="mt-8 grid gap-8 border-t border-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Small-batch specialty espresso, pulled to order, with homemade cookies and pastries baked by
              Cassie — right here in Watsonville.
            </p>
            <span className="kicker hidden text-right sm:block">
              Hot · Iced
              <br />
              Baked daily
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#flavors" className="btn-gloss">
              View Our Flavors
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a href="#menu" className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-amber decoration-2 underline-offset-[6px] transition-colors hover:text-gold-deep">
              See Menu &amp; Prices
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* Magazine cover column */}
        <div className="md:col-span-5">
          <div className="lift relative cheetah-frame rounded-lg">
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-lg border border-amber bg-card p-6 text-cream">
              <div className="flex items-start justify-between">
                <span className="kicker">Cup &amp; Crumb</span>
                <span className="kicker">Vol. Watsonville</span>
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[16rem] font-medium italic leading-none text-amber md:text-[18rem]">&amp;</span>
              </div>
              <div className="relative flex items-end justify-between gap-4">
                <p className="font-display text-2xl font-semibold leading-tight">
                  Coffee
                  <br />
                  &amp; cookies
                  <br />
                  by Cassie
                </p>
                <span className="kicker rounded-full border border-amber px-3 py-1.5 text-amber">Hero photo here</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cheetah trim + ticker */}
      <div className="cheetah-trim" aria-hidden />
      <div className="overflow-hidden bg-espresso py-3 text-nude">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-semibold">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10" aria-hidden={i === 1}>
              <span>Specialty espresso</span><span className="text-amber">✦</span>
              <span>Brown butter cookies</span><span className="text-amber">✦</span>
              <span>Cold foam</span><span className="text-amber">✦</span>
              <span>Oat milk welcome</span><span className="text-amber">✦</span>
              <span>Small batch</span><span className="text-amber">✦</span>
              <span>Watsonville, CA</span><span className="text-amber">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

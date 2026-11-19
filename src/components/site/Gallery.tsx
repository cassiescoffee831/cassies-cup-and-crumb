import { Camera } from "lucide-react";

type SlotProps = { label: string; caption: string; aspect: string };

/* Photo placeholder: replace the inner block with an <img> when photos are ready. */
function PhotoSlot({ label, caption, aspect }: SlotProps) {
  return (
    <figure className="mb-4 break-inside-avoid md:mb-6">
      <div className={`lift relative overflow-hidden rounded-lg border border-amber shadow-card ${aspect}`}>
        <div className="photo-slot flex size-full items-center justify-center p-4">
          <span className="kicker rounded-full bg-nude/90 px-3 py-1.5 text-center shadow-card">{label}</span>
        </div>
        <span className="corner-tl rounded-tl-[1.25rem]" aria-hidden />
        <span className="corner-br rounded-br-[1.25rem]" aria-hidden />
      </div>
      <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-nude">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="kicker inline-flex items-center gap-2">
              <Camera className="size-4 text-amber" aria-hidden />
              05 — Lookbook
            </span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              The <em>Feed</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Pours, pulls and fresh bakes from the pop-up.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6">
          <PhotoSlot label="Photo: Iced latte" caption="The iced latte" aspect="aspect-[3/4]" />
          <PhotoSlot label="Photo: Cookies" caption="Brown butter, still warm" aspect="aspect-square" />
          <PhotoSlot label="Photo: Cold foam pour" caption="Cold foam, poured slow" aspect="aspect-[4/5]" />
          <PhotoSlot label="Photo: Shaken espresso" caption="Shaken over ice" aspect="aspect-[2/3]" />
          <PhotoSlot label="Photo: Pastry" caption="This week’s pastry" aspect="aspect-[5/4]" />
          <PhotoSlot label="Photo: Pop-up table" caption="See you at the pop-up" aspect="aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}

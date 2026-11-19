import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

type PopUpProps = { date: string; place: string; hours: string };

function PopUpRow({ date, place, hours }: PopUpProps) {
  return (
    <li className="grid grid-cols-[5.5rem_1fr] gap-x-4 border-t border-line py-3.5 text-sm first:border-t-0 sm:grid-cols-[7rem_1fr_auto]">
      <span className="kicker pt-0.5 text-gold-deep">{date}</span>
      <span className="font-medium">{place}</span>
      <span className="col-start-2 text-muted-foreground sm:col-start-auto">{hours}</span>
    </li>
  );
}

type PayProps = { name: string; handle: string };

function PayBadge({ name, handle }: PayProps) {
  return (
    <div className="flex items-center justify-between gap-4 lift rounded-full border border-amber bg-nude py-2 pl-2 pr-5 shadow-card">
      <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-amber">{name}</span>
      <span className="font-mono text-sm">{handle}</span>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="cheetah-frame rounded-lg">
          <div className="rounded-lg border border-amber bg-oat p-6 md:p-12">
            <div className="grid gap-12 md:grid-cols-12">
              {/* Pop-ups */}
              <div className="md:col-span-7">
                <span className="kicker inline-flex items-center gap-2">
                  <MapPin className="size-4 text-amber" aria-hidden />
                  06 — Find us · Order
                </span>
                <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] md:text-6xl">
                  Find us <em>&amp; order ahead</em>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Based in Watsonville, CA. Text to pre-order, book custom cookie boxes, or bring the coffee cart to
                  your event.
                </p>

                <div className="mt-8">
                  <p className="kicker mb-2 text-muted-foreground">Upcoming pop-ups</p>
                  <ul className="rounded-lg border border-amber bg-nude px-5 shadow-card">
                    <PopUpRow date="Sat · TBA" place="Location coming soon — Watsonville, CA" hours="8am – 1pm" />
                    <PopUpRow date="Sun · TBA" place="Location coming soon — Watsonville, CA" hours="9am – 12pm" />
                    <PopUpRow date="Weekdays" place="Pre-orders by text" hours="Pickup by arrangement" />
                  </ul>
                </div>
              </div>

              {/* Direct contact */}
              <div className="flex flex-col gap-4 md:col-span-5 md:pt-14">
                <a href="tel:+18318407856" className="btn-gloss w-full justify-between">
                  <span className="flex items-center gap-2.5">
                    <Phone className="size-4" aria-hidden /> Call
                  </span>
                  <span className="font-mono text-sm">(831) 840-7856</span>
                </a>
                <a href="sms:+18318407856" className="btn-line w-full justify-between">
                  <span className="flex items-center gap-2.5">
                    <MessageSquare className="size-4 text-amber" aria-hidden /> Text to order
                  </span>
                  <span className="font-mono text-sm">(831) 840-7856</span>
                </a>
                <a href="mailto:cassiemena94@gmail.com" className="btn-line w-full justify-between">
                  <span className="flex items-center gap-2.5">
                    <Mail className="size-4 text-amber" aria-hidden /> Email
                  </span>
                  <span className="truncate font-mono text-xs sm:text-sm">cassiemena94@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Payment strip */}
            <div className="mt-12 border-t border-line pt-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <span className="kicker shrink-0 md:w-40">We accept</span>
                <div className="grid flex-1 gap-3 md:grid-cols-3">
                  <PayBadge name="Venmo" handle="@your-handle" />
                  <PayBadge name="Cash App" handle="$yourcashtag" />
                  <PayBadge name="Apple Pay" handle="(831) 840-7856" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center md:flex-row md:px-10">
          <p className="font-display text-sm font-semibold">© Cup &amp; Crumb by Cassie • Watsonville, CA</p>
          <a href="#top" className="kicker transition-colors hover:text-amber">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#flavors", label: "Flavors" },
  { href: "#bakery", label: "Bakery" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Order / Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-espresso bg-nude/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-10">
        <a href="#top" className="group flex items-baseline gap-2 leading-none" aria-label="Cup & Crumb by Cassie — back to top">
          <span className="font-display text-xl font-bold tracking-[0.08em] md:text-2xl">CUP &amp; CRUMB</span>
          <span className="font-display text-sm italic text-muted-foreground">by Cassie</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium underline-offset-[6px] hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      {/* Mobile: swipeable link strip */}
      <nav className="flex gap-4 overflow-x-auto border-t border-espresso/15 px-5 py-2.5 md:hidden" aria-label="Main mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="kicker shrink-0 whitespace-nowrap">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { Bakery } from "@/components/site/Bakery";
import { Contact } from "@/components/site/Contact";
import { Flavors } from "@/components/site/Flavors";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { MenuBoard } from "@/components/site/MenuBoard";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Upgrades } from "@/components/site/Upgrades";

const title = "Cup & Crumb by Cassie — Specialty Coffee & Cookies, Watsonville";
const description =
  "Small-batch specialty espresso, house flavor lattes and homemade cookies & pastries by Cassie. Pop-ups and pre-orders in Watsonville, CA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <MenuBoard />
        <Upgrades />
        <Flavors />
        <Bakery />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

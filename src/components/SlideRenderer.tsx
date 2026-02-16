"use client";

import type { Slide } from "@/data/slides";
import { IntroLayout } from "@/components/layouts/IntroLayout";
import { KredibilitetLayout } from "@/components/layouts/KredibilitetLayout";
import { MentalLayout } from "@/components/layouts/MentalLayout";
import { RoiLayout } from "@/components/layouts/RoiLayout";
import { RoadmapLayout } from "@/components/layouts/RoadmapLayout";
import { ProfilIntroLayout } from "@/components/layouts/ProfilIntroLayout";
import { ProfilBilledeLayout } from "@/components/layouts/ProfilBilledeLayout";
import { ProfilOverskriftLayout } from "@/components/layouts/ProfilOverskriftLayout";
import { ProfilBannerLayout } from "@/components/layouts/ProfilBannerLayout";
import { ConnectionsLayout } from "@/components/layouts/ConnectionsLayout";
import { OutreachLayout } from "@/components/layouts/OutreachLayout";
import { AktivitetLayout } from "@/components/layouts/AktivitetLayout";
import { FaqLayout } from "@/components/layouts/FaqLayout";
import { OutroLayout } from "@/components/layouts/OutroLayout";

export function SlideRenderer({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case "intro":
      return <IntroLayout slide={slide} />;
    case "kredibilitet":
      return <KredibilitetLayout slide={slide} />;
    case "mental":
      return <MentalLayout slide={slide} />;
    case "roi":
      return <RoiLayout slide={slide} />;
    case "roadmap":
      return <RoadmapLayout slide={slide} />;
    case "profilIntro":
      return <ProfilIntroLayout slide={slide} />;
    case "profilBillede":
      return <ProfilBilledeLayout slide={slide} />;
    case "profilOverskrift":
      return <ProfilOverskriftLayout slide={slide} />;
    case "profilBanner":
      return <ProfilBannerLayout slide={slide} />;
    case "connections":
      return <ConnectionsLayout slide={slide} />;
    case "outreach":
      return <OutreachLayout slide={slide} />;
    case "aktivitet":
      return <AktivitetLayout slide={slide} />;
    case "faq":
      return <FaqLayout slide={slide} />;
    case "outro":
      return <OutroLayout slide={slide} />;
    default:
      return null;
  }
}

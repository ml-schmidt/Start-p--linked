// Design system: navy #0a1628, category (small caps light blue), white headlines, muted gray text, accents blue/teal/orange

export type SlideType =
  | "intro"
  | "kredibilitet"
  | "mental"
  | "roi"
  | "roadmap"
  | "profil"
  | "erfaring"
  | "connections"
  | "outreach"
  | "aktivitet"
  | "faq"
  | "outro";

export interface BaseSlide {
  id: number;
  type: SlideType;
}

export interface IntroSlide extends BaseSlide {
  type: "intro";
  category: string;
  headline: string;
  subtitle: string;
  tagline: string;
  showProfileImage: boolean;
}

export interface KredibilitetSlide extends BaseSlide {
  type: "kredibilitet";
  category: string;
  headline: string;
  leftBullets: string[];
  rightBefore: string;
  rightAfter: string;
}

export interface MentalSlide extends BaseSlide {
  type: "mental";
  category: string;
  headline: string;
  quoteText: string;
  subText: string;
}

export interface RoiCard {
  icon: string;
  title: string;
  description: string;
  accent: "blue" | "teal" | "orange";
}

export interface RoiSlide extends BaseSlide {
  type: "roi";
  category: string;
  headline: string;
  cards: RoiCard[];
}

export interface RoadmapItem {
  number: number;
  emoji: string;
  title: string;
}

export interface RoadmapSlide extends BaseSlide {
  type: "roadmap";
  category: string;
  headline: string;
  items: RoadmapItem[];
}

export interface ProfilColumn {
  icon: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  tint: "blue" | "teal" | "orange";
}

export interface ProfilSlide extends BaseSlide {
  type: "profil";
  category: string;
  headline: string;
  columns: ProfilColumn[];
}

export interface TranslationRow {
  academic: string;
  business: string;
}

export interface ErfaringSlide extends BaseSlide {
  type: "erfaring";
  category: string;
  headline: string;
  subheadline: string;
  leftColumnHeader: string;
  rightColumnHeader: string;
  rows: TranslationRow[];
  tipBox: string;
  magnusExample?: string;
}

export interface ConnectionsSlide extends BaseSlide {
  type: "connections";
  category: string;
  headline: string;
  subheadline: string;
  leftStat: string;
  leftBullets: string[];
  rightTitle: string;
  rightBullets: string[];
  bottomTip: string;
}

export interface OutreachSlide extends BaseSlide {
  type: "outreach";
  category: string;
  headline: string;
  subheadline: string;
  messageLines: string[];
  whyPoints: string[];
}

export interface AktivitetSlide extends BaseSlide {
  type: "aktivitet";
  category: string;
  headline: string;
  subheadline: string;
  formulaText: string;
  leftTitle: string;
  leftBullets: string[];
  rightTitle: string;
  rightBullets: string[];
  magnusQuote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  borderColor: "blue" | "teal" | "orange" | "purple";
}

export interface FaqSlide extends BaseSlide {
  type: "faq";
  category: string;
  headline: string;
  questions: FaqItem[];
}

export interface OutroSlide extends BaseSlide {
  type: "outro";
  headline: string;
  cta: string;
  ctaUrl?: string;
}

export type Slide =
  | IntroSlide
  | KredibilitetSlide
  | MentalSlide
  | RoiSlide
  | RoadmapSlide
  | ProfilSlide
  | ErfaringSlide
  | ConnectionsSlide
  | OutreachSlide
  | AktivitetSlide
  | FaqSlide
  | OutroSlide;

export const slides: Slide[] = [
  {
    id: 1,
    type: "intro",
    category: "LINKEDIN STRATEGI",
    headline: "Magnus Løv Schmidt",
    subtitle: "Freelance SEO Specialist",
    tagline: "Fra Speciale til Selvstændig",
    showProfileImage: true,
  },
  {
    id: 2,
    type: "kredibilitet",
    category: "HVORFOR LYTTE TIL MIG?",
    headline: "Min LinkedIn-rejse i tal",
    leftBullets: [
      "Oktober 2024: 700 forbindelser, aktivt jobsøgende",
      "Februar 2026: 6.900+ følgere, selvstændig SEO-specialist",
      "Top 1% danske SEO-profiler på LinkedIn",
      "40% lønstigning via strategisk netværk",
      "Over 10 års erfaring som håndbold-dommer (struktur & fair play)",
    ],
    rightBefore: "700 connections",
    rightAfter: "6.900+ followers",
  },
  {
    id: 3,
    type: "mental",
    category: "UDFORDRINGEN",
    headline: "Hvorfor føles det svært?",
    quoteText: "Janteloven og frygten for at poste",
    subText:
      "Det føles grænseoverskridende - og det er helt okay. Men det koster dig muligheder.",
  },
  {
    id: 4,
    type: "roi",
    category: "DERFOR SKAL DU STARTE NU",
    headline: "3 grunde til at investere tid i dag",
    cards: [
      {
        icon: "🏆",
        title: "Guldalderen",
        description:
          "Kun 1% af LinkedIn-brugere poster aktivt indhold. Der er ALDRIG været mindre konkurrence.",
        accent: "blue",
      },
      {
        icon: "💧",
        title: "Netværk før behov",
        description:
          "Byg brønden før du er tørstig. Dit næste job findes i dit netværk - men kun hvis du har et.",
        accent: "teal",
      },
      {
        icon: "🎓",
        title: "Gratis Universitet",
        description:
          "Lær direkte fra de bedste i din branche. Ingen kursusgebyr. Bare konsekvent engagement.",
        accent: "orange",
      },
    ],
  },
  {
    id: 5,
    type: "roadmap",
    category: "OVERSIGT",
    headline: "Hvor starter du? De 5 byggesten",
    items: [
      { number: 1, emoji: "📸", title: "Profiloptimering - The Holy Trinity" },
      { number: 2, emoji: "📝", title: "Erfaring - Oversæt dit kandidatsprog" },
      { number: 3, emoji: "🤝", title: "Netværk - 500+ reglen" },
      { number: 4, emoji: "💬", title: "Beskeder - Curiosity-templaten" },
      { number: 5, emoji: "🎯", title: "Aktivitet - Kommentarer som content" },
    ],
  },
  {
    id: 6,
    type: "profil",
    category: "DYBT DYK #1",
    headline: "Profiloptimering: The Holy Trinity",
    columns: [
      {
        icon: "😊",
        title: "Profilbillede",
        subtitle: "Smil til kameraet",
        bullets: [
          "Professionel men approachable",
          "Hovedet fylder 60% af rammen",
        ],
        tint: "blue",
      },
      {
        icon: "🎨",
        title: "Banner",
        subtitle: "Vis din faglighed",
        bullets: [
          "Ikke bare logo",
          "Kommuniker din værdi visuelt",
          "Brug Canva-template",
        ],
        tint: "teal",
      },
      {
        icon: "✍️",
        title: "Headline",
        subtitle: "Værdi, ikke kun titel",
        bullets: [
          "Inkluder søgeord: \"Consumer Insights\", \"SEO\"",
          "Fortæl HVAD du løser, ikke kun HVEM du er",
          "Eksempel: \"Freelance SEO Specialist | Hjælper ecommerce med at få flere organiske kunder | 10+ års erfaring | Test-først metodik\"",
        ],
        tint: "orange",
      },
    ],
  },
  {
    id: 7,
    type: "erfaring",
    category: "DYBT DYK #2",
    headline: "Oversæt dit kandidatsprog til business-sprog",
    subheadline: "Specifikt til Materiel Kultur-studerende",
    leftColumnHeader: "Dit CV siger",
    rightColumnHeader: "LinkedIn skal sige",
    rows: [
      { academic: "Kulturforståelse", business: "Consumer Insights" },
      { academic: "Formidling", business: "Content Marketing" },
      { academic: "Visuel analyse", business: "Brand Strategy" },
      { academic: "Feltarbejde", business: "User Research" },
    ],
    tipBox:
      "💡 Pro tip: Brug begge. \"Kulturforståelse (Consumer Insights)\" gør dig søgbar for begge verdener.",
    magnusExample:
      "Mit eget eksempel: 'Linkbuilding-specialist' → 'Hjælper virksomheder med at blive fundet på Google gennem strategiske partnerships'",
  },
  {
    id: 8,
    type: "connections",
    category: "DYBT DYK #3",
    headline: "500+ Reglen",
    subheadline: "Fra 700 til 6.900+ på 16 måneder - her er præcis hvordan",
    leftStat: "500+",
    leftBullets: [
      "LinkedIn's autoritetstærskel",
      "Vises som \"500+\" (ikke eksakt tal)",
      "Signalerer troværdighed",
      "Øger synlighed i søgning",
      "Giver adgang til premium features",
    ],
    rightTitle: "🎯 Strategi",
    rightBullets: [
      "Connect med mennesker 2 steps foran dig - ikke kun studiekammerater",
      "Hiring managers i din branche",
      "Senior-folk på LinkedIn Learning",
      "Kommentatorer på relevante opslag",
      "Alumni der arbejder hvor du vil hen",
    ],
    bottomTip:
      "⚠️ Pro tip: Personaliser 50% af dine invitationer. De andre kan være standard.",
  },
  {
    id: 9,
    type: "outreach",
    category: "DYBT DYK #4",
    headline: "Besked-templaten der virker",
    subheadline: "The Thesis Hack - brug dit speciale som åbner",
    messageLines: [
      "Hej [Navn],",
      "",
      "Jeg skriver speciale om [Emne] og kunne se I arbejder med [Område] hos [Virksomhed].",
      "",
      "Må jeg connecte og følge med i jeres arbejde? Ville være spændende at lære af jeres tilgang.",
      "",
      "Mvh,",
      "[Dit navn]",
    ],
    whyPoints: [
      "Ærlig intention",
      "Specifik reference til deres arbejde",
      "Ingen direkte \"ask\"",
      "Lav-threshold (bare følge med)",
    ],
  },
  {
    id: 10,
    type: "aktivitet",
    category: "DYBT DYK #5",
    headline: "Kom i gang: Kommentarer er content",
    subheadline: "Den sikreste vej til synlighed",
    formulaText: "1 comment = 1 mini-post i dit netværks feed",
    leftTitle: "Hvorfor kommentarer?",
    leftBullets: [
      "Mindre intimiderende end opslag",
      "Vises i dit netværks feed",
      "Bygger relationer",
      "Øver din stemme",
    ],
    rightTitle: "Hvad skal du kommentere?",
    rightBullets: [
      "Tilføj perspektiv, ikke bare \"Enig!\"",
      "Del egen erfaring: \"Jeg har oplevet...\"",
      "Still spørgsmål der udvider diskussionen",
      "2-3 kommentarer/uge er en god start",
    ],
    magnusQuote:
      "Jeg brugte 3 måneder på kun at kommentere. Ingen opslag. Nul. Det virkede bedre end jeg troede.",
  },
  {
    id: 11,
    type: "faq",
    category: "FAQ",
    headline: "De 4 mest stillede spørgsmål",
    questions: [
      {
        question: "Skal jeg være ekspert først?",
        answer:
          "Nej. Del hvad du lærer. Begynderperspektivet er værdifuldt. Folk husker deres egen rejse.",
        borderColor: "blue",
      },
      {
        question: "Hvad hvis min chef/universitet ser det?",
        answer:
          "Det er professionelt brandbuilding. Du bygger din karriere. Det er ikke Instagram.",
        borderColor: "teal",
      },
      {
        question: "Hvor tit skal jeg poste?",
        answer:
          "Start med 2-3 kommentarer om ugen. Konsistens >> volumen. Kvalitet >> kvantitet.",
        borderColor: "orange",
      },
      {
        question: "Er det ikke fake/upersonligt?",
        answer:
          "Kun hvis du faker det. Vær dig selv. Autenticitet slår perfection hver gang.",
        borderColor: "purple",
      },
    ],
  },
  {
    id: 12,
    type: "outro",
    headline: "Tak for i dag",
    cta: "Connect med mig på LinkedIn for flere tips",
    ctaUrl: "https://magnusloev.dk",
  },
];

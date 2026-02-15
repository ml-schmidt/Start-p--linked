export type SlideType =
  | "title"
  | "split"
  | "grid"
  | "bento"
  | "table"
  | "process"
  | "list"
  | "codeblocks"
  | "checklist"
  | "paths";

export interface BaseSlide {
  id: number;
  type: SlideType;
}

export interface TitleSlide extends BaseSlide {
  type: "title";
  badge?: string;
  title: string;
  subtitle: string;
  speaker: string;
  speakerRole?: string;
}

export interface SplitSlide extends BaseSlide {
  type: "split";
  leftTitle: string;
  bullets: string[];
  rightImagePlaceholder?: boolean;
  quote?: string;
}

export interface GridCard {
  title: string;
  content: string;
}

export interface GridSlide extends BaseSlide {
  type: "grid";
  headline: string;
  source?: string;
  cards: GridCard[];
}

export interface BentoItem {
  title: string;
  content: string;
}

export interface BentoSlide extends BaseSlide {
  type: "bento";
  headline: string;
  items: BentoItem[];
}

export interface TableRow {
  before: string;
  after: string;
}

export interface TableSlide extends BaseSlide {
  type: "table";
  headline: string;
  subtext: string;
  rows: TableRow[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description?: string;
}

export interface ProcessSlide extends BaseSlide {
  type: "process";
  headline: string;
  steps: ProcessStep[];
  insight?: string;
}

export interface ListItem {
  title: string;
  description: string;
}

export interface ListSlide extends BaseSlide {
  type: "list";
  headline: string;
  source?: string;
  items: ListItem[];
}

export interface CodeBlocksSlide extends BaseSlide {
  type: "codeblocks";
  headline: string;
  templates: { label: string; code: string }[];
}

export interface ChecklistSlide extends BaseSlide {
  type: "checklist";
  headline: string;
  items: string[];
  cta: string;
  qrPlaceholder?: boolean;
}

export interface PathItem {
  title: string;
  goal: string;
  action: string;
}

export interface PathsSlide extends BaseSlide {
  type: "paths";
  headline: string;
  context: string;
  pathA: PathItem;
  pathB: PathItem;
}

export type Slide =
  | TitleSlide
  | SplitSlide
  | GridSlide
  | BentoSlide
  | TableSlide
  | ProcessSlide
  | ListSlide
  | CodeBlocksSlide
  | ChecklistSlide
  | PathsSlide;

export const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    badge: "Djøf & SDU Inspireret",
    title: "LinkedIn: Fra Speciale til Karriere",
    subtitle: "Den komplette guide til studerende: Strategi, Profil & Hacks",
    speaker: "Magnus Løv Schmidt",
    speakerRole: "Freelance SEO Specialist",
  },
  {
    id: 2,
    type: "split",
    leftTitle: "Er det muligt?",
    bullets: [
      "Okt 2024: 700 connections (Jobsøgende lønmodtager)",
      "Feb 2026: 6.900+ følgere (Selvstændig specialist)",
      "Resultat: Nyt job m. 40% lønstigning -> Nu fuldtidsselvstændig via inbound leads.",
    ],
    rightImagePlaceholder: true,
    quote:
      "LinkedIn er ikke kun for folk med slips. Det er din hurtigste vej til karrieren.",
  },
  {
    id: 3,
    type: "grid",
    headline: "Hvorfor LinkedIn?",
    source: "Djøf Guide",
    cards: [
      {
        title: "Guldalderen",
        content:
          "Kun 1% poster indhold. Konkurrencen er lav. Du kan nå tusindvis af mennesker organisk.",
      },
      {
        title: "Gratis Universitet",
        content:
          "Få adgang til de klogeste hjerner i branchen. Det er gratis læring hver dag.",
      },
      {
        title: "Positiv Vibe",
        content:
          "Folk er her professionelt. Ingen trolls. Folk vil hjælpe dig.",
      },
    ],
  },
  {
    id: 4,
    type: "paths",
    headline: "Hvad er dit mål?",
    context: "Før du retter din profil, skal du vælge spor.",
    pathA: {
      title: "Jobjægeren",
      goal: "Lande første voksenjob.",
      action: "Connect med chefer, følg virksomheder, vis faglighed.",
    },
    pathB: {
      title: "Netværkeren",
      goal: "Inspiration og relationer.",
      action: "Kommentér, deltag i debatter, ræk ud til folk du synes er cool.",
    },
  },
  {
    id: 5,
    type: "bento",
    headline: "De 5 Profil-Elementer",
    items: [
      {
        title: "Billedet",
        content: "Professionelt, smilende, øjenkontakt. (Ingen feriebilleder).",
      },
      {
        title: "Banneret",
        content: "Undgå den grå standard! Brug Canva. Vis hvem du er.",
      },
      {
        title: "Overskriften",
        content: "DET VIGTIGSTE. Ikke bare din titel. Fortæl hvad du løser.",
      },
      {
        title: "Om-sektionen",
        content: "Din historie. Hvem er du? Hvad kan du? Hvad vil du?",
      },
      {
        title: "Erfaring",
        content: "Brug bullet points med resultater, ikke bare titler.",
      },
    ],
  },
  {
    id: 6,
    type: "table",
    headline: "Oversæt din faglighed",
    subtext: "Virksomheder forstår ikke akademiske titler. Tal business-sprog.",
    rows: [
      {
        before: "Specialestuderende ved DPU",
        after: "Cand.pæd. studerende | Brugeradfærd & Designprocesser",
      },
      {
        before: "Kulturforståelse",
        after: "Forbrugerindsigt & UX Research",
      },
      {
        before: "Formidling",
        after: "Content Marketing & Kommunikation",
      },
    ],
  },
  {
    id: 7,
    type: "process",
    headline: "Brug specialet som døråbner",
    steps: [
      { step: "1", title: "Identificer", description: "Find 5 drømmevirksomheder." },
      { step: "2", title: "Personer", description: "Find nøglepersoner (ikke HR, men faglige chefer)." },
      { step: "3", title: "Nysgerrighed", description: "Skriv til dem pga. specialet. Ikke for at søge job." },
    ],
    insight:
      "Det er meget nemmere at få et kaffemøde om 'data til speciale' end 'kan jeg få et job?'",
  },
  {
    id: 8,
    type: "list",
    headline: "5 Hacks til at vinde",
    source: "Djøf Guide",
    items: [
      {
        title: "Kommentarer er mini-opslag",
        description: "Det mindst farlige sted at starte.",
      },
      {
        title: "Status-spillet",
        description: "Få 500+ connections hurtigt (ser mere etableret ud).",
      },
      {
        title: "Connect opad",
        description: "Forbind dig med dem, der kan ansætte dig (ikke kun medstuderende).",
      },
      {
        title: "Send en besked",
        description: "Skriv ALTID en personlig hilsen i invitationen.",
      },
      {
        title: "Ryd op i feedet",
        description: "Følg dem der inspirerer. Mute dem der er kedelige.",
      },
    ],
  },
  {
    id: 9,
    type: "codeblocks",
    headline: "Skabeloner du kan bruge i dag",
    templates: [
      {
        label: "Connection",
        code: `Hej [Navn], jeg connecter fordi jeg synes du har et fedt perspektiv på [Emne]. Jeg ville elske at følge med i dit feed.`,
      },
      {
        label: "Thesis Outreach",
        code: `Hej [Navn], jeg skriver speciale om [Emne] på SDU. Jeg ser at I arbejder med [Område]. Må jeg connecte og følge jeres arbejde?`,
      },
    ],
  },
  {
    id: 10,
    type: "checklist",
    headline: "Opgaven til i morgen",
    items: [
      "Fix din Headline (Gør den værdibaseret).",
      "Send 3 connections til folk i branchen (Brug skabelonen).",
      "Skriv 1 kommentar på et relevant opslag.",
    ],
    cta: "Connect med mig for flere tips",
    qrPlaceholder: true,
  },
];

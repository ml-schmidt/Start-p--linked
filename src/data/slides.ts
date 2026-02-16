// Design system: navy #0a1628, category (small caps light blue), white headlines, muted gray text, accents blue/teal/orange

export type SlideType =
  | "intro"
  | "kredibilitet"
  | "mental"
  | "roi"
  | "roadmap"
  | "profilIntro"
  | "profilBillede"
  | "profilOverskrift"
  | "profilBanner"
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

export interface ProfilIntroSlide extends BaseSlide {
  type: "profilIntro";
  category: string;
  headline: string;
  introText: string;
  structureItems: string[];
  exampleLabel: string;
  exampleText: string;
  tipBox: string;
}

export interface ProfilBilledeSlide extends BaseSlide {
  type: "profilBillede";
  category: string;
  headline: string;
  doItems: string[];
  dontItems: string[];
  actionBox: string;
}

export interface ProfilOverskriftSlide extends BaseSlide {
  type: "profilOverskrift";
  category: string;
  headline: string;
  introText: string;
  badExample: string;
  betterExample: string;
  bestExample: string;
  keyBullets: string[];
  tipBox: string;
  actionBox?: string;
}

export interface ProfilBannerSlide extends BaseSlide {
  type: "profilBanner";
  category: string;
  headline: string;
  introText: string;
  ideerItems: string[];
  ressourcerItems: string[];
  actionBox: string;
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

export interface GoerDetNuExercise {
  title: string;
  steps: string[];
  frequency: string;
  messageExample?: string;
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
  goerDetNuExercise?: GoerDetNuExercise;
}

export interface OutreachSlide extends BaseSlide {
  type: "outreach";
  category: string;
  headline: string;
  subheadline: string;
  /** Legacy: LinkedIn message mock */
  messageLines?: string[];
  whyPoints?: string[];
  /** Natural approach (no template) */
  introLine?: string;
  goodExamples?: string[];
  avoidBullets?: string[];
  tipBox?: string;
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
  /** "Start her i dag" actionable section */
  actionTitle?: string;
  actionSteps?: string[];
  actionCta?: string;
  goerDetNu?: string;
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
  subtext?: string;
}

export type Slide =
  | IntroSlide
  | KredibilitetSlide
  | MentalSlide
  | RoiSlide
  | RoadmapSlide
  | ProfilIntroSlide
  | ProfilBilledeSlide
  | ProfilOverskriftSlide
  | ProfilBannerSlide
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
    headline: "Hvad LinkedIn har gjort for mit arbejdsliv",
    leftBullets: [
      "Oktober 2024: 700 forbindelser, sendte 50+ jobansøgninger",
      "I dag: 6.900+ følgere, får jobmuligheder tilbudt direkte",
      "Har mødt alt fra startup-gründere til museumsdirektører",
      "Fået freelance-kunder jeg aldrig ville have mødt ellers",
      "40% højere indtægt end mit sidste fastansættelse",
    ],
    rightBefore: "Søger job",
    rightAfter: "Job finder mig",
  },
  {
    id: 3,
    type: "mental",
    category: "JEG VED GODT AT...",
    headline: "Det føles mærkeligt at 'poste om sig selv'",
    quoteText:
      "Janteloven sidder dybt i os danskere.\n\"Hvem tror du, du er?\"\nMen her er sandheden: Dit netværk kan ikke hjælpe dig, hvis de ikke ved du eksisterer.",
    subText:
      "Det handler ikke om at prale. Det handler om at være synlig når muligheden dukker op.",
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
        title: "Byg relationer før du har brug for dem",
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
      { number: 1, emoji: "📸", title: "Profiloptimering" },
      { number: 2, emoji: "📝", title: "Erfaring - Oversæt dit kandidatsprog" },
      { number: 3, emoji: "🤝", title: "Netværk - 500+ reglen" },
      { number: 4, emoji: "💬", title: "Beskeder - Curiosity-templaten" },
      { number: 5, emoji: "🎯", title: "Aktivitet - Kom i gang med kommentarer" },
    ],
  },
  {
    id: 6,
    type: "profilIntro",
    category: "PROFIL DEL 1",
    headline: "Din intro: Fortæl hvad du faktisk laver",
    introText: "Dit intro-felt er det første folk læser. Gør det simpelt:",
    structureItems: [
      "Hvad du studerer/arbejder med",
      "Hvad du interesserer dig for",
      "Hvordan folk kan bruge dig (praktik, projekter, samtaler)",
    ],
    exampleLabel: "EKSEMPEL (for en cand.pæd studerende):",
    exampleText:
      "\"Jeg studerer pædagogik med fokus på kulturformidling. Brænder for at gøre kunst og kultur tilgængeligt for børn. Søger praktikpladser, projekter og gode samtaler om formidling.\"",
    tipBox: "💡 Skriv som du taler. Ikke som dit CV.",
  },
  {
    id: 7,
    type: "profilBillede",
    category: "PROFIL DEL 2",
    headline: "Dit profilbillede: Smil til kameraet",
    doItems: [
      "Smil - du virker approachable",
      "Professionel men afslappet",
      "Dit ansigt fylder 60% af billedet",
      "God belysning (tag det udenfor)",
      "Neutral baggrund",
    ],
    dontItems: [
      "Gruppebillede (hvem er du?)",
      "Solbriller eller hat",
      "Beskåret festbillede",
      "For langt væk fra kamera",
      "Pixeleret eller mørkt",
    ],
    actionBox:
      "✅ GØR DET NU: Stil dig ved et vindue. Tag 10 selfies. Upload den bedste. (Det tager 5 minutter)",
  },
  {
    id: 8,
    type: "profilOverskrift",
    category: "PROFIL DEL 3",
    headline: "Din overskrift: Værdi, ikke kun titel",
    introText:
      "Din overskrift er det der vises ved siden af dit navn OVERALT på LinkedIn. Brug den smart.",
    badExample: "❌ DÅRLIGT: \"Studerende ved KU\"",
    betterExample:
      "✅ BEDRE: \"Cand.pæd studerende | Interesseret i kulturformidling og museumsarbejde\"",
    bestExample:
      "✅✅ ENDNU BEDRE: \"Cand.pæd studerende | Hjælper museer med at formidle kunst til børn | Søger praktik inden for formidling\"",
    keyBullets: [
      "Hvad du studerer (så det er klart)",
      "Hvad du interesserer dig for (så de rigtige folk finder dig)",
      "Hvad du søger (så folk ved hvordan de kan hjælpe)",
    ],
    tipBox:
      "💡 Inkluder søgeord: 'kulturformidling', 'pædagogik', 'museumsarbejde' - det gør dig søgbar",
    actionBox:
      "✅ GØR DET NU: Åbn LinkedIn på din telefon. Klik 'Rediger profil'. Opdater din overskrift. Gem.",
  },
  {
    id: 9,
    type: "profilBanner",
    category: "PROFIL DEL 4",
    headline: "Dit banner: Vis dit felt visuelt",
    introText:
      "Dit banner er det store billede øverst på din profil. De fleste lader det stå tomt. Det er spildt plads.",
    ideerItems: [
      "Billede fra et museum du har besøgt",
      "Børn der lærer/leger (hvis du har rettigheder)",
      "Grafik med dit fokusområde (brug Canva)",
      "Citat der repræsenterer din tilgang",
    ],
    ressourcerItems: [
      "Canva.com → \"LinkedIn Banner\" templates (gratis)",
      "Unsplash.com → gratis billeder",
      "15 minutters investering",
    ],
    actionBox:
      "✅ GØR DET NU: Gå til Canva.com. Søg 'LinkedIn Banner'. Vælg en template. Tilpas den. Download. Upload.",
  },
  {
    id: 10,
    type: "erfaring",
    category: "DYBT DYK #2",
    headline: "Oversæt dit kandidatsprog til business-sprog",
    subheadline: "Specifikt til Materiel Kultur-studerende",
    leftColumnHeader: "Dit CV siger",
    rightColumnHeader: "LinkedIn skal sige",
    rows: [
      { academic: "Kulturforståelse", business: "Forbrugerindsigt" },
      { academic: "Formidling", business: "Indholdsmarkedsføring" },
      { academic: "Visuel analyse", business: "Brandstrategi" },
      { academic: "Feltarbejde", business: "Brugerundersøgelser" },
    ],
    tipBox:
      "💡 Tip: Brug begge. \"Kulturforståelse (Forbrugerindsigt)\" gør dig søgbar for begge verdener.",
    magnusExample:
      "Mit eget eksempel: 'Linkbuilding-specialist' → 'Hjælper virksomheder med at blive fundet på Google gennem strategiske partnerships'",
  },
  {
    id: 11,
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
      "⚠️ Godt råd: Personaliser 50% af dine invitationer. De andre kan være standard.",
    goerDetNuExercise: {
      title: "✅ GØR DET NU - NETVÆRKSØVELSEN (10 minutter):",
      steps: [
        "Åbn LinkedIn på din telefon",
        "Søg efter en stilling du gerne vil have (fx 'Museumspædagog' eller 'Kulturformidler')",
        "Klik på en jobtitel",
        "Scroll ned til 'Ansatte hos [virksomhed]'",
        "Find personer der har titler 1-2 steps over dit niveau",
        "Send connection request (med eller uden besked)",
        "Gentag 10 gange",
      ],
      frequency: "GØR DETTE ÉN GANG OM UGEN.",
      messageExample:
        "Tilføj evt. en kort besked: 'Hej [Navn], jeg ser du arbejder med [område] - det virker super spændende. Må jeg følge med?'",
    },
  },
  {
    id: 12,
    type: "outreach",
    category: "DYBT DYK #4",
    headline: "Sådan connecter du naturligt",
    subheadline: "Glem templates. Vær et menneske.",
    introLine: "Når du vil connecte med nogen:",
    goodExamples: [
      "\"Hej [Navn], jeg så dit opslag om [emne] - det gjorde mig nysgerrig på [ting]. Må jeg følge med i dit arbejde?\"",
      "\"Jeg ser I arbejder med [område] hos [sted] - det virker vanvittigt spændende. Ville gerne lære mere!\"",
    ],
    avoidBullets: [
      "Generic copy-paste beskeder",
      "\"Lad os netværke\" (cringe)",
      "At bede om noget i første besked",
    ],
    tipBox: "Nøglen: Vær oprigtigt nysgerrig. Det mærkes når det er ægte.",
  },
  {
    id: 13,
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
    actionTitle: "Start her i dag:",
    actionSteps: [
      "Find 3 opslag i dit feed fra folk du finder interessante",
      "Skriv en kommentar der tilføjer noget (ikke bare \"Enig!\")",
      "Gentag 2-3 gange om ugen",
    ],
    actionCta: "Det tager 10 minutter. Det er din investering.",
    goerDetNu:
      "✅ GØR DET NU: Åbn LinkedIn. Find 3 opslag i dit feed. Skriv én kommentar der tilføjer perspektiv (ikke bare 'Enig!'). Gentag 2-3 gange om ugen.",
  },
  {
    id: 14,
    type: "faq",
    category: "FAQ",
    headline: "De 4 mest stillede spørgsmål",
    questions: [
      {
        question: "Skal jeg være ekspert først?",
        answer:
          "Nej. Del bare hvad du lærer undervejs. Andre studerende og nyuddannede kan faktisk relatere bedre til din rejse end til en 'ekspert'.",
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
          "Start med 2-3 kommentarer om ugen. Det tager 10 minutter. Gør det til en vane.",
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
    id: 15,
    type: "outro",
    headline: "Tak for i dag",
    cta: "Connect med mig på LinkedIn for flere tips",
    ctaUrl: "https://magnusloev.dk",
    subtext:
      "💡 Jeg deler åbent om min egen LinkedIn-rejse (både wins og fails) - følg med hvis du vil se hvordan det går i praksis.",
  },
];

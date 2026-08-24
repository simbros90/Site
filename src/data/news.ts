export const IMG = {
  lead: "https://image.qwenlm.ai/generated-images/d37974f0-3221-4378-922c-27cf68b70c64/_result.png",
  world: "https://image.qwenlm.ai/generated-images/02e261cf-4fcc-4b4a-818d-182ecc65bd0a/_result.png",
  sport: "https://image.qwenlm.ai/generated-images/25522995-49cc-4ab8-8048-cf387d214f03/_result.png",
  culture: "https://image.qwenlm.ai/generated-images/7d74451d-4520-470a-be1f-d0dee7ed2743/_result.png",
  hugo: "https://image.qwenlm.ai/generated-images/28f19f02-7b7c-440c-8b10-86ad6a374893/_result.png",
  cassandra: "https://image.qwenlm.ai/generated-images/0514efd9-6f2b-4483-bbbf-8404912c0917/_result.png",
  oliver: "https://image.qwenlm.ai/generated-images/046a0655-af6f-4a19-a261-9cb72c3dd127/_result.png",
};

export interface Story {
  kicker: string;
  headline: string;
  standfirst?: string;
  byline?: string;
  time?: string;
  image?: string;
  credit?: string;
}

export const NAV_SECTIONS = [
  "Home",
  "UK",
  "World",
  "Comment",
  "Sport",
  "Business",
  "Culture",
  "Style",
  "Puzzles",
  "Magazine",
];

export const BREAKING_ITEMS = [
  "FTSE 100 closes above 8,400 for the first time as rate-cut hopes build",
  "No 10 confirms planning bill will be fast-tracked through Commons this week",
  "England 148-4 at tea in Mumbai — Brook unbeaten on 62",
  "Met Office upgrades wind warning for northern Scotland to amber",
];

export const LEAD: Story = {
  kicker: "Politics · Exclusive",
  headline: "Rebuild Britain: Prime Minister unveils sweeping planning revolution",
  standfirst:
    "In the most radical shake-up of the building rules for a generation, No 10 will hand councils fast-track powers, tear up notional housing targets and promise 1.5 million homes by 2031.",
  byline: "James Whitmore, Political Editor",
  time: "Wednesday February 18 2026, 6.00am",
  image: IMG.lead,
  credit: "Photograph: Sarah Ellery",
};

export const LEAD_BODY =
  "The plan, two years in the drafting, would let local authorities approve major developments within sixty days, strip the right of speculative appeals in designated growth corridors and create a new national development corporation with powers to buy land at existing-use value. Ministers insist green belt remains sacrosanct; backbenchers are less sure.";

export const LEAD_SUBSTORIES: Story[] = [
  {
    kicker: "Economy",
    headline: "Bank holds rates at 4.25% as inflation cools to 2.3 per cent",
    byline: "Tom Radcliffe, Economics Editor",
  },
  {
    kicker: "Health",
    headline: "NHS waiting lists fall below seven million for first time in five years",
    byline: "Amelia Hart, Health Correspondent",
  },
];

export const TOP_STORIES: Story[] = [
  {
    kicker: "World",
    headline: "Kyiv and Moscow exchange 412 detainees in largest swap of the war",
    time: "9.42am",
  },
  {
    kicker: "UK",
    headline: "Amber warning issued as Storm Fenella bears down on the North",
    time: "9.15am",
  },
  {
    kicker: "Business",
    headline: "Rolls-Royce surges 9% after record order for small modular reactors",
    time: "8.57am",
  },
  {
    kicker: "Science",
    headline: "Webb telescope spots 'impossibly early' galaxy that breaks the models",
    time: "8.30am",
  },
  {
    kicker: "Sport",
    headline: "Anderson's England dig deep to hold Mumbai Test on a turning track",
    time: "8.02am",
  },
  {
    kicker: "Crime",
    headline: "Cotswolds cold case: the detective who never stopped rereading the files",
    time: "7.41am",
  },
];

export const LEADING_ARTICLE = {
  kicker: "The Times View · Leading Article",
  headline: "A planning revolution must not become a concrete one",
  standfirst:
    "The government is right to build. But beauty, brownfield-first and genuine infrastructure must not be the price of speed.",
};

export const COLUMNISTS = [
  {
    name: "Sir Hugo Fairweather",
    role: "Columnist",
    portrait: IMG.hugo,
    headline: "Nostalgia will not save the high street — footfall economics will",
  },
  {
    name: "Cassandra Webb",
    role: "Columnist",
    portrait: IMG.cassandra,
    headline: "The four-day week has won. Now let's talk about the Friday economy",
  },
  {
    name: "Oliver Davenport",
    role: "Chief Sports Writer",
    portrait: IMG.oliver,
    headline: "England's selectors must look beyond the county comfort zone",
  },
];

export interface MarketQuote {
  label: string;
  value: number;
  change: number; // percent
  digits: number;
}

export const MARKETS: MarketQuote[] = [
  { label: "FTSE 100", value: 8412.66, change: 0.42, digits: 2 },
  { label: "S&P 500", value: 6121.4, change: -0.18, digits: 2 },
  { label: "NASDAQ", value: 19862.12, change: 0.11, digits: 2 },
  { label: "DAX", value: 22934.55, change: 0.29, digits: 2 },
  { label: "NIKKEI 225", value: 39421.88, change: -0.51, digits: 2 },
  { label: "BRENT CRUDE", value: 74.32, change: 1.02, digits: 2 },
  { label: "GOLD", value: 2712.4, change: 0.34, digits: 2 },
  { label: "GBP/USD", value: 1.2712, change: -0.06, digits: 4 },
  { label: "BITCOIN", value: 97431, change: 2.15, digits: 0 },
];

export interface NewsColumn {
  section: string;
  lead: Story;
  items: Story[];
}

export const NEWS_COLUMNS: NewsColumn[] = [
  {
    section: "News",
    lead: {
      kicker: "World · Analysis",
      headline: "Europe's fragile unity: inside the summit that almost fell apart",
      standfirst:
        "A late-night compromise on energy corridors saved the Brussels summit — but diplomats concede the fault lines remain.",
      image: IMG.world,
      credit: "Photograph: Marc Dubois",
    },
    items: [
      {
        kicker: "Scotland",
        headline: "Holyrood votes to extend income-tax threshold freeze for a third year",
      },
      {
        kicker: "Transport",
        headline: "HS2 chairman admits Euston leg 'cannot be delivered before 2040'",
      },
      {
        kicker: "Education",
        headline: "Private school VAT: first signs of the exodus the Treasury predicted",
      },
    ],
  },
  {
    section: "Sport",
    lead: {
      kicker: "Cricket · Third Test, Mumbai",
      headline: "England's rearguard: Brook and Pope defy the dust to keep the series alive",
      standfirst:
        "A fourth-wicket stand of 118 on a surface turning square from breakfast gave the tourists an improbable lifeline.",
      image: IMG.sport,
      credit: "Photograph: Daniel Okafor",
    },
    items: [
      {
        kicker: "Football",
        headline: "Arsenal's £52m statement: what the Lyon striker signing really means",
      },
      {
        kicker: "Rugby Union",
        headline: "Six Nations: Scotland's miracle minute — and the refereeing row that followed",
      },
      {
        kicker: "Formula 1",
        headline: "Red Bull's succession shortlist revealed as three big names are courted",
      },
    ],
  },
  {
    section: "Culture",
    lead: {
      kicker: "Theatre ★★★★★",
      headline: "'The Winter Tide' at the National: a five-star reckoning with grief",
      standfirst:
        "Imogen Stubbs gives the performance of her life in this tidal-wave of a revival.",
      image: IMG.culture,
      credit: "Photograph: Ruth Calloway",
    },
    items: [
      {
        kicker: "Books",
        headline: "Booker longlist shocks: two debuts, no Americans, one graphic novel",
      },
      {
        kicker: "Classical",
        headline: "The Proms announces its most adventurous season yet — and it's about time",
      },
      {
        kicker: "Film",
        headline: "Mike Leigh at 83: 'I still cast from a pub, not a database'",
      },
    ],
  },
];

export const MOST_POPULAR = [
  "The detective who cracked the Cotswolds cold case — after 27 years",
  "Recipe: the perfect beef Wellington, by Marcus Thornbury",
  "Inside the £40 million restoration of Chatsworth's state rooms",
  "Why everyone under 30 is suddenly obsessed with 'slow travel'",
  "Obituary: Sir Alistair Grange, the engineer who lit up the North",
];

/* ---- crossword ---- */

export const CW_GRID = [
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
];

export const CW_SOLUTION_ROW = "WORDSMITH";

export const CW_NUMBERS: Record<string, number> = {
  "0,0": 1,
  "0,1": 2,
  "0,2": 3,
  "0,3": 4,
  "0,5": 5,
  "0,6": 6,
  "0,7": 7,
  "0,8": 8,
  "1,0": 9,
  "1,3": 10,
  "2,2": 11,
  "3,3": 12,
  "5,4": 13,
};

export const CW_CLUES = [
  "1. Sudden rush of wind (4) — GUST",
  "4. Composer of 'The Planets' (5) — HOLST",
  "6. Unit of power (4) — WATT",
  "9 down. River through York (4) — OUSE",
  "12. One who crafts words (9) — WORDSMITH",
];

export const FOOTER_COLS: { title: string; links: string[] }[] = [
  {
    title: "News",
    links: ["UK", "World", "Politics", "Science", "Health", "Education", "Weather"],
  },
  {
    title: "Sport",
    links: ["Football", "Cricket", "Rugby Union", "Formula 1", "Tennis", "Golf"],
  },
  {
    title: "Opinion",
    links: ["Columnists", "Leading Articles", "Letters", "Obituaries", "Cartoons"],
  },
  {
    title: "Culture",
    links: ["Books", "Film", "Music", "Theatre", "Art & Design", "Puzzles"],
  },
  {
    title: "More",
    links: ["About us", "Contact us", "Careers", "Advertising", "Help", "Terms & Privacy"],
  },
];

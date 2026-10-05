/*
 * TRANSATLANTIC TRADE OUTLOOK INDEX — PUBLISHING DATA
 *
 * This is the only file that needs routine editing. The page calculates the
 * question, driver, and headline scores from the inputs below. Percentages in
 * every forecast distribution must add to 100.
 */
window.INDEX_DATA = {
  meta: {
    seriesLabel: "Cultivate Health Index Pair (CHIP)",
    indexName: "Transatlantic Trade Outlook Index",
    shortName: "Transatlantic Trade Outlook",
    systemName: "transatlantic trade health",
    description: "How healthy will the trading relationship between the United States and Europe be? One number shows where it stands today; another shows Hinsley’s AI forecast 12 months ahead. Both use the same eight indicators, grouped into five drivers. Updated monthly and evaluated against what actually happens to build an auditable track record.",
    metaDescription: "The Transatlantic Trade Outlook Index pairs today’s conditions with Hinsley’s AI forecast 12 months ahead and evaluates the forecast against real-world outcomes.",
    editionDate: "28 September 2026",
    quantitativeThrough: "July 2026",
    statusCheckedDate: "28 September 2026",
    forecastGeneratedDate: "29 September 2026",
    lastUpdated: "28 September 2026",
    readDate: "5 Aug 2026",
    refreshCadence: "monthly",
    horizon: "28 September 2027",
    horizonShort: "Sep 2027",
    backgroundForecastDate: "29 September 2026",
    backgroundCadence: "quarterly",
    historyStart: ""
  },

  summary: {
    headline: "The relationship is holding today. Hinsley projects more trade fights over the next year.",
    detail: "High tariffs and an 8.1% drop in goods trade keep today’s reading at 59.5. Hinsley projects a trade recovery, but legal and policy disputes pull the forecast down to 47.6.",
    interpretation: [
      {
        lead: "Why today’s reading is 59.5:",
        text: "The tariff deal is still in place and European retaliation is paused. But tariffs remain high and goods trade is down."
      },
      {
        lead: "Why the forecast falls to 47.6:",
        text: "Hinsley projects growth in goods trade, but also continuing court fights over broad US tariffs and more conflict over European digital rules. Those risks outweigh the trade rebound."
      }
    ],
    paragraphs: [
      {
        lead: "Where things stand:",
        text: "The basic relationship still works. The deal is in place and European retaliation is paused. High tariffs and an 8.1% drop in goods trade keep the reading from being stronger."
      },
      {
        lead: "What could change:",
        text: "Hinsley projects an improvement in goods trade. Its forecast also shows continued legal pressure on broad US tariffs, a greater chance that the tariff deal is partly suspended, and stronger US action against European digital rules."
      },
      {
        lead: "The bottom line:",
        text: "More trade, but more legal and policy conflict. The conflict is expected to matter more, so the index falls 11.9 points."
      }
    ]
  },

  // Historical arrays stay empty until verified monthly editions accumulate.
  compositeHistory: [],
  spreadHistory: [],

  drivers: [
    {
      id: "D1",
      name: "Tariff Levels",
      weight: 0.29,
      description: "The duty collected on European goods arriving in the US. Lower duties produce healthier reading.",
      history: []
    },
    {
      id: "D2",
      name: "Tariff Legal Basis",
      weight: 0.14,
      description: "Whether the broadest additional US tariff measure remains legally collectible.",
      history: []
    },
    {
      id: "D3",
      name: "Agreement Status & Retaliation",
      weight: 0.21,
      description: "Whether Europe sticks with the tariff framework and keeps retaliation on the shelf.",
      history: []
    },
    {
      id: "D4",
      name: "Non-Tariff Friction",
      weight: 0.21,
      description: "US pressure on European digital and competition rules. Less pressure produces a healthier reading.",
      history: []
    },
    {
      id: "D5",
      name: "Trade Volume",
      weight: 0.15,
      description: "Change in the value of goods crossing the Atlantic, year on year.",
      history: []
    }
  ],

  questions: [
    {
      id: "TAE-D1-EU", driver: "D1", weight: 0.75,
      title: "Tariff rate on EU goods", currentBucket: "7.25–9.0%", currentScore: 28,
      observed: "7.5% average tariff actually paid",
      observedDate: "Data through July 2026",
      observedNote: "Calculated duties divided by customs value for imports for consumption from the 27 EU members, May–July 2026: $10,794,890,328 ÷ $143,723,327,655 = 7.51%. U.S. Census merchandise files; calculation download below.",
      actualHistory: [["Aug 2024",1.24],["Sep 2024",1.18],["Oct 2024",1.17],["Nov 2024",1.18],["Dec 2024",1.25],["Jan 2025",1.17],["Feb 2025",1.10],["Mar 2025",1.02],["Apr 2025",1.89],["May 2025",3.54],["Jun 2025",6.36],["Jul 2025",7.96],["Aug 2025",8.81],["Sep 2025",8.03],["Oct 2025",7.98],["Nov 2025",7.79],["Dec 2025",8.47],["Jan 2026",8.57],["Feb 2026",8.58],["Mar 2026",8.43],["Apr 2026",7.92],["May 2026",7.79],["Jun 2026",7.62],["Jul 2026",7.51]],
      actualHistoryLabel: "Three-month effective tariff rate",
      sourceLinks: [
        { label: "Download this edition’s calculations", url: "./data/2026-09-28-current-state.csv" },
        { label: "Census merchandise data products", url: "https://www.census.gov/foreign-trade/data/dataproducts.html" },
        { label: "July 2026 import archive", url: "https://www.census.gov/trade/downloads/2026/Merch/im_m/IMDB2607.ZIP" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/ae183aac-3cf6-42ea-9922-121361114535",
      stem: "On 28 September 2027, what will be the effective applied duty rate on European Union goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months?",
      source: "USITC DataWeb, effective applied duty rate. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,2.25],["2.0–5.0%",78,7.375],["5.0–7.25%",55,20.125],["7.25–9.0%",28,34.125],["≥9.0%",0,36.125]]
    },
    {
      id: "TAE-D1-UK", driver: "D1", weight: 0.12,
      title: "Tariff rate on UK goods", currentBucket: "5.0–7.25%", currentScore: 55,
      observed: "6.4% average tariff actually paid",
      observedDate: "Data through July 2026",
      observedNote: "Calculated duties divided by customs value for UK imports for consumption, May–July 2026: $1,094,062,821 ÷ $17,210,060,375 = 6.36%. U.S. Census merchandise files; calculation download below.",
      actualHistory: [["Aug 2024",0.91],["Sep 2024",0.92],["Oct 2024",0.94],["Nov 2024",0.98],["Dec 2024",1.02],["Jan 2025",0.95],["Feb 2025",0.94],["Mar 2025",0.97],["Apr 2025",2.44],["May 2025",4.10],["Jun 2025",6.83],["Jul 2025",6.64],["Aug 2025",6.39],["Sep 2025",5.75],["Oct 2025",5.78],["Nov 2025",6.01],["Dec 2025",6.48],["Jan 2026",6.50],["Feb 2026",6.22],["Mar 2026",6.02],["Apr 2026",6.16],["May 2026",6.41],["Jun 2026",6.30],["Jul 2026",6.36]],
      actualHistoryLabel: "Three-month effective tariff rate",
      sourceLinks: [
        { label: "Download this edition’s calculations", url: "./data/2026-09-28-current-state.csv" },
        { label: "Census merchandise data products", url: "https://www.census.gov/foreign-trade/data/dataproducts.html" },
        { label: "July 2026 import archive", url: "https://www.census.gov/trade/downloads/2026/Merch/im_m/IMDB2607.ZIP" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/46619c96-5846-41a6-92ca-1b92a5f20600",
      stem: "On 28 September 2027, what will be the effective applied duty rate on United Kingdom goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months?",
      source: "USITC DataWeb, effective applied duty rate. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,4.25],["2.0–5.0%",78,13.625],["5.0–7.25%",55,39.25],["7.25–9.0%",28,27.875],["≥9.0%",0,15]]
    },
    {
      id: "TAE-D1-CH", driver: "D1", weight: 0.13,
      title: "Tariff rate on Swiss goods", currentBucket: "2.0–5.0%", currentScore: 78,
      observed: "4.7% average tariff actually paid",
      observedDate: "Data through July 2026",
      observedNote: "Calculated duties divided by customs value for Swiss imports for consumption, May–July 2026, after removing HTS 710811, 710812 and 710813: $601,911,938 ÷ $12,728,870,978 = 4.73%. U.S. Census merchandise files; calculation download below.",
      sourceLinks: [
        { label: "Download this edition’s calculations", url: "./data/2026-09-28-current-state.csv" },
        { label: "Census merchandise data products", url: "https://www.census.gov/foreign-trade/data/dataproducts.html" },
        { label: "July 2026 import archive", url: "https://www.census.gov/trade/downloads/2026/Merch/im_m/IMDB2607.ZIP" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/ccc3f6f9-7a92-49c2-9b4c-7c9be55b8d6e",
      stem: "On 28 September 2027, what will be the effective applied duty rate on Swiss goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months, excluding non-monetary gold?",
      source: "USITC DataWeb, effective applied duty rate, excluding HTS 710811, 710812 and 710813. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,4.25],["2.0–5.0%",78,17.625],["5.0–7.25%",55,38.25],["7.25–9.0%",28,26.625],["≥9.0%",0,13.25]]
    },
    {
      id: "TAE-D2-AUTHORITY", driver: "D2", weight: 1,
      title: "Legal status of broad US tariffs", currentBucket: "In force with a material legal challenge pending", currentScore: 65,
      observed: "Broad Section 301 tariffs are in force and being challenged",
      observedDate: "Status checked 28 September 2026",
      observedNote: "The forced-labor Section 301 tariffs took effect on 24 July 2026 and cover most products from the EU, UK and Switzerland. Consolidated Court of International Trade challenges are pending; no adverse merits ruling had issued by the cutoff.",
      sourceLinks: [
        { label: "Section 301 tariff notice · 91 FR 47318", url: "https://www.govinfo.gov/content/pkg/FR-2026-07-28/pdf/2026-15181.pdf" },
        { label: "Burlap and Barrel docket · CIT 1:26-cv-03345", url: "https://www.courtlistener.com/docket/73667352/burlap-and-barrel-inc-v-united-states-of-america/" },
        { label: "Supreme Court IEEPA opinion", url: "https://www.supremecourt.gov/opinions/25pdf/24-1287_new_3135.pdf" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/cccc399a-07cb-4980-8481-302d77bb1047",
      forecastDate: "29 September 2026",
      stem: "On 28 September 2027, what will be the legal status of the broadest United States tariff measure, by product coverage, that imposes additional duties on goods originating in the European Union, the United Kingdom, or Switzerland?",
      source: "Federal Register tariff actions and amendments, the applicable USITC Harmonized Tariff Schedule, and published US court orders. Status is measured at 11:59 p.m. Eastern Time on 28 September 2027.",
      scoreNote: "The revised legal-status answers use fixed positions of 100 for no broad measure or settled authority, 65 for a pending challenge without an adverse ruling, 40 for time-limited authority, 25 for an adverse ruling under stay or appeal, 0 for an expired or invalidated regime still being replaced, and 50 for a mixed status.",
      distribution: [["No broad additional tariff measure in force",100,4],["In force under settled statutory authority, with no material legal challenge pending",100,7],["In force with a material legal challenge pending, but no adverse merits ruling",65,35],["In force under temporary or expressly time-limited authority",40,7],["In force despite an adverse merits ruling that is stayed or under appeal",25,36],["Expired or invalidated, with a replacement tariff regime being developed or only partly implemented",0,8],["Other or mixed legal status",50,3]]
    },
    {
      id: "TAE-D3-REGULATION", driver: "D3", weight: 0.65,
      title: "Status of the EU-US tariff framework", currentBucket: "In force, unthreatened", currentScore: 100,
      observed: "In force; no Article 3 suspension act identified",
      observedDate: "Status checked 28 September 2026",
      observedNote: "Regulation (EU) 2026/1455 was in force at the cutoff. Its EUR-Lex record showed no later act suspending Articles 1 or 2 under Article 3.",
      sourceLinks: [
        { label: "Regulation (EU) 2026/1455 · EUR-Lex record", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32026R1455" },
        { label: "Regulation (EU) 2026/1455 · official PDF", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32026R1455" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/e46cb1ab-a086-4c31-b755-2d624c252059",
      stem: "On 28 September 2027, what will be the status of the European Union’s implementation of the EU-US tariff framework under Regulation (EU) 2026/1455, with respect to a suspension in response to US conduct?",
      source: "EUR-Lex record for Regulation (EU) 2026/1455 and its linked later acts, checked through 28 September 2026.",
      distribution: [["In force, unthreatened",100,40.125],["In force, suspension in prospect",60,18.625],["Partially suspended",30,35.75],["Suspended or lapsed",0,5.5]]
    },
    {
      id: "TAE-D3-COUNTERMEASURES", driver: "D3", weight: 0.35,
      title: "EU retaliatory measures", currentBucket: "Dormant", currentScore: 100,
      observed: "Adopted but suspended from 7 August 2026",
      observedDate: "Status checked 28 September 2026",
      observedNote: "Regulation (EU) 2026/1893 suspends Articles 1–3 of the EU rebalancing regulation from 7 August 2026, leaving the measures dormant at the cutoff.",
      sourceLinks: [
        { label: "Current suspension · Regulation (EU) 2026/1893", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32026R1893" },
        { label: "Base measures · Regulation (EU) 2025/1564", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32025R1564" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/266cfc13-d5eb-4e23-b708-e6640e77a816",
      stem: "On 28 September 2027, what will be the status of the European Union’s commercial rebalancing measures against the United States?",
      source: "EUR-Lex records for Regulations (EU) 2025/1564 and 2026/1893, checked through 28 September 2026.",
      distribution: [["Dormant",100,70.125],["Reactivation proposed",60,15.75],["Partially in force",30,8.75],["In force",0,5.375]]
    },
    {
      id: "TAE-D4-DIGITAL", driver: "D4", weight: 1,
      title: "US trade action on European digital regulation", currentBucket: "Formal objection", currentScore: 70,
      observed: "Formal objection lodged, no investigation open",
      observedDate: "Status checked 28 September 2026",
      observedNote: "The 2026 National Trade Estimate identifies EU digital measures as trade barriers, and USTR's 23 July statement describes an active dispute being handled through dialogue. USTR's Section 301 inventory showed no in-scope investigation at the cutoff.",
      sourceLinks: [
        { label: "2026 National Trade Estimate report", url: "https://ustr.gov/sites/default/files/files/Press/Releases/2026/National%20Trade%20Estimate%20Report%202026.pdf" },
        { label: "USTR statement on the EU · 23 July 2026", url: "https://www.ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ambassador-greer-issues-statement-european-union-creating-uncertainty-our-transatlantic-trade" },
        { label: "USTR Section 301 investigations inventory", url: "https://ustr.gov/issue-areas/enforcement/section-301-investigations" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/e59ff3d4-bc97-44f5-a002-93eb27a83a57",
      stem: "On 28 September 2027, what will be the highest stage reached by any live United States trade action directed at European digital regulation or competition-enforcement measures?",
      source: "2026 National Trade Estimate report, USTR's 23 July 2026 statement on the EU, and USTR's Section 301 investigations inventory.",
      distribution: [["Dialogue only",100,3.375],["Formal objection",70,22.625],["Investigation open",40,26.75],["Trade measure proposed or adopted, not in force",20,23],["Non-duty trade measure in force",10,3.125],["Duties in force",0,21.125]]
    },
    {
      id: "TAE-D5-GOODS", driver: "D5", weight: 1,
      title: "Two-way goods trade volume", currentBucket: "−9.3 to 0.0%", currentScore: 25,
      observed: "−8.1% year over year",
      observedDate: "Data through July 2026",
      observedNote: "Two-way goods trade in August 2025–July 2026 was $1.2048 trillion, against $1.3110 trillion in the prior twelve months, after removing HTS/Schedule B 710811, 710812 and 710813: −8.10%. U.S. Census merchandise files; calculation download below.",
      sourceLinks: [
        { label: "Download this edition’s calculations", url: "./data/2026-09-28-current-state.csv" },
        { label: "Census merchandise data products", url: "https://www.census.gov/foreign-trade/data/dataproducts.html" },
        { label: "July 2026 export archive", url: "https://www.census.gov/trade/downloads/2026/Merch/ex_m/EXDB2607.ZIP" },
        { label: "July 2026 import archive", url: "https://www.census.gov/trade/downloads/2026/Merch/im_m/IMDB2607.ZIP" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/d04b25cb-ef2a-438e-92ab-784cec4ce5d3",
      stem: "On 28 September 2027, what will be the year-over-year change in two-way goods trade between the United States and the European Union, the United Kingdom and Switzerland combined, measured on a trailing twelve-month basis and excluding non-monetary gold?",
      source: "U.S. Census Bureau monthly merchandise files: export all_val_mo plus import con_val_mo, excluding HS 710811, 710812 and 710813. Reference periods: August 2026–July 2027 against August 2025–July 2026.",
      distribution: [["≥+10.0%",100,23.5],["+5.0 to +10.0%",78,28.5],["0.0 to +5.0%",55,26.75],["−9.3 to 0.0%",25,15.625],["<−9.3%",0,5.625]]
    }
  ],

  background: [
    { kind: "context", title: "Two-way services trade growth", stem: "On 28 September 2027, what will the year-over-year change in two-way United States services trade with the European Union, the United Kingdom and Switzerland be, measured over the trailing four published quarters?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/e6f47e89-f6cf-4035-8809-8c4dc70a4902", outcomes: [{label:"Contracting sharply (below −9.4%)",pct:2},{label:"Contracting (−9.4% to 0.0%)",pct:6.75},{label:"Flat to slow growth (0.0% to +5.0%)",pct:33.75},{label:"Growing (+5.0% to +10.0%)",pct:45.5},{label:"Growing strongly (+10.0% and above)",pct:12}] },
    { kind: "context", title: "Direct investment position", stem: "On 28 September 2027, what will the year-over-year change in the combined two-way direct investment position between the United States and the European Union, the United Kingdom and Switzerland be, on a historical-cost basis?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/ccb8a79c-883d-4b36-b996-8dd5bc2d8e35", outcomes: [{label:"Unwinding (below −5.0%)",pct:2.375},{label:"Flat to falling (−5.0% to +2.0%)",pct:11.625},{label:"Slow growth (+2.0% to +5.0%)",pct:28},{label:"Growing (+5.0% to +9.0%)",pct:43.625},{label:"Growing strongly (+9.0% and above)",pct:14.375}] },
    { kind: "context", flagged: true, title: "Multilateral appellate review", stem: "On 28 September 2027, will binding multilateral appellate review of trade disputes be available to the United States, the European Union, the United Kingdom and Switzerland?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/e433be55-fcce-4c87-91fb-8f7b6f57a5d6", outcomes: [{label:"Appellate review available",pct:1.875},{label:"Selection process opened",pct:3.25},{label:"Interim arrangement only, United States participating",pct:1.625},{label:"No appellate route between the parties",pct:1.375},{label:"Interim arrangement only, United States not participating",pct:88},{label:"Other or partial appellate route",pct:3.875}] },
    { kind: "risk", flagged: true, title: "Shipping disruption", stem: "Between 28 September 2026 and 28 September 2027, will transatlantic maritime throughput have fallen 20% or more below its trailing baseline for fourteen or more consecutive days?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/416f16b9-d2d3-4e36-84ba-0e74aa49a6e4", outcomes: [{label:"Yes",pct:19.5},{label:"No",pct:80.5}] },
    { kind: "risk", flagged: true, title: "Cyber incident on trade infrastructure", stem: "Between 28 September 2026 and 28 September 2027, will a cyber incident have materially disrupted transatlantic trade infrastructure for 72 or more consecutive hours?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/b7ad326c-d053-4151-aae8-acc6f0e56876", outcomes: [{label:"Yes",pct:14.5},{label:"No",pct:85.5}] },
    { kind: "risk", flagged: true, title: "Rupture in the security relationship", stem: "Between 28 September 2026 and 28 September 2027, will a formal rupture in the transatlantic security relationship have occurred?", forecastUrl: "https://www.hinsley.ai/forecasting/questions/a80542ad-247b-4c89-95e0-c520270baac4", outcomes: [{label:"Yes",pct:5},{label:"No",pct:95}] }
  ]
};

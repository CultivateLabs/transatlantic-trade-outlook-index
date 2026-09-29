/*
 * TRANSATLANTIC ECONOMIC EXCHANGE INDEX — PUBLISHING DATA
 *
 * This is the only file that needs routine editing. The page calculates the
 * question, driver, and headline scores from the inputs below. Percentages in
 * every forecast distribution must add to 100.
 */
window.INDEX_DATA = {
  meta: {
    lastUpdated: "28 September 2026",
    readDate: "5 Aug 2026",
    refreshCadence: "monthly",
    horizon: "28 September 2027",
    horizonShort: "Sep 2027",
    historyStart: "",
    subscribeUrl: ""
  },

  summary: {
    headline: "The relationship is holding today. Forecasters expect more trade fights over the next year.",
    detail: "High tariffs and falling goods trade keep today’s score at 59.5. Trade is expected to recover, but growing disputes over the tariff deal and European digital rules pull the forecast down to 49.7.",
    interpretation: [
      {
        lead: "Why today’s score is 59.5:",
        text: "The tariff deal is still in place and European retaliation is paused. But tariffs remain high and goods trade is down."
      },
      {
        lead: "Why the forecast falls to 49.7:",
        text: "Forecasters expect goods trade to grow, but they also expect more conflict over the tariff deal and European digital rules. The policy risks outweigh the trade rebound."
      }
    ],
    paragraphs: [
      {
        lead: "Where things stand:",
        text: "The basic relationship still works. The deal is in place and European retaliation is paused. High tariffs and shrinking goods trade keep the score from being stronger."
      },
      {
        lead: "What could change:",
        text: "Forecasters expect goods trade to improve. They also see a greater risk that the tariff deal is partly suspended and that the United States steps up action against European digital rules."
      },
      {
        lead: "The bottom line:",
        text: "More trade, but more conflict. The conflict is expected to matter more, so the score falls 9.8 points."
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
      description: "The duty actually collected on European goods arriving in the US. Lower duties score higher.",
      history: []
    },
    {
      id: "D2",
      name: "Tariff Legal Basis",
      weight: 0.14,
      description: "Whether the legal authority behind US tariffs is holding up in court.",
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
      description: "US pressure on European digital and competition rules. Less pressure scores higher.",
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
      observed: "8.4% average tariff actually paid",
      observedNote: "Calculated duties as a share of customs value, three months ending May 2026. USITC DataWeb.",
      sourceLinks: [
        { label: "USITC DataWeb", url: "https://dataweb.usitc.gov/" },
        { label: "DataWeb definitions and FAQs", url: "https://www.usitc.gov/applications/dataweb/faqs" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/ae183aac-3cf6-42ea-9922-121361114535",
      stem: "On 28 September 2027, what will be the effective applied duty rate on European Union goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months?",
      source: "USITC DataWeb, effective applied duty rate. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,2.25],["2.0–5.0%",78,7.375],["5.0–7.25%",55,20.125],["7.25–9.0%",28,34.125],["≥9.0%",0,36.125]]
    },
    {
      id: "TAE-D1-UK", driver: "D1", weight: 0.12,
      title: "Tariff rate on UK goods", currentBucket: "5.0–7.25%", currentScore: 55,
      observed: "6.1% average tariff actually paid",
      observedNote: "Calculated duties as a share of customs value, three months ending May 2026. USITC DataWeb.",
      sourceLinks: [
        { label: "USITC DataWeb", url: "https://dataweb.usitc.gov/" },
        { label: "DataWeb definitions and FAQs", url: "https://www.usitc.gov/applications/dataweb/faqs" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/46619c96-5846-41a6-92ca-1b92a5f20600",
      stem: "On 28 September 2027, what will be the effective applied duty rate on United Kingdom goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months?",
      source: "USITC DataWeb, effective applied duty rate. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,4.25],["2.0–5.0%",78,13.625],["5.0–7.25%",55,39.25],["7.25–9.0%",28,27.875],["≥9.0%",0,15]]
    },
    {
      id: "TAE-D1-CH", driver: "D1", weight: 0.13,
      title: "Tariff rate on Swiss goods", currentBucket: "2.0–5.0%", currentScore: 78,
      observed: "4.3% average tariff actually paid",
      observedNote: "Calculated duties as a share of customs value, three months ending May 2026, excluding non-monetary gold. USITC DataWeb.",
      sourceLinks: [
        { label: "USITC DataWeb", url: "https://dataweb.usitc.gov/" },
        { label: "DataWeb definitions and FAQs", url: "https://www.usitc.gov/applications/dataweb/faqs" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/ccc3f6f9-7a92-49c2-9b4c-7c9be55b8d6e",
      stem: "On 28 September 2027, what will be the effective applied duty rate on Swiss goods entering the United States, measured as calculated duties as a share of customs value on imports for consumption over the trailing three months, excluding non-monetary gold?",
      source: "USITC DataWeb, effective applied duty rate, excluding HTS 710811, 710812 and 710813. Reference period for this round: the three months May to July 2027.",
      distribution: [["<2.0%",100,4.25],["2.0–5.0%",78,17.625],["5.0–7.25%",55,38.25],["7.25–9.0%",28,26.625],["≥9.0%",0,13.25]]
    },
    {
      id: "TAE-D2-AUTHORITY", driver: "D2", weight: 1,
      title: "Legal durability of US tariff authority", currentBucket: "Contested", currentScore: 65,
      observed: "Upheld in part, under active appeal",
      observedNote: "No final judgment on the tariff authorities; measures remain in effect pending appeal. Federal Circuit docket.",
      sourceLinks: [
        { label: "CourtListener RECAP", url: "https://www.courtlistener.com/recap/" },
        { label: "Court of International Trade", url: "https://www.cit.uscourts.gov/slip-opinions-year" },
        { label: "Federal Circuit opinions and orders", url: "https://www.cafc.uscourts.gov/home/case-information/opinions-orders/" },
        { label: "Supreme Court docket search", url: "https://www.supremecourt.gov/docket/docket.aspx?Search=All+Cases" },
        { label: "Federal Register", url: "https://www.federalregister.gov/" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/ab0aae9f-fd19-4131-a367-496c75549119",
      stem: "On 28 September 2027, what will be the legal status of the authorities under which the United States imposes tariffs on goods originating in the European Union, the United Kingdom or Switzerland?",
      source: "Slip opinions of the Court of International Trade, the Court of Appeals for the Federal Circuit and the Supreme Court; the Federal Register; and CourtListener RECAP for docket-level information, with PACER as the authoritative fallback.",
      distribution: [["Settled",100,14.375],["Contested",65,63.25],["Under review",80,4.625],["Vacated or rebuilding",0,14.75],["No applicable additional tariffs",100,3]]
    },
    {
      id: "TAE-D3-REGULATION", driver: "D3", weight: 0.65,
      title: "Status of the EU-US tariff framework", currentBucket: "In force, unthreatened", currentScore: 100,
      observed: "In force, no suspension proposed",
      observedNote: "Framework applying in full; no suspension act tabled in the Comitology Register.",
      sourceLinks: [
        { label: "Regulation (EU) 2026/1455", url: "https://eur-lex.europa.eu/eli/reg/2026/1455/oj/eng" },
        { label: "Comitology Register", url: "https://ec.europa.eu/transparency/comitology-register/" },
        { label: "Have Your Say", url: "https://ec.europa.eu/info/law/better-regulation/have-your-say" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/e46cb1ab-a086-4c31-b755-2d624c252059",
      stem: "On 28 September 2027, what will be the status of the European Union’s implementation of the EU-US tariff framework under Regulation (EU) 2026/1455, with respect to a suspension in response to US conduct?",
      source: "EUR-Lex, together with the European Commission Comitology Register and Have Your Say portal.",
      distribution: [["In force, unthreatened",100,40.125],["In force, suspension in prospect",60,18.625],["Partially suspended",30,35.75],["Suspended or lapsed",0,5.5]]
    },
    {
      id: "TAE-D3-COUNTERMEASURES", driver: "D3", weight: 0.35,
      title: "EU retaliatory measures", currentBucket: "Dormant", currentScore: 100,
      observed: "Adopted but suspended, no application date",
      observedNote: "Rebalancing regulation on the books with application suspended. EUR-Lex.",
      sourceLinks: [
        { label: "Regulation (EU) 2025/1564", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32025R1564" },
        { label: "Comitology Register", url: "https://ec.europa.eu/transparency/comitology-register/" },
        { label: "Have Your Say", url: "https://ec.europa.eu/info/law/better-regulation/have-your-say" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/266cfc13-d5eb-4e23-b708-e6640e77a816",
      stem: "On 28 September 2027, what will be the status of the European Union’s commercial rebalancing measures against the United States?",
      source: "EUR-Lex, together with the European Commission Comitology Register and Have Your Say portal.",
      distribution: [["Dormant",100,70.125],["Reactivation proposed",60,15.75],["Partially in force",30,8.75],["In force",0,5.375]]
    },
    {
      id: "TAE-D4-DIGITAL", driver: "D4", weight: 1,
      title: "US trade action on European digital regulation", currentBucket: "Formal objection", currentScore: 70,
      observed: "Formal objection lodged, no investigation open",
      observedNote: "Listed as a foreign trade barrier in the most recent National Trade Estimate report; no Section 301 investigation initiated.",
      sourceLinks: [
        { label: "Latest National Trade Estimate", url: "https://ustr.gov/about-us/policy-offices/press-office/reports-and-publications" },
        { label: "USTR press releases", url: "https://ustr.gov/about-us/policy-offices/press-office/press-releases" },
        { label: "Federal Register", url: "https://www.federalregister.gov/" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/e59ff3d4-bc97-44f5-a002-93eb27a83a57",
      stem: "On 28 September 2027, what will be the highest stage reached by any live United States trade action directed at European digital regulation or competition-enforcement measures?",
      source: "The most recent National Trade Estimate report, USTR press releases, and the Federal Register.",
      distribution: [["Dialogue only",100,3.375],["Formal objection",70,22.625],["Investigation open",40,26.75],["Trade measure proposed or adopted, not in force",20,23],["Non-duty trade measure in force",10,3.125],["Duties in force",0,21.125]]
    },
    {
      id: "TAE-D5-GOODS", driver: "D5", weight: 1,
      title: "Two-way goods trade volume", currentBucket: "−9.3 to 0.0%", currentScore: 25,
      observed: "−3.8% year over year",
      observedNote: "Trailing twelve months ending May 2026 against the prior twelve, excluding non-monetary gold. USITC DataWeb.",
      sourceLinks: [
        { label: "USITC DataWeb", url: "https://dataweb.usitc.gov/" },
        { label: "DataWeb API guide", url: "https://www.usitc.gov/applications/dataweb/api/dataweb_query_api.html" }
      ],
      forecastUrl: "https://www.hinsley.ai/forecasting/questions/d04b25cb-ef2a-438e-92ab-784cec4ce5d3",
      stem: "On 28 September 2027, what will be the year-over-year change in two-way goods trade between the United States and the European Union, the United Kingdom and Switzerland combined, measured on a trailing twelve-month basis and excluding non-monetary gold?",
      source: "U.S. Census Bureau monthly merchandise files: export all_val_mo plus import con_val_mo, excluding HS 710811, 710812 and 710813. Reference periods: August 2026–July 2027 against August 2025–July 2026.",
      distribution: [["≥+10.0%",100,23.5],["+5.0 to +10.0%",78,28.5],["0.0 to +5.0%",55,26.75],["−9.3 to 0.0%",25,15.625],["<−9.3%",0,5.625]]
    }
  ],

  background: [
    { kind: "context", title: "Two-way services trade growth", stem: "On 28 September 2027, what will the year-over-year change in two-way United States services trade with the European Union, the United Kingdom and Switzerland be, measured over the trailing four published quarters?", outcomes: [{label:"Contracting sharply (below −9.4%)",pct:1},{label:"Contracting (−9.4% to 0.0%)",pct:10},{label:"Flat to slow growth (0.0% to +5.0%)",pct:33},{label:"Growing (+5.0% to +10.0%)",pct:42},{label:"Growing strongly (+10.0% and above)",pct:14}] },
    { kind: "context", title: "Direct investment position", stem: "On 28 September 2027, what will the year-over-year change in the combined two-way direct investment position between the United States and the European Union, the United Kingdom and Switzerland be, on a historical-cost basis?", outcomes: [{label:"Unwinding (below −5.0%)",pct:3},{label:"Flat to falling (−5.0% to +2.0%)",pct:17},{label:"Slow growth (+2.0% to +5.0%)",pct:33},{label:"Growing (+5.0% to +9.0%)",pct:35},{label:"Growing strongly (+9.0% and above)",pct:12}] },
    { kind: "context", flagged: true, title: "Multilateral appellate review", stem: "On 28 September 2027, will binding multilateral appellate review of trade disputes be available to the United States, the European Union, the United Kingdom and Switzerland?", outcomes: [{label:"Appellate review available",pct:1},{label:"Selection process opened",pct:3},{label:"Interim arrangement only, United States participating",pct:1},{label:"No appellate route between the parties",pct:95}] },
    { kind: "risk", flagged: true, title: "Shipping disruption", stem: "Between 28 September 2026 and 28 September 2027, will transatlantic maritime throughput have fallen 20% or more below its trailing baseline for fourteen or more consecutive days?", outcomes: [{label:"Yes",pct:15},{label:"No",pct:85}] },
    { kind: "risk", flagged: true, title: "Cyber incident on trade infrastructure", stem: "Between 28 September 2026 and 28 September 2027, will a cyber incident have materially disrupted transatlantic trade infrastructure for 72 or more consecutive hours?", outcomes: [{label:"Yes",pct:25},{label:"No",pct:75}] },
    { kind: "risk", flagged: true, title: "Rupture in the security relationship", stem: "Between 28 September 2026 and 28 September 2027, will a formal rupture in the transatlantic security relationship have occurred?", outcomes: [{label:"Yes",pct:20},{label:"No",pct:80}] }
  ]
};

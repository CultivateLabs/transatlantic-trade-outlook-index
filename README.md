# Transatlantic Trade Outlook Index

The public, static website for Cultivate Labs' Transatlantic Trade Outlook Index, powered by Hinsley.

The site compares the current health of the trading relationship between the United States and Europe with Hinsley’s AI forecast for 12 months ahead. It is built entirely with HTML, CSS, and JavaScript for deployment on GitHub Pages.

Monthly index values, forecasts, source citations, interpretation copy, and index identity fields are maintained in `index-data.js`. The `meta` object at the top supplies the series label, index name, short name, system description, page description, dates, and forecast horizon.

## Shared index design system

`assets/css/index-core.css` is the global stylesheet for the Cultivate Health Index Pair family. It contains the shared design tokens, typography, page structure, index hero, cards, tables, buttons, responsive behavior, and print rules. The public index application loads this one file, so a visual-system change is made once rather than repeated in every view.

The stylesheet exposes CSS variables at the top of the file. A future index should inherit `index-core.css` and, only when necessary, provide a small index-specific stylesheet that overrides those variables. Do not copy the core stylesheet into a separate index-specific file.

The reusable publishing pattern is:

- Shared presentation: `assets/css/index-core.css`
- Shared browser runtime: `support.js`
- Index-specific values, questions, sources, and narrative: `index-data.js`
- Page structure and navigation: `index.html`

The current public views are served by the same static HTML file. The latest reading uses `index.html`, Forecast Context uses `index.html?page=background`, Index Forecasts uses `index.html?page=forecasts`, and methodology uses `index.html?page=methodology`. This keeps every piece of current markup and copy in one place while remaining compatible with local review and GitHub Pages.

Published monthly editions are preserved under `editions/YYYY-MM-DD/` and listed at `editions/index.html`. These pages are intentionally static: a later monthly update must add a new edition rather than overwrite a prior one.

When a second index is added, start from the current page structure, point it to its own data file, and keep the shared stylesheet linked from the central `assets/css` directory.

## Standard expected-movement language

Every CHIP index uses the same labels for the Forward-State Index minus Current-State Index spread. Labels are calculated from the spread and are not chosen editorially.

| Spread | Standard label |
| --- | --- |
| +10.0 or more | Much healthier |
| +5.0 to +9.9 | Healthier |
| +2.0 to +4.9 | Slightly healthier |
| −1.9 to +1.9 | Little change expected |
| −2.0 to −4.9 | Slightly less healthy |
| −5.0 to −9.9 | Less healthy |
| −10.0 or less | Much less healthy |

The neutral range prevents immaterial differences from being described as meaningful movement. These thresholds apply to the headline pair and every driver pair.

# Portfolio design

React 19 and Vite, with custom CSS and existing inline SVG icons. No Carbon runtime library or animation dependency is needed. Services and Resume remain local state views, as in the original project; all original contact links, employment details, education and active skill groups are retained in `src/content.js`. No individual projects were supplied, so the development section links to the original GitHub profile.

## Foundation

- IBM Plex Sans: local WOFF2 files, light, regular and medium. Downloaded from the official [IBM Plex repository](https://github.com/IBM/plex); the OFL licence is included in `public/fonts/LICENSE.txt`. Font display uses swap, with critical weights preloaded.
- [IBM typography](https://www.ibm.com/design/language/typography/typeface/) and [type scale](https://www.ibm.com/design/language/typography/type-scale/): light expressive headings, readable regular body copy and restrained labels.
- [IBM 2x Grid](https://www.ibm.com/design/language/2x-grid/): 16-column hero, half and quarter divisions, and four-column mobile layout.
- [Carbon spacing](https://www.carbondesignsystem.com/building-blocks/foundations/spacing/overview): 4, 8, 16, 24, 32, 48, 64 and 96px tokens.
- [IBM colour](https://www.ibm.com/design/language/color/): Gray 10 page, White cards, Gray 100 text and Blue 60 actions. Blue 30 supports text on dark surfaces.
- [Carbon motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview): 110ms feedback and 240ms entrances, productive cubic-bezier easing, short travel, no stagger or scroll hijacking. Reduced motion disables CSS movement and section animations, including when the preference changes at runtime.
- [Carbon accessibility](https://www.carbondesignsystem.com/building-blocks/foundations/accessibility/overview): semantic landmarks, skip link, visible focus, native keyboard-accessible disclosures, responsive menu state, focus transfer on view changes, and live clipboard feedback.
- [Carbon loading](https://www.carbondesignsystem.com/building-blocks/core/components/loading/guidelines): skeleton only for the genuinely pending portrait, with reserved space, descriptive status and error fallback. Available static content is never blocked. There are no fetch requests or lazy routes requiring additional loading/empty states.

## Local verification

`npm run build` and `npm run lint` are the project checks. `scripts/verify-portfolio.mjs` uses an optional local Playwright installation and Windows Edge to inspect 1440, 1024, 768, 390 and 320px viewports, both views, navigation, keyboard disclosures, clipboard, image loading/failure, reduced motion and runtime errors. It saves screenshots in `artifacts/`. Playwright and Prettier are development-session tools, not project dependencies. To rerun, install Playwright without saving it and adjust the browser executable path if needed; serve Vite at port 5173.

External profile destinations and mailto launch depend on the visitor's accounts and installed mail client. The implementation does not submit contact information to a server.

The original 2.1 MB PNG portrait is retained as source. The page serves a 72 KB WebP copy (about 97% smaller), generated at a maximum width of 1000px with the original aspect ratio.

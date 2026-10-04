# Tulas International School — Homepage Redesign

A responsive school homepage assessment built around TIS's official identity, photography and core educational message. The design pairs burgundy, warm ivory and gold with editorial typography, generous spacing and distinct layouts for academics, boarding, sport and admissions.

**GitHub repository:** https://github.com/lanka-srinivasudu/tis-homepage-redesign

**Live demo:** https://tis-homepage-redesign-five-rosy.vercel.app/

This is an independently deployed assessment preview, not a replacement for the official school website.

## Stack

- React 19, Vite 8 and strict TypeScript.
- Plain CSS with reusable design tokens and responsive breakpoints.
- Framer Motion for reveals and scroll progress; Lucide React for icons.
- Self-hosted DM Sans and Cormorant Garamond through Fontsource.
- ESLint, TypeScript, Vitest, React Testing Library and jsdom for checks.
- Sharp is a development-only tool for refreshing optimized image assets.
- npm with an included `package-lock.json`.

Use **Node.js 24.15+** and npm (or Node 22.22.2+ / 26+; these satisfy the installed test tools). Built and checked locally with Node 26.9.0 / npm 11.19.1.

## Run locally

Install the locked dependencies:

```bash
npm ci
```

Start development with hot reload:

```bash
npm run dev -- --host 127.0.0.1
```

Build production files:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

Open http://127.0.0.1:4173. The preview command serves an existing `dist/`; run the build first after making changes.

Run all checks:

```bash
npm run check
```

Individual checks: `npm run lint`, `npm run typecheck`, `npm test`. Check the current dependency audit with `npm audit`.

No environment variables, credentials, API keys, backend or database are required. `.gitignore` excludes dependencies, build output and secret environment files.

## Architecture

```text
src/
  components/
    ui/          ActionLink and responsive SchoolPhoto
    layout/      Sticky Header, native-dialog mobile navigation, Footer
    sections/    Hero, Introduction, Academics, Boarding,
                 BeyondClassroom, SchoolEvidence, Admissions
    animation/   Reveal and ScrollProgress
  hooks/         useMediaQuery for responsive menu cleanup
  data/          Typed image, navigation, sports and official-link data
  styles/        Shared tokens, layouts, breakpoints and motion overrides
  App.tsx        Semantic page composition and reduced-motion configuration
  main.tsx       React entry point and local font imports
scripts/         Reproducible official-asset refresh
tests/          Reduced-motion and navigation regression tests
docs/           Source attribution, asset manifest and link-check results
```

The sections are mostly stateless. `Header` owns a single `menuOpen` state. A media-query subscription closes the modal and unlocks body scrolling when moving to desktop. The native dialog makes the background inert; keyboard handling wraps Tab/Shift+Tab, Escape dismisses the menu, and closing restores focus to the trigger. Section links retain native anchor navigation and sticky-header offsets.

## Two standout features

### Scroll-triggered reveals

`Reveal` gives sections a subtle 22px rise and opacity transition lasting **0.5 seconds**, within the requested 0.3–0.6 second range. Framer Motion observes viewport entry and plays each reveal once; sports cards have a small 0/60/120ms stagger. Reduced-motion users receive content immediately, without a hidden initial state. A CSS media-query override also removes transforms/transitions and ensures content visibility. Keyboard focus within a reveal makes its content visible immediately.

### Fixed reading progress

`ScrollProgress` connects Framer Motion's `useScroll().scrollYProgress` (clamped to 0–1) to `scaleX` on a thin, fixed top bar. There is no spring, scroll interception or custom scrolling engine. It remains an instantaneous position indicator under reduced motion. The decorative bar is hidden from assistive technology.

## Accessibility and performance

- Semantic landmarks, one H1, ordered section headings and a keyboard skip link.
- Labelled navigation, visible focus outlines, large primary controls and a modal mobile menu.
- Escape dismissal, focus wrapping, focus restoration and background scroll locking.
- Native scrolling and offset section anchors; no autoplay or parallax.
- Descriptive photograph alternatives; decorative icons are hidden from screen readers.
- Local WebP image variants with `srcset`/`sizes`, reserved image dimensions and layout containers.
- Hero image loads eagerly with high priority; below-the-fold photography loads lazily.
- Local fonts avoid Google Fonts network requests. School assets are also served locally.
- Real links for admissions, brochure, email, phone and directions. No pretend forms or submission messages.
- Page title, meta description, official favicon and a no-JavaScript fallback linking to the official school.

## Sources and content decisions

See [docs/SOURCES.md](docs/SOURCES.md) for all content sources and limitations, [docs/assets.json](docs/assets.json) for exact asset URLs, and [docs/link-checks.json](docs/link-checks.json) for external destination checks.

The original homepage's CBSE curriculum and 2012 founding statements are preserved. Other copy is a concise adaptation of official homepage themes, with specific academic and boarding facts verified on the corresponding official pages. The source homepage's four campus figures, four published rankings and two attributed parent comments appear in a compact evidence section. No facts, testimonials, awards or rankings have been invented. The logo artwork remains unchanged. All photographs are from official TIS pages.

The school homepage and separate admissions portal disagree on the postcode (248011 vs 248197). The footer follows the requested homepage's 248011. The school should reconcile this before production use. An unavailable Open Graph photo was replaced with an accessible official campus photograph. The dated calendar and incomplete virtual-tour destination are not linked.

To refresh assets from the recorded official URLs (optional; included assets already work offline):

```bash
npm run assets:refresh
```

This requires network access and regenerates files in `public/images/`. School photographs and branding remain the property of their owners. Confirm school approval for continued public reuse.

## Verification

Verification was performed on 4 October 2026:

- Production build, strict TypeScript and ESLint checks: passed with no errors or lint warnings.
- `npm audit` and `npm audit --omit=dev`: zero known vulnerabilities at check time.
- Four component regression tests: immediate reduced-motion content visibility, bidirectional menu focus wrapping/restoration, native cancellation, and section selection/official admissions destination.
- Browser inspection at 375 × 812, 768 × 1024 and 1440 × 1000: no horizontal overflow; rendered images loaded successfully; no captured console warnings or errors.
- Sticky navigation offsets and an opaque header surface, mobile menu opening and closing, Escape and keyboard focus, scroll progress changes, reveals and image loading. Fixed the footer logo contrast and added explicit Tab wrapping after visual/keyboard testing.
- External linked destinations checked with HTTP requests; all recorded final destinations returned 200.

The reduced-motion component test uses a mocked media preference with real Framer Motion rendering. The connected browser does not expose motion-preference emulation, so an OS-level reduced-motion visual pass was not performed. This is documented rather than claimed as a browser pass. No real admissions form, OTP, call, email or payment was submitted. No cross-browser or physical-device certification is implied.

## Vercel deployment

The current production demo is available at https://tis-homepage-redesign-five-rosy.vercel.app/.

The Vercel project uses this GitHub repository with the Vite framework preset. Its install command is `npm ci`, build command is `npm run build`, and output directory is `dist`. It requires no environment variables or rewrite configuration. Push reviewed changes to `main` to trigger the connected deployment workflow, then verify the live demo after Vercel finishes building.

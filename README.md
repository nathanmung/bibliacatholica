# Biblia Catholica - Official Catholic Bible Digital App

Biblia Catholica is a digital version of the official Catholic Bible. It uses the official text from the Catholic Church and adds audio narration for listening. The website is currently in alpha. It is very incomplete and still under heavy construction.

A modern web app for the full Catholic canon (73 books), with responsive UI, search, verse highlights and arrow navigation. Global project supporting multiple languages, starting with French (AELF text).

## Objective
- Clean UI/UX: Book grid, arrow navigation, verse copy/highlight, dark mode.
- Fully mobile: Responsive design + offline cache (PWA).
- Audio narration.
- Global accessibility: Official Catholic texts in multiple languages, with narration.

## Tech Stack
- Next.js 15 (TypeScript, Tailwind CSS).
- Data: JSON structured texts.
- Tools: Vercel for deployment.

## Structure
- `src/app`: Pages (home grid, bible/[bookId]: chapter list with search, bible/[bookId]/[chapterId]: verses with arrows).
- `src/lib`: bibleData.ts (export bibleBooks).
- `src/types`: bible.ts (interfaces Book/Chapter/Verse).
- `txts/`: Source files.
- `public`: manifest.json (PWA install).

## Languages
Currently French only (AELF official text). Coming soon: English, Spanish, Italian, Portuguese, Polish (official Vatican texts, with multilingual audio narration).

## Getting Started
### Development
1. Clone: `git clone https://github.com/nathanmung/bibliacatholica.git`
2. Install deps: `npm install`
3. Run server: `npm run dev` (localhost:3000).

Optional :
4. Build prod: `npm run build`.
5. Lint: `npm run lint -- --fix`.

### User Flow
- Home: Grid "Ancien Testament (MVP: Genesis)" > Click Genesis > Chapter 1 verses.
- Chapters: Search filter.
- Verses: Highlight/copy on click, arrows next/prev (Chapters 1-50).
- Mobile: Responsive stack.

## Roadmap
- v0.2.0: 
- Dark mode toggle, verse search.
- Audio for Exodus.
- Texts for more books of the Old Testament.


## License
GPL v3 ([LICENSE](LICENSE)). Code/text/images open.

## Contact
Nathan Mung – Alpha project, contributions welcome!

---

Biblia Catholica is a digital version of the official Catholic Bible. 

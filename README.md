# Jihadul Islam Sajim | Portfolio

Personal developer portfolio built on the open-source 3D portfolio
[red1-for-hek/portfolio-website](https://github.com/red1-for-hek/portfolio-website) (MIT).
React, TypeScript, Vite, Three.js, GSAP and Lenis, with a chat assistant and a chess page.

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
```

## Edit your content
Almost everything lives in `src/config.ts`: name, hero text, about, timeline, projects, skills and contact links.
- `contact.linkedin` and `contact.resume` are empty, so those buttons stay hidden until you fill them in
  (put the PDF in `public/` and use a path like `/resume.pdf`).
- `developer.photo` is empty. Add a path to show a photo on mobile.
- Project screenshots currently use `public/images/placeholder.webp`. Add your own files and update `image` in each project.
- Timeline entries have no years yet. `period` is shown as the big label, so replace it with real years.

## Chat assistant (optional)
The chat on `/play` calls `api/chat.js`, a Vercel serverless function that uses Groq.
1. Create a Groq API key.
2. Add `GROQ_API_KEY` as an environment variable in Vercel (see `.env.example`).
3. The function does not run under `npm run dev`; use `vercel dev` or test on a Vercel deployment.
Without a key the chat shows a message pointing visitors to your email. The persona prompt is `SYSTEM_PROMPT` in `src/pages/Play.tsx`.

## Licenses and credits
- Upstream code: MIT, Copyright (c) 2025 Redoyanul Haque. See `LICENSE`.
- Chess engine: `public/stockfish.js` and `public/stockfish.wasm` are Stockfish compiled to WebAssembly (GPL v3, see header in the file).
  If you publish the site, GPL v3 asks you to make the corresponding source available; link to the Stockfish source and keep the header.
- 3D character: `public/models/character.enc` comes from the upstream repository. Its separate license is not stated there, so confirm you may use it or replace it before deploying.

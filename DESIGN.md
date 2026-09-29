---
name: Nésio Photo — Câmara Escura
description: Um fotógrafo, três rolos de filme — imagens que emergem do escuro.
colors:
  bg: "#0c0a08"
  bg-1: "#100c09"
  bg-2: "#16110c"
  bg-3: "#1e1811"
  ink: "#f4ede2"
  ink-dim: "hsl(34 16% 64%)"
  ink-faint: "hsl(32 12% 46%)"
  safelight: "#ff5a1f"
  safelight-2: "#ff8a3d"
  ember: "#b8340f"
  acc-magenta: "#ff4d8d"
  acc-ambar: "#ffb648"
  acc-prisma: "#ff7a3d"
typography:
  display:
    fontFamily: "Bodoni Moda, Times New Roman, serif"
    fontSize: "clamp(2.7rem, 8.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Times New Roman, serif"
    fontSize: "clamp(2rem, 4.4vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.005em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  pill: "100px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "30px"
  section: "clamp(60px, 11vh, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.safelight}"
    textColor: "#1a0b04"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.safelight-2}"
    textColor: "#1a0b04"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "13px 14px"
  card:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    rounded: "10px"
    padding: "clamp(24px, 3.5vw, 40px)"
---

# Design System: Nésio Photo — Câmara Escura

## Overview

**Creative North Star: "A Câmara Escura"**

The whole system behaves like a photographer's darkroom. The surface is a warm, near-black ground lit from below by an amber safelight; photographs do not simply appear, they *develop* — resolving from a dark, grainy, low-contrast latent image into full clarity as they enter view. The three services (15 Anos, Casamento, Kids) are framed as three rolls of 35mm film shot by one hand, so range never fragments the identity.

The register is cinematic and emotional, not clinical. Type carries the feeling: a high-contrast Bodoni Moda display speaks for the human, memory-laden lines, while a technical JetBrains Mono handles the film's own furniture (frame counters, ISO, roll numbers) and Archivo does the quiet work of reading. Ornament is diegetic — sprocket holes, contact-sheet frames, grease-pencil circles on the picks, a light-leak that bleeds only along film edges — never decoration for its own sake. Negative space is treated as active dark, not emptiness to be filled.

The system explicitly rejects the category default for photographer sites: a bright, minimalist photo grid with thin sans-serif over a neutral hero. It also rejects gradient text, glassmorphism as decoration, and any accent stripe glued to the side of a card.

**Key Characteristics:**
- Warm near-black ground with a living amber safelight and grain.
- Photographs develop from dark to clear on scroll (the signature moment).
- 35mm film language: sprockets, contact sheets, frame counters, grease-pencil picks.
- Bodoni display for emotion, Mono for film data, Archivo for reading.
- The Instagram gradient exists only as a light leak on film edges.

## Colors

A committed dark palette: one warm-black ground, an incandescent safelight orange that carries the brand, and three per-vertical accents drawn from the same light-leak spectrum.

### Primary
- **Safelight Orange** (#ff5a1f): the brand's living light. Primary actions (shutter/WhatsApp buttons), the frame-counter numerals on the picked frame, focus rings, the lower-left ambient glow. The one voice of the surface.
- **Safelight Flare** (#ff8a3d): the lighter tint for hovers and for mono text that must clear contrast over lit imagery.
- **Ember** (#b8340f): the deep, receded orange for scrollbar, index ticks, and shadow-side glows.

### Secondary — Per-Roll Accents
- **Quinze Magenta** (#ff4d8d): accent for the 15 Anos roll — glamour, colored stage light.
- **Casamento Âmbar** (#ffb648): accent for the Casamento roll — warm, timeless gold.
- **Kids Prisma** (#ff7a3d): accent for the Kids roll — playful, closest to the full light-leak.

### Neutral
- **Câmara Black** (#0c0a08): the ground. A warm near-black, never pure #000, tinted by the safelight.
- **Lifted Blacks** (#100c09 / #16110c / #1e1811): stepped surfaces for canisters, cards, and film strips.
- **Paper White** (#f4ede2): primary text — warm, like photographic paper.
- **Warm Dim / Faint** (hsl(34 16% 64%) / hsl(32 12% 46%)): secondary and tertiary text, always tinted warm — never neutral gray on this ground.

### Named Rules
**The Safelight Rule.** Full-strength Safelight Orange (#ff5a1f) is rare — primary actions, active picks, and the ambient glow only. Its scarcity is what makes it read as light.
**The Light-Leak Rule.** The pink→purple→orange Instagram gradient appears only as a thin bleed on a film edge (hero top, footer top, form top). It is never a text fill, never a card side-stripe, never a background field.
**The Warm-Neutral Rule.** Secondary text is tinted from the ground's hue. Pure gray is banned on the dark ground.

## Typography

**Display Font:** Bodoni Moda (with Times New Roman, serif)
**Body/UI Font:** Archivo (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** A cinematic Didone with dramatic thick/thin contrast carries the emotional lines; a neutral workhorse grotesk reads underneath; a technical monospace supplies the film's own data. The three never blur roles.

### Hierarchy
- **Display** (Bodoni Moda 600, clamp(2.7rem, 8.2vw, 6rem), 0.98): hero and section titles; the emotional voice. Italic `em` in Safelight Flare is the one authored flourish.
- **Headline** (Bodoni Moda 500, clamp(2rem, 4.4vw, 3.4rem), 1.05): Sobre / Contato titles, canister counts.
- **Serif Lede** (Bodoni Moda 500 italic, clamp(1.15rem, 2vw, 1.5rem)): per-roll emotional one-liners.
- **Body** (Archivo 400, 1rem, 1.6): reading copy, capped ~46–62ch.
- **Label** (JetBrains Mono 500, 0.62–0.72rem, 0.14–0.22em, uppercase): film furniture — roll numbers, ISO, frame counters, section tags.

### Named Rules
**The Two-Voice Rule.** Bodoni speaks for people and memories; Mono speaks for the film (numbers, ISO, roll IDs). Never swap them.
**The Mono-Is-Measurement Rule.** Monospace is only for data the film itself carries (frame counts, ISO, location tags) — never as a generic "technical" costume.

## Layout

Centered container (max 1320px) with fluid gutters (`clamp(20px, 5vw, 72px)`). Sections breathe on a `clamp(60px, 11vh, 150px)` vertical rhythm, always more space above a heading than below it. Rolls alternate their internal order (hero→sheet vs. sheet→hero) to pace the scroll rather than repeating one card. The hero is a two-column grid: a narrow 35mm film rail plus the full-bleed stage. Contact sheets scroll horizontally with snap. Below 1024px the roll head and Sobre collapse to one column and canisters stack; below 720px the nav links give way to a compact Contato/WhatsApp pair and the film rail narrows.

## Elevation & Depth

Depth is atmospheric, not boxed. The page is built from layered darkness — a vignette over the hero, a radial safelight glow lower-left, an animated grain overlay — rather than drop-shadowed cards. Shadows appear only where light physically would: a warm glow under the primary buttons and the active/hovered frame.

### Shadow Vocabulary
- **Safelight Cast** (`box-shadow: 0 14px 40px -14px rgba(255,90,31,0.85)`): under primary (shutter/WhatsApp) buttons.
- **Active Frame Glow** (`box-shadow: inset 0 0 0 1px var(--acc), 0 0 34px -6px var(--acc)`): the warm rim-light on the hovered contact-sheet frame (donation from the painted-poster world).

### Named Rules
**The Atmosphere-Not-Boxes Rule.** Convey depth with vignette, glow, and grain. Reserve shadows for real light responses (buttons, active frames); never a flat card drop-shadow.

## Shapes

Mostly rectilinear, echoing film frames and contact sheets: small radii (3–10px) on images, sheets, and cards; fully-pill (100px) only on the round-light buttons and chips. Borders are hairline warm-white at 10–16% opacity (`--line` / `--line-2`), 1px only. The one organic form is the hand-drawn grease-pencil pick circle — an irregular SVG path, deliberately not a geometric ellipse.

## Components

### Buttons
- **Shape:** pill (100px); small radius (8px) only on the full-width form submit.
- **Primary (shutter / WhatsApp):** Safelight Orange bg, near-black ink (#1a0b04), Safelight Cast shadow. The hero primary carries a drawn shutter-ring icon.
- **Hover / Focus:** lift `translateY(-2px)`, shift to Safelight Flare, deepen the cast. `:active` presses down (`translateY(2px)`), like a real shutter.
- **Accent (per-roll CTA):** filled with the roll's accent color, dark ink; lift + brighten on hover.
- **Ghost link:** ink text on a 1px warm underline; underline animates via `transform: scaleX` (never width) and shifts to safelight on hover.

### Cards / Containers
- **Corner Style:** 6–10px.
- **Background:** lifted blacks (#100c09 → #16110c), 1px warm hairline border.
- **Shadow Strategy:** none at rest (see Atmosphere-Not-Boxes); hover raises a soft radial safelight glow (canisters) or the Active Frame Glow (frames).
- **Internal Padding:** `clamp(24px, 3.5vw, 40px)` on the form card.

### Inputs / Fields
- **Style:** warm-black fill, 1px warm border, 7–8px radius, Archivo text. Selects carry a drawn safelight chevron.
- **Focus:** border → Safelight Orange plus a `0 0 0 3px rgba(255,90,31,0.18)` ring; ground lifts one step.
- **Error:** border → `#ff7a5c`, an inline `.err` message naming the problem; server-side validated.

### Navigation
- **Style:** fixed, transparent at top; on scroll gains a blurred warm-black backdrop and a hairline base. Wordmark left (Bodoni "nési**o**" with an orange `o`), mono links center-right with a scaleX underline, a pill WhatsApp button. Below 720px links collapse to a Contato/WhatsApp pair.

### Signature — The Contact Sheet & Develop Reveal
- A horizontal, snap-scrolling strip of 35mm frames, each with a black gutter carrying an authored index-tick SVG + frame number in mono. The chosen frame ("pick") wears a hand-drawn grease-pencil circle (irregular SVG path) in safelight orange.
- The **develop reveal**: images (`.develop`) are gated behind `html.js`; JS drives a `--dev` custom property (0→1) from scroll position, animating `saturate/contrast/brightness` from a dark latent state to full clarity. Visible-by-default (`--dev:1`) with no JS and under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep the ground warm near-black (#0c0a08) and let the safelight glow do the lighting.
- **Do** reserve full Safelight Orange for actions, active picks, and the ambient glow (The Safelight Rule).
- **Do** use the Instagram gradient only as a thin light-leak on a film edge (The Light-Leak Rule).
- **Do** split type by voice: Bodoni for people/memory, Mono for film data (The Two-Voice Rule).
- **Do** author film furniture (sprockets, counters, grease circles) as SVG in one consistent stroke.
- **Do** keep every animated reveal visible-by-default and honor `prefers-reduced-motion`.

### Don't:
- **Don't** use pure gray for text on the dark ground; tint it warm.
- **Don't** put a colored stripe on the side or top of a card, or use gradient text.
- **Don't** stand in a geometric ellipse/mask for the grease-pencil circle; it must be a hand-drawn path.
- **Don't** animate `width`/layout properties; animate `transform`/`opacity`/`filter`.
- **Don't** use monospace as a generic "technical" costume — only for film data.
- **Don't** let mono edge text sit over a photograph; keep it in the black gutter.

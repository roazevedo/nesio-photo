---
version: 1
slug: "app-views-pages-home-html-erb"
primary_target: "app/views/pages/home.html.erb"
related_targets: []
---

## Scope

Single-page marketing site for Nésio Photo (Rails, server-rendered). Visitor mode: **Persuade**. One route (`/`) plus a server-side lead form (`POST /contato`).

## Audience / job / action

Brazilian families in Nova Iguaçu / Baixada Fluminense planning a 15 anos, wedding, or kids party, mostly on mobile, deciding by feeling and image quality. Action: start a contact (WhatsApp deep-link or the server-side "revele sua história" form). Secondary audience: Nésio himself (this is a pitch). Proof: real Instagram figures only; placeholder photography labeled for swap; no invented clients/prices/awards.

## Direction contract

THESIS: The site is Nésio's darkroom — three rolls of film (15 Anos, Casamento, Kids) developing under an amber safelight, images emerging from black. It refuses the category default: a bright minimalist photo grid with thin sans over a neutral hero.

OWN-WORLD: Warm near-black ground (~#0c0a08), safelight orange (~#FF5A1F) as living light, an Instagram light-leak gradient (magenta→purple→orange) bleeding only on film edges. Bodoni Moda cinematic display, Archivo for UI/body, JetBrains Mono for frame counters and technical film labels. 35mm film strips with real sprocket holes, contact-sheet thumbnails with grease-pencil circles on the picks, warm rim-light glow on the active frame, charged negative space as active dark.

STORY: The visitor understands Nésio documents a whole family's milestones across a lifetime — the kids party, the debut at 15, the wedding — under one authored eye; feels the craft and emotion; and starts a contact.

FIRST VIEWPORT: Full-bleed warm-black. One hero photo emerging from black (developing), safelight glow lower-left, light-leak at the top edge. Left rail: a 35mm film strip with sprocket holes and mono frame numbers. Center: Bodoni display "imagens que contam histórias" over the Nésio Photo wordmark; small mono "NOVA IGUAÇU · RJ · +15 ANOS". Primary action ("Revelar minha história" + WhatsApp) sits bottom-center as a shutter-release button. Scroll cue at the base.

FORM: 35mm contact-sheet / darkroom. My grounded candidate #1, chosen by the user over the roll's assigned #4 ("O Convite"). Raised by: painted-poster (scale-as-hierarchy + warm rim-light), shader-portal (living grain ground + inertial scroll + one incandescent accent), raku (reveal-from-darkness + asymmetry), ikebana (charged negative space), CD-ROM (tactile press on the shutter), night-flight (damped physical motion). Seed key 47495010.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Memorable moment

The develop reveal: as each frame enters view it resolves from a dark, grainy, low-contrast latent image to a full-clarity saturated photograph, as if surfacing in the developer tray — orchestrated once, damped, exponential ease-out, visible-by-default under reduced-motion.

## Unresolved

Real photography not yet supplied (placeholders, labeled, swappable via a single config). Deploy target undecided. Contact form delivery (email vs. DB-only) — DB persistence for now; email wiring deferred.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Ruby on Rails 7.2, server-rendered ERB. The backend owns all logic: the contact/lead form is validated, CSRF-protected, and persisted server-side; the frontend is limited to presentation and animation. Importmap for JS (GSAP + Lenis for motion), hand-written CSS for full craft control. Chosen by the user for security and their existing Rails familiarity. Deploy target undecided (user runs Fly.io + Cloudflare on other projects).

## Users

Primary: Brazilian families in Nova Iguaçu / Baixada Fluminense (RJ) planning a milestone celebration — a daughter's debut (festa de 15 anos), a wedding, or a child's birthday party. They arrive emotionally invested, usually on a phone, comparing photographers, and decide on the feeling and quality of the images more than on specs.

Secondary: Nésio himself — this page is being built to pitch to him as a prospective client, so it must feel like a finished, sellable product.

## Product Purpose

A single-page site presenting Nésio Photo's work across its three verticals (15 anos, Casamentos, Kids) and converting a visitor into a WhatsApp contact / booking inquiry. It exists because Nésio has no website today — only three Instagram profiles. Success: a visitor grasps the range and quality within seconds and starts a contact.

## Positioning

One photographer/videographer who documents a family's milestones across a lifetime — the child's party, the debut at 15, the wedding — under a single authored point of view. 15+ years of work; "imagens que contam histórias." Not three disconnected Instagram accounts but one storyteller across three chapters of a life.

## Operating Context

- Three existing Instagram brands: @nesiophoto (main; "Especialista em 15 anos"), @nesiophotowedding (casamentos), @nesiophotokids (festas infantis). All Nova Iguaçu - RJ.
- Contact today happens via WhatsApp (wa.me deep-links on the profiles).
- Visitors are mobile-first.

## Capabilities and Constraints

- Contact/lead form handled server-side in Rails (validation, CSRF, persistence). WhatsApp deep-link as a prominent secondary CTA.
- All business logic on the backend per the user's security requirement; the frontend is presentation + animation only.
- Real photography not yet provided: the build uses clearly-marked placeholder imagery in the right mood, organized under `app/assets/images/fotos/{15anos,casamentos,kids}` for later swap. The site must not fabricate testimonials, client names, prices, packages, or awards.

## Brand Commitments

- Name: Nésio Photo (sub-brands: Nésio Photo Wedding, Nésio Photo Kids).
- Logos provided (stylized "n" / "nésiO" wordmark with a camera-aperture "O"; the Kids variant is multicolored).
- Palette pinned by the user: dark / near-black ground, orange/amber as primary, Instagram-style gradient accent (pink → purple → orange).
- Aesthetic pinned by the user: modern, cinematic, large photography, parallax, smooth animation. Reference: https://elirigobeli.com/higgsfield/fotografia/.
- Location/voice: Nova Iguaçu - RJ; Portuguese (pt-BR). Tagline: "Há mais de 15 anos criando imagens que contam histórias."

## Evidence on Hand

- Instagram figures confirmed from screenshots (2026-09-28): @nesiophoto 441 posts / 31,6 mil seguidores; @nesiophotowedding 50 posts / 1.051 seguidores; @nesiophotokids 197 posts / 3.134 seguidores.
- Three logos (from profile screenshots).
- No real gallery photos, testimonials, pricing, packages, or awards provided yet — must not be invented. Placeholder imagery is labeled for swap.

## Product Principles

1. The image leads; the interface serves it.
2. One storyteller, three chapters — show range without fragmenting the identity.
3. Emotion over specs — sell the memory, not the megapixels.
4. Every path ends at a real contact (WhatsApp / form).
5. Never fabricate proof (clients, prices, awards); label placeholders honestly.

## Accessibility & Inclusion

pt-BR first. Mobile-first. Legible contrast on the dark ground; honor `prefers-reduced-motion` given the heavy animation.

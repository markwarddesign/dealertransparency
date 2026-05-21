# Dealer Transparency — Design System

Locked system for the Dealer Transparency suite (RPM parent · RADAR · PACE · MILES). Every page defers to this file.

## Voice

- Genre: **modern-minimal** (Stripe / Linear school)
- Tone: **utilitarian + technical** — confident, plain, no glow effects, no marketing gradients
- Audience: dealer principals + ops directors. Both want proof and clarity.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#fafbfc` | Page background |
| `--color-paper-2` | `#ffffff` | Card / panel surface |
| `--color-paper-dark` | `#0a1d33` | Inverted band (RADAR hero / CTA) |
| `--color-ink` | `#0e2640` | Primary text + brand navy |
| `--color-ink-2` | `#1f3a5a` | Secondary navy |
| `--color-muted` | `#5b7186` | Body / metadata |
| `--color-muted-2` | `#8a9bad` | Tertiary / captions |
| `--color-rule` | `#e5ebf0` | Hairlines |
| `--color-accent` | `#10B981` | Single accent · CTA · active states |
| `--color-accent-deep` | `#047857` | Accent hover |
| `--color-accent-soft` | `rgba(16,185,129,0.10)` | Tints |

Accent rule: **emerald is the only chromatic accent.** No purple orbs, no cyan, no electric blue. One product (MILES, PACE) may use a single muted hue swap *only* in a small chip — never as a section paint.

## Type

- Display + Body: **Inter** (variable, via `next/font/google`)
- Mono: **IBM Plex Mono** — reserved for product codes (`RADAR / PACE / MILES`), data labels, numbers
- No third face

Scale (clamped for fluidity):
- `--text-display` · clamp(2.5rem, 5vw, 4.5rem) · hero
- `--text-h1` · clamp(2rem, 3.6vw, 3rem) · section heads
- `--text-h2` · 1.75rem
- `--text-h3` · 1.25rem
- `--text-body` · 1.0625rem
- `--text-sm` · 0.9375rem
- `--text-xs` · 0.8125rem

Headlines: tracking `-0.02em`, weight 600. Body: weight 400, leading 1.6.

## Spacing

4 pt scale via `--space-{1..24}`. Sections: `--space-20` (80px) on mobile, `--space-24+` on desktop.

## Radii

- `--radius-sm` 4px (badges, chips)
- `--radius-md` 8px (buttons, inputs)
- `--radius-lg` 12px (cards, panels)
- **No 24px+ rounding.** Utilitarian = restrained geometry.

## Motion

3 easings. `transform` + `opacity` only. 150–250 ms. Honour `prefers-reduced-motion`.

## Chrome

- **Nav** — N6 hairline pattern: wordmark left · 3 destinations + primary CTA right · 1 px hairline divider · fixed top · `var(--color-paper)` background
- **Footer** — Ft6 minimal: brand row + link row + patent-pending mark stacked. No social tile grid. No dark-mode toggle.
- Mounted **once** in `src/app/layout.tsx` — never re-implemented per page.

## Macrostructure rotation (page-shape policy)

Each page picks a different macrostructure inside this same system:

| Route | Macrostructure | Why |
| --- | --- | --- |
| `/` | Marquee Hero | Suite hub: confident statement + 3-product matrix + stats + CTA |
| `/radar` | Workbench | Deep dive: vertical tab rail + detail panel matches existing IA |
| `/pace` (future) | Stat-Led | Revenue-led product, lead with the $ figure |
| `/miles` (future) | Long Document | Educational / pricing breakdown |

## Anti-patterns explicitly banned

- ❌ Floating orbs / radial blur "auras"
- ❌ Gradient `bg-clip-text` headlines
- ❌ `hover:scale-105` everywhere
- ❌ Dark-mode toggles in marketing chrome
- ❌ Multiple competing accent colours
- ❌ Pill buttons stacked with drop shadows (the `box-shadow: inset 0 2px 0 rgba(...)` stack is gone)
- ❌ Per-page bespoke header / footer

/* Hallmark · system: design.md · genre: modern-minimal · theme: custom navy+emerald
 * paper #fafbfc · ink #0e2640 · accent oklch ≈ 70% 0.16 162 (#10B981)
 * fonts: Inter + IBM Plex Mono · radii sm/md/lg = 4/8/12 px
 */

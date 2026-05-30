# Design Brief

## Direction

Aashro Seva Foundation NGO Website — warm, emotionally engaging, trustworthy platform for elder care and community support.

## Tone

Warm, welcoming, emotionally resonant, and professionally credible. Human-centered design that prioritizes dignity and emotional connection over corporate polish.

## Differentiation

Warm orange accent on deep professional blue creates emotional resonance while maintaining trust; intentional card elevation throughout with Gujarati-ready typography.

## Color Palette

| Token      | OKLCH           | Role                                 |
| ---------- | --------------- | ------------------------------------ |
| background | 0.97 0.01 80    | Warm cream, breathing space          |
| foreground | 0.18 0.02 50    | Deep warm brown, high contrast       |
| card       | 0.99 0.005 80   | Elevated white, subtle warmth        |
| primary    | 0.45 0.16 265   | Deep professional blue, trust        |
| accent     | 0.63 0.19 70    | Warm orange, compassion & CTAs       |
| muted      | 0.92 0.01 80    | Light warm beige, secondary zones    |

## Typography

- Display: Space Grotesk — distinctive modern headings emphasizing clarity and professionalism
- Body: DM Sans — warm, readable, humanized paragraphs and UI labels
- Scale: hero `text-6xl font-bold tracking-tight`, h2 `text-4xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Layered card-based surfaces with warm subtle shadows. Foreground cards elevated on warm cream background; footer and header defined by borders not shadows.

## Structural Zones

| Zone    | Background        | Border                      | Notes                              |
| ------- | ----------------- | --------------------------- | ---------------------------------- |
| Header  | card (0.99)       | border-b warm subtle        | Navigation + logo, elevated feel   |
| Content | background (0.97) | —                           | Warm cream, cards + sections       |
| Footer  | card (0.99)       | border-b warm subtle        | Contact info, social, copyright    |

## Spacing & Rhythm

Spacious density with consistent breathing room. Section gaps `py-12 md:py-20`, card padding `p-6 md:p-8`, content grouping `gap-6`.

## Component Patterns

- Buttons: Warm orange accent for primary CTAs (donate, volunteer), blue for secondary navigation. Rounded `rounded-lg`, padding `px-6 py-3`.
- Cards: White `bg-card`, `rounded-lg`, warm elevated shadow `shadow-elevated`, padding `p-6`.
- Badges: Blue accent for impact counters, small padding, rounded full.
- Forms: Light muted background, blue focus ring, warm label text.

## Motion

- Entrance: Fade-in + slide-up `animate-fadeIn animate-slideUp` on page sections, staggered 0.1s delays
- Hover: Button scale + color shift on primary CTAs, card lift on hover
- Decorative: Gentle pulse animation on impact numbers

## Constraints

- No full-page gradients; gradients only on buttons/accents
- Dark mode available but light mode primary (warm cream + blue)
- Gujarati font support via DM Sans and Space Grotesk variable fonts
- Mobile-first responsive with `sm:`, `md:`, `lg:` breakpoints

## Signature Detail

Warm orange accent paired with deep professional blue creates emotional + trust balance; card elevation throughout emphasizes human connection and dignity.

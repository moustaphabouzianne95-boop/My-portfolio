# Design Direction — Premium Dark Engineering Portfolio

## Source and purpose
The approved direction combines the user's explicit dark developer aesthetic and confirmed portfolio blueprint. The site should read as a serious software engineer's personal website—not a generic template—and communicate systems thinking, clarity, performance, and craft. The site content remains in English.

## Design movement
Minimalist engineering editorial with restrained modern SaaS polish. Precise grid, useful negative space, strong typography, and a quiet technical undercurrent. Avoid generic stock imagery, crypto/hacker clichés, heavy glassmorphism, loud gradients, decorative clutter, and motion for its own sake.

## Core principles
- Make hierarchy and scanability do the visual work.
- Use meaningful content and component structure rather than stock photography.
- Give technical details a purposeful, legible terminal/editor treatment.
- Keep the interface responsive by design, not by simply compressing desktop.
- Every animated affordance remains subtle, quick, keyboard-operable, and motion-preference aware.

## Color philosophy
Restrained charcoal/near-black base, off-white primary text, subdued cool gray secondary text, and a singular electric cyan/blue accent. Borders and separators remain dark and low contrast without sacrificing text contrast. Suggested tokens: `#080B10` page background, `#0D1219` raised surface, `#17212B` border, `#F2F6FA` primary, `#98A6B5` muted, `#62D9F2` cyan, and `#72A7FF` secondary blue. Accent gradients, if present, are confined to tiny details and never dominate a panel.

## Layout paradigm
A centered, readable max-width content column with generous vertical rhythm. The opening viewport uses a two-column identity-and-terminal layout on wide screens and a clear, stacked order on mobile. Subsequent sections alternate full-width bands and modular cards to distinguish content groups without adding ornamental blocks. Navigation remains sticky with a subtle translucent charcoal surface and border.

## Signature elements
- A custom terminal card in the hero that reads like an honest engineer's command-line profile, not a fictional security console.
- A compact brand mark built from simple system-layer geometry, shared by the header and favicon.
- Small numbered section labels, hairline separators, and technical mono labels used sparingly.
- Project cards use clear editorial hierarchy and labeled problem/solution detail rather than fictional project screenshots.

## Interaction philosophy
Navigation links scroll to named sections. Buttons and cards offer clear hover/focus feedback. The mobile menu is a real accessible disclosure with keyboard support and closes after navigation. Social/contact values live in one data module; absent destinations are presented as non-links with explicit editable prompts, never as fabricated profiles.

## Animation
Use light opacity/vertical entrance and short stagger for key sections, plus modest hover and terminal cursor/type treatment. Respect `prefers-reduced-motion`; no scroll-jacking, parallax, long delays, or continuous distracting loops. Essential content is visible without waiting for animation.

## Typography system
Use Space Grotesk for headings, Inter for body copy, and JetBrains Mono for command prompts, technical labels, and code. Use Google Fonts with sensible system fallbacks. Headings are compact and confident; body copy has comfortable line length and line-height.

## Brand essence and voice
Technical, thoughtful, calm, precise, and human. The writing describes engineering values without inflated claims. Use the supplied copy verbatim where specified and label all unverified project/experience content as editable placeholders.

## Wordmark and logo
The wordmark is `MUSTAFA BOUZIANE` in a compact uppercase treatment. The icon is a simple flat geometric motif representing connected software layers: a strong, centered, two-to-three-shape silhouette in cyan/blue/off-white against a full-bleed charcoal square. No text, gradients, texture, shadows, bevels, mockups, or pre-rounded canvas corners. Reuse the symbol as the site favicon and project identity.

## Signature brand color
Electric cyan `#62D9F2`, used sparingly for links, focus indication, terminal prompts, and the brand mark.

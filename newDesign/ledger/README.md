# Ledger — design system for maritzbuchholz.com

Drop-in SCSS + JSX for the Ledger direction.

## Install

1. Copy `src/styles/` over your existing `src/styles/`.
2. Copy each folder in `src/Components/` into your existing `src/Components/`.
   `Section/` is new — it holds the shared folio header every section uses.
3. Import the global sheet once, in `main.jsx`:

   ```js
   import './styles/index.scss';
   ```

4. Delete the old `_fonts.scss` import if it is still loading the previous
   serif pairing.

## Sass module system

Files use `@use` rather than `@import`, which is the non-deprecated syntax.
If your build still uses `@import`, swap the two header lines in each file for:

```scss
@import '../../styles/variables';
@import '../../styles/mixins';
```

## Token mapping from your old variables

| Old              | New                                  |
| ---------------- | ------------------------------------ |
| `$bg-main`       | `$stock`                             |
| `$card-bg`       | `$stock-band` / `$stock-sunk`        |
| `$text-dark`     | `$ink`                               |
| `$text-light`    | `$stock` (used on dark buttons)      |
| `$text-muted`    | `$pencil`                            |
| `$accent-red`    | `$red`                               |
| `$max-width-lg`  | `$page`                              |

## What changed structurally

- **Cards became tables.** Tech Stack and Featured Work are now ruled,
  banded rows instead of boxes with drop shadows. The shadows were the
  weakest element of the old design and they are gone entirely.
- **New `Section` component.** Every section shares one folio header, so
  the ruled treatment can't drift between sections.
- **New balance block in `Hero`.** This is the signature element.
- **Type roles inverted.** Display is now condensed sans (Archivo),
  body is serif (Source Serif 4), data is mono (IBM Plex Mono).

## Contrast

`$pencil` on `$stock` is 4.8:1 and `$red` on `$stock` is 9.0:1, so both
clear WCAG AA for body text. If you darken `$stock`, re-check `$pencil`.

## Content

Everything is your existing copy. The three rows inside the Hero balance
block are placeholders — they are the one place that needs real content
before this ships.

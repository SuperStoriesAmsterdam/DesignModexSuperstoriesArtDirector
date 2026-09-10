# The Art Director

The Art Director is a stripped-down fork of Design Mode: a browser extension where you point, move, measure and comment on a live web page, and your coding agent (Claude Code) turns each change into token-correct CSS.

**designmode.app x superstories.com**

Page and download: https://superstoriesamsterdam.github.io/DesignModexSuperstoriesArtDirector/

## What it is

A creative-director instrument. Every style-value control from Design Mode (type, colour, effects, tokens) is removed. What stays is what moves, spaces, restructures and reviews: point, move, resize, measure, comment, motion cards, the changes log, and the MCP handoff to a coding agent. You never set a hex value or a type scale; the agent writes the CSS.

## Install

1. Download the extension from the page above and unzip it.
2. In Chrome, open `chrome://extensions` and turn on Developer mode.
3. Click "Load unpacked" and choose the unzipped folder.
4. Pin the icon, open a page, click Art Director. The side panel opens.

## Build from source

```
npm install
npm run build:extension
```

The build lands in `packages/extension/dist`. Load that folder unpacked. The icons are rendered from `icons/icon.svg` with `node scripts/make-icons.mjs`.

## Credit and licence

The Art Director is a fork of [Design Mode](https://github.com/SandeepBaskaran/design-mode) by Sandeep Baskaran, under the MIT licence, retained in `LICENSE`. SuperStories stripped it to a creative-director instrument and restyled it. The original project's documentation lives in the other markdown files in this repository.

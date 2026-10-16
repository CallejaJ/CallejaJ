// Generates the animated profile header: node scripts/header.mjs
import fs from "node:fs";
const themes = {
  dark:  { bg:"#0d1117", grid:"#161b22", text:"#e6edf3", muted:"#7d8590", border:"#30363d", card:"#161b22", accent:"#00d9ff", ok:"#4fc08d" },
  light: { bg:"#ffffff", grid:"#f0f3f6", text:"#1f2328", muted:"#656d76", border:"#d0d7de", card:"#f6f8fa", accent:"#0969da", ok:"#1a7f37" },
};
const blocks = [
  { n:"#0", t:"GENESIS",  s:"Málaga, ES", h:"0x00…0000" },
  { n:"#1", t:"DeFi",     s:"protocols",  h:"0x7a3f…c41e" },
  { n:"#2", t:"RWA",      s:"tokenization", h:"0xb19d…08aa" },
  { n:"#3", t:"ERC-4337", s:"account abs.", h:"0x4e6c…f2d9" },
];
const CYCLE = 8; // seconds
function svg(c) {
  const bx = 650, bw = 108, gap = 24, by = 100, bh = 112;
  let chain = "";
  blocks.forEach((b, i) => {
    const x = bx + i * (bw + gap);
    const t0 = (1.2 + i * 0.9) / CYCLE, t1 = Math.min(t0 + 0.06, 0.99);
    chain += `
  <g>
    <rect x="${x}" y="${by}" width="${bw}" height="${bh}" rx="10" fill="${c.card}" stroke="${c.border}" stroke-width="1.5">
      <animate attributeName="stroke" values="${c.border};${c.border};${c.accent};${c.accent};${c.border}" keyTimes="0;${t0.toFixed(3)};${t1.toFixed(3)};0.9;1" dur="${CYCLE}s" repeatCount="indefinite"/>
    </rect>
    <text x="${x + 12}" y="${by + 24}" class="mono" font-size="13" fill="${c.muted}">BLOCK ${b.n}</text>
    <text x="${x + 12}" y="${by + 54}" class="mono" font-size="${b.t.length > 6 ? 17 : 20}" font-weight="700" fill="${c.text}">${b.t}</text>
    <text x="${x + 12}" y="${by + 74}" class="mono" font-size="11.5" fill="${c.muted}">${b.s}</text>
    <text x="${x + 12}" y="${by + 98}" class="mono" font-size="11" fill="${c.accent}" opacity="0">${b.h}
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${t0.toFixed(3)};${t1.toFixed(3)};0.9;1" dur="${CYCLE}s" repeatCount="indefinite"/>
    </text>
  </g>`;
    if (i < blocks.length - 1) {
      const lx = x + bw, ly = by + bh / 2;
      chain += `
  <line x1="${lx}" y1="${ly}" x2="${lx + gap}" y2="${ly}" stroke="${c.border}" stroke-width="2">
    <animate attributeName="stroke" values="${c.border};${c.border};${c.accent};${c.accent};${c.border}" keyTimes="0;${t1.toFixed(3)};${Math.min(t1 + 0.04, 0.99).toFixed(3)};0.9;1" dur="${CYCLE}s" repeatCount="indefinite"/>
  </line>`;
    }
  });
  const chainStart = bx + bw, chainEnd = bx + 3 * (bw + gap), py = by + bh / 2;
  const doneT = ((1.2 + 3 * 0.9) + 0.4) / CYCLE;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="300" viewBox="0 0 1200 300" role="img" aria-label="Jorge Calleja, Web3 &amp; Blockchain Developer in Málaga, Spain">
  <title>Jorge Calleja · Web3 &amp; Blockchain Developer</title>
  <style>
    .mono { font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace; }
    .sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
  </style>
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="${c.grid}"/>
    </pattern>
    <clipPath id="type1"><rect x="56" y="186" height="30" width="0">
      <animate attributeName="width" values="0;0;560;560;0" keyTimes="0;0.02;0.28;0.95;1" dur="${CYCLE}s" repeatCount="indefinite"/>
    </rect></clipPath>
    <clipPath id="type2"><rect x="56" y="222" height="30" width="0">
      <animate attributeName="width" values="0;0;560;560;0" keyTimes="0;${doneT.toFixed(3)};${(doneT + 0.04).toFixed(3)};0.95;1" dur="${CYCLE}s" repeatCount="indefinite"/>
    </rect></clipPath>
  </defs>
  <rect width="1200" height="300" rx="16" fill="${c.bg}"/>
  <rect width="1200" height="300" rx="16" fill="url(#grid)"/>
  <rect x="0.75" y="0.75" width="1198.5" height="298.5" rx="16" fill="none" stroke="${c.border}" stroke-width="1.5"/>

  <text x="56" y="70" class="mono" font-size="14" fill="${c.muted}">// SPDX-License-Identifier: MIT</text>
  <text x="54" y="124" class="sans" font-size="56" font-weight="800" fill="${c.text}">Jorge Calleja</text>
  <text x="56" y="160" class="sans" font-size="21" fill="${c.muted}">Web3 &amp; Blockchain Developer <tspan fill="${c.accent}">·</tspan> Málaga, Spain</text>

  <g clip-path="url(#type1)">
    <text x="56" y="207" class="mono" font-size="16" fill="${c.text}"><tspan fill="${c.accent}">$</tspan> npx hardhat run scripts/deploy.ts --network mainnet</text>
  </g>
  <g clip-path="url(#type2)">
    <text x="56" y="243" class="mono" font-size="16" fill="${c.ok}">✔ JorgeCalleja deployed → jorgecalleja.dev</text>
  </g>
${chain}
  <circle cx="${chainStart}" cy="${py}" r="4" fill="${c.accent}" opacity="0">
    <animate attributeName="cx" values="${chainStart};${chainStart};${chainEnd}" keyTimes="0;${(2.0 / CYCLE).toFixed(3)};${(4.0 / CYCLE).toFixed(3)}" dur="${CYCLE}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${(2.0 / CYCLE).toFixed(3)};${(2.1 / CYCLE).toFixed(3)};${(3.9 / CYCLE).toFixed(3)};${(4.0 / CYCLE).toFixed(3)};1" dur="${CYCLE}s" repeatCount="indefinite"/>
  </circle>
  <text x="${bx}" y="${by + bh + 34}" class="mono" font-size="13" fill="${c.muted}">chainId: 1  ·  status: <tspan fill="${c.ok}">finalized<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;${doneT.toFixed(3)};${(doneT + 0.02).toFixed(3)};0.9;1" dur="${CYCLE}s" repeatCount="indefinite"/></tspan></text>
</svg>
`;
}
for (const [name, c] of Object.entries(themes)) fs.writeFileSync(new URL(`../assets/header-${name}.svg`, import.meta.url), svg(c));

import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = resolve(__dirname, '../icons');
const svg = readFileSync(resolve(iconsDir, 'icon.svg'));

for (const size of [16, 32, 48, 128, 512]) {
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const png = r.render().asPng();
  writeFileSync(resolve(iconsDir, `icon${size}.png`), png);
  console.log(`wrote icon${size}.png`);
}

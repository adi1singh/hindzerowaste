import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
const component = await readFile(new URL('../src/components/BrandLogo.astro', import.meta.url), 'utf8');
const group = component.slice(component.indexOf(' <g '), component.indexOf(' </g>') + 5);
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">${group}</svg>`;
const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 88">${group}<g fill="#24211f" font-family="Arial, sans-serif"><text x="99" y="35" font-size="30" font-weight="800" letter-spacing="5">HIND</text><text x="99" y="61" font-size="24" font-weight="700" letter-spacing="1">ZERO WASTE</text><text x="100" y="78" font-size="10" font-weight="600" letter-spacing="1.35">MANAGEMENT PVT. LTD.</text></g></svg>`;
await writeFile(new URL('../public/logo.svg', import.meta.url), logo);
await writeFile(new URL('../public/favicon.svg', import.meta.url), mark);
await sharp(Buffer.from(logo)).resize(1080).png().toFile(new URL('../public/logo.png', import.meta.url).pathname);
for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
 await sharp(Buffer.from(mark)).resize(size, size).flatten({ background: '#f6f3ec' }).png().toFile(new URL(`../public/${name}`, import.meta.url).pathname);
}

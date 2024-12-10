import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B9y7EPal.mjs';
import { manifest } from './manifest_CdfzD-8w.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/aboutus/_---page_.astro.mjs');
const _page3 = () => import('./pages/accessible-components.astro.mjs');
const _page4 = () => import('./pages/contact/_---page_.astro.mjs');
const _page5 = () => import('./pages/events/_---page_.astro.mjs');
const _page6 = () => import('./pages/gallery/_post_.astro.mjs');
const _page7 = () => import('./pages/gallery/_---page_.astro.mjs');
const _page8 = () => import('./pages/markdown-page.astro.mjs');
const _page9 = () => import('./pages/mdx-page.astro.mjs');
const _page10 = () => import('./pages/membership/_---page_.astro.mjs');
const _page11 = () => import('./pages/resources/_---page_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.17_@types+node@22.10.1_lightningcss@1.27.0_rollup@4.28.1_sass@1.82.0_terser@5.36.0_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/aboutus/[...page].astro", _page2],
    ["src/pages/accessible-components.astro", _page3],
    ["src/pages/contact/[...page].astro", _page4],
    ["src/pages/events/[...page].astro", _page5],
    ["src/pages/gallery/[post].astro", _page6],
    ["src/pages/gallery/[...page].astro", _page7],
    ["src/pages/markdown-page.md", _page8],
    ["src/pages/mdx-page.mdx", _page9],
    ["src/pages/membership/[...page].astro", _page10],
    ["src/pages/resources/[...page].astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

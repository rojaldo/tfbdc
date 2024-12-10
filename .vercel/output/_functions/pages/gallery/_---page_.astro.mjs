import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { e as $$Card, i as $$Pagination, $ as $$DefaultLayout } from '../../chunks/DefaultLayout_CENBkUAR.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return paginate(data, { pageSize: 6 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Blog", "description": "A gallery of images for the Francis Bacon Debate Club", "data-astro-cid-wvbyjdo4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12" data-astro-cid-wvbyjdo4> <div class="space-content container" data-astro-cid-wvbyjdo4> <h1 data-astro-cid-wvbyjdo4>Gallery</h1> <p class="text-2xl" data-astro-cid-wvbyjdo4>
This is the gallery showcasing photographs captured during our esteemed sessions.
</p> </div> </section> <section class="my-12" data-astro-cid-wvbyjdo4> <div class="container" data-astro-cid-wvbyjdo4> <p class="text-sm" data-astro-cid-wvbyjdo4><em data-astro-cid-wvbyjdo4>Post ${page.start + 1} through ${page.end + 1} of ${page.total} total posts</em></p> <ul class="my-3" data-astro-cid-wvbyjdo4> ${page.data.map((post) => renderTemplate`<li data-astro-cid-wvbyjdo4> ${renderComponent($$result2, "Card", $$Card, { "url": "/gallery/" + post.title.replaceAll(" ", "-").toLowerCase(), "title": post.title, "footer": "userId:" + post.userId, "data-astro-cid-wvbyjdo4": true }, { "default": ($$result3) => renderTemplate`${post.body}` })} </li>`)} </ul> <div class="mt-12 grid place-content-center" data-astro-cid-wvbyjdo4> ${renderComponent($$result2, "Pagination", $$Pagination, { "firstPage": page.url.prev ? "/gallery" : null, "previousPage": page.url.prev ? page.url.prev : null, "nextPage": page.url.next ? page.url.next : null, "lastPage": page.url.next ? `/gallery/${Math.round(page.total / page.size)}` : null, "currentPage": page.currentPage, "totalPages": Math.round(page.total / page.size), "data-astro-cid-wvbyjdo4": true })} </div> </div> </section> ` })} `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[...page].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[...page].astro";
const $$url = "/gallery/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

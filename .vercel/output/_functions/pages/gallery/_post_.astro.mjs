import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout, c as $$Breadcrumbs, d as $$BreadcrumbsItem } from '../../chunks/DefaultLayout_CENBkUAR.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
  return data.map((post) => {
    return {
      params: { post: post.title.replaceAll(" ", "-").toLowerCase() },
      props: { post }
    };
  });
}
const $$post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$post;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": post.title, "description": post.body, "url": post.title, "data-astro-cid-3uhpn3gm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-3uhpn3gm> <div class="mt-12" data-astro-cid-3uhpn3gm> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "data-astro-cid-3uhpn3gm": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/", "label": "Home", "data-astro-cid-3uhpn3gm": true })} ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/blog", "label": "Blog", "data-astro-cid-3uhpn3gm": true })} ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "currentPage": true, "label": post.title, "data-astro-cid-3uhpn3gm": true })} ` })} </div> </div> <section class="my-12" data-astro-cid-3uhpn3gm> <div class="container" data-astro-cid-3uhpn3gm> <h1 data-astro-cid-3uhpn3gm>${post.title}</h1><br data-astro-cid-3uhpn3gm> <p data-astro-cid-3uhpn3gm>By userId: ${post.userId}</p> </div> </section> <section class="my-12" data-astro-cid-3uhpn3gm> <div class="container" data-astro-cid-3uhpn3gm> <p class="text-2xl" data-astro-cid-3uhpn3gm>${post.body}</p> </div> </section> ` })} `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[post].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[post].astro";
const $$url = "/gallery/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$post,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

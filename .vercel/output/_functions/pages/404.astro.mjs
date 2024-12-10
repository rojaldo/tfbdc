import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_CENBkUAR.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="container"> <h1>404</h1> </div> </section> <section class="my-12"> <div class="space-content container"> <p class="text-2xl">Terribly sorry, but the page you are looking for cannot be found. Allow us to guide you back to safety.</p> <a class="button" href="/">Return to Home</a> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/404.astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, g as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_CENBkUAR.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Icon } from '../chunks/Icon_CP4zimMo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { src = "/astronaut-hero-img.webp" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-bbe6dxrz> <h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`<span class="handwritten" data-astro-cid-bbe6dxrz>The </span>`)} <br data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`<span class="handwritten" data-astro-cid-bbe6dxrz>Francis Bacon</span>`)} <br data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`<span class="handwritten" data-astro-cid-bbe6dxrz>Debate Club </span>`)} </h1> <div class="flex flex-col gap-3 min-[500px]:flex-row" data-astro-cid-bbe6dxrz> <!-- <a class="button has-icon" href="https://github.com/markteekman/accessible-astro-starter">
            <Icon name="ion:star-outline" />
            Star on GitHub
          </a>
          <a
            class="button has-icon color-secondary"
            href="https://github.com/markteekman/accessible-astro-starter/blob/main/README.md"
          >
            <Icon name="ion:bookmark-outline" />
            Read the Docs
          </a> --> </div> </div> <img class="hidden lg:block"${addAttribute(src, "src")} alt="" decoding="async" data-astro-cid-bbe6dxrz> </div> </div> </section> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })} <div class="content" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/Feature.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="my-64"> <div class="container"> <h2 class="mb-16 text-4xl">Sections</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:home-outline", "title": "Home" }, { "default": ($$result3) => renderTemplate`
This is the home page of The Francis Bacon Debate Club.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:people-group", "title": "About Us" }, { "default": ($$result3) => renderTemplate`
Learn more about the club, its members and its history.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:event-seat-outline", "title": "Events" }, { "default": ($$result3) => renderTemplate`
Check out the previous and upcoming events of the club.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:wallet-membership", "title": "Membership" }, { "default": ($$result3) => renderTemplate`
Membership details.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:resource-description-framework", "title": "Resources" }, { "default": ($$result3) => renderTemplate`
Resources for members.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:view-gallery", "title": "Gallery" }, { "default": ($$result3) => renderTemplate`
Photos and videos of the club.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:email-fast", "title": "Contact" }, { "default": ($$result3) => renderTemplate`
Contact the club.
` })} </div> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/index.astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

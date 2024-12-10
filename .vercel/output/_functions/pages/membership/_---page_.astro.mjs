import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../../chunks/DefaultLayout_CENBkUAR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  return paginate([], { pageSize: 1 });
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "About Us", "description": "Learn more about The Francis Bacon Debate Club, our mission, history, and team." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="container"> <h2 class="text-3xl">Club members</h2> <p class="text-lg">
Our club is led by a dedicated team of individuals who are passionate about debate and education. Meet our leadership team:
</p> <ul class="list-none pl-0"> <li class="mb-8"> <img src="/images/jane-doe.jpg" alt="Jane Doe" class="w-24 h-24 rounded-full inline-block mr-4"> <div class="inline-block align-middle"> <h3 class="text-xl font-bold">Jane Doe</h3> <p class="text-md"><strong>President:</strong> An experienced debater with a background in political science, Jane has been leading the club with enthusiasm and dedication for the past three years.</p> </div> </li> <li class="mb-8"> <img src="/images/john-smith.jpg" alt="John Smith" class="w-24 h-24 rounded-full inline-block mr-4"> <div class="inline-block align-middle"> <h3 class="text-xl font-bold">John Smith</h3> <p class="text-md"><strong>Vice President:</strong> With a passion for public speaking and a knack for organizing events, John supports the club's activities and helps mentor new members.</p> </div> </li> <li class="mb-8"> <img src="/images/emily-johnson.jpg" alt="Emily Johnson" class="w-24 h-24 rounded-full inline-block mr-4"> <div class="inline-block align-middle"> <h3 class="text-xl font-bold">Emily Johnson</h3> <p class="text-md"><strong>Secretary:</strong> Emily ensures that all club meetings and events are well-documented and communicated to members. Her attention to detail keeps the club running smoothly.</p> </div> </li> <li class="mb-8"> <img src="/images/michael-brown.jpg" alt="Michael Brown" class="w-24 h-24 rounded-full inline-block mr-4"> <div class="inline-block align-middle"> <h3 class="text-xl font-bold">Michael Brown</h3> <p class="text-md"><strong>Treasurer:</strong> Responsible for managing the club's finances, Michael's expertise in accounting ensures that the club's resources are used effectively.</p> </div> </li> <li class="mb-8"> <img src="/images/sarah-davis.jpg" alt="Sarah Davis" class="w-24 h-24 rounded-full inline-block mr-4"> <div class="inline-block align-middle"> <h3 class="text-xl font-bold">Sarah Davis</h3> <p class="text-md"><strong>Event Coordinator:</strong> Sarah's creativity and organizational skills shine through in the engaging and well-planned events she coordinates for the club.</p> </div> </li> </ul> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/membership/[...page].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/membership/[...page].astro";
const $$url = "/membership/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

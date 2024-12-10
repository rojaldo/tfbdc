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
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "About Us", "description": "Learn more about The Francis Bacon Debate Club, our mission, history, and team." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="space-content container"> <h1>About Us</h1> <p class="text-2xl">
Welcome to The Francis Bacon Debate Club, where we foster intellectual growth and the art of debate.
</p> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Our Mission</h2> <p class="text-lg">
At The Francis Bacon Debate Club, our mission is to cultivate a community of critical thinkers and eloquent speakers. We aim to provide a platform for individuals to engage in meaningful discussions, develop their public speaking skills, and broaden their perspectives on various topics.
</p> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Our History</h2> <p class="text-lg">
Founded in [Year], The Francis Bacon Debate Club has a rich history of promoting intellectual discourse and debate. Named after the renowned philosopher and statesman Francis Bacon, our club embodies his spirit of inquiry and pursuit of knowledge. Over the years, we have hosted numerous debates, workshops, and events that have inspired and challenged our members.
</p> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Our Team</h2> <p class="text-lg">
Our club is led by a dedicated team of individuals who are passionate about debate and education. Meet our leadership team:
</p> <ul class="list-disc pl-5"> <li><strong>President:</strong> [Name]</li> <li><strong>Vice President:</strong> [Name]</li> <li><strong>Secretary:</strong> [Name]</li> <li><strong>Treasurer:</strong> [Name]</li> <li><strong>Event Coordinator:</strong> [Name]</li> </ul> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Join Us</h2> <p class="text-lg">
We welcome new members who share our passion for debate and intellectual growth. Whether you are an experienced debater or just starting, The Francis Bacon Debate Club offers a supportive and stimulating environment for you to develop your skills and engage with like-minded individuals.
</p> <p class="text-lg">
To join us, please visit our <a href="/membership">Membership</a> page for more information.
</p> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/aboutus/[...page].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/aboutus/[...page].astro";
const $$url = "/aboutus/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

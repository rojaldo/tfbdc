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
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Events", "description": "Upcoming events and debates at The Francis Bacon Debate Club." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="space-content container"> <h1>Events</h1> <p class="text-2xl">
Join us for our upcoming events and debates. Engage in thought-provoking discussions and enhance your debating skills.
</p> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Upcoming Events</h2> <div class="my-8"> <h3 class="text-2xl">Debate on Climate Change Policies</h3> <p class="text-lg">
Date: [Date] <br>
Time: [Time] <br>
Location: [Location]
</p> <p class="text-lg">
Join us for a heated debate on the effectiveness of current climate change policies. Are governments doing enough to combat climate change, or are more drastic measures needed? Come and share your views on this critical issue.
</p> </div> <div class="my-8"> <h3 class="text-2xl">The Impact of Social Media on Society</h3> <p class="text-lg">
Date: [Date] <br>
Time: [Time] <br>
Location: [Location]
</p> <p class="text-lg">
In this debate, we will explore the impact of social media on modern society. Does social media bring people together or drive them apart? How does it influence our perceptions and behaviors? Join us for an engaging discussion on the pros and cons of social media.
</p> </div> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Past Events</h2> <div class="my-8"> <h3 class="text-2xl">Debate on Universal Basic Income</h3> <p class="text-lg">
Date: [Past Date] <br>
Time: [Past Time] <br>
Location: [Past Location]
</p> <p class="text-lg">
This debate focused on the concept of Universal Basic Income (UBI). We discussed whether UBI is a viable solution to economic inequality and job displacement caused by automation. The arguments were passionate and thought-provoking, providing valuable insights into this complex issue.
</p> </div> <div class="my-8"> <h3 class="text-2xl">The Role of Technology in Education</h3> <p class="text-lg">
Date: [Past Date] <br>
Time: [Past Time] <br>
Location: [Past Location]
</p> <p class="text-lg">
In this event, we debated the role of technology in education. Is technology enhancing the learning experience, or is it creating new challenges for educators and students? The discussion covered various perspectives, highlighting the benefits and drawbacks of integrating technology into the classroom.
</p> </div> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/events/[...page].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/events/[...page].astro";
const $$url = "/events/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

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
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Contact Us", "description": "Get in touch with The Francis Bacon Debate Club. We'd love to hear from you!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="space-content container"> <h1>Contact Us</h1> <p class="text-2xl">
We'd love to hear from you! Whether you have questions, feedback, or are interested in joining The Francis Bacon Debate Club, please feel free to reach out to us.
</p> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Get in Touch</h2> <p class="text-lg">
You can contact us through the following methods:
</p> <ul class="list-disc pl-5"> <li><strong>Email:</strong> <a href="mailto:info@francisbacondebateclub.com">info@francisbacondebateclub.com</a></li> <li><strong>Phone:</strong> +1 (123) 456-7890</li> <li><strong>Address:</strong> 123 Debate Street, Knowledge City, Country</li> </ul> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Follow Us</h2> <p class="text-lg">
Stay updated with our latest news and events by following us on social media:
</p> <ul class="list-disc pl-5"> <li><a href="https://www.facebook.com/francisbacondebateclub" target="_blank" rel="noopener noreferrer">Facebook</a></li> <li><a href="https://www.twitter.com/francisdebate" target="_blank" rel="noopener noreferrer">Twitter</a></li> <li><a href="https://www.instagram.com/francisbacondebateclub" target="_blank" rel="noopener noreferrer">Instagram</a></li> <li><a href="https://www.linkedin.com/company/francisbacondebateclub" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> </ul> </div> </section> <section class="my-12"> <div class="container"> <h2 class="text-3xl">Contact Form</h2> <p class="text-lg">
Alternatively, you can fill out the contact form below, and we will get back to you as soon as possible.
</p> <form action="https://formspree.io/f/{your-form-id}" method="POST" class="space-y-4"> <div> <label for="name" class="block text-lg font-medium">Name</label> <input type="text" id="name" name="name" class="w-full border border-gray-300 p-2 rounded" required> </div> <div> <label for="email" class="block text-lg font-medium">Email</label> <input type="email" id="email" name="email" class="w-full border border-gray-300 p-2 rounded" required> </div> <div> <label for="message" class="block text-lg font-medium">Message</label> <textarea id="message" name="message" rows="4" class="w-full border border-gray-300 p-2 rounded" required></textarea> </div> <button type="submit" class="button">Send Message</button> </form> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/contact/[...page].astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/contact/[...page].astro";
const $$url = "/contact/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

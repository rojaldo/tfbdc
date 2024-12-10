import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
import { a as $$Accordion, b as $$AccordionItem, c as $$Breadcrumbs, d as $$BreadcrumbsItem, e as $$Card, f as $$Media, g as $$Modal, h as $$Notification, i as $$Pagination, $ as $$DefaultLayout } from '../chunks/DefaultLayout_CENBkUAR.mjs';
import { $ as $$Icon } from '../chunks/Icon_CP4zimMo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AccessibleComponents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccessibleComponents;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "The Francis Bacon Debate Club" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="space-content container"> <h1>The Francis Bacon Debate Club</h1> <p class="text-2xl">
This theme has a lot of extra a11y components provided by the <a href="https://github.com/markteekman/accessible-astro-components#Pagination">Accessible Astro Component</a> NPM package to help you build accessible pages faster:
</p> </div> </section> <section class="mb-12 mt-32"> <div class="container"> <div class="grid grid-cols-1 gap-32 md:grid-cols-2"> <div class="space-content"> <h2>Accordion</h2> ${renderComponent($$result2, "Accordion", $$Accordion, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "header": "First Item" }, { "default": ($$result4) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo
                accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod
                veritatis laboriosam est tenetur.
</p> <a href="#">Tab to me!</a> ` })} ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "header": "Second Item" }, { "default": ($$result4) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo
                accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod
                veritatis laboriosam est tenetur.
</p> ` })} ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "header": "Third Item" }, { "default": ($$result4) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo
                accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod
                veritatis laboriosam est tenetur.
</p> ` })} ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "header": "Fourth Item" }, { "default": ($$result4) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo
                accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod
                veritatis laboriosam est tenetur.
</p> ` })} ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "header": "Fifth Item" }, { "default": ($$result4) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi nobis optio? Qui in quo
                accusantium debitis sapiente obcaecati magnam incidunt sit. Molestiae exercitationem quibusdam quod
                veritatis laboriosam est tenetur.
</p> ` })} ` })} </div> <div class="space-content"> <h2>Breadcrumbs</h2> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/", "label": "Home" })} ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/blog", "label": "Blog" })} ${renderComponent($$result3, "BreadcrumbsItem", $$BreadcrumbsItem, { "currentPage": true, "label": "My blog post" })} ` })} </div> <div class="space-content"> <h2>Cards</h2> ${renderComponent($$result2, "Card", $$Card, { "img": "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" })} </div> <div class="space-content"> <h2>DarkMode Toggle</h2> <p>This component can be viewed in the top right corner besides the main navigation.</p> </div> <div class="space-content"> <h2>Media</h2> ${renderComponent($$result2, "Media", $$Media, { "class": "rounded-lg", "src": "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" })} </div> <div class="space-content"> <h2>Modals</h2> <button id="modal1-trigger" class="button">Modal 1</button>&nbsp;
<button id="modal2-trigger" class="button color-secondary">Modal 2</button> ${renderComponent($$result2, "Modal", $$Modal, { "triggerId": "modal1-trigger", "title": "Modal 1" }, { "default": ($$result3) => renderTemplate` <p>Why hello, I be the <strong>first</strong> Modal.</p> ` })} ${renderComponent($$result2, "Modal", $$Modal, { "triggerId": "modal2-trigger", "title": "Modal 2", "closeText": "Cancel" }, { "default": ($$result3) => renderTemplate` <p>
Ah yes, and I be the <strong>second</strong> Modal. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed, a! Ratione eaque temporibus alias tempora pariatur dolorem.
</p> <button class="button" onclick="closeModal()">Confirm action</button> ` })} </div> <div class="space-content"> <h2>Notification</h2> ${renderComponent($$result2, "Notification", $$Notification, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ion:notifications-outline" })}<p><strong>Message:</strong> This is a notification!</p> ` })} ${renderComponent($$result2, "Notification", $$Notification, { "type": "info" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ion:information-circle-outline" })}<p> <strong>Info:</strong> This is a notification of type info.
</p> ` })} ${renderComponent($$result2, "Notification", $$Notification, { "type": "success" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ion:checkbox-outline" })}<p> <strong>Success:</strong> This is a notification of type success.
</p> ` })} ${renderComponent($$result2, "Notification", $$Notification, { "type": "warning" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ion:warning-outline" })}<p> <strong>Warning:</strong> This is a notification of type warning and goes on multiple lines to see how that
              looks.
</p> ` })} ${renderComponent($$result2, "Notification", $$Notification, { "type": "error" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ion:alert-circle-outline" })}<p> <strong>Error:</strong> This is a notification of type error.
</p> ` })} </div> <div class="space-content"> <h2>Pagination</h2> ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": "200" })} </div> <div class="space-content"> <h2>SkipLinks</h2> <p>This component can be viewed by shift+tabbing until they show up.</p> </div> </div> </div> </section> ` })}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/accessible-components.astro", void 0);

const $$file = "/home/rojaldo/code/drake/accessible-astro-starter/src/pages/accessible-components.astro";
const $$url = "/accessible-components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AccessibleComponents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

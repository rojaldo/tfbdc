import { c as createComponent, r as renderTemplate, g as addAttribute, b as createAstro, a as renderComponent, m as maybeRenderHead, d as renderSlot, i as defineScriptVars, j as createTransitionScope, k as renderHead, l as renderTransition } from './astro/server_DF5EZgvI.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { $ as $$Image } from './_astro_assets_GE1N05AK.mjs';

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/astro@4.16.17_@types+node@22.10.1_lightningcss@1.27.0_rollup@4.28.1_sass@1.82.0_terser@5.36.0_typescript@5.7.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$9 = createAstro();
const $$SiteMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SiteMeta;
  const { title, description, url, image, author } = Astro2.props;
  let subtitle = "Accessible Astro Starter";
  return renderTemplate`<!-- general meta --><meta name="title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><!-- open graph --><meta property="og:title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(Astro2.site ? `${Astro2.site}${image}` : image, "content")}><!-- twitter card --><!-- page title --><title>${title} - ${subtitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/SiteMeta.astro", void 0);

const $$ResponsiveToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="responsive-toggle" aria-expanded="false" aria-label="Open menu navigation" data-astro-cid-3qc6hvr2> <svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3qc6hvr2><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3qc6hvr2></path></svg> </button>  `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/ResponsiveToggle.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="accordion"> <ul class="accordion__wrapper"> ', ` </ul> </div> <script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \`\${getPanelHeight(accordionItem)}px\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \`\${getPanelHeight(toggledAccordionItem)}px\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \`accordion-item\${index + 1}\`)
    accordionItemPanel.setAttribute('id', \`item\${index + 1}\`)

    accordionItemHeader.setAttribute('aria-controls', \`item\${index + 1}\`)
    accordionItemPanel.setAttribute('aria-labelledby', \`accordion-item\${index + 1}\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script> `], ["", '<div class="accordion"> <ul class="accordion__wrapper"> ', ` </ul> </div> <script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \\\`\\\${getPanelHeight(accordionItem)}px\\\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \\\`\\\${getPanelHeight(toggledAccordionItem)}px\\\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \\\`accordion-item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('id', \\\`item\\\${index + 1}\\\`)

    accordionItemHeader.setAttribute('aria-controls', \\\`item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('aria-labelledby', \\\`accordion-item\\\${index + 1}\\\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script> `])), maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Accordion.astro", void 0);

const $$Astro$8 = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="accordion__item"> <h3> <button id="accordion-header-1" class="accordion__header" aria-expanded="false" aria-controls="accordion-panel-1" onclick="toggleAccordionItem()"> ${header} <svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path> </svg> </button> </h3> <div id="accordion-panel-1" role="region" class="accordion__panel" aria-labelledby="accordion-header-1"> <div class="panel__inner"> ${renderSlot($$result, $$slots["default"])} </div> </div> </li> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/AccordionItem.astro", void 0);

const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumbs"> <ol> ${renderSlot($$result, $$slots["default"])} </ol> </nav> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Breadcrumbs.astro", void 0);

const $$Astro$7 = createAstro();
const $$BreadcrumbsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const { href = "#", label = "Breadcrumb", currentPage = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="breadcrumbs__item"> ${currentPage ? renderTemplate`<span aria-current="page">${label}</span>` : renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`} </li> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/BreadcrumbsItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { url = "#", img = "https://fakeimg.pl/640x360", title = "Default title", footer = "Your name" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card"> <div class="card__image"> <img${addAttribute(img, "src")} alt=""> </div> <div class="card__content"> <h3> <a${addAttribute(url, "href")}>${title}</a> </h3> <p> ${renderSlot($$result, $$slots["default"], renderTemplate`Default description.`)} </p> <small> ${footer} </small> </div> </div> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Card.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$DarkMode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DarkMode;
  const { initialMode = "auto" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button class="darkmode-toggle" aria-pressed="false" aria-label="Toggle Dark Mode"', "", '> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg> </button> <script>(function(){', `
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = (store = true) => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    if (store) localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = (store = true) => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    if (store) localStorage.setItem('darkMode', 'disabled')
  }

  const checkPreference = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode(false)
    } else {
      disableDarkMode(false)
    }
  }

  // Initial setup based on props
  const initializeDarkMode = () => {
    if (darkMode) {
      // If user has a preference, respect that first
      darkMode === 'enabled' ? enableDarkMode() : disableDarkMode()
      return
    }

    // Handle initial mode
    switch (initialMode) {
      case 'dark':
        enableDarkMode()
        break
      case 'light':
        disableDarkMode()
        break
      default: // 'auto'
        checkPreference()
    }
  }

  // execution
  initializeDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = document.body.classList.contains('darkmode')

    !darkMode ? enableDarkMode() : disableDarkMode()
  })

  // Listen for view transitions
  document.addEventListener('astro:after-swap', () => {
    darkMode = localStorage.getItem('darkMode')
    initializeDarkMode()
  })
})();<\/script>`], ["", '<button class="darkmode-toggle" aria-pressed="false" aria-label="Toggle Dark Mode"', "", '> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg> </button> <script>(function(){', `
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = (store = true) => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    if (store) localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = (store = true) => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    if (store) localStorage.setItem('darkMode', 'disabled')
  }

  const checkPreference = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode(false)
    } else {
      disableDarkMode(false)
    }
  }

  // Initial setup based on props
  const initializeDarkMode = () => {
    if (darkMode) {
      // If user has a preference, respect that first
      darkMode === 'enabled' ? enableDarkMode() : disableDarkMode()
      return
    }

    // Handle initial mode
    switch (initialMode) {
      case 'dark':
        enableDarkMode()
        break
      case 'light':
        disableDarkMode()
        break
      default: // 'auto'
        checkPreference()
    }
  }

  // execution
  initializeDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = document.body.classList.contains('darkmode')

    !darkMode ? enableDarkMode() : disableDarkMode()
  })

  // Listen for view transitions
  document.addEventListener('astro:after-swap', () => {
    darkMode = localStorage.getItem('darkMode')
    initializeDarkMode()
  })
})();<\/script>`])), maybeRenderHead(), addAttribute(initialMode, "data-initial-mode"), addAttribute(createTransitionScope($$result, "cbthjxy3"), "data-astro-transition-persist"), defineScriptVars({ initialMode }));
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/DarkMode.astro", "self");

const $$Astro$4 = createAstro();
const $$Media = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Media;
  const { class: classNames, src = "https://fakeimg.pl/640x360", alt = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(classNames, "class")}${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Media.astro", void 0);

const $$Astro$3 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Modal;
  const { triggerId, title, closeText = "Close" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog class="modal"${addAttribute(triggerId, "aria-labelledby")}> <div class="modal__inner"> <div class="modal__content"> <h3 tabindex="-1"> ${title} </h3> ${renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`)} </div> <div class="modal__close"> <button>${closeText}</button> </div> </div> </dialog>  `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Modal.astro", void 0);

const $$Astro$2 = createAstro();
const $$Notification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Notification;
  const { type = "default", role = "none", ariaLive = "off" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`notification type-${type}`, "class")}${addAttribute(role, "role")}${addAttribute(ariaLive, "aria-live")}> ${renderSlot($$result, $$slots["default"], renderTemplate` <p><strong>Message:</strong> This is a notification!</p> `)} </div> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Notification.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    currentPage = "1",
    totalPages = "12",
    renderProgress = ({ currentPage: currentPage2, totalPages: totalPages2 }) => `Page ${currentPage2} of ${totalPages2}`
  } = Astro2.props;
  const progress = renderProgress({ currentPage, totalPages });
  return renderTemplate`${maybeRenderHead()}<nav class="pagination" aria-label="Pagination"> <ul class="pagination__list"> <li> ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")} aria-label="Go to the first page"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span>`} </li> <li> ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(`Go back to ${previousPage}`, "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path> </svg> </span>`} </li> <li> <span>${progress}</span> </li> <li> ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(`Go to ${nextPage}`, "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path> </svg> </span>`} </li> <li> ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")} aria-label="Go to the last page"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span>`} </li> </ul> </nav> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SkipLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="skip-links"> <a href="#main-content">Skip to main content</a> </div> <script type="module">
  // variables
  const skipLink = document.querySelector('.skip-links a')

  // execution
  skipLink.addEventListener('keydown', (event) => {
    if (!event.target.closest('a')) return
    const key = event.key

    if (key !== 'Enter') return
    event.preventDefault()
    const target = event.target.getAttribute('href')

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target)
      targetElement.setAttribute('tabindex', '-1')
      targetElement.focus()
    } else if (!document.querySelector(target) && document.querySelector('h1')) {
      const h1 = document.querySelector('h1')
      h1.setAttribute('tabindex', '-1')
      h1.focus()
    } else {
      console.warn('SkipLinks are not set, either missing an h1 or main content id on the page.')
    }
  })
<\/script> `])), maybeRenderHead());
}, "/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/SkipLinks.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.CAsmf0T0.svg","width":47,"height":37,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rojaldo/code/drake/accessible-astro-starter/src/assets/img/logo.svg";
							}
							
							return target[name];
						}
					});

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="main-navigation" class="is-desktop py-8"> <div class="container"> <a href="/" class="flex items-center gap-2 !no-underline"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Your Logo", "width": "47", "height": "37" })} <span class="font-bold">The Francis Bacon Debate Club</span> </a> <div class="wrapper"> <nav class="desktop-menu" aria-label="Main navigation desktop"> <ul class="menu"> ${renderSlot($$result, $$slots["default"])} </ul> </nav> ${renderComponent($$result, "DarkMode", $$DarkMode, {})} ${renderComponent($$result, "ResponsiveToggle", $$ResponsiveToggle, {})} </div> <nav class="mobile-menu" aria-label="Main navigation mobile"> <ul class="menu"> ${renderSlot($$result, $$slots["default"])} </ul> </nav> </div> </div>  `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "SkipLinks", $$SkipLinks, {})} ${renderComponent($$result, "Navigation", $$Navigation, {}, { "default": ($$result2) => renderTemplate` <li class="menu-item"> <a href="/">Home</a> </li> <li class="menu-item"> <a href="/gallery/">Gallery</a> </li> <li class="menu-item"> <a href="/aboutus/">About Us</a> </li> <li class="menu-item"> <a href="/events/">Events</a> </li> <li class="menu-item"> <a href="/membership/">Membership</a> </li> <li class="menu-item"> <a href="/resources/">Resources</a> </li> <li class="menu-item"> <a href="/contact/">Contact</a> </li>  ` })} </header> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/Header.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-balv45lp></div> `;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/CallToAction.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "CallToAction", $$CallToAction, {})} <section class="py-8"> <div class="container"> <p>
&copy; ${currentYear} - The Francis Bacon Debate Club. All rights reserved.
</p> </div> </section> </footer>`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const {
    title = "The Francis Bacon Debate Club",
    description = "The purpose of this website is to provide a platform for The Francis Bacon Debate Club to share their thoughts and ideas with the world.",
    url,
    image = "/social-preview-image.png",
    author = "The Francis Bacon Debate Club IT Team"
  } = Astro2.props;
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "SiteMeta", $$SiteMeta, { "title": title, "description": description.substring(0, 100), "url": Astro2.site ? `${Astro2.site}/${title.toLowerCase().replaceAll(" ", "-")}` : `https://accessible-astro.dev/${title.toLowerCase().replaceAll(" ", "-")}`, "image": image, "author": author })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content"${addAttribute(renderTransition($$result, "qci2jqze"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/home/rojaldo/code/drake/accessible-astro-starter/src/layouts/DefaultLayout.astro", "self");

export { $$DefaultLayout as $, $$Accordion as a, $$AccordionItem as b, $$Breadcrumbs as c, $$BreadcrumbsItem as d, $$Card as e, $$Media as f, $$Modal as g, $$Notification as h, $$Pagination as i };

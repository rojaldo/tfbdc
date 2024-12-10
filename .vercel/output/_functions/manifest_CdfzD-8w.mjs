import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BYl-7X5U.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_DF5EZgvI.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/rojaldo/code/drake/accessible-astro-starter/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.17_@types+node@22.10.1_lightningcss@1.27.0_rollup@4.28.1_sass@1.82.0_terser@5.36.0_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/aboutus/[...page]","isIndex":false,"type":"page","pattern":"^\\/aboutus(?:\\/(.*?))?\\/?$","segments":[[{"content":"aboutus","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/aboutus/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/accessible-components","isIndex":false,"type":"page","pattern":"^\\/accessible-components\\/?$","segments":[[{"content":"accessible-components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accessible-components.astro","pathname":"/accessible-components","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/contact/[...page]","isIndex":false,"type":"page","pattern":"^\\/contact(?:\\/(.*?))?\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/contact/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/events/[...page]","isIndex":false,"type":"page","pattern":"^\\/events(?:\\/(.*?))?\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/events/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"},{"type":"inline","content":"ul[data-astro-cid-3uhpn3gm]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-3uhpn3gm]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-3uhpn3gm]{grid-template-columns:repeat(3,1fr)}}\n"}],"routeData":{"route":"/gallery/[post]","isIndex":false,"type":"page","pattern":"^\\/gallery\\/([^/]+?)\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}],[{"content":"post","dynamic":true,"spread":false}]],"params":["post"],"component":"src/pages/gallery/[post].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"},{"type":"inline","content":"ul[data-astro-cid-wvbyjdo4]{display:grid;grid-template-columns:1fr;grid-gap:4rem}@media (min-width: 550px){ul[data-astro-cid-wvbyjdo4]{grid-template-columns:repeat(2,1fr);grid-gap:2rem}}@media (min-width: 950px){ul[data-astro-cid-wvbyjdo4]{grid-template-columns:repeat(3,1fr)}}\n"}],"routeData":{"route":"/gallery/[...page]","isIndex":false,"type":"page","pattern":"^\\/gallery(?:\\/(.*?))?\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/gallery/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/markdown-page","isIndex":false,"type":"page","pattern":"^\\/markdown-page\\/?$","segments":[[{"content":"markdown-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/markdown-page.md","pathname":"/markdown-page","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/mdx-page","isIndex":false,"type":"page","pattern":"^\\/mdx-page\\/?$","segments":[[{"content":"mdx-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mdx-page.mdx","pathname":"/mdx-page","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/membership/[...page]","isIndex":false,"type":"page","pattern":"^\\/membership(?:\\/(.*?))?\\/?$","segments":[[{"content":"membership","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/membership/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"}],"routeData":{"route":"/resources/[...page]","isIndex":false,"type":"page","pattern":"^\\/resources(?:\\/(.*?))?\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/resources/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NqZVaMHY.js"}],"styles":[{"type":"external","src":"/_astro/markdown-page.B95SPLym.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap\";.text-gradient[data-astro-cid-bbe6dxrz]{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-500));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.darkmode .text-gradient{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-400));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.handwritten[data-astro-cid-bbe6dxrz]{font-family:Great Vibes,brush-script,cursive}.feature[data-astro-cid-ezsi7upz]{position:relative;width:calc(100% - .5rem);padding:2rem}.feature[data-astro-cid-ezsi7upz]>[data-astro-cid-ezsi7upz]{position:relative;z-index:2}@media (min-width: 75em){.feature[data-astro-cid-ezsi7upz]{width:100%}}.feature[data-astro-cid-ezsi7upz]:before,.feature[data-astro-cid-ezsi7upz]:after{content:\"\";position:absolute}.feature[data-astro-cid-ezsi7upz]:before{inset:0;background-color:var(--neutral-100);border:3px solid var(--neutral-700);border-radius:1rem;box-shadow:0 0 0 6px var(--neutral-100);z-index:1}.feature[data-astro-cid-ezsi7upz]:after{background-color:var(--action-color);inset:1rem -.85rem -.85rem 1rem;border-radius:1rem;z-index:0}.feature [data-icon]{height:auto;width:4rem;color:var(--action-color)}.darkmode .feature:before{background-color:var(--dark-100);box-shadow:0 0 0 6px var(--dark-100)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/DarkMode.astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/node_modules/.pnpm/accessible-astro-components@2.4.0/node_modules/accessible-astro-components/index.js",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/layouts/DefaultLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/layouts/MarkdownLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/markdown-page.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/markdown-page@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/mdx-page.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/mdx-page@_@mdx",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/aboutus/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/aboutus/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/accessible-components.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/accessible-components@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/contact/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/events/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/events/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/gallery/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/gallery/[post].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/gallery/[post]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/membership/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/membership/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/pages/resources/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/resources/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/rojaldo/code/drake/accessible-astro-starter/src/components/Navigation.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/aboutus/[...page]@_@astro":"pages/aboutus/_---page_.astro.mjs","\u0000@astro-page:src/pages/accessible-components@_@astro":"pages/accessible-components.astro.mjs","\u0000@astro-page:src/pages/contact/[...page]@_@astro":"pages/contact/_---page_.astro.mjs","\u0000@astro-page:src/pages/events/[...page]@_@astro":"pages/events/_---page_.astro.mjs","\u0000@astro-page:src/pages/gallery/[post]@_@astro":"pages/gallery/_post_.astro.mjs","\u0000@astro-page:src/pages/gallery/[...page]@_@astro":"pages/gallery/_---page_.astro.mjs","\u0000@astro-page:src/pages/markdown-page@_@md":"pages/markdown-page.astro.mjs","\u0000@astro-page:src/pages/mdx-page@_@mdx":"pages/mdx-page.astro.mjs","\u0000@astro-page:src/pages/membership/[...page]@_@astro":"pages/membership/_---page_.astro.mjs","\u0000@astro-page:src/pages/resources/[...page]@_@astro":"pages/resources/_---page_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.17_@types+node@22.10.1_lightningcss@1.27.0_rollup@4.28.1_sass@1.82.0_terser@5.36.0_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-manifest":"manifest_CdfzD-8w.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.NqZVaMHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.CAsmf0T0.svg","/_astro/markdown-page.B95SPLym.css","/accessible-components.webp","/astronaut-hero-img.webp","/favicon.svg","/social-preview-image.png","/wcag-compliant.webp","/_astro/hoisted.NqZVaMHY.js","/fonts/OpenSans-Bold.woff","/fonts/OpenSans-Bold.woff2","/fonts/OpenSans-ExtraBold.woff","/fonts/OpenSans-ExtraBold.woff2","/fonts/OpenSans-Italic.woff","/fonts/OpenSans-Italic.woff2","/fonts/OpenSans-Regular.woff","/fonts/OpenSans-Regular.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"xRyE5/t/XikIC4DFv5v+9FTsZduO2m/ZwQ8+CGdvkcc=","experimentalEnvGetSecretEnabled":false});

export { manifest };

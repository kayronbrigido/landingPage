// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[727],{

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fsrc_2Fmiddleware_tsx_page_2Fsrc_2Fmiddleware_rootDir_C_3A_5CProjetos_5Clanding_page_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLygoPyFhcGl8X25leHR8LipcXC4uKikuKikpKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiLygoPyFhcGl8X25leHR8LipcXC4uKikuKikifV0_3D_)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/utils.js
var utils = __webpack_require__(404);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/next-url.js + 12 modules
var next_url = __webpack_require__(365);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var cookies = __webpack_require__(135);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0,utils/* validateURL */.r4)(url);
        super(url, init);
        const nextUrl = new next_url/* NextURL */.c(url, {
            headers: (0,utils/* toNodeHeaders */.uf)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(409);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound"
];
const EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(searchParams, extended) {
    for (const name of INTERNAL_QUERY_NAMES){
        searchParams.delete(name);
    }
    if (extended) {
        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){
            searchParams.delete(name);
        }
    }
    return searchParams;
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment.startsWith("(") && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment.startsWith("@")) {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component; charset=utf-8";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
]; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
// Consolidate this consts when the `appDir` will be stable.
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
const WEBPACK_LAYERS = {
    shared: "sc_shared",
    server: "sc_server",
    client: "sc_client",
    action: "sc_action",
    api: "api",
    middleware: "middleware",
    edgeAsset: "edge-asset",
    appClient: "app-client"
}; //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js












class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ],
    [
        FETCH_CACHE_HEADER
    ]
];
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new next_url/* NextURL */.c(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0,utils/* fromNodeHeaders */.w_)(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    // Strip internal query parameters off the request.
    stripInternalSearchParams(requestUrl.searchParams, true);
    const request = new NextRequestHint({
        page: params.page,
        input:  false ? 0 : String(requestUrl),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response = await params.handler(request, event);
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new next_url/* NextURL */.c(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new next_url/* NextURL */.c(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : spec_extension_response/* NextResponse.next */.x.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
} //# sourceMappingURL=adapter.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fsrc%2Fmiddleware.tsx&page=%2Fsrc%2Fmiddleware&rootDir=C%3A%5CProjetos%5Clanding-page&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLygoPyFhcGl8X25leHR8LipcXC4uKikuKikpKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiLygoPyFhcGl8X25leHR8LipcXC4uKikuKikifV0%3D!

        

        enhanceGlobals()

        var mod = __webpack_require__(839)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/src/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fsrc_2Fmiddleware_tsx_page_2Fsrc_2Fmiddleware_rootDir_C_3A_5CProjetos_5Clanding_page_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLygoPyFhcGl8X25leHR8LipcXC4uKikuKikpKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiLygoPyFhcGl8X25leHR8LipcXC4uKikuKikifV0_3D_(opts) {
          return adapter({
              ...opts,
              page: "/src/middleware",
              handler,
          })
        }
    

/***/ }),

/***/ 652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
var preferredCharsets = __webpack_require__(187);
var preferredEncodings = __webpack_require__(149);
var preferredLanguages = __webpack_require__(773);
var preferredMediaTypes = __webpack_require__(371);
/**
 * Module exports.
 * @public
 */ module.exports = Negotiator;
module.exports.Negotiator = Negotiator;
/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */ function Negotiator(request) {
    if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
    }
    this.request = request;
}
Negotiator.prototype.charset = function charset(available) {
    var set = this.charsets(available);
    return set && set[0];
};
Negotiator.prototype.charsets = function charsets(available) {
    return preferredCharsets(this.request.headers["accept-charset"], available);
};
Negotiator.prototype.encoding = function encoding(available) {
    var set = this.encodings(available);
    return set && set[0];
};
Negotiator.prototype.encodings = function encodings(available) {
    return preferredEncodings(this.request.headers["accept-encoding"], available);
};
Negotiator.prototype.language = function language(available) {
    var set = this.languages(available);
    return set && set[0];
};
Negotiator.prototype.languages = function languages(available) {
    return preferredLanguages(this.request.headers["accept-language"], available);
};
Negotiator.prototype.mediaType = function mediaType(available) {
    var set = this.mediaTypes(available);
    return set && set[0];
};
Negotiator.prototype.mediaTypes = function mediaTypes(available) {
    return preferredMediaTypes(this.request.headers.accept, available);
};
// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;


/***/ }),

/***/ 187:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;
/**
 * Module variables.
 * @private
 */ var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Charset header.
 * @private
 */ function parseAcceptCharset(accept) {
    var accepts = accept.split(",");
    for(var i = 0, j = 0; i < accepts.length; i++){
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
            accepts[j++] = charset;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */ function parseCharset(str, i) {
    var match = simpleCharsetRegExp.exec(str);
    if (!match) return null;
    var charset = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split("=");
            if (p[0] === "q") {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        charset: charset,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a charset.
 * @private
 */ function getCharsetPriority(charset, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the charset.
 * @private
 */ function specify(charset, spec, index) {
    var s = 0;
    if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
    } else if (spec.charset !== "*") {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */ function preferredCharsets(accept, provided) {
    // RFC 2616 sec 14.2: no header = *
    var accepts = parseAcceptCharset(accept === undefined ? "*" : accept || "");
    if (!provided) {
        // sorted list of all charsets
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
    });
    // sorted list of accepted charsets
    return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full charset string.
 * @private
 */ function getFullCharset(spec) {
    return spec.charset;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 149:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;
/**
 * Module variables.
 * @private
 */ var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Encoding header.
 * @private
 */ function parseAcceptEncoding(accept) {
    var accepts = accept.split(",");
    var hasIdentity = false;
    var minQuality = 1;
    for(var i = 0, j = 0; i < accepts.length; i++){
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
            accepts[j++] = encoding;
            hasIdentity = hasIdentity || specify("identity", encoding);
            minQuality = Math.min(minQuality, encoding.q || 1);
        }
    }
    if (!hasIdentity) {
        /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */ accepts[j++] = {
            encoding: "identity",
            q: minQuality,
            i: i
        };
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */ function parseEncoding(str, i) {
    var match = simpleEncodingRegExp.exec(str);
    if (!match) return null;
    var encoding = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split("=");
            if (p[0] === "q") {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        encoding: encoding,
        q: q,
        i: i
    };
}
/**
 * Get the priority of an encoding.
 * @private
 */ function getEncodingPriority(encoding, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the encoding.
 * @private
 */ function specify(encoding, spec, index) {
    var s = 0;
    if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
    } else if (spec.encoding !== "*") {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */ function preferredEncodings(accept, provided) {
    var accepts = parseAcceptEncoding(accept || "");
    if (!provided) {
        // sorted list of all encodings
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullEncoding);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
    });
    // sorted list of accepted encodings
    return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full encoding string.
 * @private
 */ function getFullEncoding(spec) {
    return spec.encoding;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;
/**
 * Module variables.
 * @private
 */ var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Language header.
 * @private
 */ function parseAcceptLanguage(accept) {
    var accepts = accept.split(",");
    for(var i = 0, j = 0; i < accepts.length; i++){
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
            accepts[j++] = language;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a language from the Accept-Language header.
 * @private
 */ function parseLanguage(str, i) {
    var match = simpleLanguageRegExp.exec(str);
    if (!match) return null;
    var prefix = match[1];
    var suffix = match[2];
    var full = prefix;
    if (suffix) full += "-" + suffix;
    var q = 1;
    if (match[3]) {
        var params = match[3].split(";");
        for(var j = 0; j < params.length; j++){
            var p = params[j].split("=");
            if (p[0] === "q") q = parseFloat(p[1]);
        }
    }
    return {
        prefix: prefix,
        suffix: suffix,
        q: q,
        i: i,
        full: full
    };
}
/**
 * Get the priority of a language.
 * @private
 */ function getLanguagePriority(language, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the language.
 * @private
 */ function specify(language, spec, index) {
    var p = parseLanguage(language);
    if (!p) return null;
    var s = 0;
    if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
    } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
    } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
    } else if (spec.full !== "*") {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */ function preferredLanguages(accept, provided) {
    // RFC 2616 sec 14.4: no header = *
    var accepts = parseAcceptLanguage(accept === undefined ? "*" : accept || "");
    if (!provided) {
        // sorted list of all languages
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
    });
    // sorted list of accepted languages
    return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full language string.
 * @private
 */ function getFullLanguage(spec) {
    return spec.full;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}


/***/ }),

/***/ 371:
/***/ ((module) => {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;
/**
 * Module variables.
 * @private
 */ var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept header.
 * @private
 */ function parseAccept(accept) {
    var accepts = splitMediaTypes(accept);
    for(var i = 0, j = 0; i < accepts.length; i++){
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
            accepts[j++] = mediaType;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a media type from the Accept header.
 * @private
 */ function parseMediaType(str, i) {
    var match = simpleMediaTypeRegExp.exec(str);
    if (!match) return null;
    var params = Object.create(null);
    var q = 1;
    var subtype = match[2];
    var type = match[1];
    if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for(var j = 0; j < kvps.length; j++){
            var pair = kvps[j];
            var key = pair[0].toLowerCase();
            var val = pair[1];
            // get the value, unwrapping quotes
            var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.substr(1, val.length - 2) : val;
            if (key === "q") {
                q = parseFloat(value);
                break;
            }
            // store parameter
            params[key] = value;
        }
    }
    return {
        type: type,
        subtype: subtype,
        params: params,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a media type.
 * @private
 */ function getMediaTypePriority(type, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the media type.
 * @private
 */ function specify(type, spec, index) {
    var p = parseMediaType(type);
    var s = 0;
    if (!p) {
        return null;
    }
    if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
    } else if (spec.type != "*") {
        return null;
    }
    if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
    } else if (spec.subtype != "*") {
        return null;
    }
    var keys = Object.keys(spec.params);
    if (keys.length > 0) {
        if (keys.every(function(k) {
            return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
        })) {
            s |= 1;
        } else {
            return null;
        }
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred media types from an Accept header.
 * @public
 */ function preferredMediaTypes(accept, provided) {
    // RFC 2616 sec 14.2: no header = */*
    var accepts = parseAccept(accept === undefined ? "*/*" : accept || "");
    if (!provided) {
        // sorted list of all types
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
    });
    // sorted list of accepted types
    return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full type string.
 * @private
 */ function getFullType(spec) {
    return spec.type + "/" + spec.subtype;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
/**
 * Count the number of quotes in a string.
 * @private
 */ function quoteCount(string) {
    var count = 0;
    var index = 0;
    while((index = string.indexOf('"', index)) !== -1){
        count++;
        index++;
    }
    return count;
}
/**
 * Split a key value pair.
 * @private
 */ function splitKeyValuePair(str) {
    var index = str.indexOf("=");
    var key;
    var val;
    if (index === -1) {
        key = str;
    } else {
        key = str.substr(0, index);
        val = str.substr(index + 1);
    }
    return [
        key,
        val
    ];
}
/**
 * Split an Accept header into media types.
 * @private
 */ function splitMediaTypes(accept) {
    var accepts = accept.split(",");
    for(var i = 1, j = 0; i < accepts.length; i++){
        if (quoteCount(accepts[j]) % 2 == 0) {
            accepts[++j] = accepts[i];
        } else {
            accepts[j] += "," + accepts[i];
        }
    }
    // trim accepts
    accepts.length = j + 1;
    return accepts;
}
/**
 * Split a string of parameters.
 * @private
 */ function splitParameters(str) {
    var parameters = str.split(";");
    for(var i = 1, j = 0; i < parameters.length; i++){
        if (quoteCount(parameters[j]) % 2 == 0) {
            parameters[++j] = parameters[i];
        } else {
            parameters[j] += ";" + parameters[i];
        }
    }
    // trim parameters
    parameters.length = j + 1;
    for(var i = 0; i < parameters.length; i++){
        parameters[i] = parameters[i].trim();
    }
    return parameters;
}


/***/ }),

/***/ 668:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function serialize(c) {
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value ?? "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookieString(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookieString(setCookie);
    const { domain , expires , httponly , maxage , path , samesite , secure  } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookieString(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>serialize(value2)).join("; "));
        return this;
    }
    delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>serialize(value)).join("; "));
        return result;
    }
    clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        this._parsed = /* @__PURE__ */ new Map();
        var _a;
        this._headers = responseHeaders;
        const setCookie = ((_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) ?? responseHeaders.get("set-cookie") ?? [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookieString(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    delete(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this.set({
            name,
            value: "",
            expires: new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(serialize).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = serialize(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ NextURL)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   "q": () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ NextResponse)
/* harmony export */ });
/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(365);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(404);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);



const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_1__/* .ResponseCookies */ .n(this.headers),
            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__/* .NextURL */ .c(init.url, {
                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toNodeHeaders */ .uf)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r4": () => (/* binding */ validateURL),
/* harmony export */   "uf": () => (/* binding */ toNodeHeaders),
/* harmony export */   "w_": () => (/* binding */ fromNodeHeaders)
/* harmony export */ });
/* unused harmony export splitCookiesString */
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                result[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ middleware)
});

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(409);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

;// CONCATENATED MODULE: ./node_modules/next-intl/dist/src/shared/constants.js
// Reuse the legacy cookie name
// https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
const COOKIE_LOCALE_NAME = "NEXT_LOCALE";
// In a URL like "/en-US/about", the locale segment is "en-US"
const LOCALE_SEGMENT_NAME = "locale"; //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next-intl/dist/src/middleware/utils.js
function getLocaleFromPathname(pathname) {
    return pathname.split("/")[1];
}
function getHost(requestHeaders) {
    var _a, _b;
    return (_b = (_a = requestHeaders.get("x-forwarded-host")) !== null && _a !== void 0 ? _a : requestHeaders.get("host")) !== null && _b !== void 0 ? _b : undefined;
}
function isLocaleSupportedOnDomain(locale, domain) {
    return domain.defaultLocale === locale || !domain.locales || domain.locales.includes(locale);
}
function getBestMatchingDomain(curHostDomain, locale, domainConfigs) {
    let domainConfig;
    // Prio 1: Stay on current domain
    if (curHostDomain && isLocaleSupportedOnDomain(locale, curHostDomain)) {
        domainConfig = curHostDomain;
    }
    // Prio 2: Use alternative domain with matching default locale
    if (!domainConfig) {
        domainConfig = domainConfigs.find((cur)=>cur.defaultLocale === locale);
    }
    // Prio 3: Use alternative domain with restricted matching locale
    if (!domainConfig) {
        domainConfig = domainConfigs.find((cur)=>cur.locales != null && cur.locales.includes(locale));
    }
    // Prio 4: Stay on the current domain if it supports all locales
    if (!domainConfig && (curHostDomain === null || curHostDomain === void 0 ? void 0 : curHostDomain.locales) == null) {
        domainConfig = curHostDomain;
    }
    // Prio 5: Use alternative domain that supports all locales
    if (!domainConfig) {
        domainConfig = domainConfigs.find((cur)=>!cur.locales);
    }
    return domainConfig;
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next-intl/dist/src/middleware/getAlternateLinksHeaderValue.js

function getUnprefixedUrl(config, request) {
    const url = new URL(request.url);
    if (!url.pathname.endsWith("/")) {
        url.pathname += "/";
    }
    url.pathname = url.pathname.replace(new RegExp(`^/(${config.locales.join("|")})/`), "/");
    // Remove trailing slash
    if (url.pathname !== "/") {
        url.pathname = url.pathname.slice(0, -1);
    }
    return url.toString();
}
function getAlternateEntry(url, locale) {
    return `<${url}>; rel="alternate"; hreflang="${locale}"`;
}
/**
 * See https://developers.google.com/search/docs/specialty/international/localized-versions
 */ function getAlternateLinksHeaderValue(config, request) {
    const unprefixedUrl = getUnprefixedUrl(config, request);
    const links = config.locales.flatMap((locale)=>{
        function localizePathname(url) {
            if (url.pathname === "/") {
                url.pathname = `/${locale}`;
            } else {
                url.pathname = `/${locale}${url.pathname}`;
            }
            return url;
        }
        let url;
        if (config.domains) {
            const domainConfigs = config.domains.filter((cur)=>isLocaleSupportedOnDomain(locale, cur)) || [];
            return domainConfigs.map((domainConfig)=>{
                url = new URL(unprefixedUrl);
                url.port = "";
                url.host = domainConfig.domain;
                if (locale !== domainConfig.defaultLocale || config.localePrefix === "always") {
                    localizePathname(url);
                }
                return getAlternateEntry(url.toString(), locale);
            });
        } else {
            url = new URL(unprefixedUrl);
            if (locale !== config.defaultLocale || config.localePrefix === "always") {
                localizePathname(url);
            }
        }
        return getAlternateEntry(url.toString(), locale);
    });
    // Add x-default entry
    if (!config.domains) {
        const url = new URL(unprefixedUrl);
        links.push(getAlternateEntry(url.toString(), "x-default"));
    } else {
    // For `type: domain` there is no reasonable x-default
    }
    return links.join(", ");
} //# sourceMappingURL=getAlternateLinksHeaderValue.js.map

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */ function CanonicalizeLocaleList(locales) {
    // TODO
    return Intl.getCanonicalLocales(locales);
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) {
        Err = Error;
    }
    if (!condition) {
        throw new Err(message);
    }
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
/**
 * https://tc39.es/ecma402/#sec-bestavailablelocale
 * @param availableLocales
 * @param locale
 */ function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while(true){
        if (availableLocales.has(candidate)) {
            return candidate;
        }
        var pos = candidate.lastIndexOf("-");
        if (!~pos) {
            return undefined;
        }
        if (pos >= 2 && candidate[pos - 2] === "-") {
            pos -= 2;
        }
        candidate = candidate.slice(0, pos);
    }
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js


/**
 * https://tc39.es/ecma402/#sec-lookupmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */ function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = {
        locale: ""
    };
    for(var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++){
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
        if (availableLocale) {
            result.locale = availableLocale;
            if (locale !== noExtensionLocale) {
                result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
            }
            return result;
        }
    }
    result.locale = getDefaultLocale();
    return result;
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js


/**
 * https://tc39.es/ecma402/#sec-bestfitmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */ function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var availableLocaleMap = {};
    var canonicalizedLocaleMap = {};
    var minimizedAvailableLocales = new Set();
    availableLocales.forEach(function(locale) {
        var minimizedLocale = new Intl.Locale(locale).minimize().toString();
        var canonicalizedLocale = Intl.getCanonicalLocales(locale)[0] || locale;
        minimizedAvailableLocaleMap[minimizedLocale] = locale;
        availableLocaleMap[locale] = locale;
        canonicalizedLocaleMap[canonicalizedLocale] = locale;
        minimizedAvailableLocales.add(minimizedLocale);
        minimizedAvailableLocales.add(locale);
        minimizedAvailableLocales.add(canonicalizedLocale);
    });
    var foundLocale;
    for(var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++){
        var l = requestedLocales_1[_i];
        if (foundLocale) {
            break;
        }
        var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
        if (availableLocales.has(noExtensionLocale)) {
            foundLocale = noExtensionLocale;
            break;
        }
        if (minimizedAvailableLocales.has(noExtensionLocale)) {
            foundLocale = noExtensionLocale;
            break;
        }
        var locale = new Intl.Locale(noExtensionLocale);
        var maximizedRequestedLocale = locale.maximize().toString();
        var minimizedRequestedLocale = locale.minimize().toString();
        // Check minimized locale
        if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
            foundLocale = minimizedRequestedLocale;
            break;
        }
        // Lookup algo on maximized locale
        foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    if (!foundLocale) {
        return {
            locale: getDefaultLocale()
        };
    }
    return {
        locale: availableLocaleMap[foundLocale] || canonicalizedLocaleMap[foundLocale] || minimizedAvailableLocaleMap[foundLocale] || foundLocale
    };
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js

/**
 * https://tc39.es/ecma402/#sec-unicodeextensionvalue
 * @param extension
 * @param key
 */ function UnicodeExtensionValue(extension, key) {
    invariant(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-".concat(key, "-");
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
        var start = pos + 4;
        var end = start;
        var k = start;
        var done = false;
        while(!done){
            var e = extension.indexOf("-", k);
            var len = void 0;
            if (e === -1) {
                len = size - k;
            } else {
                len = e - k;
            }
            if (len === 2) {
                done = true;
            } else if (e === -1) {
                end = size;
                done = true;
            } else {
                end = e;
                k = e + 1;
            }
        }
        return extension.slice(start, end);
    }
    searchValue = "-".concat(key);
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
        return "";
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js




/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */ function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
        r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
        r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = {
        locale: "",
        dataLocale: foundLocale
    };
    var supportedExtension = "-u";
    for(var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++){
        var key = relevantExtensionKeys_1[_i];
        invariant(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
        var foundLocaleData = localeData[foundLocale];
        invariant(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
        var keyLocaleData = foundLocaleData[key];
        invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
        var value = keyLocaleData[0];
        invariant(typeof value === "string" || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
        var supportedExtensionAddition = "";
        if (r.extension) {
            var requestedValue = UnicodeExtensionValue(r.extension, key);
            if (requestedValue !== undefined) {
                if (requestedValue !== "") {
                    if (~keyLocaleData.indexOf(requestedValue)) {
                        value = requestedValue;
                        supportedExtensionAddition = "-".concat(key, "-").concat(value);
                    }
                } else if (~requestedValue.indexOf("true")) {
                    value = "true";
                    supportedExtensionAddition = "-".concat(key);
                }
            }
        }
        if (key in options) {
            var optionsValue = options[key];
            invariant(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
            if (~keyLocaleData.indexOf(optionsValue)) {
                if (optionsValue !== value) {
                    value = optionsValue;
                    supportedExtensionAddition = "";
                }
            }
        }
        result[key] = value;
        supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
        var privateIndex = foundLocale.indexOf("-x-");
        if (privateIndex === -1) {
            foundLocale = foundLocale + supportedExtension;
        } else {
            var preExtension = foundLocale.slice(0, privateIndex);
            var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
            foundLocale = preExtension + supportedExtension + postExtension;
        }
        foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
}

;// CONCATENATED MODULE: ./node_modules/next-intl/node_modules/@formatjs/intl-localematcher/lib/index.js


function match(requestedLocales, availableLocales, defaultLocale, opts) {
    var locales = availableLocales.reduce(function(all, l) {
        all.add(l);
        return all;
    }, new Set());
    return ResolveLocale(locales, CanonicalizeLocaleList(requestedLocales), {
        localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
        return defaultLocale;
    }).locale;
}



// EXTERNAL MODULE: ./node_modules/negotiator/index.js
var negotiator = __webpack_require__(652);
var negotiator_default = /*#__PURE__*/__webpack_require__.n(negotiator);
;// CONCATENATED MODULE: ./node_modules/next-intl/dist/src/middleware/resolveLocale.js




function findDomainFromHost(requestHeaders, domains) {
    let host = getHost(requestHeaders);
    // Remove port (easier for local development)
    host = host === null || host === void 0 ? void 0 : host.replace(/:\d+$/, "");
    if (host && domains) {
        return domains.find((cur)=>cur.domain === host);
    }
    return undefined;
}
function getAcceptLanguageLocale(requestHeaders, locales, defaultLocale) {
    let locale;
    const languages = new (negotiator_default())({
        headers: {
            "accept-language": requestHeaders.get("accept-language") || undefined
        }
    }).languages();
    try {
        locale = match(languages, locales, defaultLocale);
    } catch (e) {
    // Invalid language
    }
    return locale;
}
function resolveLocaleFromPrefix({ defaultLocale , localeDetection , locales  }, requestHeaders, requestCookies, pathname) {
    var _a;
    let locale;
    // Prio 1: Use route prefix
    if (pathname) {
        const pathLocale = getLocaleFromPathname(pathname);
        if (locales.includes(pathLocale)) {
            locale = pathLocale;
        }
    }
    // Prio 2: Use existing cookie
    if (!locale && localeDetection && requestCookies) {
        if (requestCookies.has(COOKIE_LOCALE_NAME)) {
            const value = (_a = requestCookies.get(COOKIE_LOCALE_NAME)) === null || _a === void 0 ? void 0 : _a.value;
            if (value && locales.includes(value)) {
                locale = value;
            }
        }
    }
    // Prio 3: Use the `accept-language` header
    if (!locale && localeDetection && requestHeaders) {
        locale = getAcceptLanguageLocale(requestHeaders, locales, defaultLocale);
    }
    // Prio 4: Use default locale
    if (!locale) {
        locale = defaultLocale;
    }
    return locale;
}
function resolveLocaleFromDomain(config, requestHeaders, requestCookies, pathname) {
    const { domains  } = config;
    const localeFromPrefixStrategy = resolveLocaleFromPrefix(config, requestHeaders, requestCookies, pathname);
    // Prio 1: Use a domain
    if (domains) {
        const domain = findDomainFromHost(requestHeaders, domains);
        const hasLocalePrefix = pathname && pathname.startsWith(`/${localeFromPrefixStrategy}`);
        if (domain) {
            return {
                locale: isLocaleSupportedOnDomain(localeFromPrefixStrategy, domain) || hasLocalePrefix ? localeFromPrefixStrategy : domain.defaultLocale,
                domain
            };
        }
    }
    // Prio 2: Use prefix strategy
    return {
        locale: localeFromPrefixStrategy
    };
}
function resolveLocale(config, requestHeaders, requestCookies, pathname) {
    if (config.domains) {
        return resolveLocaleFromDomain(config, requestHeaders, requestCookies, pathname);
    } else {
        return {
            locale: resolveLocaleFromPrefix(config, requestHeaders, requestCookies, pathname)
        };
    }
} //# sourceMappingURL=resolveLocale.js.map

;// CONCATENATED MODULE: ./node_modules/next-intl/dist/src/middleware/middleware.js





const ROOT_URL = "/";
function receiveConfig(config) {
    var _a, _b, _c;
    const result = {
        ...config,
        alternateLinks: (_a = config.alternateLinks) !== null && _a !== void 0 ? _a : true,
        localePrefix: (_b = config.localePrefix) !== null && _b !== void 0 ? _b : "as-needed",
        localeDetection: (_c = config.localeDetection) !== null && _c !== void 0 ? _c : true
    };
    return result;
}
function createMiddleware(config) {
    const configWithDefaults = receiveConfig(config);
    // Currently only in use to enable a seamless upgrade path from the
    // `{createIntlMiddleware} from 'next-intl/server'` API.
    const matcher = config._matcher;
    return function middleware(request) {
        var _a, _b;
        const matches = !matcher || matcher.some((pattern)=>request.nextUrl.pathname.match(pattern));
        if (!matches) return spec_extension_response/* NextResponse.next */.x.next();
        const { domain , locale  } = resolveLocale(configWithDefaults, request.headers, request.cookies, request.nextUrl.pathname);
        const isRoot = request.nextUrl.pathname === ROOT_URL;
        const hasOutdatedCookie = ((_a = request.cookies.get(COOKIE_LOCALE_NAME)) === null || _a === void 0 ? void 0 : _a.value) !== locale;
        const hasMatchedDefaultLocale = domain ? domain.defaultLocale === locale : locale === configWithDefaults.defaultLocale;
        const domainConfigs = ((_b = configWithDefaults.domains) === null || _b === void 0 ? void 0 : _b.filter((curDomain)=>isLocaleSupportedOnDomain(locale, curDomain))) || [];
        const hasUnknownHost = configWithDefaults.domains != null && !domain;
        function getResponseInit() {
            const responseInit = {
                request: {
                    headers: request.headers
                }
            };
            return responseInit;
        }
        function rewrite(url) {
            return spec_extension_response/* NextResponse.rewrite */.x.rewrite(new URL(url, request.url), getResponseInit());
        }
        function next() {
            return spec_extension_response/* NextResponse.next */.x.next(getResponseInit());
        }
        function redirect(url, host) {
            const urlObj = new URL(url, request.url);
            if (domainConfigs.length > 0) {
                if (!host) {
                    const bestMatchingDomain = getBestMatchingDomain(domain, locale, domainConfigs);
                    if (bestMatchingDomain) {
                        host = bestMatchingDomain.domain;
                        if (bestMatchingDomain.defaultLocale === locale && configWithDefaults.localePrefix === "as-needed") {
                            urlObj.pathname = urlObj.pathname.replace(`/${locale}`, "");
                        }
                    }
                }
            }
            if (host) {
                urlObj.host = host;
            }
            return spec_extension_response/* NextResponse.redirect */.x.redirect(urlObj.toString());
        }
        let response;
        if (isRoot) {
            let pathWithSearch = `/${locale}`;
            if (request.nextUrl.search) {
                pathWithSearch += request.nextUrl.search;
            }
            if (hasMatchedDefaultLocale && configWithDefaults.localePrefix === "as-needed") {
                response = rewrite(pathWithSearch);
            } else {
                response = redirect(pathWithSearch);
            }
        } else {
            const pathLocaleCandidate = getLocaleFromPathname(request.nextUrl.pathname);
            const pathLocale = configWithDefaults.locales.includes(pathLocaleCandidate) ? pathLocaleCandidate : undefined;
            const hasLocalePrefix = pathLocale != null;
            let pathWithSearch = request.nextUrl.pathname;
            if (request.nextUrl.search) {
                pathWithSearch += request.nextUrl.search;
            }
            if (hasLocalePrefix) {
                const basePath = pathWithSearch.replace(`/${pathLocale}`, "") || "/";
                if (pathLocale === locale) {
                    if (hasMatchedDefaultLocale && configWithDefaults.localePrefix === "as-needed") {
                        response = redirect(basePath);
                    } else {
                        if (configWithDefaults.domains) {
                            const pathDomain = getBestMatchingDomain(domain, pathLocale, domainConfigs);
                            if ((domain === null || domain === void 0 ? void 0 : domain.domain) !== (pathDomain === null || pathDomain === void 0 ? void 0 : pathDomain.domain) && !hasUnknownHost) {
                                response = redirect(basePath, pathDomain === null || pathDomain === void 0 ? void 0 : pathDomain.domain);
                            } else {
                                response = next();
                            }
                        } else {
                            response = next();
                        }
                    }
                } else {
                    response = redirect(`/${locale}${basePath}`);
                }
            } else {
                if (hasMatchedDefaultLocale && (configWithDefaults.localePrefix === "as-needed" || configWithDefaults.domains)) {
                    response = rewrite(`/${locale}${pathWithSearch}`);
                } else {
                    response = redirect(`/${locale}${pathWithSearch}`);
                }
            }
        }
        if (hasOutdatedCookie) {
            response.cookies.set(COOKIE_LOCALE_NAME, locale, {
                sameSite: "strict"
            });
        }
        if (configWithDefaults.alternateLinks && configWithDefaults.locales.length > 1) {
            response.headers.set("Link", getAlternateLinksHeaderValue(configWithDefaults, request));
        }
        return response;
    };
} //# sourceMappingURL=middleware.js.map

;// CONCATENATED MODULE: ./src/middleware.tsx

/* harmony default export */ const middleware = (createMiddleware({
    // A list of all locales that are supported
    locales: [
        "en-Us",
        "pt-Br"
    ],
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: "pt-Br"
}));
const config = {
    // Skip all paths that should not be internationalized
    matcher: [
        "/((?!api|_next|.*\\..*).*)"
    ]
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(392));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_src/middleware"] = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map
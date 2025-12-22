import { defineComponent, onMounted, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import docsearch from "@docsearch/js";
import { u as useRouter, a as useRoute, b as useData } from "./app.js";
import "./plugin-vue_export-helper.cc2b3d55.js";
import "@vueuse/core";
import "body-scroll-lock";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPAlgoliaSearchBox",
  __ssrInlineRender: true,
  props: {
    algolia: null
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const route = useRoute();
    const { site, localeIndex, lang } = useData();
    const docsearch$ = docsearch.default ?? docsearch;
    onMounted(update);
    watch(localeIndex, update);
    function update() {
      var _a, _b;
      const options = {
        ...props.algolia,
        ...(_a = props.algolia.locales) == null ? void 0 : _a[localeIndex.value]
      };
      const rawFacetFilters = ((_b = options.searchParameters) == null ? void 0 : _b.facetFilters) ?? [];
      const facetFilters = [
        ...(Array.isArray(rawFacetFilters) ? rawFacetFilters : [rawFacetFilters]).filter((f) => !f.startsWith("lang:")),
        `lang:${lang.value}`
      ];
      initialize({
        ...options,
        searchParameters: {
          ...options.searchParameters,
          facetFilters
        }
      });
    }
    function initialize(userOptions) {
      const options = Object.assign({}, userOptions, {
        container: "#docsearch",
        navigator: {
          navigate({ itemUrl }) {
            const { pathname: hitPathname } = new URL(
              window.location.origin + itemUrl
            );
            if (route.path === hitPathname) {
              window.location.assign(window.location.origin + itemUrl);
            } else {
              router.go(itemUrl);
            }
          }
        },
        transformItems(items) {
          return items.map((item) => {
            return Object.assign({}, item, {
              url: getRelativePath(item.url)
            });
          });
        },
        // @ts-expect-error vue-tsc thinks this should return Vue JSX but it returns the required React one
        hitComponent({ hit, children }) {
          return {
            __v: null,
            type: "a",
            ref: void 0,
            constructor: void 0,
            key: void 0,
            props: { href: hit.url, children }
          };
        }
      });
      docsearch$(options);
    }
    function getRelativePath(absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl);
      return pathname.replace(
        /\.html$/,
        site.value.cleanUrls ? "" : ".html"
      ) + hash;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "docsearch" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPAlgoliaSearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

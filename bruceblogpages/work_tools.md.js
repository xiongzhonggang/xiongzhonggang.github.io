import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"一些好用的第三方工具","description":"","frontmatter":{},"headers":[{"level":2,"title":"高德地图","slug":"高德地图","link":"#高德地图","children":[]},{"level":2,"title":"react-player","slug":"react-player","link":"#react-player","children":[]}],"relativePath":"work/tools.md","lastUpdated":1700547143000}');
const _sfc_main = { name: "work/tools.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="一些好用的第三方工具" tabindex="-1">一些好用的第三方工具 <a class="header-anchor" href="#一些好用的第三方工具" aria-hidden="true">#</a></h1><h2 id="高德地图" tabindex="-1">高德地图 <a class="header-anchor" href="#高德地图" aria-hidden="true">#</a></h2><p><a href="https://lbs.amap.com/api/javascript-api/summary" link="card" target="_blank" rel="noreferrer">高德地图 API</a></p><h2 id="react-player" tabindex="-1">react-player <a class="header-anchor" href="#react-player" aria-hidden="true">#</a></h2><p>一款啥都能播放的视频播放器。</p><p><a href="https://www.npmjs.com/package/react-player" link="card" target="_blank" rel="noreferrer">ReactPlayer</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("work/tools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tools = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tools as default
};

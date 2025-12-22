import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/bruceblogpages/assets/dev_error.0433d7a2.png";
const __pageData = JSON.parse('{"title":"vitepress 踩坑记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"运行报错","slug":"运行报错","link":"#运行报错","children":[]}],"relativePath":"fe/vuepress/vitepress.md","lastUpdated":1700547143000}');
const _sfc_main = { name: "fe/vuepress/vitepress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vitepress-踩坑记录" tabindex="-1">vitepress 踩坑记录 <a class="header-anchor" href="#vitepress-踩坑记录" aria-hidden="true">#</a></h1><h2 id="运行报错" tabindex="-1">运行报错 <a class="header-anchor" href="#运行报错" aria-hidden="true">#</a></h2><p>运行 <code>npm run dev</code> 或 <code>npm run build</code> 报 <code>UnhandledPromiseRejectionWarning: Unhandled promise rejection</code> 错误。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="UnhandledPromiseRejectionWarning: Unhandled promise rejection"></p><p>原因：node 版本太低，是 vitepress 最低 node 版本是 16，我使用了 12 版本的。</p><p>解决方法：使用 nvm 切换 node 版本。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fe/vuepress/vitepress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vitepress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vitepress as default
};

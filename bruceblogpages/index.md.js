import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"BruceBlog","text":"一名前端er的学习笔记","tagline":"既往不恋，纵情向前","image":{"src":"/logo.png","alt":"Logo"},"actions":[{"theme":"brand","text":"Getting Started","link":"/fe/html/html"},{"theme":"alt","text":"github.io","link":"https://brucecqm.github.io/bruceblogpages/"},{"theme":"alt","text":"gitee.io","link":"https://brucecai55520.gitee.io/bruceblogpages/"}]},"features":[{"icon":"⚡️","title":"前端知识","details":"HTML、CSS、JavaScript、Vue、React..."},{"icon":"📖","title":"计算机基础","details":"计算机网络、操作系统、数据结构..."},{"icon":"🧰","title":"知也无涯","details":"面试题、资源导航..."}]},"headers":[],"relativePath":"index.md","lastUpdated":1700547143000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

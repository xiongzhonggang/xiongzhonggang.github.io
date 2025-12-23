import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"nvm Node版本控制","description":"","frontmatter":{},"headers":[{"level":2,"title":"初识 nvm","slug":"初识-nvm","link":"#初识-nvm","children":[]},{"level":2,"title":"安装 nvm","slug":"安装-nvm","link":"#安装-nvm","children":[]},{"level":2,"title":"管理node","slug":"管理node","link":"#管理node","children":[]}],"relativePath":"fe/nodejs/nvm_basis.md","lastUpdated":1702350963000}');
const _sfc_main = { name: "fe/nodejs/nvm_basis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nvm-node版本控制" tabindex="-1">nvm Node版本控制 <a class="header-anchor" href="#nvm-node版本控制" aria-hidden="true">#</a></h1><h2 id="初识-nvm" tabindex="-1">初识 nvm <a class="header-anchor" href="#初识-nvm" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">nvm®</p><p>nvm® 能够在开发项目时候，快速切换node版本；</p><p>nvm® 是一个管理Node版本的工具；</p></div><p><strong>nvm是什么？</strong></p><p>nvm（node.js version management）是一个nodejs的版本管理工具，通过它可以安装和切换不同版本的nodejs。</p><p><strong>我：so，为什么要使用它，本地安装好一个node，为什么要切换版本？</strong></p><p>答：不同项目所依赖的node版本可能不同，比如，我目前手上项目使用的是vue2进行开发的，Node版本是14.19.1，后面另外一个项目是用的Vue3加Vite ,Vite 构建项目Node版本必须在18版本以上，如果是自己构建项目工程的话，需要自己删除当前版本node,然后去安装18以上版本Node这样来回切换非常麻烦， nvm非常好的帮我们解决这个问题，可以实现快速版本切换；</p><h2 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-hidden="true">#</a></h2><p>进入官网，选择<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm-setup.zip</a>进行下载</p><ul><li>nvm-noinstall.zip：绿色免安装版，但使用时需进行配置，很麻烦。</li><li>nvm-setup.zip：安装版，傻瓜式操作，舒服！推荐使用！本文以此为例安装。</li></ul><p>官网下载非常非常慢，因此，本文贴心提供百度云下载链接</p><p>百度云备用链接<a href="https://pan.baidu.com/s/1meNgScV99rchEb_CM6BLdw" target="_blank" rel="noreferrer">nvm-setup.zip</a> 提取码：xz04</p><p>1、点击下载的nvm-setup.exe程序，接受协议，点击next，一步一步安装就行；</p><h2 id="管理node" tabindex="-1">管理node <a class="header-anchor" href="#管理node" aria-hidden="true">#</a></h2><p><strong>安装指定版本的node</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">nvm install 12.18.3</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>使用特定版本</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">nvm use 11.13.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>卸载特定版本</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">nvm uninstall 11.13.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>详情参考<a href="https://juejin.cn/post/7174583911693942792" target="_blank" rel="noreferrer">掘金</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fe/nodejs/nvm_basis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nvm_basis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nvm_basis as default
};

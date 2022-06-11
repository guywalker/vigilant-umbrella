import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, pushScopeId, popScopeId, createTextVNode, Fragment, createVNode, unref, withCtx } from "vue";
import { RouterLink, RouterView } from "vue-router";
var _imports_0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuNzYgMjI2LjY5IiAgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTYxLjA5Ni4wMDFsLTMwLjIyNSA1Mi4zNTFMMTAwLjY0Ny4wMDFILS4wMDVsMTMwLjg3NyAyMjYuNjg4TDI2MS43NDkuMDAxeiIgZmlsbD0iIzQxYjg4MyIvPjxwYXRoIGQ9Ik0xNjEuMDk2LjAwMWwtMzAuMjI1IDUyLjM1MUwxMDAuNjQ3LjAwMUg1Mi4zNDZsNzguNTI2IDEzNi4wMUwyMDkuMzk4LjAwMXoiIGZpbGw9IiMzNDQ5NWUiLz48L3N2Zz4=";
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "h1[data-v-9e7c8828]{font-weight:500;font-size:2.6rem;top:-10px}h3[data-v-9e7c8828]{font-size:1.2rem}.greetings h1[data-v-9e7c8828],.greetings h3[data-v-9e7c8828]{text-align:center}@media (min-width: 1024px){.greetings h1[data-v-9e7c8828],.greetings h3[data-v-9e7c8828]{text-align:left}}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-9e7c8828"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "greetings" };
const _hoisted_2$1 = { class: "green" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h3", null, [
  /* @__PURE__ */ createTextVNode(" You\u2019ve successfully created a project with "),
  /* @__PURE__ */ createElementVNode("a", {
    target: "_blank",
    href: "https://vitejs.dev/"
  }, "Vite"),
  /* @__PURE__ */ createTextVNode(" + "),
  /* @__PURE__ */ createElementVNode("a", {
    target: "_blank",
    href: "https://vuejs.org/"
  }, "Vue 3"),
  /* @__PURE__ */ createTextVNode(". What's next? ")
], -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  props: {
    msg: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("h1", _hoisted_2$1, toDisplayString(__props.msg), 1),
        _hoisted_3$1
      ]);
    };
  }
});
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9e7c8828"]]);
var App_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ":root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64)}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1);--section-gap: 160px}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}*,*:before,*:after{box-sizing:border-box;margin:0;position:relative;font-weight:400}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#app{max-width:1280px;margin:0 auto;padding:2rem;font-weight:400}header{line-height:1.5;max-height:100vh}.logo{display:block;margin:0 auto 2rem}a,.green{text-decoration:none;color:#00bd7e;transition:.4s}@media (hover: hover){a:hover{background-color:#00bd7e33}}nav{width:100%;font-size:12px;text-align:center;margin-top:2rem}nav a.router-link-exact-active{color:var(--color-text)}nav a.router-link-exact-active:hover{background-color:transparent}nav a{display:inline-block;padding:0 1rem;border-left:1px solid var(--color-border)}nav a:first-of-type{border:0}@media (min-width: 1024px){body{display:flex;place-items:center}#app{display:grid;grid-template-columns:1fr 1fr;padding:0 2rem}header{display:flex;place-items:center;padding-right:calc(var(--section-gap) / 2)}header .wrapper{display:flex;place-items:flex-start;flex-wrap:wrap}.logo{margin:0 2rem 0 0}nav{text-align:left;margin-left:-1rem;font-size:1rem;padding:1rem 0;margin-top:1rem}}\n")();
const _hoisted_1 = /* @__PURE__ */ createElementVNode("img", {
  alt: "Vue logo",
  class: "logo",
  src: _imports_0,
  width: "125",
  height: "125"
}, null, -1);
const _hoisted_2 = { class: "wrapper" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("About");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("header", null, [
          _hoisted_1,
          createElementVNode("div", _hoisted_2, [
            createVNode(HelloWorld, { msg: "You did it!" }),
            createElementVNode("nav", null, [
              createVNode(unref(RouterLink), { to: "/" }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }),
              createVNode(unref(RouterLink), { to: "/about" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createVNode(unref(RouterView))
      ], 64);
    };
  }
});
export { _sfc_main as default };

import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=cd77f220"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=cd77f220"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=cd77f220"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.tsx?t=1691252281187";
import "/src/index.css";
import { I18nextProvider } from "/node_modules/.vite/deps/react-i18next.js?v=cd77f220";
import i18n from "/node_modules/.vite/deps/i18next.js?v=cd77f220";
import { initReactI18next } from "/node_modules/.vite/deps/react-i18next.js?v=cd77f220";
import translationEN from "/src/lang/en.json?t=1691252299457&import";
import translationHK from "/src/lang/hk.json?t=1691252258425&import";
import translationJP from "/src/lang/jp.json?t=1691245365109&import";
import translationKR from "/src/lang/kr.json?t=1691244158865&import";
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=cd77f220";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    hk: {
      translation: translationHK
    },
    jp: {
      translation: translationJP
    },
    kr: {
      translation: translationKR
    }
  },
  lng: "en",
  // 默认语言
  fallbackLng: "en",
  // 当用户选择的语言不可用时使用的语言
  interpolation: {
    escapeValue: false
    // 不对翻译内容进行转义
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "/Users/guang/Desktop/project/soul/soul/src/main.tsx",
  lineNumber: 40,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "/Users/guang/Desktop/project/soul/soul/src/main.tsx",
  lineNumber: 39,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "/Users/guang/Desktop/project/soul/soul/src/main.tsx",
  lineNumber: 38,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "/Users/guang/Desktop/project/soul/soul/src/main.tsx",
  lineNumber: 37,
  columnNumber: 62
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc0NRO0FBdENSLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxTQUFTQyx1QkFBdUI7QUFDaEMsT0FBT0MsVUFBVTtBQUNqQixTQUFTQyx3QkFBd0I7QUFDakMsT0FBT0MsbUJBQW1CO0FBQzFCLE9BQU9DLG1CQUFtQjtBQUMxQixPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0MsbUJBQW1CO0FBQzFCLFNBQVNDLHFCQUFxQjtBQUU5Qk4sS0FBS08sSUFBSU4sZ0JBQWdCLEVBQUVPLEtBQUs7QUFBQSxFQUM5QkMsV0FBVztBQUFBLElBQ1RDLElBQUk7QUFBQSxNQUNGQyxhQUFhVDtBQUFBQSxJQUNmO0FBQUEsSUFDQVUsSUFBSTtBQUFBLE1BQ0ZELGFBQWFSO0FBQUFBLElBQ2Y7QUFBQSxJQUNBVSxJQUFJO0FBQUEsTUFDRkYsYUFBYVA7QUFBQUEsSUFDZjtBQUFBLElBQ0FVLElBQUk7QUFBQSxNQUNGSCxhQUFhTjtBQUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0FVLEtBQUs7QUFBQTtBQUFBLEVBQ0xDLGFBQWE7QUFBQTtBQUFBLEVBQ2JDLGVBQWU7QUFBQSxJQUNiQyxhQUFhO0FBQUE7QUFBQSxFQUNmO0FBQ0YsQ0FBQztBQUNEckIsU0FBU3NCLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFFLEVBQUVDLE9BQ3BELHVCQUFDLGlCQUNDLGlDQUFDLE1BQU0sWUFBTixFQUNDLGlDQUFDLG1CQUFnQixNQUNmLGlDQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1BLENBQ0YiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiSTE4bmV4dFByb3ZpZGVyIiwiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJ0cmFuc2xhdGlvbkVOIiwidHJhbnNsYXRpb25ISyIsInRyYW5zbGF0aW9uSlAiLCJ0cmFuc2xhdGlvbktSIiwiQnJvd3NlclJvdXRlciIsInVzZSIsImluaXQiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiaGsiLCJqcCIsImtyIiwibG5nIiwiZmFsbGJhY2tMbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAudHN4XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgSTE4bmV4dFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB0cmFuc2xhdGlvbkVOIGZyb20gXCJAL2xhbmcvZW4uanNvblwiO1xuaW1wb3J0IHRyYW5zbGF0aW9uSEsgZnJvbSBcIkAvbGFuZy9oay5qc29uXCI7XG5pbXBvcnQgdHJhbnNsYXRpb25KUCBmcm9tIFwiQC9sYW5nL2pwLmpzb25cIjtcbmltcG9ydCB0cmFuc2xhdGlvbktSIGZyb20gXCJAL2xhbmcva3IuanNvblwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmkxOG4udXNlKGluaXRSZWFjdEkxOG5leHQpLmluaXQoe1xuICByZXNvdXJjZXM6IHtcbiAgICBlbjoge1xuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRU4sXG4gICAgfSxcbiAgICBoazoge1xuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uSEssXG4gICAgfSxcbiAgICBqcDoge1xuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uSlAsXG4gICAgfSxcbiAgICBrcjoge1xuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uS1IsXG4gICAgfSxcbiAgfSxcbiAgbG5nOiBcImVuXCIsIC8vIOm7mOiupOivreiogFxuICBmYWxsYmFja0xuZzogXCJlblwiLCAvLyDlvZPnlKjmiLfpgInmi6nnmoTor63oqIDkuI3lj6/nlKjml7bkvb/nlKjnmoTor63oqIBcbiAgaW50ZXJwb2xhdGlvbjoge1xuICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8g5LiN5a+557+76K+R5YaF5a656L+b6KGM6L2s5LmJXG4gIH0sXG59KTtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpISkucmVuZGVyKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxJMThuZXh0UHJvdmlkZXIgaTE4bj17aTE4bn0+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvSTE4bmV4dFByb3ZpZGVyPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKTtcbiJdLCJmaWxlIjoiL1VzZXJzL2d1YW5nL0Rlc2t0b3AvcHJvamVjdC9zb3VsL3NvdWwvc3JjL21haW4udHN4In0=
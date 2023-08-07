import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/lang/en.json";
import translationHK from "@/lang/hk.json";
import translationJP from "@/lang/jp.json";
import translationKR from "@/lang/kr.json";
import { BrowserRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    hk: {
      translation: translationHK,
    },
    jp: {
      translation: translationJP,
    },
    kr: {
      translation: translationKR,
    },
  },
  lng: "en", // 默认语言
  fallbackLng: "en", // 当用户选择的语言不可用时使用的语言
  interpolation: {
    escapeValue: false, // 不对翻译内容进行转义
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

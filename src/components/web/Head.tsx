import { HeadBox, HeadLeftBox, Logo, SelectorItem } from "@/style";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import Selector from "./Selector";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react-refresh/only-export-components
export enum Language {
  en = "en",
  jp = "jp",
  kr = "kr",
  hk = "hk",
}
type LanguageList = {
  name: string;
  value: Language;
}[];
function Head() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(Language.en);
  const languageList: LanguageList = [
    {
      name: "English",
      value: Language.en,
    },
    {
      name: "日本語",
      value: Language.jp,
    },
    {
      name: "한국어",
      value: Language.kr,
    },
    {
      name: "繁体中文",
      value: Language.hk,
    },
  ];
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  return (
    <HeadBox>
      <HeadLeftBox>
        <Logo src={logo} />
        <Selector
          value={language}
          text={
            languageList.find((item) => {
              return item.value === language;
            })?.name || ""
          }
        >
          {languageList.map((item, index) => {
            return (
              <SelectorItem
                key={index}
                onClick={() => {
                  setLanguage(item.value);
                  changeLanguage(item.value);
                }}
              >
                {item.name}
              </SelectorItem>
            );
          })}
        </Selector>
      </HeadLeftBox>
    </HeadBox>
  );
}

export default Head;

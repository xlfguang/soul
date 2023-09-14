import {
  ConnectWallet,
  HeadBox,
  HeadLeftBox,
  HeadRightBox,
  Logo,
  SelectorItem,
} from "@/style";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import Selector from "./Selector";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneHead from "../phone/PhoneHead";

// eslint-disable-next-line react-refresh/only-export-components
export enum Language {
  en = "en",
  jp = "jp",
  kr = "kr",
  hk = "hk",
}
export type LanguageList = {
  name: string;
  value: Language;
}[];

function Head(props: { connectWallet: () => void; addressName: any }) {
  const { i18n, t } = useTranslation();
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
  const routerList = [
    {
      path: "/",
      name: t("index"),
    },
    {
      path: "/introduction",
      name: "introduction",
    },
    {
      path: "/NFT",
      name: t("about"),
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  // 获取当前路由路径 来给.link 加上activeLink 的类名

  return (
    <>
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
        <HeadRightBox>
          {routerList.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  location.pathname === item.path ? "link activeLink" : "link"
                }
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.name}
              </div>
            );
          })}
          {location.pathname === "/NFT" && (
            <div
              className="link"
              onClick={() => {
                window.open("https://soulnft.gitbook.io/soulnft/");
              }}
            >
              {t("whitepaper")}
            </div>
          )}

          {location.pathname === "/NFT" && (
            <ConnectWallet
              onClick={() => {
                props.connectWallet();
              }}
            >
              {props.addressName}
            </ConnectWallet>
          )}
        </HeadRightBox>
      </HeadBox>
      <PhoneHead
        connectWallet={function (): void {
          props.connectWallet();
        }}
        addressName={props.addressName}
      ></PhoneHead>
    </>
  );
}

export default Head;

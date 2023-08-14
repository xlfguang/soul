import { PhoneHeadBox } from "@/style/phone";
import PhoneLogo from "@/assets/images/phoneLogo.png";
import download from "@/assets/images/dw2.png";
import Drawer from "../Drawer";
import { useState } from "react";
import { ConnectWallet, DrawerBOX, FlexBox, LangBOX, PagesBox } from "@/style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LanguageList, Language } from "../web/Head";

function PhoneHead(props: { connectWallet: () => void,addressName:any }) {
  const { i18n, t } = useTranslation();
  const routerList = [
    {
      path: "/",
      name: t("index"),
    },

    {
      path: "/NFT",
      name: t("about"),
    },
  ];
  const [drawerShow, setDrawerShow] = useState(false);
  const navigate = useNavigate();
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
    <>
      <PhoneHeadBox>
        <img className="headlogo" src={PhoneLogo} alt="" />
        <FlexBox>
          <ConnectWallet
            onClick={() => {
              props.connectWallet();
            }}
          >
            {props.addressName}
          </ConnectWallet>
          <img
            className="download"
            src={download}
            alt=""
            onClick={() => {
              setDrawerShow(true);
            }}
          />
        </FlexBox>
      </PhoneHeadBox>
      <Drawer
        isOpen={drawerShow}
        onClose={function (): void {
          setDrawerShow(false);
        }}
      >
        <DrawerBOX>
          <PagesBox>
            {routerList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    location.pathname === item.path ? "link activeLink" : "link"
                  }
                  onClick={() => {
                    navigate(item.path);
                    setDrawerShow(false);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </PagesBox>
          <LangBOX>
            {languageList.map((item, index) => {
              return (
                <div
                  className="langs"
                  key={index}
                  onClick={() => {
                    changeLanguage(item.value);
                    setDrawerShow(false);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </LangBOX>
        </DrawerBOX>
      </Drawer>
    </>
  );
}

export default PhoneHead;

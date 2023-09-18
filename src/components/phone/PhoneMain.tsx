import { PhoneContent, PhoneDownloadBtn, PhoneMainBox } from "@/style/phone";
import React from "react";
import { useTranslation } from "react-i18next";

function PhoneMain() {
  const { t } = useTranslation();
  return (
    <PhoneMainBox>
      <PhoneContent>
        <h1>To build a“Soul”cial Metaverse for Young Generations</h1>
        <p>
          Embracing the Value and Experience of Building Genuine Connections
        </p>
      </PhoneContent>
      <PhoneDownloadBtn
        onClick={() => {
          // 判断用户是ios还是安卓
          const u = navigator.userAgent;
          const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
          window.open(
            isAndroid
              ? "https://play.google.com/store/apps/details?id=com.soul.android.international"
              : "https://apps.apple.com/jp/app/soul/id1472322409"
          );
        }}
        isabsolute={true}
      >
        {t("download")}
      </PhoneDownloadBtn>
    </PhoneMainBox>
  );
}

export default PhoneMain;

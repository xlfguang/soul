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
      <PhoneDownloadBtn isabsolute={true}>{t("download")}</PhoneDownloadBtn>
    </PhoneMainBox>
  );
}

export default PhoneMain;

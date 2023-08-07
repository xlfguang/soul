import { PhoneBox } from "@/style";
import DisplayContainer from "@/components/web/DisplayContainer";
import { useState } from "react";
import PhoneMain from "@/components/phone/PhoneMain";
import PhoneHead from "@/components/phone/PhoneHead";
import { useTranslation } from "react-i18next";
import PhoneContainer from "@/components/phone/PhoneContainer";
import index1 from "@/assets/images/index1.png";
import index2 from "@/assets/images/index2.png";
import index3 from "@/assets/images/index3.png";
import index4 from "@/assets/images/index4.png";
import downloadIcon from "@/assets/images/dow.png";
import { DownloadIcon } from "@/style/phone";
function Web() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  return (
    <PhoneBox>
      <PhoneHead></PhoneHead>
      <DisplayContainer
        top={`-${index * 100}vh`}
        setDirection={(e) => {
          console.log(e);
          if (e == "up") {
            if (index > 0) {
              setIndex(index - 1);
            }
          } else if (e == "down") {
            if (index < 4) {
              setIndex(index + 1);
            }
          }
        }}
      >
        <PhoneMain></PhoneMain>
        <PhoneContainer imgSrc={index1} title={t("index1title")} />
        <PhoneContainer imgSrc={index2} title={t("index2title")} />
        <PhoneContainer imgSrc={index3} title={t("index3title")} />
        <PhoneContainer imgSrc={index4} title={t("index4title")} />
      </DisplayContainer>
      <DownloadIcon>
        <img src={downloadIcon} alt="" />
      </DownloadIcon>
    </PhoneBox>
  );
}

export default Web;

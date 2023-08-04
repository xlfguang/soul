import { PhoneContainerBox, PhoneDownloadBtn } from "@/style/phone";
import { useTranslation } from "react-i18next";
interface PhoneContainerProps {
  title: string;
  imgSrc: string;
}

function PhoneContainer(props: PhoneContainerProps) {
  const { t } = useTranslation();
  return (
    <PhoneContainerBox>
      <div className="title">{props.title}</div>
      <PhoneDownloadBtn isabsolute={false}>{t("download")}</PhoneDownloadBtn>

      <div
        className="cover-img"
        style={{
          backgroundImage: `url(${props.imgSrc})`,
        }}
      ></div>
    </PhoneContainerBox>
  );
}

export default PhoneContainer;

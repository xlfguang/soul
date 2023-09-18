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
        isabsolute={false}
      >
        {t("download")}
      </PhoneDownloadBtn>

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

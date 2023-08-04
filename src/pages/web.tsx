import Container from "@/components/web/Container";
import Head from "@/components/web/Head";
import Main from "@/components/web/Main";
import { PCBox } from "@/style";
import index1 from "@/assets/images/index1.png";
import index2 from "@/assets/images/index2.png";
import index3 from "@/assets/images/index3.png";
import index4 from "@/assets/images/index4.png";
import { useTranslation } from "react-i18next";
import DisplayContainer from "@/components/web/DisplayContainer";
import Locator from "@/components/web/Locator";
import { useState } from "react";
function Web() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  return (
    <PCBox>
      <Head></Head>
      <DisplayContainer
        top={`-${index * 100}vh`}
        setDirection={(e) => {
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
        <Main></Main>
        <Container
          type="left"
          imgSrc={index1}
          title={t("index1title")}
          content={t("index1content")}
        />
        <Container
          type="right"
          imgSrc={index2}
          title={t("index2title")}
          content={t("index2content")}
        />
        <Container
          type="left"
          imgSrc={index3}
          title={t("index3title")}
          content={t("index3content")}
        />
        <Container
          type="right"
          imgSrc={index4}
          title={t("index4title")}
          content={t("index4content")}
        />
      </DisplayContainer>
      <Locator
        index={index}
        setIndex={(index: number) => {
          console.log(index);

          setIndex(index);
        }}
      ></Locator>
    </PCBox>
  );
}

export default Web;

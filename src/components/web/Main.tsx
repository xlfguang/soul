import { FlexBox } from "@/style";
import { Content, DownloadBtn, Mainbox, Wrapper } from "@/style/mianstyle";
import ios from "@/assets/images/ios_btn.png";
import android from "@/assets/images/android_btn.png";
function Main() {
  return (
    <Mainbox>
      <Wrapper>
        <Content>
          <h2>To build a“Soul”cial Metaverse for Young Generations</h2>
          <p>
            Embracing the Value and Experience of Building Genuine Connections
          </p>
          <FlexBox>
            <a
              href="https://apps.apple.com/jp/app/soul/id1472322409"
              target="_balck"
            >
              <DownloadBtn imgurl={ios} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.soul.android.international"
              target="_balck"
            >
              <DownloadBtn imgurl={android} />
            </a>
          </FlexBox>
        </Content>
      </Wrapper>
    </Mainbox>
  );
}

export default Main;

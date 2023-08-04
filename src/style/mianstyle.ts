import styled from "styled-components";
import backbg from "@/assets/images/web_bg.png";
export interface DownloadBtnPorps {
  imgurl: string;
}
export const Mainbox = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url(${backbg}) no-repeat 50%/1137px 755px;
`;
export const Content = styled.div`
  width: 637px;
  height: 251px;
  padding: 26px;
  margin: 0 auto;
  background: linear-gradient(0deg, #161240, #161240), #1b1751;
  border-radius: 20px;
  /* 下面的h2 */
  h2 {
    padding-bottom: 16px;
    font-size: 34px;
    line-height: 45px;
    font-weight: 700;
    color: #fff;
    text-align: left;
  }
  p {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #fff;
    opacity: 0.6;
    text-align: left;
  }
`;
// 接收一个图片资源作为参数
export const DownloadBtn = styled.button<DownloadBtnPorps>`
  display: inline-block;
  width: 152px;
  height: 48px;
  background: url(${(props) => props.imgurl}) no-repeat;
  background-size: 152px 48px;
  margin-right: 22px;
`;

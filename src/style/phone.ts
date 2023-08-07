import styled from "styled-components";
import { keyframes } from "styled-components";
import backbg from "@/assets/images/web_mobile_bg.png";
export const SwiperContainer = styled.div``;
export const PhoneMainBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 1.6vw;
    left: 1.6vw;
    right: 1.6vw;
    bottom: 0;
    content: "";
    z-index: 0;
    opacity: 0.3;
    background: url(${backbg}) no-repeat top/100% auto;
  }
`;
export const PhoneContent = styled.div`
  width: 97.06667vw;
  height: 31.73333vw;
  background: linear-gradient(0deg, #161240, #161240), #1b1751;
  border-radius: 2.66667vw;
  margin: 50.4vw auto 0;
  padding: 3.73333vw 2.8vw 0 4vw;
  h1 {
    font-weight: 700;
    font-size: 5.33333vw;
    line-height: 7.06667vw;
    color: #fff;
    margin-bottom: 2.13333vw;
  }
  p {
    font-weight: 500;
    font-size: 2.6738vw;
    line-height: 3.73333vw;
    color: #fff;
    opacity: 0.6;
  }
`;
export const PhoneDownloadBtn = styled.button<{ isabsolute: boolean }>`
  border: none;

  width: 51.26667vw;
  height: 11.06667vw;
  display: block;
  position: ${(props) => (props.isabsolute ? "absolute" : "")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9;
  border-radius: 20px;
  color: #000;
  background-image: linear-gradient(
    90deg,
    rgba(37, 212, 208, 1) 0%,
    rgba(0, 255, 255, 1) 100%
  );
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
`;
export const PhoneContainerBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .title {
    position: relative;
    margin-top: 20vw;
    font-size: 6.4vw;
    color: #25d4d0;
    text-align: center;
    z-index: 2;
    line-height: 8vw;
    letter-spacing: 0.17px;
    padding: 0 8.53333vw;
    margin-bottom: 2.13333vw;
  }
  .cover-img {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 63.73333vw;
    height: 116vw;
    margin-left: -32vw;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
// 写个动画 往下运动并且淡出
const move = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100%{
    opacity: 0;
    transform: translateY(50%);
  }

`;
export const DownloadIcon = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8.53333vw;
  /* 动画是结束就从头再来 */
  img {
    width: 8.53333vw;
    height: 8.53333vw;
    animation: ${move} 1.5s linear infinite;
  }
`;
export const PhoneHeadBox = styled.div`
  height: 16.8vw;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 4.26667vw;
  background: rgba(22, 18, 64, 0.8);
  z-index: 100;
  .headlogo {
    width: 12.8vw;
    height: 8.53333vw;
  }
  .download {
    width: 8.53333vw;
    height: 8.53333vw;
    margin-right: 17px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

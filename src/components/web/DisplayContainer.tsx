import { DisplayContainerBox } from "@/style";
import { useEffect, useState } from "react";

function DisplayContainer(props: {
  children: JSX.Element[] | JSX.Element;
  top: string;
  setDirection: (direction: "up" | "down" | "none") => void;
}) {
  const [direction, setDirection] = useState<"up" | "down" | "none">("none");
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    if (e.deltaY > 0) {
      setDirection("down");
    } else if (e.deltaY < 0) {
      setDirection("up");
    }
    setScrollTimer(
      setTimeout(() => {
        setDirection("none");
        // 在这里执行滚轮滑动完成后的操作
      }, 100)
    );
  };
  useEffect(() => {
    props.setDirection(direction);
  }, [direction]);
  //   给handleScroll 加个节流函数

  return (
    <DisplayContainerBox onWheel={handleScroll} top={props.top}>
      {props.children}
    </DisplayContainerBox>
  );
}

export default DisplayContainer;

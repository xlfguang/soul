import { useState } from "react";
import { Language } from "./Head";
import { SelectorBox, SelectorItemBox } from "@/style";
interface SelectorProps {
  value: Language;
  text: string;
  children: JSX.Element[];
}
function Selector(_props: SelectorProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SelectorBox
        onMouseEnter={() => {
          setShow(true);
        }}
      >
        {_props.text}
        <div className="dw"></div>
      </SelectorBox>
      {show && (
        <SelectorItemBox
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          {_props.children}
        </SelectorItemBox>
      )}
    </div>
  );
}

export default Selector;

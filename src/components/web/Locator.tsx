import { LocatorBox, LocatorItem } from "@/style";

function Locator(props: { index: number; setIndex: (index: number) => void }) {
  return (
    <LocatorBox>
      {[0, 1, 2, 3, 4].map((_item, index) => {
        return (
          <LocatorItem
            key={index}
            onClick={() => props.setIndex(index)}
            active={props.index === index}
          ></LocatorItem>
        );
      })}
    </LocatorBox>
  );
}

export default Locator;

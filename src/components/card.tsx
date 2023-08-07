import { CardBox, CardItem } from "@/style";
import React from "react";
interface CardProps {
  cardList: {
    leftText: string;
    rightText: string;
  }[];
}
function card(props: CardProps) {
  return (
    <CardBox>
      {props.cardList.map((item, index) => {
        return (
          <CardItem key={index}>
            <div className="left">{item.leftText}</div>
            <div className="right">{item.rightText}</div>
          </CardItem>
        );
      })}
    </CardBox>
  );
}

export default card;

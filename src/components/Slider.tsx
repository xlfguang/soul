import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SliderInput = styled.input`
  width: 100%;
  margin-right: 10px;
`;
interface SliderProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: (value: number) => void;
}
const SliderValue = styled.span``;

const Slider = (props: SliderProps) => {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = (event: { target: { value: string } }) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <SliderContainer>
      <SliderInput
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={value}
        onChange={handleChange}
      />
      <SliderValue>{value}</SliderValue>
    </SliderContainer>
  );
};

export default Slider;

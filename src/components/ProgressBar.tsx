import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ProgressBarFillProps {
  progress: number;
}
interface ProgressBarProps {
  value: number;
  maxValue: number;
}

const ProgressBarContainer = styled.div`
  position: relative; /* Needed for positioning the text */
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  position: relative; /* Needed for positioning the text */
  height: 100%;
  width: ${(props) => props.progress}%;
  background: linear-gradient(
    to right,
    rgb(121, 63, 238),
    rgb(84, 205, 216),
    #25d4d0
  );
  border-radius: 10px 0 0 10px;
`;

const PercentageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
`;

const ProgressBar = (props: ProgressBarProps) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const calculatedWidth = (props.value / props.maxValue) * 100;
    setProgressWidth(calculatedWidth);
  }, [props.value, props.maxValue]);

  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progressWidth}>
        <PercentageText>{Math.round(progressWidth)}%</PercentageText>
      </ProgressBarFill>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

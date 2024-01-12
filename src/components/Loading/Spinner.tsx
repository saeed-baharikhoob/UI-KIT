import Provider from "../../Theme/Provider";
import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { getColors } from "./utils";

const offset: number = 187;
const duration: string = "1.4s";
let colorList = keyframes`
  0% {
    stroke: #4285F4;
  }
  25% {
    stroke: #DE3E35;
  }
  50% {
    stroke: #F7C223;
  }
  75% {
    stroke: #1B9A59;
  }
  100% {
    stroke: #4285F4;
  }
`;

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: ${offset};
  }
  50% {
    stroke-dashoffset: ${offset / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${offset};
    transform: rotate(450deg);
  }
`;

interface PathProps {
  colorList?: [];
}

const Path = styled.svg<PathProps>`
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${duration} ease-in-out infinite,
    ${(props) => (props?.colorList ? props?.colorList : colorList)} ${duration}
      ease-in-out infinite;
`;

type SpinnerStyledProps = {
  width?: number;
  height?: number;
};

const SpinnerStyled = styled.div<SpinnerStyledProps>`
  animation: ${rotator} ${duration} linear infinite;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
type LoadingSpinnerProps = {
  width?: number;
  height?: number;
  colorList?: any;
};

function LoadingSpinner({ width, height, colorList }: LoadingSpinnerProps) {
  return (
    <SpinnerStyled width={width} height={height}>
      <Path
        colorList={colorList}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        className="path"
      >
        <circle cx="33" cy="33" r="30" strokeWidth="6" fill="none" />
      </Path>
    </SpinnerStyled>
  );
}

type SpinnerProps = {
  width?: number;
  height?: number;
  colors: string[];
};
export const Spinner = ({ width, height, colors }: SpinnerProps) => {
  let colorListNew = getColors(colors);

  return (
    <Provider>
      <LoadingSpinner width={width} height={height} colorList={colorListNew} />
    </Provider>
  );
};
Spinner.defaultProps = {
  height: 24,
  width: 24,
  colors: [],
};

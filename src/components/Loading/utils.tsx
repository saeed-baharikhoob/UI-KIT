import { keyframes } from "@emotion/react";

export const getColors = (colors: string[]) => {
  let colorListNew = keyframes``;

  if (colors.length > 0) {
    if (colors.length === 1) {
      colors.map((item) => {
        colorListNew = keyframes`
                  0% {
                    stroke: ${item};
                  }
                  100% {
                    stroke: ${item};
                  }
                `;
      });
    }
    if (colors.length === 2) {
      colorListNew = keyframes`
              0% {
                stroke: ${colors[0]};
              }
              80% {
                stroke: ${colors[1]};
              }
            `;
    }
    if (colors.length === 3) {
      colorListNew = keyframes`
              0% {
                stroke: ${colors[0]};
              }
              25% {
                stroke: ${colors[0]};
              }
              50% {
                stroke: ${colors[1]};
              }
              70% {
                stroke: ${colors[1]};
              }
              71% {
                stroke: ${colors[2]};
              }
              100% {
                stroke: ${colors[2]};
              }
            `;
    }
    if (colors.length === 4) {
      colorListNew = keyframes`
              0% {
                stroke: ${colors[0]};
              }
              25% {
                stroke: ${colors[1]};
              }
              50% {
                stroke: ${colors[2]};
              }
              75% {
                stroke: ${colors[3]};
              }
              100% {
                stroke: ${colors[3]};
              }
            `;
    }
    if (colors.length === 5) {
      colorListNew = keyframes`
              0% {
                stroke: ${colors[0]};
              }
              25% {
                stroke: ${colors[1]};
              }
              50% {
                stroke: ${colors[2]};
              }
              75% {
                stroke: ${colors[3]};
              }
              100% {
                stroke: ${colors[4]};
              }
            `;
    }
  }

  return colorListNew;
};

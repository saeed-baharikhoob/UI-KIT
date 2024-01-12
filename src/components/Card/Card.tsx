import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface CardProps {
  background?: string | string[];
  showShadow?: boolean;
  borderRadius?: number;
  minHeight?: number;
  children: ReactNode;
}

const CardWrapper = styled.div<{
  background: string | string[];
  showShadow: boolean;
  borderRadius: number;
  minHeight: number;
}>`
  background: ${(props) =>
    Array.isArray(props.background)
      ? `linear-gradient(to bottom right, ${props.background.join(", ")})`
      : props.background};
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) =>
    props.showShadow ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
  padding: 16px;
  width: 100%;
  min-height: ${(props) => props.minHeight}px;
`;

export const Card = ({
  background = "#fff",
  showShadow = true,
  borderRadius = 20,
  minHeight = 200,
  children,
}: CardProps) => {
  return (
    <CardWrapper
      background={background}
      showShadow={showShadow}
      borderRadius={borderRadius}
      minHeight={minHeight}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { convertToDisableColor, NormalizeColor } from "./utils";

interface AccordionProps {
  title: string;
  arrowColor?: "white" | "black";
  arrowPosition?: "start" | "end";
  titleSize?: number;
  titleColor?: string;
  titleMarginTop?: number;
  radius?: number;
  headerBackgroundColor?: string;
  headerDisableColor?: string;
  headerHoverColor?: string;
  expanded?: boolean;
  disabled?: boolean;

  onChange?(): void;

  children: React.ReactNode;
}

type ComponentProps = {
  className?: string;
};
const ArrowIcon: React.FC<ComponentProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 330.002 330.002"
    strokeWidth="9.570058"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="XMLID_103_"
        d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
      ></path>{" "}
    </g>
  </svg>
);
const getArrowColor = (arrowColor: string, disabled: boolean) => {
  let color = "#000000";
  if (disabled) {
    if (arrowColor === "black") color = convertToDisableColor("#000000");
    if (arrowColor === "white") color = convertToDisableColor("#ffffff");
  } else {
    if (arrowColor === "black") color = "#000000";
    if (arrowColor === "white") color = "#ffffff";
  }

  return color;
};
const StyledSvg = styled(ArrowIcon)<{ arrowColor: string; disabled: boolean }>`
  fill: ${(props) => getArrowColor(props.arrowColor, props.disabled)};
  stroke: ${(props) => getArrowColor(props.arrowColor, props.disabled)};
`;

const AccordionContainer = styled.div<{ radius: number }>`
  border: 1px solid #ccc;
  border-radius: ${(props) => props.radius}px;
  overflow: hidden;
`;

const AccordionHeader = styled.div<{
  headerBackgroundColor: string;
  headerHoverColor: string;
  headerDisableColor: string;
  disabled?: boolean;
}>`
  background-color: ${(props) =>
    !props.disabled
      ? props.headerBackgroundColor
      : props.headerDisableColor
      ? props.headerDisableColor
      : convertToDisableColor(props.headerBackgroundColor)};
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  user-select: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      !props.disabled
        ? props.headerHoverColor
        : props.headerDisableColor
        ? props.headerDisableColor
        : convertToDisableColor(props.headerHoverColor)};
  }
`;

const AccordionTitle = styled.span<{
  titleSize: number;
  titleMarginTop: number;
  titleColor: string;
  disabled: boolean;
}>`
  font-size: ${(props) => props.titleSize}px;
  color: ${(props) =>
    !props.disabled
      ? props.titleColor
      : NormalizeColor(props.titleColor) + `59`};
  margin-top: ${(props) => props.titleMarginTop}px;
  width: 100%;
  display: block;
`;

const AccordionBox = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
const IconWrapper = styled.div<{ isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0)")};
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
`;

export function Accordion({
  title,
  titleSize = 16,
  titleColor = "#000000",
  titleMarginTop = -4,
  arrowPosition = "start",
  headerDisableColor = "",
  headerBackgroundColor = "#f5f5f5",
  headerHoverColor = "#ebebeb",
  arrowColor = "black",
  radius = 0,
  disabled = false,
  expanded = false,
  onChange,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(expanded);

  useEffect(() => {
    setIsOpen(expanded);
  }, [expanded]);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (onChange) {
        onChange();
      }
    }
  };
  const getArrowIcon = (
    <IconWrapper isOpen={isOpen}>
      <StyledSvg arrowColor={arrowColor} disabled={disabled} />
    </IconWrapper>
  );

  return (
    <AccordionContainer radius={radius}>
      <AccordionHeader
        onClick={toggleAccordion}
        disabled={disabled}
        headerDisableColor={headerDisableColor}
        headerBackgroundColor={headerBackgroundColor}
        headerHoverColor={headerHoverColor}
      >
        <AccordionBox>
          {arrowPosition === "start" && getArrowIcon}
          <AccordionTitle
            disabled={disabled}
            titleColor={titleColor}
            titleSize={titleSize}
            titleMarginTop={titleMarginTop}
          >
            {title}
          </AccordionTitle>
          {arrowPosition === "end" && getArrowIcon}
        </AccordionBox>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
}

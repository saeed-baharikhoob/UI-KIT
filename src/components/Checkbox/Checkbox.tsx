import React, { useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import tickIcon from "../../images/tick-black.svg";

type CheckboxProps = {
  size?: number;
  label?: string;
  checked: boolean;
  removeShadow?: boolean;
  icon?: string;
  iconType?: "dot" | "tick";
  onCheckboxChange: (checked: boolean) => void;
};
const getIcon = (icon: string, iconType: string) => {
  if (!icon && iconType === "tick") return tickIcon;

  return icon;
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(0.9);
  }
`;
const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const CheckboxLabelText = styled.span`
  margin-left: 8px;
`;

const CheckboxStyled = styled.input<{
  size: number;
  icon?: string;
  removeShadow: boolean;
}>`
  appearance: none;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 4px;
  border: 2px solid #ccc;
  outline: none;
  position: relative;
  transition: border-color 0.3s ease-in-out;

  ${(props) =>
    !props.icon &&
    props.size &&
    css`
      &:checked:before {
        content: "";
        position: absolute;
        top: 30%;
        left: 30%;
        width: ${(props.size / 3).toFixed(0)}px;
        height: ${(props.size / 3).toFixed(0)}px;
        background-color: #007bff;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        animation: ${pulseAnimation} 1s infinite;
      }
    `}
  &:checked {
    ${(props) =>
      props.icon &&
      css`
        background-image: url(${props.icon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 90% 90%;
        opacity: 1;
      `}
    border-color: #007bff;
    ${(props) =>
      !props.removeShadow &&
      css`
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3),
          0 0 0 6px rgba(0, 123, 255, 0.2);
      `}
    &:before {
      opacity: 1;
    }
  }

  &:hover {
    border-color: #999;
  }

  &:checked:hover {
    border-color: #007bff;
  }

  &:checked:before {
    animation: ${pulseAnimation} 1s infinite;
  }
`;

export const Checkbox = ({
  size = 20,
  label,
  checked,
  onCheckboxChange,
  removeShadow = false,
  iconType = "tick",
  icon = "",
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(isChecked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxStyled
        removeShadow={removeShadow}
        icon={getIcon(icon, iconType)}
        type="checkbox"
        size={size}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CheckboxLabelText> {label}</CheckboxLabelText>
    </CheckboxWrapper>
  );
};

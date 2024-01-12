import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

type TabsProps = {
  tabs: string[];
  contentWithAnimation?: boolean;
  children?: React.ReactNode[];
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const TabButton = styled.button<{ active?: boolean }>`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? "black" : "gray")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? "black" : "transparent")};
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: black;
  }
`;

const TabsContent = styled.div<{ contentWithAnimation: boolean }>`
  ${({ contentWithAnimation }) =>
    contentWithAnimation &&
    css`
      animation: ${fadeIn} 0.5s;
    `}
  margin-top: 10px;
`;

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  contentWithAnimation = false,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabsContainer>
      <TabsHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </TabButton>
        ))}
      </TabsHeader>
      <TabsContent contentWithAnimation={contentWithAnimation}>
        {children && children[activeTab]}
      </TabsContent>
    </TabsContainer>
  );
};

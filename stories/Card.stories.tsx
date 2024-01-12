// Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../src/components/Card/Card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Card background={"#ffffff"} showShadow={true}>
        <span>TEST</span>
      </Card>
      <Card background={["#007AF6", "#006DDB"]} showShadow={true}>
        <span>TEST2</span>
      </Card>
      <Card background={["#a3ff00", "#db0000", "#0058db"]} showShadow={true}>
        <span>TEST2</span>
      </Card>
    </div>
  );
};

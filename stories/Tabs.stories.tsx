// Tabs.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "../src/components/Tabs/Tabs";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  return (
    <>
      <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]}>
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
        <div>Content for Tab 3</div>
      </Tabs>
    </>
  );
};
export const WithAnimation: ComponentStory<typeof Tabs> = () => {
  return (
    <>
      <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]} contentWithAnimation={true}>
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
        <div>Content for Tab 3</div>
      </Tabs>
    </>
  );
};

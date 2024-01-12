// Accordion.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "../src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Primary: ComponentStory<typeof Accordion> = () => {
  return (
    <div>
      <Accordion title="Section 1">
        <p>Content for section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for section 2</p>
      </Accordion>
      <Accordion title="Section 3" disabled={true}>
        <p>Content for section 3</p>
      </Accordion>
      <Accordion
        title="Section 4"
        disabled={true}
        headerDisableColor={"#c9c9c9"}
      >
        <p>Content for section 3</p>
      </Accordion>
    </div>
  );
};
export const Custom: ComponentStory<typeof Accordion> = () => {
  return (
    <div>
      <Accordion
        title="Section 1"
        radius={10}
        headerBackgroundColor={"#a61b1b"}
        headerHoverColor={"rgba(166,27,27,0.41)"}
        titleColor={"#fff"}
        arrowColor={"white"}
      >
        <p>Content for section 1</p>
      </Accordion>
      <br />
      <Accordion
        title="Section 2"
        radius={20}
        expanded={true}
        arrowPosition={"end"}
      >
        <p>Content for section 2</p>
      </Accordion>
      <br />
      <Accordion title="Section 3" radius={50} disabled={true}>
        <p>Content for section 3</p>
      </Accordion>
    </div>
  );
};
export const Custom2: ComponentStory<typeof Accordion> = () => {
  const [expanded, setExpanded] = React.useState<string>("panel1");

  const handleChange = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <div>
      <Accordion
        title={"Section 1"}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <p>Content for section 1</p>
      </Accordion>
      <Accordion
        title="Section 2"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <p>Content for section 2</p>
      </Accordion>
      <Accordion
        title="Section 3"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <p>Content for section 3</p>
      </Accordion>
    </div>
  );
};

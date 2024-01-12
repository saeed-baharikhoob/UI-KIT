// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={"contained"} endLoading={true}>
      BUTTON
    </Button>
    <br />
    <Button variant={"outlined"} startLoading={true}>
      BUTTON
    </Button>
    <br />
    <Button variant={"text"}>BUTTON</Button>
    <br />
    <Button variant={"contained"} loadingType={"linear"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"outlined"} loadingType={"linear"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"text"} loadingType={"linear"}>
      BUTTON
    </Button>
  </>
);
export const Success: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={"contained"} buttonType={"success"} endLoading={true}>
      BUTTON
    </Button>
    <br />
    <Button variant={"outlined"} buttonType={"success"} startLoading={true}>
      BUTTON
    </Button>
    <br />
    <Button variant={"text"} buttonType={"success"}>
      BUTTON
    </Button>
    <br />
    <Button
      variant={"contained"}
      buttonType={"success"}
      endLoading={true}
      loadingType={"linear"}
    >
      BUTTON
    </Button>
    <br />
    <Button
      variant={"outlined"}
      buttonType={"success"}
      startLoading={true}
      loadingType={"linear"}
    >
      BUTTON
    </Button>
    <br />
    <Button variant={"text"} buttonType={"success"} loadingType={"linear"}>
      BUTTON
    </Button>
  </>
);
export const Warning: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={"contained"} buttonType={"warning"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"outlined"} buttonType={"warning"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"text"} buttonType={"warning"}>
      BUTTON
    </Button>
  </>
);
export const Error: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={"contained"} buttonType={"error"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"outlined"} buttonType={"error"}>
      BUTTON
    </Button>
    <br />
    <Button variant={"text"} buttonType={"error"}>
      BUTTON
    </Button>
  </>
);

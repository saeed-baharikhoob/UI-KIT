// Loading.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from "../src/components/Loading/Loading";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Spinner: ComponentStory<typeof Loading> = () => (
  <>
    <div style={{ display: "flex" }}>
      <Loading height={50} width={50} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Loading spinnerColors={["#282828", "#dedbdb"]} height={50} width={50} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Loading spinnerColors={["#000"]} height={50} width={50} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Loading spinnerColors={["#e70000"]} height={50} width={50} />
    </div>
  </>
);
export const Linear: ComponentStory<typeof Loading> = () => (
  <>
    <Loading type={"linear"} linearCornerType={"nonRound"} />
    <br />
    <Loading type={"linear"} height={10} linearCornerType={"nonRound"} />
    <br />
    <Loading type={"linear"} />
    <br />
    <Loading type={"linear"} height={10} />
    <br />
    <Loading
      type={"linear"}
      height={10}
      linearProgressColor={"#b01111"}
      linearBackgroundColor={"#b0111142"}
    />
    <br />
    <Loading
      type={"linear"}
      linearType={"determinate"}
      showPercent={true}
      progress={20}
      height={20}
      linearProgressColor={"#b01111"}
      linearBackgroundColor={"#b0111142"}
      fontColor={"#ee0000"}
    />
  </>
);

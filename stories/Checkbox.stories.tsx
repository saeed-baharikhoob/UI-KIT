// Checkbox.stories.ts|tsx

import React, { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";


import starIcon from "../src/images/star-yellow.svg";
import { Checkbox } from "../src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Checkbox
        label="I agree to the terms and conditions"
        checked={false}
        onCheckboxChange={handleCheckboxChange}
      />
      <br />
      <Checkbox
        label="I agree to the terms and conditions"
        checked={true}
        onCheckboxChange={handleCheckboxChange}
      />
      <br />
      <Checkbox
        label="I agree to the terms and conditions"
        checked={true}
        removeShadow={true}
        onCheckboxChange={handleCheckboxChange}
      />
        <br/>
        <Checkbox
            label="I agree to the terms and conditions"
            checked={isChecked}
            iconType={"dot"}
            onCheckboxChange={handleCheckboxChange}
        />
        <br/>
        <Checkbox
            label="I agree to the terms and conditions"
            checked={isChecked}
            icon={starIcon}
            onCheckboxChange={handleCheckboxChange}
        />
    </>
  );
};
export const DOT: ComponentStory<typeof Checkbox> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Checkbox
        label="I agree to the terms and conditions"
        checked={isChecked}
        iconType={"dot"}
        onCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};
export const CustomIcon: ComponentStory<typeof Checkbox> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Checkbox
        label="I agree to the terms and conditions"
        checked={isChecked}
        icon={starIcon}
        onCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};

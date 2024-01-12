// Tag.stories.ts|tsx

import React, { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "../src";
import closeWhiteIcon from "../src/images/close-white-icon.svg";
import closeGrayIcon from "../src/images/close-gray-icon.svg";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = () => {
  const [tags, setTags] = useState([
    { label: "Tag 1", backgroundColor: "#7994e0" ,icon:closeWhiteIcon},
    { label: "Tag 2", backgroundColor: "#c74a4a" ,icon:closeWhiteIcon},
    { label: "Tag 3", backgroundColor: "#e9e9e9" ,icon:closeGrayIcon},
  ]);

  const handleCloseTag = (tag: { label: string }) => {
    setTags(tags.filter((t) => t !== tag));
  };
  return (
    <div>
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          icon={tag.icon}
          backgroundColor={tag.backgroundColor}
          onClose={() => handleCloseTag(tag)}
        />
      ))}
    </div>
  );
};

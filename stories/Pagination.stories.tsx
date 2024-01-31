// Pagination.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Pagination} from "../src";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Primary: ComponentStory<typeof Pagination> = () => {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
      />
    </div>
  );
};

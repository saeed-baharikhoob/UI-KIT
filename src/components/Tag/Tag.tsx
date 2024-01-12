import React from "react";
import styled from "@emotion/styled";

type TagWrapperProps = {
  backgroundColor?: string;
};

const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background-color: ${(props: TagWrapperProps) =>
    props.backgroundColor || "#e0e0e0"};
  border-radius: 12px;
  margin-right: 8px;
`;
const TagHandle = styled.div`
  width: 16px;
  height: 16px;
  background-color: #808384;
  border-radius: 4px;
  margin-right: 6px;
  cursor: grab;
`;
const TagIcon = styled.img`
`;
const TagLabel = styled.span`
  margin-right: 4px;
  user-select: none;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
`;



type TagProps = {
  icon: string;
  label: string;
  backgroundColor?: string;
  isDraggable?: boolean;
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
  onClose: () => void;
};

export const Tag: React.FC<TagProps> = ({
                                          icon,
  label,
  backgroundColor,
  onClose,
  isDraggable = false,
  onDrop,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <TagWrapper backgroundColor={backgroundColor} onDrop={onDrop}>
      {isDraggable && (
        <TagHandle
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      )}
      <TagLabel>{label}</TagLabel>
      <CloseButton onClick={onClose}>
        <TagIcon src={icon} />
      </CloseButton>
    </TagWrapper>
  );
};

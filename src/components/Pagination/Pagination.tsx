import React from 'react';
import styled from "@emotion/styled";
import Provider from "../../Theme/Provider";
import {css} from "@emotion/react";


const PaginationWrapper = styled.ul`
    display: flex;
    list-style-type: none;
`;

const Item = styled.li`
    width: 36px;
    height: 36px;
    user-select: none;
    font-size: 1rem;
    margin: 4px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`

const PageItem = styled(Item)<{ isActive?: boolean }> `
   
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
    color: ${props => (props.isActive ? props.theme.colors.white : props.theme.colors.black)};
    background-color:  ${props => (props.isActive ? props.theme.colors.pagination : 'transparent')};
    border: 2px solid transparent;
    border-radius: 50%;
 

    ${(props) => !props.isActive  && css`
        cursor: pointer;

        &:hover {
            color: ${props.theme.colors.pagination};
            border: 2px solid ${props.theme.colors.pagination};
        }
    `};

`

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({totalPages, currentPage, onPageChange}) => {
    const renderPaginationItems = () => {
        let items = [];
        for (let i = 1; i <= totalPages; i++) {
            // Always add the first page
            if (i === 1) {
                items.push(
                    <PageItem   key={i} isActive={currentPage === i} onClick={() => onPageChange(i)}>
                        {i}
                    </PageItem>
                );
                continue;
            }

            // Always add the last page
            if (i === totalPages) {
                items.push(
                    <PageItem  key={i} isActive={currentPage === i} onClick={() => onPageChange(i)}>
                        {i}
                    </PageItem>
                );
                continue;
            }

            // Add the current page, the one before and after it
            if (i >= currentPage - 1 && i <= currentPage + 1) {
                items.push(
                    <PageItem key={i} isActive={currentPage === i} onClick={() => onPageChange(i)}>
                        {i}
                    </PageItem>
                );
                continue;
            }

            // Add dots
            if (i === currentPage - 2 || i === currentPage + 2) {
                items.push(<Item key={`dots-${i}`}>...</Item>);
            }
        }
        return items;
    };

    return (<Provider>
        <PaginationWrapper>{renderPaginationItems()}</PaginationWrapper>
    </Provider>);
};

import React from "react";
import styled from "styled-components";
import { MdOutlineSort } from "react-icons/md";
function SortByButton({ hideText }) {
    return (
        <SortContainer>
            <SortIcon>
                <MdOutlineSort size={32} />
            </SortIcon>
            {hideText === null && <SortText>Sort by</SortText>}
        </SortContainer>
    );
}

export default SortByButton;
const SortContainer = styled.div`
    display: flex;
`;
const SortText = styled.div`
    padding-top: 5px;
    font-size: 20px;
    padding-left: 10px;
`;
const SortIcon = styled.div`
    font-size: 20px;
`;

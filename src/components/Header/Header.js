import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div``;
const Icon_Container = styled.div`
    margin-left: 2%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
// const Image = styled.Image`
//     width: 24px;
//     height: 24px;
//     margin-bottom: 8px;
// `;

function Header() {
    return (
        <Container>
            <Icon_Container>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </Icon_Container>
        </Container>
    );
}

export default Header;

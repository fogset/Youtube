import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faUser,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
`;
const FaBars_Container = styled.div`
    margin-left: 2%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
const MagnifyingGlass_Container = styled.div`
    margin-right: 4%;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`;
const Search = styled.div`
    height: 30px;
    width: 40%;
    position: absolute;
    right: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 25px;
`;
const Input = styled.div`
    border: none;
    background-color: transparent;
`;

const Button = styled.button`
    padding: 5x 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    right: 2%;
`;

function Header() {
    return (
        <Container>
            <FaBars_Container>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </FaBars_Container>
            <Wrapper>
                <Search>
                    <Input type="text" placeholder="Search" />
                    <MagnifyingGlass_Container>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </MagnifyingGlass_Container>
                </Search>
                <Button>
                    <FontAwesomeIcon icon={faUser} />
                    SIGN IN
                </Button>
            </Wrapper>
        </Container>
    );
}

export default Header;

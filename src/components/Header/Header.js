import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faUser,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import { Link } from "react-router-dom";
import youtubeLogo from "./youtube.png";
import SearchLogo from "./Search.png";

function Header() {
    const [name, setName] = useState("");
    return (
        <Container>
            <IconContainer>
                <FontAwesomeIcon icon={faBars} size="1x" />
            </IconContainer>
            <Image src={youtubeLogo} />
            <SearchContainer>
                <SearchInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <SearchImage src={SearchLogo} />
            </SearchContainer>

            <Button>
                <FontAwesomeIcon icon={faUser} />
                SIGN IN
            </Button>
        </Container>
    );
}

export default Header;

const IconContainer = styled.div`
    margin-left: 2%;
    width: fit-content;
    margin-top: 15px;
`;
const Image = styled.img`
    margin-left: 3%;
    margin-top: 7px;
    width: 100px;
    height: 35px;
`;

const Container = styled.div`
    top: 0;
    height: 56px;
    background-color: white;
    position: fixed;
    width: 100%;
    font-size: large;
    z-index: 15;
    display: flex;
`;

const SearchContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    position: absolute;
    border: none;
    background-color: transparent;
    top: 9px;
    left: 26px;
    height: 28px;
    width: 385px;
`;
const SearchImage = styled.img`
    margin-left: 3%;
    margin-top: 2px;
    width: 500px;
    height: 45px;
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

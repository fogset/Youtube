import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import youtubeLogo from "./youtube.png";
import SearchLogo from "./Search.png";
import UploadLogo from "./upload.png";
import { IoIosNotificationsOutline } from "react-icons/io";
function Header() {
    const [searchResult, setSearchResult] = useState("");
    const searchId = `/search/${searchResult}`;
    return (
        <Container>
            <IconContainer>
                <FontAwesomeIcon icon={faBars} size="1x" />
            </IconContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
                <YoutubeImage src={youtubeLogo} />
            </Link>
            <SearchContainer>
                <SearchInput
                    type="text"
                    value={searchResult}
                    onChange={(e) => setSearchResult(e.target.value)}
                />
                <Link to={searchId} style={{ textDecoration: "none" }}>
                    <SearchImage src={SearchLogo} />
                </Link>
            </SearchContainer>
            <UploadImage src={UploadLogo} />
            <NotificationContainer>
                <IoIosNotificationsOutline size="30px" />
            </NotificationContainer>
            <ProfileImg src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Container>
    );
}
// <Button>
//     <FontAwesomeIcon icon={faUser} />
//     SIGN IN
// </Button>;
export default Header;

const IconContainer = styled.div`
    margin-left: 2%;
    width: fit-content;
    margin-top: 15px;
`;
const YoutubeImage = styled.img`
    margin-left: 3%;
    margin-top: 7px;
    width: 100px;
    height: 35px;
`;

const UploadImage = styled.img`
    position: absolute;
    margin-top: 10px;
    width: 25px;
    height: 25px;
    z-index: 10;
    right: 10.5%;
`;
const NotificationContainer = styled.div`
    position: absolute;
    margin-top: 8px;
    right: 6.5%;
    z-index: 10;
`;

const ProfileImg = styled.img`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 8px;
    right: 2%;
    z-index: 10;
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
    margin-left: 10%;
    margin-top: 5px;
`;

const SearchInput = styled.input`
    position: absolute;
    border: none;
    background-color: white;
    top: 10px;
    left: 10px;
    height: 22px;
    width: 390px;
    z-index: 2;
`;
const SearchImage = styled.img`
    margin-left: 3%;
    margin-top: 2px;
    width: 500px;
    height: 40px;
    position: absolute;
    z-index: 1;
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

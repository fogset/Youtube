import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faMagnifyingGlass,
    faList,
    faBook,
    faClockRotateLeft,
    faMusic,
    faBaseball,
    faFilm,
    faNewspaper,
    faVideo,
    faGear,
    faFlag,
    faQuestion,
    faArrowsRotate,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <Container>
            <Item>
                <FontAwesomeIcon icon={faHouse} />
                <Item_text>Home</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Item_text>Explore</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faList} />
                <Item_text>Subscriptions</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faBook} />
                <Item_text>Library</Item_text>
            </Item>

            <Item>
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <Item_text>History</Item_text>
            </Item>

            <Item>
                <FontAwesomeIcon icon={faMusic} />
                <Item_text>Music</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <Item_text>Sports</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faBaseball} />
                <Item_text>Gaming</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faFilm} />
                <Item_text>Movies</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faNewspaper} />
                <Item_text>News</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faVideo} />
                <Item_text>Live</Item_text>
            </Item>

            <Item>
                <FontAwesomeIcon icon={faGear} />
                <Item_text>Settings</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faFlag} />
                <Item_text>Report</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faQuestion} />
                <Item_text>Help</Item_text>
            </Item>

            <Page>page {localStorage.getItem("currentPage")}</Page>
        </Container>
    );
}

export default Sidebar;
const Container = styled.div`
    font-size: 15px;
    background-color: white;
    color: black;
    position: absolute;
    width: 15%;
    height: 100%;
    top: 60px;
    left: 0%;
    @media only screen and (max-width: 700px) {
        /* hide element on small screens */
        display: none;
    }
`;

const Item = styled.div`
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    &:hover {
        background-color: black;
        color: white;
    }
`;
const Item_text = styled.div`
    margin-left: 10px;
`;
const Hr = styled.div`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Button = styled.button`
    padding: 5x 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`;
const Page = styled.div`
    margin-left: 5px;
    height: 30px;
    width: 70px;
    background-color: pink;
    color: red;
    font-size: larger;
`;

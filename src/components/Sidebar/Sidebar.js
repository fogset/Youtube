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
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div``;
const Item = styled.div`
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
`;
const Item_text = styled.div`
    margin-left: 10px;
`;
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
            <Item>
                <FontAwesomeIcon icon={faArrowsRotate} />
                <Item_text>Light Mode</Item_text>
            </Item>
        </Container>
    );
}

export default Sidebar;

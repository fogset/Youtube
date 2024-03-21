import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faMagnifyingGlass,
    faList,
    faClockRotateLeft,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater, MdOutlineMovieFilter } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMusicalNoteOutline, IoGameControllerOutline } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { ImFire } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import Subscriptions from "../SubscribedChannel/Subscriptions";
function Sidebar() {
    return (
        <Container>
            <Item>
                <FontAwesomeIcon icon={faHouse} />
                <Item_text>Home</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Item_text>Shorts</Item_text>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faList} />
                <Item_text>Subscriptions</Item_text>
            </Item>
            <hr />
            <Subscriptions />
            <Item>
                <You_text>You</You_text>
                <RightArrowIcon>
                    <IoIosArrowForward />
                </RightArrowIcon>
            </Item>

            <Item>
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <Item_text>History</Item_text>
            </Item>

            <Item>
                <MdOutlineWatchLater />
                <Item_text>Watch later</Item_text>
            </Item>
            <Item>
                <AiOutlineLike />
                <Item_text>Liked videos</Item_text>
            </Item>
            <hr />
            <Explore_text>Explore</Explore_text>
            <Item>
                <ImFire />
                <Item_text>Trending</Item_text>
            </Item>
            <Item>
                <IoMusicalNoteOutline />
                <Item_text>Music</Item_text>
            </Item>
            <Item>
                <MdOutlineMovieFilter />
                <Item_text>Movies & TV</Item_text>
            </Item>
            <Item>
                <CgMediaLive />
                <Item_text>Live</Item_text>
            </Item>

            <Item>
                <IoGameControllerOutline />
                <Item_text>Gaming</Item_text>
            </Item>
            <Item>
                <TfiCup />
                <Item_text>Sports</Item_text>
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
    font-size: 14px;
    background-color: white;
    color: black;
    position: absolute;
    width: 150px;
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
    padding-top: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const RightArrowIcon = styled.div`
    margin-top: 2px;
    margin-left: 7px;
    z-index: 10;
`;
const You_text = styled.div`
    font-weight: 500;
    font-size: 17px;
`;
const Explore_text = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
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

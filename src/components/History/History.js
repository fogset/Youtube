import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Watch_HistoryRecoil } from "./../../state";
import HistoryVideoCard from "./HistoryVideoCard";
function History() {
    const [history, setHistory] = useRecoilState(Watch_HistoryRecoil);
    useEffect(() => {
        console.log("history from history page");
        console.log(history);
    }, [history]);
    return (
        <div>
            <Sidebar />
            <HistoryContainer>
                <WatchHistory>Watch history</WatchHistory>
                <Today>Today</Today>

                {history !== null && (
                    <Container>
                        {history.map((currentVideo) => (
                            <HistoryCardContianer>
                                <Title>{currentVideo.title}</Title>
                            </HistoryCardContianer>
                        ))}
                    </Container>
                )}
            </HistoryContainer>
        </div>
    );
}

export default History;
const Today = styled.div`
    margin-top: 3%;
    font-size: 22px;
    font-weight: bold;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const WatchHistory = styled.div`
    font-size: 35px;
    font-weight: bold;
`;
const HistoryContainer = styled.div`
    position: absolute;
    background-color: lightblue;
    top: 10%;
    left: 220px;
    height: 100%;
    width: 900px;
`;

const Container = styled.div`
    /* font-size: larger;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-bottom: 100px; */
`;
const Title = styled.h1`
    font-size: 13px;
    align-items: center;
    margin-bottom: 10px;
    position: absolute;
    left: 50px;
    top: -5px;
    color: black;
`;
const HistoryCardContianer = styled.div`
    display: flex;
    position: relative;
    height: 100px;
    width: 100%;
`;

import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Watch_HistoryRecoil } from "./../../state";
import HistoryVideoCard from "./HistoryVideoCard";
import HistoryCard from "./HistoryCard";

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
                {history && (
                    <Container>
                        {history.map((currentVideoDetail) => (
                            <HistoryCard
                                currentVideoDetail={currentVideoDetail}
                            />
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
    margin-bottom: 15px;
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

    top: 10%;
    left: 220px;
    height: 100%;
    width: 700px;
`;
const Container = styled.div``;

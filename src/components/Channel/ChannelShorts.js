import React, { Fragment, useState, useEffect } from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Shorts_TotalRecoil } from "./../../state";
import { useParams } from "react-router-dom";
import ShortCard from "./Short/ShortCard";
import { GetShortsListFromChannel_ID } from "../GetMethodFrom_ID/GetByID";
function ChannelShorts() {
    const [totalShorts, setTotalShorts] = useRecoilState(Shorts_TotalRecoil);
    const [currentChannelShorts, setCurrentChannelShorts] = useState(null);
    const ID = useParams().channelId;
    useEffect(() => {
        var FilterShort = GetShortsListFromChannel_ID(ID, totalShorts);
        setCurrentChannelShorts(FilterShort);
    }, [totalShorts]);
    return (
        <div>
            <ChannelSidebar />
            <Shorts>
                <ChannelHeader />
                {currentChannelShorts !== null && (
                    <Container>
                        {currentChannelShorts.map((currentShortDetail) => (
                            <ShortCard
                                currentShortDetail={currentShortDetail}
                            />
                        ))}
                    </Container>
                )}
            </Shorts>
        </div>
    );
}

export default ChannelShorts;
const Shorts = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
`;
const Container = styled.div`
    font-size: larger;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    margin-bottom: 200px;
`;

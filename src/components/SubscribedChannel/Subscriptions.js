import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Subscribed_ChannelRecoil } from "./../../state";
import SubscribedChannelCard from "./SubscribedChannelCard";

function Subscriptions() {
    const [Sub_Channel, setSub_Channel] = useRecoilState(
        Subscribed_ChannelRecoil
    );
    useEffect(() => {
        console.log("Sub_Channel");
        console.log(Sub_Channel);
    }, [Sub_Channel]);
    return (
        <Subscription>
            <SubscriptionsText>Subscriptions</SubscriptionsText>
            {Sub_Channel !== null && (
                <Container>
                    {Sub_Channel.map((channel) => (
                        <SubscribedChannelCard currentChannel={channel} />
                    ))}
                </Container>
            )}
        </Subscription>
    );
}

export default Subscriptions;
const Item = styled.div`
    display: flex;
    padding-top: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const SubscriptionsText = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 500;
`;
const Container = styled.div``;
const Subscription = styled.div`
    position: relative;
    height: auto;
    width: 170px;
`;

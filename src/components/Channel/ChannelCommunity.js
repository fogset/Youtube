import React, { Fragment, useState, useEffect } from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recoilChannelList, Post_TotalRecoil } from "./../../state";
import ChannelCommunityPostCard from "./CommunityPost/ChannelCommunityPostCard";
import {
    GetChannelFromChannel_ID,
    GetPostListFrom_Channel_ID,
} from "../GetMethodFrom_ID/GetByID";

function ChannelCommunity() {
    const [total_Channel, setChannelList] = useRecoilState(recoilChannelList);
    const [total_Post, setTotal_Post] = useRecoilState(Post_TotalRecoil);

    const [currentChannel, setCurrentChannel] = useState(null);
    const [currentChannelPost, setCurrentChannelPost] = useState(null);

    const ID = useParams().channelId;
    useEffect(() => {
        GetChannelFromChannel_ID(ID, total_Channel, setCurrentChannel);
    }, [total_Channel]);
    useEffect(() => {
        GetPostListFrom_Channel_ID(ID, total_Post, setCurrentChannelPost);
    }, [total_Post]);

    return (
        <div>
            <ChannelSidebar />
            <CommunityContainer>
                <ChannelHeader />
                {currentChannelPost !== null && (
                    <div>
                        {currentChannelPost.map((currentPost) => (
                            <ChannelCommunityPostCard
                                currentChannel={currentChannel}
                                currentPost={currentPost}
                            />
                        ))}
                    </div>
                )}
            </CommunityContainer>
        </div>
    );
}

export default ChannelCommunity;
const CommunityContainer = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
`;

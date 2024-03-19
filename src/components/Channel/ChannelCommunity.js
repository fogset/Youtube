import React, { Fragment, useState, useEffect } from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recoilChannelList, Post_TotalRecoil } from "./../../state";
import ChannelCommunityPostCard from "./CommunityPost/ChannelCommunityPostCard";

function ChannelCommunity() {
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [total_Post, setTotal_Post] = useRecoilState(Post_TotalRecoil);
    const [currentChannelPost, setCurrentChannelPost] = useState(null);
    const currentChannelId = useParams().channelId;
    useEffect(() => {
        GetChannelDetailFrom_Channel_ID();
    }, [channelList]);
    useEffect(() => {
        GetPostListFrom_Channel_ID();
    }, [total_Post]);
    function GetChannelDetailFrom_Channel_ID() {
        let i = 0;
        if (channelList !== null) {
            while (i < channelList.length) {
                if (channelList[i].channelId === currentChannelId) {
                    setCurrentChannel(channelList[i]);
                }
                i++;
            }
        }
    }
    function GetPostListFrom_Channel_ID() {
        let filterdPost = [];
        if (total_Post !== null) {
            for (let i = 0; i < total_Post.length; i++) {
                if (total_Post[i].channelId === currentChannelId) {
                    filterdPost.push(total_Post[i]);
                }
            }
        }
        setCurrentChannelPost(filterdPost);
    }
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

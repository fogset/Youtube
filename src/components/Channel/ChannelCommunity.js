import React, { Fragment, useState, useEffect } from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recoilChannelList, ChannelCommunityRecoil } from "./../../state";
import Comment from "./../Comments/Comment";
import Post from "./CommunityPost/Post";
function ChannelCommunity() {
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [community, setCommunity] = useRecoilState(ChannelCommunityRecoil);
    const [currentChannelPost, setCurrentChannelPost] = useState(null);
    const currentChannelId = useParams().channelId;
    useEffect(() => {
        let i = 0;
        if (channelList !== null) {
            while (i < channelList.length) {
                if (channelList[i].channelId === currentChannelId) {
                    setCurrentChannel(channelList[i]);
                }
                i++;
            }
        }
    }, [channelList]);
    useEffect(() => {
        let i = 0;
        if (community !== null) {
            while (i < community.length) {
                if (community[i].post_ID === currentChannel.communityPost) {
                    setCurrentChannelPost(community[i].post);
                }
                i++;
            }
        }
    }, [community]);
    return (
        <div>
            <ChannelSidebar />
            <CommunityContainer>
                <ChannelHeader />
                {currentChannelPost !== null && (
                    <div>
                        {currentChannelPost.map((currentPost) => (
                            <Post
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

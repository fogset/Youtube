import React, { Fragment, useState, useEffect } from "react";
import ChannelCommunityPostCard from "./ChannelCommunityPostCard";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Post_TotalRecoil, recoilChannelList } from "./../../../state";
import ChannelSidebar from "../ChannelSidebar";
import styled from "styled-components";
import PostComments from "./PostComments";
function Post() {
    const [total_Post, setTotal_Post] = useRecoilState(Post_TotalRecoil);
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);

    const [currentPost, setCurrentPost] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
    const currentPost_Id = useParams().postId;
    useEffect(() => {
        GetPostFromPost_ID();
    }, [total_Post]);
    useEffect(() => {
        GetChannelFromChannel_ID();
    }, [currentPost]);
    function GetPostFromPost_ID() {
        if (total_Post !== null) {
            for (let i = 0; i < total_Post.length; i++) {
                if (total_Post[i].post_ID === currentPost_Id) {
                    setCurrentPost(total_Post[i]);
                }
            }
        }
    }
    function GetChannelFromChannel_ID() {
        if (channelList !== null) {
            for (let i = 0; i < channelList.length; i++) {
                if (channelList[i].channelId === currentPost.channelId) {
                    setCurrentChannel(channelList[i]);
                }
            }
        }
    }
    return (
        <div>
            <ChannelSidebar />
            <PostContainer>
                {currentChannel !== null && (
                    <div>
                        <ChannelCommunityPostCard
                            currentChannel={currentChannel}
                            currentPost={currentPost}
                        />
                        <PostComments comment_ID={currentPost.comment} />
                    </div>
                )}
            </PostContainer>
        </div>
    );
}

export default Post;
const PostContainer = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
    margin-top: 5%;
`;

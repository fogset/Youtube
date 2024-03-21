import React, { Fragment, useState, useEffect } from "react";
import ChannelCommunityPostCard from "./ChannelCommunityPostCard";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Post_TotalRecoil, recoilChannelList } from "./../../../state";
import ChannelSidebar from "../ChannelSidebar";
import styled from "styled-components";
import PostComments from "./PostComments";
import {
    GetPostFromPost_ID,
    GetChannelFromChannel_ID,
} from "../../GetMethodFrom_ID/GetByID";
function Post() {
    const [total_Post, setTotal_Post] = useRecoilState(Post_TotalRecoil);
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);

    const [currentPost, setCurrentPost] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
    const currentPost_Id = useParams().postId;
    useEffect(() => {
        GetPostFromPost_ID(currentPost_Id, total_Post, setCurrentPost);
    }, [total_Post]);
    useEffect(() => {
        if (currentPost !== null) {
            var ID = currentPost.channelId;
            GetChannelFromChannel_ID(ID, channelList, setCurrentChannel);
        }
    }, [currentPost]);

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

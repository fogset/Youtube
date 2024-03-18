import React from "react";
import styled from "styled-components";
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";
import { MdOutlineComment } from "react-icons/md";
function Post({ currentChannel, currentPost }) {
    return (
        <PostContainer>
            <ChannelImage src={currentChannel.profileImg} />
            <ContentContainer>
                <Content>{currentChannel.title}</Content>
                <Description>{currentPost.description}</Description>
                <PostImage src={currentPost.Image} />
                <BottomIconContainer>
                    <HiOutlineHandThumbUp size={30} />
                    <ThumbUpText>{currentPost.thumbUp}</ThumbUpText>
                    <HiOutlineHandThumbDown size={30} />
                    <CommentIcon>
                        <MdOutlineComment size={25} />
                        66
                    </CommentIcon>
                </BottomIconContainer>
            </ContentContainer>
        </PostContainer>
    );
}

export default Post;
const PostContainer = styled.div`
    width: 80%;
    height: 100%;
    border-style: solid;
    display: flex;
    padding: 15px;
`;
const ChannelImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Content = styled.div`
    margin-left: 10px;
`;
const ContentContainer = styled.div`
    justify-content: space-between;
`;
const Description = styled.div`
    margin-left: 10px;
    width: 600px;
`;
const PostImage = styled.img`
    width: 73%;
    height: auto;
    border-radius: 2%;
`;
const BottomIconContainer = styled.div`
    margin-top: 5px;
    display: flex;
`;
const ThumbUpText = styled.div`
    margin-top: 5px;
    margin-right: 20px;
    margin-left: 5px;
`;
const CommentIcon = styled.div`
    margin-left: 25px;
`;

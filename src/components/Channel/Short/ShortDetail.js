import ChannelSidebar from "../ChannelSidebar";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import {
    Shorts_TotalRecoil,
    Comments_TotalRecoil,
    recoilChannelList,
} from "./../../../state";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
    GetShortFromShort_ID,
    GetChannelFromChannel_ID,
    GetCommentFromComment_ID,
} from "../../GetMethodFrom_ID/GetByID";
import ShortComments from "./ShortComments";

function ShortDetail() {
    const currentShort_ID = useParams().shortId;
    const [totalShorts, setTotalShorts] = useRecoilState(Shorts_TotalRecoil);
    const [CommentsTotal, setCommentsTotal] =
        useRecoilState(Comments_TotalRecoil);
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);

    const [currentShort, setCurrentShort] = useState(null);
    const [currentComment, setCurrentComment] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [openCommentBox, setOpenCommentBox] = useState(false);

    useEffect(() => {
        GetShortFromShort_ID(currentShort_ID, totalShorts, setCurrentShort);
    }, [totalShorts]);
    useEffect(() => {
        if (currentShort !== null) {
            GetChannelFromChannel_ID(
                currentShort.channel_ID,
                channelList,
                setCurrentChannel
            );
            GetCommentFromComment_ID(
                currentShort.comment,
                CommentsTotal,
                setCurrentComment
            );
        }
    }, [currentShort]);
    function openComment() {
        setOpenCommentBox(true);
    }

    return (
        <Container>
            <ChannelSidebar />
            {currentShort && currentChannel && (
                <Shorts>
                    <ShortVideoContainer>
                        <ReactPlayer
                            url={currentShort.shortURL}
                            width="100%"
                            height="100%"
                            loop={true}
                        />
                    </ShortVideoContainer>
                    <ShortSidebarContainer>
                        <IconAndTextContainer>
                            <IconContainer>
                                <IconPosition>
                                    <BiSolidLike size={28} />
                                </IconPosition>
                            </IconContainer>
                            <Text>{currentShort.Like}</Text>
                        </IconAndTextContainer>
                        <IconAndTextContainer>
                            <IconContainer>
                                <IconPosition>
                                    <BiSolidDislike size={28} />
                                </IconPosition>
                            </IconContainer>
                            <Text>Dislike</Text>
                        </IconAndTextContainer>
                        <IconAndTextContainer onClick={openComment}>
                            <IconContainer>
                                <IconPosition>
                                    <MdComment size={28} />
                                </IconPosition>
                            </IconContainer>
                            <Text>{currentComment.length}</Text>
                        </IconAndTextContainer>
                        <IconAndTextContainer>
                            <IconContainer>
                                <IconPosition>
                                    <IoMdShareAlt size={28} />
                                </IconPosition>
                            </IconContainer>
                            <Text>Share</Text>
                        </IconAndTextContainer>
                        <IconAndTextContainer>
                            <IconContainer>
                                <IconPosition>
                                    <HiOutlineDotsVertical size={28} />
                                </IconPosition>
                            </IconContainer>
                        </IconAndTextContainer>
                        <ChannelImage src={currentChannel.profileImg} />
                    </ShortSidebarContainer>
                    <ChannelDetail>
                        <ChannelTop>
                            <ChannelImage src={currentChannel.profileImg} />
                            <ChannelText>
                                @{currentShort.channel_ID}
                            </ChannelText>
                            <SubscribeContainer>
                                <SubscribeText>Subscribed</SubscribeText>
                            </SubscribeContainer>
                        </ChannelTop>
                        <ShortTitle>{currentShort.title}</ShortTitle>
                    </ChannelDetail>
                    {openCommentBox && (
                        <CommentContainer>
                            <ShortComments
                                ShortComments={currentComment}
                                setOpenCommentBox={setOpenCommentBox}
                            />
                        </CommentContainer>
                    )}
                </Shorts>
            )}
        </Container>
    );
}

export default ShortDetail;
const Container = styled.div``;
const Shorts = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
    display: flex;
`;
const ShortVideoContainer = styled.div`
    width: 340px;
    height: 600px;
`;
const ShortSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    margin-top: 80px;
`;
const IconContainer = styled.div`
    background-color: #e8e8da;
    border-radius: 25px;
    height: 50px;
    width: 50px;
    text-align: center;
`;
const IconPosition = styled.div`
    padding-top: 10px;
`;
const IconAndTextContainer = styled.div`
    background-color: #d3dbe8;
    border-radius: 25px;
    height: 50px;
    width: 50px;
    text-align: center;
`;
const Text = styled.div`
    margin-top: 10px;
    font-size: large;
`;
const ChannelImage = styled.img`
    width: 50px;
    height: 50px;
`;
const ChannelDetail = styled.div`
    position: absolute;
    width: 340px;
    height: 150px;
    background-color: white;
    bottom: 0px;
    left: 500px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const ChannelTop = styled.div`
    display: flex;
`;
const SubscribeContainer = styled.div`
    border-radius: 55px;
    background-color: #e8e8da;
    width: 90px;
    height: 30px;
    text-align: center;
    margin-top: 10px;
`;
const SubscribeText = styled.div`
    margin-top: 6px;
    font-size: 14px;
`;
const ChannelText = styled.div`
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 10px;
`;
const ShortTitle = styled.div`
    margin-top: 5px;
    font-size: 25px;
    font-weight: bold;
`;
const CommentContainer = styled.div`
    position: absolute;
    width: 400px;
    height: 550px;
    background-color: white;
    top: 0px;
    left: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
`;

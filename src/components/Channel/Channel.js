import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilChannelList, totalVideoRecoil } from "../../state";
import Card from "../Card/Card";
import { Link, useParams } from "react-router-dom";
function Channel() {
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [currentChannelVideo, setCurrentChannelVideo] = useState(null);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const params = useParams();
    const currentChannelId = params.channelId;

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
        let filterChannel = [];
        if (totalVideo !== null) {
            for (let i = 0; i < totalVideo.length; i++) {
                if (totalVideo[i].channelId === currentChannelId) {
                    filterChannel.push(totalVideo[i]);
                }
            }
        }
        setCurrentChannelVideo(filterChannel);
    }, [totalVideo]);

    return (
        <div>
            {currentChannel !== null && (
                <div>
                    <BannerImg src={currentChannel.Banner} />
                    <Profile>
                        <ProfileImg src={currentChannel.profileImg} />
                        <ProfileDetail>
                            <ProfileName>{currentChannel.title}</ProfileName>
                            <ProfileVideo>
                                @{currentChannel.channelId} ‧
                                {currentChannel.subscribers}
                                subscribers ‧ 363 videos
                            </ProfileVideo>
                            <ProfileAbout>{currentChannel.about}</ProfileAbout>
                            <ProfileSubscribe>Subscribe</ProfileSubscribe>
                        </ProfileDetail>
                    </Profile>
                </div>
            )}
            <ProfileList>
                <ButtonList>Home</ButtonList>
                <ButtonList>Videos</ButtonList>
                <ButtonList>Shorts</ButtonList>
                <ButtonList>Live</ButtonList>
                <ButtonList>Playlists</ButtonList>
                <ButtonList>Community</ButtonList>
            </ProfileList>
            <ChannelVideo>
                {currentChannelVideo !== null && (
                    <Container>
                        {currentChannelVideo.map((currentVideoDetail) => (
                            <Card currentVideoDetail={currentVideoDetail} />
                        ))}
                    </Container>
                )}
            </ChannelVideo>
        </div>
    );
}

export default Channel;

const ChannelVideo = styled.div`
    /* overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background-color: antiquewhite; */
`;
const Container = styled.div`
    font-size: larger;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
`;

const BannerImg = styled.img`
    width: 90%;
    height: 220px;
`;
const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
const Profile = styled.div`
    margin-top: 4%;
    display: flex;
`;
const ProfileDetail = styled.div`
    margin-left: 3%;
`;
const ProfileName = styled.div`
    font-size: 36px;
    font-weight: 600;
`;
const ProfileVideo = styled.div`
    margin-top: 3%;
`;
const ProfileAbout = styled.div`
    margin-top: 5%;
`;
const ProfileSubscribe = styled.button`
    margin-top: 5%;
    font-size: 19px;
    background-color: black;
    color: white;
    border-radius: 25px;
    height: 45px;
    text-align: center;
    width: 130px;
`;
const ProfileList = styled.div`
    margin-top: 2%;
    display: flex;
`;
const ButtonList = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-left: 2%;
    &:hover {
        border-bottom: 4px solid #000;
        margin-bottom: 8px;
    }
`;

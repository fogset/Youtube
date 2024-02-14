import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { currentChannelRecoil, recoilChannelList } from "../state";
import About from "./About";

function Channel() {
    const [currentChannelIndex, setCurrentChannelIndex] =
        useRecoilState(currentChannelRecoil);
    const [channelList, setChannelList] = useRecoilState(recoilChannelList);
    const [currentChannel, setCurrentChannel] = useState(null);
    console.log("currentChannelIndex");
    console.log(currentChannelIndex);
    console.log("channelList");
    console.log(channelList);
    useEffect(() => {
        let i = 0;
        while (i < 2) {
            if (Number(channelList[i].id) === Number(currentChannelIndex)) {
                setCurrentChannel(channelList[i]);
            }
            i++;
        }
    }, []);

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
                                @{currentChannel.channelLink} ‧
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
        </div>
    );
}

export default Channel;

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

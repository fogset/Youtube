import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilChannelList, totalVideoRecoil } from "../../state";
import Card from "../Card/Card";
import { Link, useParams } from "react-router-dom";
import { GetChannelFromChannel_ID } from "../GetMethodFrom_ID/GetByID";
function ChannelHeader() {
    const [total_Channel, setTotalChannel] = useRecoilState(recoilChannelList);
    const [currentChannel, setCurrentChannel] = useState(null);
    const params = useParams();
    const ID = params.channelId;
    useEffect(() => {
        GetChannelFromChannel_ID(ID, total_Channel, setCurrentChannel);
    }, [total_Channel]);

    const featureUrl = `/${ID}/featured`;
    const videoUrl = `/${ID}/videos`;
    const shortsUrl = `/${ID}/shorts`;
    const liveUrl = `/${ID}/playlists`;
    const playlistUrl = `/${ID}/playlists`;
    const communityUrl = `/${ID}/community`;
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
                <ButtonList>
                    <LinkTitle to={featureUrl}>Home</LinkTitle>
                </ButtonList>

                <ButtonList>
                    <LinkTitle to={videoUrl}>Videos</LinkTitle>
                </ButtonList>

                <ButtonList>
                    <LinkTitle to={shortsUrl}>Shorts</LinkTitle>
                </ButtonList>

                <ButtonList>
                    <LinkTitle to={liveUrl}>Live</LinkTitle>
                </ButtonList>

                <ButtonList>
                    <LinkTitle to={playlistUrl}>Playlists</LinkTitle>
                </ButtonList>

                <ButtonList>
                    <LinkTitle to={communityUrl}>Community</LinkTitle>
                </ButtonList>
            </ProfileList>
        </div>
    );
}

export default ChannelHeader;
const LinkTitle = styled(Link)`
    text-decoration: none;
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

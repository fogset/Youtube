import React from "react";
import styled from "styled-components";
function Channel() {
    return (
        <div>
            <BannerImg src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Profile>
                <ProfileImg src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ProfileDetail>
                    <ProfileName>MISS MAXIM CONTEST</ProfileName>
                    <ProfileVideo>
                        @missmaxim ‧ 192K subscribers ‧ 363 videos
                    </ProfileVideo>
                    <ProfileAbout>
                        미스맥심 콘테스트 (MISS MAXIM CONTEST)
                    </ProfileAbout>
                    <ProfileSubscribe>Subscribe</ProfileSubscribe>
                </ProfileDetail>
            </Profile>
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
    height: 40px;
`;

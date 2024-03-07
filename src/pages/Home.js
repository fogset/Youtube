import styled from "styled-components";
import Card from "../components/Card/Card";
import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { HomePageVideoRecoil } from "../state";
import { useRecoilState } from "recoil";

function Home() {
    const [HomePageVideo, setHomePageVideo] =
        useRecoilState(HomePageVideoRecoil);

    return (
        <Container>
            <Sidebar />
            <Video>
                {HomePageVideo.map((currentVideoDetail) => (
                    <Card currentVideoDetail={currentVideoDetail} />
                ))}
            </Video>
        </Container>
    );
}

export default Home;
const Container = styled.div``;
const Video = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* overflow-x: hidden;
    overflow-y: auto; */
    height: 100%;
    width: 88%;
    top: 10%;
    left: 180px;
    padding-bottom: 100px;
    position: absolute;
`;
const Button = styled.div`
    margin-left: 5px;
    height: 40px;
    width: 100px;
    background-color: lightblue;
    color: red;
    font-size: 40px;
    position: fixed;
    z-index: 120;
    top: 0px;
    position: absolute;
`;

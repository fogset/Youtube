import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { testRecoil } from "../../state";
import ReactPlayer from "react-player";
import { API_KEY } from "../../data";
import LiveChat from "../../components/Live/LiveChat";

function About2() {
    const [test, setTest] = useRecoilState(testRecoil);
    const [channelData, setChannelData] = useState(null);
    const [search, setSearch] = useState("firebase");
    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then((res) => res.json())
            .then((data) => setChannelData(data.items));
    };
    useEffect(() => {
        //fetchOtherData();
        console.log("channelData");
        console.log(channelData);
    }, [channelData]);
    function getData() {
        fetchOtherData();
    }
    return (
        <Container>
            <ReactPlayer
                url="https://www.youtube.com/live/pZzia5NrMuU"
                width="710px"
                height="400px"
                loop={true}
                controls={true}
            />

            <LiveChat />
        </Container>
    );
}

export default About2;
const Text = styled.div`
    font-size: larger;
`;
const Container = styled.div`
    position: absolute;
    top: 100px;
    left: 100px;
    z-index: 20;
    display: flex;
`;
// useEffect(() => {
//     alert("test");
// }, [test]);
// <div onClick={getData}>Click </div>;

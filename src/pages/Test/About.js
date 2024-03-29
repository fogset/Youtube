import styled from "styled-components";
import React, { useState, useEffect } from "react";
import VideoPlayer from "../VideoPlayer";
import { useRecoilState } from "recoil";
import { testRecoil } from "../../state";
import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player";
function About({ about }) {
    const [test, setTest] = useRecoilState(testRecoil);
    const passwordHintId = useId();
    const small_id = uuidv4().slice(0, 8);
    function button1Clicked() {
        setTest(test + 1);
    }
    function button2Clicked() {
        setTest(test + 1);
    }
    return (
        <Container>
            about 1
            <Text onClick={button1Clicked}>
                Test + 1 is {test} passwordHintId{passwordHintId}
            </Text>
            uuid {uuidv4()} ======= small_id {small_id}
            <VideoPlayer
            // video={[
            //     "https://www.twitch.tv/sodapoppin",
            //     "https://www.youtube.com/watch?v=eO4TEm3Fllo&list=PLKgRDYt8mDh8o_bTkbJqZvKlr9MTy5WyL&index=4&ab_channel=MISSMAXIMCONTEST",
            // ]}
            />
            <ReactPlayer
                url="https://www.youtube.com/shorts/5YwH-LT0aHc"
                width="280px"
                height="510px"
                loop={true}
            />
            <ReactPlayer
                url="https://www.youtube.com/watch?v=oFqW2gEFe5k&ab_channel=%EA%BD%83%EB%B9%B5TVGGotBBangTV"
                width="510px"
                height="300px"
                loop={true}
            />
        </Container>
    );
}
// const handleClick = async () => {
//     const reference = doc(db, "page2", "4G9OTrIN76PUC2wBAFRg");
//     await deleteDoc(reference);
//     alert("click");
// };
export default About;
const Text = styled.div`
    font-size: larger;
`;
const Container = styled.div`
    color: black;
    position: absolute;
    top: 200px;
    left: 500px;
    z-index: 20;
    font-size: larger;
`;

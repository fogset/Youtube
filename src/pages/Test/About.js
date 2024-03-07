import styled from "styled-components";
import React, { useState, useEffect } from "react";
import VideoPlayer from "../VideoPlayer";
import { useRecoilState } from "recoil";
import { testRecoil } from "../../state";
import { useId } from "react";
function About({ about }) {
    const [test, setTest] = useRecoilState(testRecoil);
    const passwordHintId = useId();
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
                Test + 1 is {test} {passwordHintId}
            </Text>
            <VideoPlayer
            // video={[
            //     "https://www.twitch.tv/sodapoppin",
            //     "https://www.youtube.com/watch?v=eO4TEm3Fllo&list=PLKgRDYt8mDh8o_bTkbJqZvKlr9MTy5WyL&index=4&ab_channel=MISSMAXIMCONTEST",
            // ]}
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
`;

import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilPageIndex } from "../../state";
import Card from "../Card/Card";

function Admin({ changeState, page1, page2, page3 }) {
    const [pageIndex, setPageIndex] = useState(null);
    const [recoilpageIndex, setRecoilPageIndex] =
        useRecoilState(recoilPageIndex);
    useEffect(() => {
        console.log("recoilpageIndex");
        console.log(recoilpageIndex);
    }, [recoilpageIndex]);
    function button1Clicked() {
        setPageIndex(page1);
    }
    function button2Clicked() {
        setPageIndex(page2);
        // changePage();
    }
    function button3Clicked() {
        setPageIndex(page3);
        // changePage();
    }
    function setButtonClicked() {
        alert("sfsdf");
        setRecoilPageIndex(pageIndex);
    }
    function pageTest() {
        changeState();
        alert("admin");
    }
    return (
        <div>
            <ButtonContainer>
                <Button onClick={button1Clicked}>page 1</Button>
                <Button onClick={button2Clicked}>page 2</Button>
                <Button onClick={button3Clicked}>page 3</Button>
                <Button onClick={pageTest}>page test</Button>
            </ButtonContainer>
            {pageIndex !== null && (
                <Container>
                    {pageIndex.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </Container>
            )}
            <SetButton onClick={setButtonClicked}>Set</SetButton>
        </div>
    );
}

export default Admin;

const ButtonContainer = styled.div`
    display: flex;
`;

const SetButton = styled.div`
    position: fixed;
    bottom: 2%;
    right: 2%;
    height: 30px;
    width: 70px;
    background-color: pink;
    color: red;
    font-size: larger;
    text-align: center;
`;

const Button = styled.div`
    margin-left: 5px;
    height: 30px;
    width: 70px;
    background-color: pink;
    color: red;
    font-size: larger;
`;
const Container = styled.div`
    height: 800px;
    width: 100%;
    background-color: lightblue;
    font-size: larger;
`;

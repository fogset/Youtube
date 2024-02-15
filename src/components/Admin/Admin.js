import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilPageIndex } from "../../state";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function Admin({ changeState, page1, page2, page3 }) {
    const [currentPageVideo, setCurrentPageVideo] = useState(null);
    const [recoilpageIndex, setRecoilPageIndex] =
        useRecoilState(recoilPageIndex);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        console.log("recoilpageIndex");
        console.log(recoilpageIndex);
    }, [recoilpageIndex]);
    function button1Clicked() {
        setCurrentPageVideo(page1);
    }
    function button2Clicked() {
        setCurrentPageVideo(page2);
        // changePage();
    }
    function button3Clicked() {
        setCurrentPageVideo(page3);
        // changePage();
    }
    function openModalButton() {
        alert("openModal");
        //setRecoilPageIndex(currentPageVideo);
        setOpenModal(true);
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
            {currentPageVideo !== null && (
                <Container>
                    {currentPageVideo.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </Container>
            )}
            <SetButton onClick={openModalButton}>openModal</SetButton>
            {openModal === true && (
                <Modal open={openModal} setOpenModal={setOpenModal} />
            )}
            <h1>sdfsdfsdlf{openModal}</h1>
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
    width: 120px;
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
    background-color: lightblue;
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

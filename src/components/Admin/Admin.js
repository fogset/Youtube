import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firestore";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { addedModalVideoRecoil, modalTotalVideoRecoil } from "../../state";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function Admin({ changeState, page1, page2, page3 }) {
    const [modalTotalVideo, setModalTotalVideo] = useRecoilState(
        modalTotalVideoRecoil
    );
    const [addedModalVideo, setAddedModalVideo] = useRecoilState(
        addedModalVideoRecoil
    );
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("page1");

    function button1Clicked() {
        setModalTotalVideo(page1);
        setCurrentPage("page1");
    }
    function button2Clicked() {
        setModalTotalVideo(page2);
        setCurrentPage("page2");
        // changePage();
    }
    function button3Clicked() {
        setModalTotalVideo(page3);
        setCurrentPage("page3");
    }
    function openModalButton() {
        //alert("openModal");
        //setRecoilPageIndex(currentPageVideo);
        setOpenModal(true);
    }
    function pageTest() {
        changeState();
        alert("admin");
    }

    function SetCurrentPage() {
        for (let i = 0; i < addedModalVideo.length; i++) {
            console.log("view");
            console.log(addedModalVideo[i].view);
            const docRef = addDoc(collection(db, currentPage), {
                day: addedModalVideo[i].day,
                id: addedModalVideo[i].id,
                image: addedModalVideo[i].image,
                title: addedModalVideo[i].title,
                username: addedModalVideo[i].username,
                video: addedModalVideo[i].video,
                view: addedModalVideo[i].view,
                channelId: addedModalVideo[i].channelId,
                comments: addedModalVideo[i].comments,
            });
        }
        alert("added");
    }

    // useEffect(() => {
    //     console.log("modalTotalVideo");
    //     console.log(modalTotalVideo);
    //     console.log("addedModalVideo");
    //     console.log(addedModalVideo);
    // }, [modalTotalVideo, addedModalVideo]);
    useEffect(() => {
        button1Clicked();
    }, []);

    return (
        <div>
            <ButtonContainer>
                <Button onClick={button1Clicked}>page 1</Button>
                <Button onClick={button2Clicked}>page 2</Button>
                <Button onClick={button3Clicked}>page 3</Button>
                <Button onClick={pageTest}>page test</Button>
            </ButtonContainer>
            {modalTotalVideo !== null && (
                <Container>
                    {modalTotalVideo.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </Container>
            )}
            <SetPageButton onClick={SetCurrentPage}>
                Set Current Page
            </SetPageButton>
            <SetButton onClick={openModalButton}>openModal</SetButton>
            {openModal === true && <Modal setOpenModal={setOpenModal} />}
        </div>
    );
}

export default Admin;

const ButtonContainer = styled.div`
    display: flex;
`;

const SetPageButton = styled.div`
    position: fixed;
    bottom: 7%;
    right: 2%;
    height: 30px;
    width: 150px;
    background-color: pink;
    color: white;
    font-size: 20px;
    text-align: center;
    &:hover {
        background-color: blue;
        color: white;
    }
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
    &:hover {
        background-color: blue;
        color: white;
    }
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

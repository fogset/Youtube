import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firestore";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { addedModalVideoRecoil, modalTotalVideoRecoil, HomePageVideoRecoil } from "../../state";
import Card from "../Card/Card";
import Modal from "./Modal/Modal";
import PageCard from "./PageCard";

function Admin({ page1, page2, page3 }) {
    const [modalTotalVideo, setModalTotalVideo] = useRecoilState(modalTotalVideoRecoil);
    const [addedModalVideo, setAddedModalVideo] = useRecoilState(addedModalVideoRecoil);
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("page1");
    const [HomePageVideo, setHomePageVideo] = useRecoilState(HomePageVideoRecoil);

    function button1Clicked() {
        setModalTotalVideo(page1);
        setCurrentPage("page1");
        setHomePageVideo(page1);
    }
    function button2Clicked() {
        setModalTotalVideo(page2);
        setCurrentPage("page2");
        setHomePageVideo(page2);
    }
    function button3Clicked() {
        setModalTotalVideo(page3);
        setCurrentPage("page3");
        setHomePageVideo(page3);
    }
    function openModalButton() {
        //alert("openModal");
        //setRecoilPageIndex(currentPageVideo);
        setOpenModal(true);
    }
    function pageTest() {
        alert("admin");
        window.location.href = "/";
    }

    function SetCurrentPage() {
        for (let i = 0; i < addedModalVideo.length; i++) {
            console.log("addedModalVideo");
            console.log(addedModalVideo[i]);
            const docRef = addDoc(collection(db, currentPage), {
                channelId: addedModalVideo[i].channelId,
                channelImg: addedModalVideo[i].channelImg,
                channel_Title: addedModalVideo[i].channel_Title,
                comments: addedModalVideo[i].comments,
                date: addedModalVideo[i].date,
                description: addedModalVideo[i].description,
                id: addedModalVideo[i].id,
                // playlist: addedModalVideo[i].playlist,
                subscribers: addedModalVideo[i].subscribers,
                title: addedModalVideo[i].title,
                video: addedModalVideo[i].video,
                view: addedModalVideo[i].view,
            });
        }
        alert("added");
    }

    useEffect(() => {
        button1Clicked();
    }, []);

    return (
        <MainPage>
            <ButtonContainer>
                <Button onClick={button1Clicked}>page 1</Button>
                <Button onClick={button2Clicked}>page 2</Button>
                <Button onClick={button3Clicked}>page 3</Button>
                <Button onClick={pageTest}>page test</Button>
            </ButtonContainer>
            {modalTotalVideo !== null && (
                <Container>
                    {modalTotalVideo.map((currentVideoDetail) => (
                        <PageCard
                            currentVideoDetail={currentVideoDetail}
                            currentPage={currentPage}
                        />
                    ))}
                </Container>
            )}
            <SetPageButton onClick={SetCurrentPage}>Add to DataBase</SetPageButton>
            <SetButton onClick={openModalButton}>openModal</SetButton>
            {openModal === true && <Modal setOpenModal={setOpenModal} />}
        </MainPage>
    );
}

export default Admin;

const MainPage = styled.div`
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    left: 190px;
    top: 0;
    width: 85%;
    height: 100vw;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 800px;
    padding-right: 1%;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 2%;
`;
const Button = styled.div`
    height: 30px;
    width: 100%;
    background-color: #fff8dc;
    color: #cd853f;
    border: 1px solid grey;
    margin-right: 1%;
    &:hover,
    &:focus {
        color: #800000;
    }
    //color: ${(props) => (props.selected === false ? "#d2691e" : "#800000")};
`;
const SetPageButton = styled.div`
    position: fixed;
    bottom: 7%;
    right: 2%;
    height: 50px;
    width: 150px;
    background-color: pink;
    color: white;
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
    width: 150px;
    background-color: pink;
    color: white;
    text-align: center;
    &:hover {
        background-color: blue;
        color: white;
    }
`;

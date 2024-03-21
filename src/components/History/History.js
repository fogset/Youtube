import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
function History() {
    return (
        <Cotainer>
            <Sidebar />
            <HistoryContainer>asdfsadfsadfsf</HistoryContainer>
        </Cotainer>
    );
}

export default History;
const Title = styled.div`
    display: flex;
    padding-top: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const HistoryContainer = styled.div`
    position: absolute;
    background-color: red;
    left: 220px;
    height: 100%;
    width: 900px;
`;
const Cotainer = styled.div``;
//  const addToHistory = async (e) => {
//      e.preventDefault();
//      try {
//          const docRef = await addDoc(collection(db, "subscribedChannel"), {
//              video: currentVideo.video,
//              title: currentVideo.title,
//              descriptions: currentVideo.title,
//          });
//          alert("subscribed");
//      } catch (error) {
//          console.log(error);
//      }
//  };

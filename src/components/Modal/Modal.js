import React, { useState, useEffect } from "react";
import styled from "styled-components";
function Modal({ open, setOpenModal }) {
    function closeButton() {
        setOpenModal(false);
        alert("close");
    }
    return (
        <Container>
            <h1>modal</h1>
            <CloseButton onClick={closeButton}>X</CloseButton>
        </Container>
    );
}

export default Modal;

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
`;
const CloseButton = styled.div`
    position: fixed;
    top: 8px;
    right: 8px;
`;

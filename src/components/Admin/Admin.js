import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilPage1 } from "../../state";
import Card from "../Card/Card";

function Admin({ page1, page2 }) {
    const [pageIndex, setPageIndex] = useState(null);
    useEffect(() => {
        console.log(page1);
    }, []);
    function button1Clicked() {
        setPageIndex(page1);
    }
    function button2Clicked() {
        setPageIndex(page2);
    }
    return (
        <div>
            <ButtonContainer>
                <Button onClick={button1Clicked}>page 1</Button>
                <Button onClick={button2Clicked}>page 2</Button>
            </ButtonContainer>
            {pageIndex !== null && (
                <Container>
                    {pageIndex.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </Container>
            )}
        </div>
    );
}

export default Admin;

const ButtonContainer = styled.div`
    display: flex;
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

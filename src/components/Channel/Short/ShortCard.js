import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function ShortCard({ currentShortDetail }) {
    const shortID = `/shorts/${currentShortDetail.id}`;

    return (
        <LinkShort to={shortID}>
            <Container>
                <ReactPlayer
                    url={currentShortDetail.shortURL}
                    width="100%"
                    height="100%"
                    loop={true}
                    playIcon={true}
                />
                <Title>{currentShortDetail.title}</Title>
                <Views>{currentShortDetail.views} views</Views>
            </Container>
        </LinkShort>
    );
}

export default ShortCard;
const Container = styled.div`
    pointer-events: none;
    width: 290px;
    height: 510px;
`;
const LinkShort = styled(Link)`
    text-decoration: none;
`;

const Views = styled.div`
    color: black;
`;
const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: black;
`;

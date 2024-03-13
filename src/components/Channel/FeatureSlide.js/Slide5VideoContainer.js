import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Slide3VideoContainer({ currentVideoDetail }) {
    console.log("currentVideoDetail");
    console.log(currentVideoDetail);
    const videoId = `/video/${currentVideoDetail.id}`;
    return (
        <Link to={videoId} style={{ textDecoration: "none" }}>
            <Container>
                <ReactPlayer
                    url={currentVideoDetail.video}
                    width="100%"
                    height="100%"
                    light={true}
                    playIcon={true}
                />
                <Details>
                    <Texts>
                        <Title>
                            {currentVideoDetail.title.substring(0, 30)}
                        </Title>
                        <Info>
                            {currentVideoDetail.view} views .{" "}
                            {currentVideoDetail.date} agosdf
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}
export default Slide3VideoContainer;
const Container = styled.div`
    width: 210px;
    cursor: pointer;
    height: 150px;
    position: relative;
`;

const Details = styled.div`
    display: flex;
`;

const Texts = styled.div`
    margin-left: 5px;
`;
const Title = styled.h1`
    font-size: 13px;
    font-weight: bold;
    color: black;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;

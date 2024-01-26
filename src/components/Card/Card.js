import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 300px;
    margin-bottom: 45px;
    cursor: pointer;
    margin-right: 2%;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`;
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;
function Card() {
    return (
        <Link to="/video/test" style={{ textDecoration: "none" }}>
            <Container>
                <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" />
                <Details>
                    <ChannelImage src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>sdfsdf</ChannelName>
                        <Info>660,908 views . 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}

export default Card;

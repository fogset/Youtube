import React from "react";
import styled from "styled-components";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
function LikeDisLike() {
    return (
        <LikeContainer>
            <Like>
                <AiOutlineLike size={24} />
            </Like>
            <Line />
            <Dislike>
                <AiOutlineDislike size={24} />
            </Dislike>
        </LikeContainer>
    );
}

export default LikeDisLike;
const LikeContainer = styled.div`
    background-color: #e8eaed;
    height: 40px;
    width: 150px;
    border-radius: 25px;
    position: relative;
    margin-left: 7%;
`;
const Like = styled.div`
    position: absolute;
    left: 22px;
    top: 6px;
`;
const Dislike = styled.div`
    position: absolute;
    right: 22px;
    top: 6px;
`;

const Line = styled.div`
    background-color: #787a79;
    height: 25px;
    width: 2px;
    position: absolute;
    right: 62px;
    top: 6px;
`;

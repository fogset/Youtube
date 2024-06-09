import styled from "styled-components";
import SingleLiveChat from "./SingleLiveChat";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical, BsEmojiSunglasses } from "react-icons/bs";
function LiveChat() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState();
    const bottomRef = useRef(null);
    function enterChat(event) {
        if (event.key === "Enter") {
            messageList.push(message);
            setMessage("");
            bottomRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
    return (
        <Container>
            <TopContainer>
                <CommentTitle>
                    Top chat {message}
                    <DownArrowContainer>
                        <FaChevronDown />
                    </DownArrowContainer>
                </CommentTitle>
                <CloseSort>
                    <BsThreeDotsVertical size={25} />
                    <Close>
                        <GrClose size={25} />
                    </Close>
                </CloseSort>
            </TopContainer>
            <CommentListContainer>
                {messageList.map((chat) => (
                    <SingleLiveChat chat={chat} />
                ))}
                <ScrollBottom ref={bottomRef} />
            </CommentListContainer>
            <HorizontalLine />
            <NewComment>
                <HorizontalLine />
                <InputContainer>
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={enterChat}
                        placeholder="Chat..."
                    />
                    <BsEmojiSunglasses size={30} />
                </InputContainer>
                <DollarContainer>
                    <RiMoneyDollarBoxLine size={30} />
                </DollarContainer>
            </NewComment>
        </Container>
    );
}

export default LiveChat;
const Container = styled.div`
    position: fixed;
    top: 10%;
    right: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: gray;
    width: 400px;
    height: 600px;
    border-radius: 10px;
`;

const CommentTitle = styled.div`
    font-size: 22px;
    display: flex;
    flex-direction: row;
    gap: 5px;
`;
const TopContainer = styled.div`
    position: absolute;
    top: 20px;
    width: 360px;
    display: flex;
    height: 40px;
    border-bottom: solid;
    border-bottom-color: gray;
    border-bottom-width: 2px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: white;
    z-index: 100;
`;

const Close = styled.div``;
const ScrollBottom = styled.div`
    height: 65px;
`;
const CloseSort = styled.div`
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-between;
    width: 80px;
`;
const DownArrowContainer = styled.div`
    margin-top: 2%;
`;
const NewComment = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 400px;
    background-color: white;
    margin-top: 2px;
    z-index: 10;
    border-style: solid;
    border-width: 1px;
    bottom: 0px;
    right: 0px;
    justify-content: center;
    gap: 10px;
    padding: 10px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Input = styled.input`
    border: none;
    font-size: large;
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const HorizontalLine = styled.div`
    position: absolute;
    height: 10px;
    width: 100px;
    color: red;
    z-index: 100;
`;
const CommentListContainer = styled.div`
    margin-top: 60px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-left: 10px;
    height: 500px;
    gap: 10px;
`;
const InputContainer = styled.div`
    background-color: #f2f2f2;
    height: 35px;
    width: 300px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    padding: 7px;
    align-items: center;
`;
const DollarContainer = styled.div`
    background-color: #f2f2f2;
    border-radius: 50px;
    padding: 7px;
    align-items: center;
`;

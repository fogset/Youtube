import styled from "styled-components";
import SingleLiveChat from "./SingleLiveChat";
import SortByButton from "../Button/SortByButton";
import { GrClose } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
function LiveChat() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState();
    const bottomRef = useRef(null);
    function enterChat(event) {
        if (event.key === "Enter") {
            messageList.push(message);
            console.log(messageList);
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
                <p ref={bottomRef}></p>
            </CommentListContainer>

            <HorizontalLine />
            <NewComment>
                <HorizontalLine />
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={enterChat}
                    placeholder="Add a comment..."
                />
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
    height: 500px;
    border-radius: 10px;
    padding: 16px;
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
    width: 400px;
    display: flex;
`;

const Close = styled.div``;
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
    width: 397px;
    background-color: white;
    margin-top: 2px;
    z-index: 10;
    border-style: solid;
    border-width: 1px;
    bottom: -60px;
    right: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const HorizontalLine = styled.div`
    position: absolute;
    height: 2px;
    width: 100px;
    color: red;
    z-index: 100;
`;
const CommentListContainer = styled.div`
    margin-top: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-left: 10px;
    height: 500px;
`;

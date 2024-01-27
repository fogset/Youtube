import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 14px;
`;
function Comment() {
    return (
        <Container>
            <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
            <Details>
                <Name>
                    Jonh Doe <Date>1 day ago</Date>
                </Name>
                <Text>
                    sum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo,
                </Text>
            </Details>
        </Container>
    );
}

export default Comment;

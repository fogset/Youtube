import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
function ChannelSidebar() {
    return (
        <Container>
            <LinkUrl to="/">
                <Item>
                    <Icon_container>
                        <GoHome size={22} />
                    </Icon_container>
                    <Item_text>Home</Item_text>
                </Item>
            </LinkUrl>
            <Item>
                <Icon_container>
                    <SiYoutubeshorts size={22} />
                </Icon_container>
                <Item_text>Shorts</Item_text>
            </Item>
            <Item>
                <Icon_container>
                    <MdOutlineSubscriptions size={22} />
                </Icon_container>
                <Item_text>Subscriptions</Item_text>
            </Item>
            <Item>
                <Icon_container>
                    <CiYoutube size={22} />
                </Icon_container>
                <Item_text>You</Item_text>
            </Item>
        </Container>
    );
}

export default ChannelSidebar;
const Container = styled.div`
    font-size: 14px;
    background-color: white;
    color: black;
    position: fixed;
    width: 100px;
    height: 100%;
    top: 80px;
    left: 0%;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 33px;
    text-align: center;
`;
const Item_text = styled.div`
    font-size: 13px;
`;
const Icon_container = styled.div``;
const LinkUrl = styled(Link)`
    text-decoration: none;
`;

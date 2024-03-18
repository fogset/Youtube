import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FaCloudUploadAlt, FaGhost } from "react-icons/fa";
import { RiWechatChannelsFill } from "react-icons/ri";
import { GrDomain } from "react-icons/gr";
import { CiSettings, CiLogout } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import { MdOndemandVideo } from "react-icons/md";
function AdminSideBar() {
    return (
        <Container>
            <Top>
                <Brand>
                    <BrandText>Ghost</BrandText>
                    <BrandIcon>
                        <FaGhost />
                    </BrandIcon>
                </Brand>
            </Top>
            <Body>
                <Menu1>
                    <Item>
                        <SidebarLink to="/upload">
                            <LinkIcon>
                                <FaCloudUploadAlt />
                            </LinkIcon>
                            <LinkText>Upload</LinkText>
                        </SidebarLink>
                    </Item>
                    <Item>
                        <SidebarLink to="/createChannel">
                            <LinkIcon>
                                <RiWechatChannelsFill />
                            </LinkIcon>
                            <LinkText>CreateChannel</LinkText>
                        </SidebarLink>
                    </Item>
                    <Item>
                        <SidebarLink to="/admin">
                            <LinkIcon>
                                <GrDomain />
                            </LinkIcon>
                            <LinkText>Main Page</LinkText>
                        </SidebarLink>
                    </Item>
                    <Item>
                        <SidebarLink to="/recommendVideo">
                            <LinkIcon>
                                <MdOndemandVideo />
                            </LinkIcon>
                            <LinkText>Recommend</LinkText>
                        </SidebarLink>
                    </Item>
                    <Item>
                        <SidebarLink to="/commentsGenerator">
                            <LinkIcon>
                                <LiaCommentSolid />
                            </LinkIcon>
                            <LinkText>RandomComments</LinkText>
                        </SidebarLink>
                    </Item>
                </Menu1>
                <Menu2>
                    <Item>
                        <SidebarLink to="/setting">
                            <LinkIcon>
                                <CiSettings />
                            </LinkIcon>
                            <LinkText>Settings</LinkText>
                        </SidebarLink>
                    </Item>
                    <Item>
                        <SidebarLink to="/logout">
                            <LinkIcon>
                                <CiLogout />
                            </LinkIcon>
                            <LinkText>Logout</LinkText>
                        </SidebarLink>
                    </Item>
                </Menu2>
            </Body>
        </Container>
    );
}

export default AdminSideBar;

const Container = styled.div`
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    background-color: white;
    padding: 20px 14px;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    transition: var(--default-transition);
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--border-color-inverted);
`;
const Menu1 = styled.div``;
const Menu2 = styled.div`
    margin-bottom: 80px;
`;
const Brand = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin-left: 5%;
`;
const BrandText = styled.div`
    text-transform: uppercase;
    font-weight: 900;
    color: var(--logo-color);
    margin-bottom: 8px;
    margin-right: 15%;
    @media (max-width: 1200px) {
        display: none;
    }

    @media (max-width: 768px) {
        display: inline-block;
    }
`;
const BrandIcon = styled.div`
    margin-left: 5%;
`;

const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Item = styled.div`
    margin-bottom: 15px;
`;
const SidebarLink = styled(Link)`
    display: flex;
    color: #c0c0c0;
    text-decoration: none;
    margin: 10px;
    &:hover,
    &:focus {
        color: #8b4513;
    }
    &:active {
        color: red;
    }
    @media (max-width: 700px) {
        display: none;
    }
`;
const LinkIcon = styled.div`
    margin-right: 5%;
`;

const LinkText = styled.div`
    font-weight: 500;
`;

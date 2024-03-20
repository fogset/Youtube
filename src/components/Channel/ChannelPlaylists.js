import { recoilChannelList } from "./../../state";
import { useRecoilState } from "recoil";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import SortByButton from "../Button/SortByButton";
import styled from "styled-components";
import ChannelPlayListCard from "./Playlist/ChannelPlayListCard";
import { useParams } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { GetPlayListByChannel_ID } from "../GetMethodFrom_ID/GetByID";
function ChannelPlaylists() {
    const [channelsTotal, setChannelsTotal] = useRecoilState(recoilChannelList);
    const [currentChannelPlaylist, setCurrentChannelPlaylist] = useState(null);
    const Id = useParams().channelId;

    useEffect(() => {
        var FilterPlaylist = GetPlayListByChannel_ID(Id, channelsTotal);
        setCurrentChannelPlaylist(FilterPlaylist);
    }, [channelsTotal]);
    return (
        <div>
            <ChannelSidebar />
            <PlaylistContainer>
                <ChannelHeader />
                <HorizontalLine />
                <TitleContainer>
                    <Title>Created playlists</Title>
                    <SortByButton />
                </TitleContainer>
                {currentChannelPlaylist !== null && (
                    <PlayListUrlContainer>
                        {currentChannelPlaylist.map((currentPlaylist) => (
                            <ChannelPlayListCard
                                currentPlaylist={currentPlaylist}
                                channelId={Id}
                            />
                        ))}
                    </PlayListUrlContainer>
                )}
            </PlaylistContainer>
        </div>
    );
}

export default ChannelPlaylists;

const PlaylistContainer = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
`;
const HorizontalLine = styled.div`
    height: 1px;
    background-color: #b3b9c4;
    border: none;
`;
const Title = styled.div`
    font-size: 22px;
`;
const TitleContainer = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    width: 90%;
`;
const SortContainer = styled.div`
    display: flex;
`;
const SortText = styled.div`
    padding-top: 5px;
    font-size: 20px;
    padding-left: 10px;
`;
const SortIcon = styled.div`
    font-size: 20px;
`;
const PlayListUrlContainer = styled.div`
    display: flex;
`;

import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import SearchCard from "./SearchCard";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../data";

function Search() {
    const [searchResultData, setSearchResultData] = useState(null);
    const params = useParams();
    const searchResult = params.searchResult;
    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchResult}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then((res) => res.json())
            .then((data) => setSearchResultData(data.items));
    };
    useEffect(() => {
        if (searchResultData === null) {
            fetchOtherData();
            console.log("searchResultData-------------------------------");
            console.log(searchResultData);
        }
        console.log("searchResultData-------------------------------");
        console.log(searchResultData);
    }, [searchResultData]);
    return (
        <div>
            <Sidebar />
            <HistoryContainer>
                <WatchHistory>Watch history</WatchHistory>
                <Today>Today</Today>
                {searchResultData && (
                    <Container>
                        <SearchCard searchResult={searchResultData[0].snippet} />
                    </Container>
                )}
            </HistoryContainer>
        </div>
    );
}

export default Search;
const Today = styled.div`
    margin-top: 3%;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const WatchHistory = styled.div`
    font-size: 35px;
    font-weight: bold;
`;
const HistoryContainer = styled.div`
    position: absolute;

    top: 10%;
    left: 220px;
    height: 100%;
    width: 700px;
`;
const Container = styled.div``;

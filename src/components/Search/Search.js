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
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchResult}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then((res) => res.json())
            .then((data) => setSearchResultData(data.items));
    };
    useEffect(() => {
        if (searchResultData === null) {
            fetchOtherData();
        }
        console.log(searchResultData);
        console.log("searchResultData");
    }, [searchResultData]);
    return (
        <div>
            <Sidebar />
            <HistoryContainer>
                {searchResultData && (
                    <Container>
                        {searchResultData.map((currentSearchRes) => (
                            <SearchCard currentSearchRes={currentSearchRes} />
                        ))}
                    </Container>
                )}
            </HistoryContainer>
        </div>
    );
}

export default Search;

const HistoryContainer = styled.div`
    position: absolute;
    top: 12%;
    left: 220px;
    height: 100%;
    width: 100%;
`;
const Container = styled.div``;

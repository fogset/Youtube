import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import data from "./data.json";
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
`;
function Home() {
    return (
        <Container>
            {data.map((user) => (
                <Card
                    id={user.id}
                    title={user.title}
                    username={user.username}
                    view={user.view}
                    day={user.day}
                    image={user.image}
                    video={user.video}
                />
            ))}
        </Container>
    );
}

export default Home;

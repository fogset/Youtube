import React from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ video }) {
    const url = `${video}`;
    return <ReactPlayer url={video} width="800px" height="460px" controls />;
}

export default VideoPlayer;

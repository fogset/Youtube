import React from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ video }) {
    return <ReactPlayer url={video} width="100%" height="100%" controls />;
}

export default VideoPlayer;

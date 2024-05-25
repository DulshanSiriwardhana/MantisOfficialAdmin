import React from "react";
import ReactPlayer from 'react-player/youtube'
import './video.css'

const Video =(URL)=>{
    const {url} = URL;

    return(
        <div className="videocontainer">
            <ReactPlayer className='video' url={url} width="100%" height="100%"/>
        </div>
    );
}

export default Video;
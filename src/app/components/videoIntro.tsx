"use client";
import React from 'react'
import { useRef, useState } from 'react';

function VideoIntro() {

    const [IsOpen, setIsOpen] = useState(false);
    const VideoRef = useRef<HTMLVideoElement | null>(null);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        if (VideoRef.current) {
            const video = VideoRef.current as HTMLVideoElement;
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <>
            <img src="assets/images/iot/video.png" alt="Hero Image" className="w-100" onClick={openDialog} />
            <dialog open={IsOpen} className='sticky-dialog'>
                <button onClick={closeDialog} className="btn btn-primary video-close">
                    <i className="fas fa-times"></i>
                </button>
                <video ref={VideoRef} width="400" controls>
                    <source src="../../assets/Sequence 01_8.mp4" type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </dialog>
        </>
    )
}

export default VideoIntro


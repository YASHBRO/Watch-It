import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SecureAxios from "../../utils/SecureAxios";
import { Grid } from "@mui/material";
import YouTube from "react-youtube";
import { io } from "socket.io-client";

const resetRoomDetails = {
    _id: null,
    host: {},
    guest: [],
    currentVideo: null,
    guestControl: false,
    privateRoom: false,
    roomCode: null,
};

function Room() {
    const [roomDetails, setRoomDetails] = useState(resetRoomDetails);

    const currentVideoIdRef = useRef("");

    const pathParams = useParams();

    const socket = io.connect("http://localhost:3000");

    useEffect(() => {
        socket.on("connect", () => {
            console.log("yd", socket.id);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        SecureAxios(`get-room/${pathParams.roomCode}`)
            .then((res) => {
                setRoomDetails(res.data.result);
            })
            .catch((err) => {
                console.log("yd", err);
            });
    }, [pathParams.roomCode]);

    useEffect(() => {
        if (roomDetails?.currentVideo) {
            const videoUrl = new URL(roomDetails?.currentVideo);
            currentVideoIdRef.current = videoUrl.searchParams.get("v");
        }
    }, [roomDetails]);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid
                item
                xs={8}
                sx={{
                    aspectRatio: "16/9",
                }}
            >
                <YouTube
                    videoId={currentVideoIdRef.current}
                    style={{ height: "100%" }}
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: { autoplay: 0, mute: 1 },
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Room;

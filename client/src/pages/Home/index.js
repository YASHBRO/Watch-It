import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./HomeStyle.css";
import GetAllRoomsApi from "./api";

const homeBgVideo = require("../../assets/videos/homeBackground.mp4");

function Home() {
    const [allRoom, setAllRoom] = useState([]);

    useEffect(() => {
        console.log("yd init");
        GetAllRoomsApi().then((res) => {
            console.log("yd", res);
        });
    }, []);

    const BackgroundVideo = () => (
        <>
            <div>
                <video className="home-video-bg" autoPlay muted loop>
                    <source src={homeBgVideo} type="video/mp4" />
                </video>
            </div>
            <div className="home-overlay"></div>
        </>
    );

    return (
        <Box>
            <BackgroundVideo />
        </Box>
    );
}

export default Home;

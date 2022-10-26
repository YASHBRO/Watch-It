import { Paper, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RoomList(props) {
    const { allRooms = [] } = props;

    const [roomsCover, setRoomsCover] = useState([]);

    useEffect(() => {
        if (allRooms.length < 1) return;
        axios
            .get("https://picsum.photos/v2/list", {
                params: { limit: allRooms.length },
            })
            .then((res) => {
                setRoomsCover(res.data);
            });
    }, [allRooms]);

    console.log("yd", allRooms);

    const RoomCard = ({ room, index }) => (
        <Paper elevation={3}>
            <img
                src={`${roomsCover[index]?.download_url}`}
                alt="cover"
                width="100px"
            />
            {room.host.name}
            {room.roomCode}
        </Paper>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {allRooms.map((room, ind) => (
                <Grid item key={ind} xs={4}>
                    <RoomCard room={room} index={ind} />
                </Grid>
            ))}
        </Grid>
    );
}

export default RoomList;

import { Paper, Grid } from "@mui/material";
import React from "react";

function RoomList(props) {
    const { allRooms = [] } = props;

    const RoomCard = ({ room, index }) => (
        <Paper elevation={3}>
            <img
                src={`https://picsum.photos/200?random=${index}`}
                alt="cover"
                width="100px"
            />
            {room.host.name}
            {room.roomCode}
        </Paper>
    );

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: "80%" }}
        >
            {allRooms.map((room, ind) => (
                <Grid item key={ind} xs={4}>
                    <RoomCard room={room} index={ind} />
                </Grid>
            ))}
        </Grid>
    );
}

export default RoomList;

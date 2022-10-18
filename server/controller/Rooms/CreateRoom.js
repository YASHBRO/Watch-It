const Rooms = require("../../models/Rooms");

async function CreateRoom(req, res, next) {
    const {
        body: { hostId, guestControl = false, privateRoom = false },
    } = req;

    if (!hostId) {
        res.status(300).json({ message: "Params no fulfilled" });
        return;
    }

    const newRoom = await Rooms.create({
        host: hostId,
        guestControl: guestControl === "true",
        privateRoom: privateRoom === "true",
    });

    res.status(201).json({
        message: "Room created",
        details: {
            roomId: newRoom._id,
            roomCode: newRoom.roomCode,
            hostId: newRoom.host,
            guestControl: newRoom.guestControl,
            privateRoom: newRoom.privateRoom,
        },
    });

    next();
}

module.exports = CreateRoom;

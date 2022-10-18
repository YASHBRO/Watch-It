const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World");
});

const NewUser = require("../controller/Users/NewUser");
router.post("/create-user", NewUser);

const CreateRoom = require("../controller/Rooms/CreateRoom");
router.post("/create-room", CreateRoom);

const GetAllRooms = require("../controller/Rooms/GetAllRooms");
router.get("/get-all-rooms", GetAllRooms);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World");
});

const NewUser = require("../controller/Users/NewUser");
router.post("/create-user", NewUser);

const NewRoom = require("../controller/Rooms/NewRoom");
router.post("/create-room", NewRoom);

module.exports = router;

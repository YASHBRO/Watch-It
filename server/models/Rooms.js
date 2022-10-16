const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const getCurrentTime = () => Date.now();

const generateRandomCode = () => uuidv4();

const RoomSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: getCurrentTime,
    },
    roomCode: {
        type: String,
        required: true,
        unique: true,
        default: generateRandomCode,
    },
    host: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    guest: {
        type: [mongoose.SchemaType.ObjectId],
        ref: "User",
    },
    currentVideo: {
        type: String,
    },
    guestControl: {
        type: Boolean,
        default: false,
    },
    privateRoom: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Room", RoomSchema);

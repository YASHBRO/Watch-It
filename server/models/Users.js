const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    hostOfRoom: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Room",
    },
    guestOfRoom: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Room",
    },
});

module.exports = mongoose.model("User", UserSchema);

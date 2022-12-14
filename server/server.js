const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("./middleware/Logger");
const CustomRouter = require("./router");

dotenv.config();

const app = express();
const httpServer = createServer(app);

const port = process.env.PORT || 3000;

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5000",
    },
});

io.on("connection", (socket) => {
    console.log("socket conneted", socket.id);
});

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        throw error;
    }
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);

app.use(CustomRouter);

httpServer.listen(port, function () {
    connectToMongoDB();
    console.log(`App is listening to port ${port}`);
});

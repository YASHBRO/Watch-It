let express = require("express");
let app = express();

let cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

let dotenv = require("dotenv");
dotenv.config();

const logger = require("./middleware/Logger");
const CustomRouter = require("./router");

let port = process.env.PORT || 3000;

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

app.listen(port, function () {
    connectToMongoDB();
    console.log(`App is listening to port ${port}`);
});
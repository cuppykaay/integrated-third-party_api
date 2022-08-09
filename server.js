const express = require("express");

const app = express();
// const { MongoTopologyClosedError } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const userRouter = require("./routes/user")

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGOHQ_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log("DB Connection Successfull"))
.catch((err) => {
    console.log(err);
    process.exit();
});


app.use(express.json())
app.use("/api/auth", userRouter)


const port = process.env.PORT || 5000
app.listen(port, async() => {
    console.log(`Server running at http://localhost:${port}`);
})



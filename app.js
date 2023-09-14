const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const AppRouter = require("./routes/AppRouter");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api", AppRouter);

const PORT = 4020;
const MONGO_DB_URI = "mongodb://127.0.0.1:27017/batch02april";
mongoose
.connect(MONGO_DB_URI)
.then(()=>{
    console.log("DB connected");
    app.listen(PORT, ()=>{
    console.log("server is running on port", PORT);
});

}).catch((error)=>{
    console.log(error);
});



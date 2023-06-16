const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

const path = require("path");


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload());

//routes

const product = require("./routes/productRoute.js")
const user = require("./routes/userRoute.js");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product )
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
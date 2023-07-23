const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require("cors");
const corsOption = require("./config/corsOption");

require("dotenv").config();

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/ecommerce", require("./routes/api/ecommerce"))

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
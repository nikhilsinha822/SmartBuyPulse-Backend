const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require("cors");
const corsOption = require("./config/corsOption");

require("dotenv").config();

app.use(cors(corsOption));

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
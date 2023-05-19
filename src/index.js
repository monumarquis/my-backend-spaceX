require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const capsule = require("./routes/capsule.js");
const Capsule = require("./models/capsule");
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/capsules", capsule);

app.get("/", async (req, res) => {
  res.send("This is  My BrainStorms  Backend");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`listening on .....http://localhost:${PORT}`);
});

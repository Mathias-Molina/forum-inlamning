const express = require("express");
const cors = require("cors");
const threadRoutes = require("./routes/threads");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/threads", threadRoutes);

app.listen(3000, () => {
  console.log("Servern igång på http://localhost:3000");
});

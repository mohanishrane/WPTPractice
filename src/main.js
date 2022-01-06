const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const res = require("express/lib/response");
app.use(cors());

const { select, insert } = require("./user");

app.get("/users", async (req, res) => {
  let list = await select();
  res.json(list);
});

app.post("/adduser", async (req, res) => {
  let val = req.body;
  await insert(val);
  res.json({ message: "User Added in DB" });
});

app.listen(5000, () => console.log("Server Started"));

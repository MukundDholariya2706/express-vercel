import express from "express";

const app = express();

const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(port, () => {
  console.log("server is running on " + port);
});

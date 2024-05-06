const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const express = require("express");
const mongoose = require("mongoose");
const celeSc = require("./schema");

const app = express();
app.use(express.json());

//db connection
const dbUrl =
  "mongodb+srv://<username>:<pass>@vimalcluster.afqw9.mongodb.net/ProCelebrity?retryWrites=true&w=majority";
mongoose.connect(dbUrl);

//CRUD operations

app.post("/celebrities", async (req, res) => {
  try {
    const data = await celeSc.create(req.body);
    res.json({
      message: "Data inserted",
    });
  } catch (error) {
    res.json({
      message: "Data not inserted",
    });
  }
});

app.get("/celebrities", async (req, res) => {
  try {
    const data = await celeSc.find();
    res.json({
      message: data,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.get("/celebrities/:id", async (req, res) => {
  try {
    const data = await celeSc.findOne({ id: req.params.id });
    console.log(req.params.id);
    res.json({
      message: data,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.delete("/celebrities/:id/delete", async (req, res) => {
  try {
    const data = await celeSc.deleteOne({ id: req.params.id });
    res.json({
      message: "Data deleted",
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});
//server port
app.listen(3000, () => {
  console.log("Server is running");
});

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();


app.listen(3001, () => {
    console.log("server running on 3000")
})
app.get("/", (req, res) => {
  res.send("Welcome to the ecommerce backend!");
});

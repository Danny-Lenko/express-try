import express from "express";
import bodyParser from "body-parser";
import { appendFile } from "node:fs";

const app = express();
const port = 3000;

app.use(express.static("public"));

appendFile("hello.txt", " World", (err) => {
  if (err) {
    console.log("error!");
  }
});

app.listen(3000);

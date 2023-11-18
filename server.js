import express from "express";
import initialize from "./app/App.js";

const app = express();

const port = 3000;

initialize(app);

app.get("/", (request, response) => response.send("Hello World"));
app.listen(port, () => console.log(`Server is listening at port ${port}`)); //Port number and callback function
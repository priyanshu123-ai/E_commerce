import express from "express"
import dotenv from "dotenv"
import database from "./utils/database.js";


const app = express();
dotenv.config();

const port = process.config.PORT|| 3000;
database();


app.listen(port,() => {
    console.log(`Server is running at Port ${port}`);
})




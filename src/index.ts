import "reflect-metadata";
import { createConnection } from "typeorm";
const setUpServer = require("./server");

createConnection().then(async connection => {
    // create express app
    const app = setUpServer();
    // start express server
    app.listen(3000);
    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
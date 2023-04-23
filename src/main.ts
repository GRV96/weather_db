import * as express from "express";

const app = express();

app.get("/", (request, response) => {
	response.send("Hello, world!");
});

console.log("weather_db running.");

app.listen(5000);

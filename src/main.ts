import * as express from "express";
import * as bodyParser from 'body-parser';
import { WeatherRecord } from "weather_record";

const app = express();
app.use(bodyParser.json());

app.get("/", (request, response) => {
	response.status(200).send("Hello, world!");
});

app.post("/record", (request, response) => {
	console.log(`Request body: \n ${request.body}\nEnd`);
	response.sendStatus(200);
});

console.log("weather_db running.");

app.listen(5000);

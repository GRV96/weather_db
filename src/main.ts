import * as express from "express";
import { WeatherRecord } from "./weather_record";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
	response.status(200).send("Hello, world!");
});

app.post("/record", (request, response) => {
	var reqBody = request.body
	var record: WeatherRecord = new WeatherRecord(
		reqBody.moment,
		reqBody.temperature,
		reqBody.precipProb,
		reqBody.windSpeed);
	console.log(`${record}`);
	response.sendStatus(200);
});

console.log("weather_db running.");

app.listen(5000);

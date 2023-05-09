import * as express from "express";
import { WeatherRecord } from "./weather_record";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
	response.status(200).send("A weather database");
});

app.post("/record", (request, response) => {
	var reqBody = request.body
	var weatherRecord: WeatherRecord = new WeatherRecord(
		reqBody.moment,
		reqBody.temperature,
		reqBody.precipProb,
		reqBody.windSpeed);
	console.log(`${weatherRecord}`);
	response.sendStatus(200);
});

app.listen(5000, "weather_db running.");

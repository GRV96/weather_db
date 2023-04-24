import * as express from "express";
import * as bodyParser from 'body-parser';
import { WeatherRecord } from "weather_record";

const app = express();
app.use(bodyParser.json());
//app.use(express.json());

app.get("/", (request, response) => {
	response.status(200).send("Hello, world!");
});

app.post("/record", (request, response) => {
	var reqBody = request.body
	console.log(`Moment: ${reqBody.moment}`);
	console.log(`Temperature: ${reqBody.temperature}`);
	console.log(`Precipitation probability: ${reqBody.precipProb}`);
	console.log(`Wind speed: ${reqBody.windSpeed}`);
	response.sendStatus(200);
});

console.log("weather_db running.");

app.listen(5000);

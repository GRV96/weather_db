export class WeatherRecord {
	readonly moment: Date;
	readonly temperature: number;
	readonly precipProb: number;
	readonly windSpeed: number;

	constructor(moment: Date|string, temperature: number,
		precipProb: number, windSpeed: number) {
			this.moment = new Date(moment);
			this.temperature = temperature;
			this.precipProb = precipProb;
			this.windSpeed = windSpeed;
	}

	toString(): string {
		return `${this.moment}; ${this.temperature}°C; ${this.precipProb*100}%; ${this.windSpeed} km/h`;
	}
}

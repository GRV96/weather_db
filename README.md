# weather_db

A weather database for learning NodeJS and Docker.

Run the Docker container in detached mode.

```
docker compose up -d
```

Stop the container.

```
docker compose stop
```

In order to record weather data, send a POST request to the API.

URL:
```
http://localhost:5000/record/
```

Request body example:
```
{
    "moment": "2023-04-23T23:14-04:00",
    "temperature": 6,
    "precipProb": 0.19,
    "windSpeed": 10
}
```

The precipitation probability should range from 0.00 to 1.00. In the above
example, the temperature is in degrees Celsius, and the wind speed is in
kilometers per hour.

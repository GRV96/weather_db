# weather_db

## Français

Une base de données météorologique pour apprendre NodeJS et Docker.

Lancez le conteneur Docker en mode détaché.

```
docker compose up -d
```

La commande suivante arrête le conteneur.

```
docker compose stop
```

Pour enregistrer des données météorologiques, envoyez une requête POST à l'API.

URL:
```
http://localhost:5000/record/
```

Exemple de corps de requête:
```
{
    "moment": "2023-04-23T23:14-04:00",
    "temperature": 6,
    "precipProb": 0.19,
    "windSpeed": 10
}
```

La probabilité de précipitation devrait être de 0,00 à 1,00. Dans l'exemple
ci-dessus, la température est en degrés Celsius, et la vitesse du vent est en
kilomètres à l'heure.

## English

A weather database for learning NodeJS and Docker.

Run the Docker container in detached mode.

```
docker compose up -d
```

The following command stops the container.

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

FROM node:20.1.0-alpine3.17

WORKDIR weather_db

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]

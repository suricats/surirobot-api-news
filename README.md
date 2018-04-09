# Weather API for Surirobot

## Overview
This API uses Google News (France) to retrieve current fresh news. It will return the synopsis of a random article among the 10 important articles that Google provides.

## Requirements
* NodeJs >= 8

## Setup
Run in the console:
```
git clone git@github.com:suricats/surirobot-api-news.git service-news
cd service-news
npm install
cp src/config.js.example src/config.js
```

Fill src/config.js with your Google News API KEY and choose the server port or use the suri downloader:

```
cp .env.example .env
nano .env
tools/get-credentials.sh
```

### Running the server
To run the server, run:

```
npm start
```

### Documentation
To view the Swagger UI interface, open a browser and access:
```
https://news.api.surirobot.net/docs
```

You can also find the Swagger file at:
```
api/swagger.yaml
```

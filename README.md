# Jobs API

## Description

This API that allows you to create, update, delete and get jobs. Using JWT for authentication.
It usees swagger UI for a user friendly documentation.

## Deployment
[Job_API](https://jobsapi-2rms.onrender.com)

This is a free deployment on render.com and it is not a production deployment. It is just for testing purposes. The database is hosted on MongoDB Atlas. The server is automatically spun down after 15 minutes of inactivity. So, it may take a few seconds to spin up the server when you make a request. You may have to refresh the page a couple of times to get a response.

## Installation

```bash
$ npm install
```
## Running the app

```bash
$ npm start
```
## MongoDB connection

```bash
 MONGODB_URI=mongodb://localhost:3000/api/jobs or your mongodb connection to atlas.
```

<div>
:hammer_and_wrench: Languages and Tools : <br />
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg"width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original-wordmark.svg"width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg"width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"width="40" height="40"/>&nbsp;
<img src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="express" width="40" height="40"/>&nbsp;

```json
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "express-rate-limit": "^5.3.0",
    "helmet": "^4.6.0",
    "http-status-codes": "^2.1.4",
    "joi": "^17.4.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.2",
    "rate-limiter": "^0.2.0",
    "swagger-ui-express": "^4.1.6",
    "xss-clean": "^0.1.1",
    "yamljs": "^0.3.0"
  }
```
</div><br />











 

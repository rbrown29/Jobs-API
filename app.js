require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// routers 
const jobsRouter = require('./routes/jobs');
const authRouter = require('./routes/auth');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.set('trust proxy', 1); // trust first proxy
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));
app.use(express.json());
app.use(helmet()); // set security headers
app.use(cors()); // enable cors
app.use(xss()); // prevent xss attacks
app.options('*', cors()); // cors preflight

// routes
app.get('/', (req, res) => {
  res.send('<h1>Jobs API</h1> <a href="/api-docs">Documentation</a>');
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


// routes
app.use('/api/v1/jobs', authenticateUser, jobsRouter);
app.use('/api/v1/auth', authRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to db
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

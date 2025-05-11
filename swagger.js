import swaggerAutogen from 'swagger-autogen';
import dotenv from "dotenv";

dotenv.config();

const doc = {
  info: {
    title: 'Reviews API',
    description: 'Documentation for the Reviews API',
  },
  host: process.env.API_IP ? `${process.env.API_IP}:4000/api/reviews` : 'localhost:4000/api/reviews',
  //host: 'localhost:4000/api',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const routes = ['./routes/reviews.routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
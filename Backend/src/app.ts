import express from "express";
import appConfig from "./2-utils/AppConfig";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import cors from "cors"
import dataController from "./6-controllers/data-controller";

// Instance of server
const server = express();

// Middleware for getting the request.body
server.use( express.json());

// Cors 
server.use(cors({ origin: 'http://localhost:3000' } ))

// Data Route
server.use('/api', dataController);

// Catch all routes
server.use('*', routeNotFound);

// CatchAll middleware
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening to http://localhost:${appConfig.port}`))
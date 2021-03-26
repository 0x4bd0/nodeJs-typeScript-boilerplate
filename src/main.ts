import express, { Application, Request, Response } from 'express';
import exampleRouter from './example';
require('dotenv').config();

const app: Application = express();

app.use(exampleRouter);

app.listen(process.env.PORT, () =>
	console.log(`Server running on port  ${process.env.PORT}`)
);

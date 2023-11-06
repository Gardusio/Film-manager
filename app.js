import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import session from 'express-session';
//import cors from 'cors';
import { authenticate } from './src/auth/passport/config.js';
import { authRouter } from './src/auth/authRouter.js';
import { userErrorHandler } from './src/users/userErrors.js';
import { validateRequest } from './src/utils/validation/validator.js';
import authErrorHandler from './src/auth/errors/authErrorHandler.js';
import { filmRouter } from './src/films/filmRouter.js';
import { dbErrorsHandler } from './src/utils/errors/dbErrors.js';
import { filmErrorHandler } from './src/films/filmErrors.js';
import { reviewsRouter } from './src/reviews/reviewsRouter.js';

dotenv.config()

const port = process.env.PORT || 8080;
const app = express();


/** Set up and enable Cross-Origin Resource Sharing (CORS)
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  app.use(cors(corsOptions));
*/

app.use(express.json());
app.use(morgan('dev'));


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(authenticate);


app.use('/api/auth', authRouter);
app.use('/api/films', filmRouter);
app.use('/api/reviews', reviewsRouter);


app.use(validateRequest);
app.use(userErrorHandler);
app.use(authErrorHandler);
app.use(dbErrorsHandler);
app.use(filmErrorHandler);


export { app, port };
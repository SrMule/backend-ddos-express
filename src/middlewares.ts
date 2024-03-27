import express from 'express';
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 3, 
    message: 'Demasiadas solicitudes desde esta IP, por favor inténtalo de nuevo más tarde.'
  });

const configureMiddlewares = (app: express.Application) => {
    app.use(morgan('dev'))
    app.use('/api', limiter);
};

export { configureMiddlewares };
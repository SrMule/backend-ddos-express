import express from 'express'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const app = express()
const port = 3000
app.use(morgan('dev'))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3, 
  message: 'Demasiadas solicitudes desde esta IP, por favor inténtalo de nuevo más tarde.'
});

app.use('/api', limiter);

app.get('/api/test', (req, res) => {
  res.send('Ruta limitada. Bienvenido!');
})

app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`)
})
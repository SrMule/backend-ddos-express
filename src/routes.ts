import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/test', (req, res) => {
    res.send('Ruta limitada. Bienvenido!');
})

export default router;
import { Router } from 'express';

const router = Router();

router.get('/hi', (req, res) => {
    console.log("cheguei aqui");
    res.send('API Root');
});

export default router;

import { Router } from 'express';

const router = Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('API Root');
});

// Adicione mais rotas conforme necessário
// router.post('/recurso', controlador.recursoPostHandler);

export default router;

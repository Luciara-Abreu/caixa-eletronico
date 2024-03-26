import { Request, Response, Router } from 'express';
import SaldoService from '../services/Saldo.service';



const router = Router();

// BUSCAR POR ID
router.get('/', async (req: Request, res: Response) => {
  const { id } = req.params
  const { idConta } = req.body
    try {
      const saldos = await SaldoService.getById(id, idConta);
      res.send(saldos);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  });

export default router;

import { Request, Response, Router } from 'express';
import DepositoService from '../services/Deposito.service';


const router = Router();

// BUSCAR TODOS
  router.get('/', async (req: Request, res: Response)=> {
    try{
      const depositos = await DepositoService.getAll();
      res.status(200).send(depositos)
    }catch(error: any){
      res.status(400).send({ message: error.message });
    }
  })


// BUSCAR POR ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const deposito = await DepositoService.getById(req.params.id);
    res.send(deposito);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

// ADICIONAR
router.post('/', async (req: Request, res: Response) => {
  try {
    await DepositoService.create(req.body);
    res.status(201).send({ message: 'Depósito adicionado com sucesso!' });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});


//DELETAR
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await DepositoService.remove(req.params.id)
    res.status(200).send({ message: 'Deposito removido com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default router;

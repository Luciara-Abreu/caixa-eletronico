import { Request, Response, Router } from 'express';
import SaqueService from '../services/Saque.service';



const router = Router();

// BUSCAR TODOS
router.get('/', async (req: Request, res: Response)=> {
  try{
    const depositos = await SaqueService.getAll();
    res.status(200).send(depositos)
  }catch(error: any){
    res.status(400).send({ message: error.message });
  }
})


// BUSCAR POR ID
router.get('/:id', async (req: Request, res: Response) => {
try {
  const deposito = await SaqueService.getById(req.params.id);
  res.send(deposito);
} catch (error: any) {
  res.status(400).send({ message: error.message });
}
});

// ADICIONAR
router.post('/', async (req: Request, res: Response) => {
try {
  await SaqueService.create(req.body);
  res.status(201).send({ message: 'Saque efetuado com sucesso!' });
} catch (error: any) {
  res.status(400).send({ message: error.message });
}
});


//DELETAR
router.delete('/:id', async (req: Request, res: Response) => {
try {
  await SaqueService.remove(req.params.id)
  res.status(200).send({ message: 'Saque removido com sucesso!' })
} catch (error: any) {
  res.status(400).send({ message: error.message })
}
})

export default router;
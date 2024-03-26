import { Router } from "express";
import DepositoRouter from './Deposito.route'

const router = Router();

router.use('/deposito', DepositoRouter);


export default router;
import { Router } from "express";
import DepositoRouter from './Deposito.route'
import SaldoRouter from './Saldo.route'

const router = Router();

router.use('/deposito', DepositoRouter);
router.use('/saldo', SaldoRouter);


export default router;
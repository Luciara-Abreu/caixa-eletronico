import { Router } from "express";
import DepositoRouter from './Deposito.route'
import SaldoRouter from './Saldo.route'
import SaqueRouter from './Saque.route'

const router = Router();

router.use('/deposito', DepositoRouter);
router.use('/saldo', SaldoRouter);
router.use('/saque', SaqueRouter);


export default router;
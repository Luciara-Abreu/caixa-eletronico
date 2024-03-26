
import DepositoRepository from "../repositories/Deposito.repository";
import SaldoRepository from "../repositories/Saldo.repository";
import SaqueRepository from "../repositories/Saque.repository";


class SaldoService {


    async getById(id: string, idConta: string) {
        const saldos = await DepositoRepository.getAll();
        const idUserDeposito = await DepositoRepository.getByIdConta(idConta);

        const saques = await SaqueRepository.getAll();
        const idUserSaque = await SaqueRepository.getByIdConta(idConta);

        if (!idUserDeposito || !idUserSaque) {
            throw new Error('Conta não localizada')
        }

        // Somando todos os saldos para obter o saldo total
        const depositoAtual = saldos.reduce((acc, saldo) => acc + saldo.valor, 0);

        // Somar todos os saques realizados por essa conta de usuário
        const saqueAtual = saques.reduce((acc, saque) => acc + saque.valor, 0);


        const saldoAtual = depositoAtual - saqueAtual
        
        const List = {
            idConta,
            valor: saldoAtual
        }
        await SaldoRepository.create(List)
        return List

    }

}

export default new SaldoService();

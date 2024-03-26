
import DepositoRepository from "../repositories/Deposito.repository";


class SaldoService{

    async getById(id: string, idConta: string){
        const saldos = await DepositoRepository.getAll();
        const idUser = await DepositoRepository.getByIdConta(idConta);

        if(!idUser){
            throw new Error('Conta não localizada')
        }

        // Somando todos os saldos para obter o saldo total
        const saldoAtual = saldos.reduce((acc, saldo) => acc + saldo.valor, 0);

        const List = {
            idConta,
            saldoAtual
        }
        return List
    }

}

export default new SaldoService();

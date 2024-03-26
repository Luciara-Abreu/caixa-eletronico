import { ICaixaEletronico } from '../interfaces/caixa.eletronico';
import DepositoRepository from '../repositories/Deposito.repository';
import SaqueRepository from '../repositories/Saque.repository';

class SaqueService {

    async create(saque: ICaixaEletronico) {
        const idConta = saque.idConta;
        const valor = saque.valor

        const saldos = await DepositoRepository.getAll();
        const idUserDeposito = await DepositoRepository.getByIdConta(idConta);
   
        if (!idUserDeposito) {
            throw new Error('Conta não localizada')
        } 

     // Somando todos os saldos para obter o saldo total
        const saldoAtual = saldos.reduce((acc, saldo) => acc + saldo.valor, 0);
        if(valor > saldoAtual){
            throw new Error('Saldo insuficiente')
        }
        return await SaqueRepository.create(saque);
    }

    

    async getAll() {
        const saques = await SaqueRepository.getAll();

        if (!saques) {
            throw new Error('Depósitos não encontrados.');
        }
        return saques
    }


    async getById(id: string) {
        const idUser = await SaqueRepository.getByIdConta(id);
        const listSaques = await SaqueRepository.getAll();

        if (!idUser) {
            throw new Error('Usuário não encontrado.');
        }

        if (!listSaques) {
            throw new Error('Depósitos não encontrados para esta conta.');
        }

        const idConta1 = listSaques.map(saque => saque.idConta);
        const saquesDoUsuario = listSaques.filter(saque => saque.idConta === idUser.idConta);

        const list = {
            idUser,
            saquesDoUsuario
        };

        return list;
    }


    async remove(id: string) {
        const saque = await SaqueRepository.getById(id)
        if (!saque) {
            throw new Error('Usuário não encontrado')
        } else {
            return await SaqueRepository.remove(id)
        }

    }


}

export default new SaqueService();




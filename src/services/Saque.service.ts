import { ICaixaEletronico } from '../interfaces/caixa.eletronico';
import DepositoRepository from '../repositories/Deposito.repository';
import SaldoRepository from '../repositories/Saldo.repository';
import SaqueRepository from '../repositories/Saque.repository';

class SaqueService {

    async create(saque: ICaixaEletronico) {
        const idConta = saque.idConta;
        const valor = saque.valor

        const saldos = await DepositoRepository.getAll();
        const idUserSaldo = await DepositoRepository.getByIdConta(idConta);
        const saques = await SaqueRepository.getAll();

   
        if (!idUserSaldo) {
            throw new Error('Conta não localizada')
        } 

     // Somando todos os saldos para obter o saldo total
        const saldoTotal: number = saldos.reduce((acc, saldo) => acc + saldo.valor, 0);
     // Soma todos os saques 
        const saqueTotal: number = saques.reduce((acc, saque)=> acc + saque.valor, 0);
        
        const saldoAtual = saldoTotal - saqueTotal

        // console.log('valor', valor, typeof(valor))   
        // console.log('saldoAtual', saldoAtual, typeof(saldoAtual))
        // console.log(valor > saldoAtual)

        if(valor > saldoAtual){
            throw new Error('Saldo insuficiente')
        }
       

        await SaqueRepository.create(saque);
        await SaldoRepository.create(saque);
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



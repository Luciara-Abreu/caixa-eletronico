import { ICaixaEletronico } from "../interfaces/caixa.eletronico";
import DepositoRepository from "../repositories/Deposito.repository";

class DepositoService {


    async create(deposito: ICaixaEletronico) {
        if (!deposito) {
            throw new Error('Depósito inválido.');
        }
        return DepositoRepository.create(deposito);
    }


    async getAll() {
         const depositos = await DepositoRepository.getAll();
      
        if (!depositos) {
            throw new Error('Depósitos não encontrados.');
        }
        return  depositos        
    }
   
    async getById(id: string) {
        const idUser = await DepositoRepository.getByIdConta(id);
        const listDepositos = await DepositoRepository.getAll();
    
        if (!idUser) {
            throw new Error('Usuário não encontrado.');
        }
          
        if (!listDepositos) {
            throw new Error('Depósitos não encontrados para esta conta.');
        }
    
        const idConta1 = listDepositos.map(deposito => deposito.idConta);
        const depositosDoUsuario = listDepositos.filter(deposito => deposito.idConta === idUser.idConta);
    
        const list = {
            idUser,
            depositosDoUsuario
        };
    
        return list;
    } 



    async remove(id: string){
        const deposito = await DepositoRepository.getById(id)
        if(!deposito){
          throw new Error('Usuário não encontrado')
        }else{
          return await DepositoRepository.remove(id)
        }
    
      }
}


export default new DepositoService();

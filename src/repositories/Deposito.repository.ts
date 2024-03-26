
import DepositoModel from "../models/Deposito.model";
import { ICaixaEletronico } from "../interfaces/caixa.eletronico";

class DepositoRepository {
    async getAll() {
        return await DepositoModel.find();
    }

    async create(deposito: ICaixaEletronico) {
        return await DepositoModel.create(deposito);
    }

   async getById(_id: string) {
        return await DepositoModel.findOne({ _id: _id })
      }

    async getByIdConta(id: string){
        return await DepositoModel.findOne({ idConta: id })
    }  


   async update(_id: string, deposito: ICaixaEletronico) {
        return await DepositoModel.updateOne({ _id: _id }, { $set: deposito })
      }

   async remove(id: string) {
        return await DepositoModel.deleteOne({ _id: id })
    }
  
}
    

export default new DepositoRepository();
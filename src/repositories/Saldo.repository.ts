import { ICaixaEletronico } from "../interfaces/caixa.eletronico";
import SaldoModel from "../models/Saldo.model";

class SaldoRepository {
    async getAll() {
        return await SaldoModel.find();
    }

   async getById(_id: string) {
        return await SaldoModel.findOne({ _id: _id })
      }

      async getByIdConta(id: string){
        return await SaldoModel.findOne({ idConta: id })
    }  


   async update(_id: string, saldo: ICaixaEletronico) {
        return await SaldoModel.updateOne({ _id: _id }, { $set: saldo })
      }
  
}

export default new SaldoRepository();

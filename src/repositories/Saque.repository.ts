import { ICaixaEletronico } from "../interfaces/caixa.eletronico";
import SaqueModel from "../models/Saque.model";

class SaqueRepository {
    async getAll() {
        return await SaqueModel.find();
    }

    async create(saque: ICaixaEletronico) {
        return await SaqueModel.create(saque);
    }

      
   async getById(_id: string) {
        return await SaqueModel.findOne({ _id: _id })
      }

      async getByIdConta(id: string){
        return await SaqueModel.findOne({ idConta: id })
    }  


   async update(_id: string, saque: ICaixaEletronico) {
        return await SaqueModel.updateOne({ _id: _id }, { $set: saque })
      }
}

export default new SaqueRepository();

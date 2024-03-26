import SaqueModel from "../models/Saque.model";
import { ICaixaEletronico } from "../interfaces/caixa.eletronico";

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

  async remove(id: string) {
        return await SaqueModel.deleteOne({ _id: id })
    }
}

export default new SaqueRepository();

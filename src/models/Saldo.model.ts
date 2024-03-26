
import mongoose from 'mongoose';

const saldoSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true
  },
  idConta: {
    type: String,
    required: true
  },
   
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },

});

const SaldoModel = mongoose.model('Saldo', saldoSchema);

export default SaldoModel;
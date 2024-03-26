import mongoose from 'mongoose';

const depositoSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
    min: 0
  },
  idConta:{
    type: String,
    require: true,
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

const DepositoModel = mongoose.model('Deposito', depositoSchema);

export default DepositoModel;

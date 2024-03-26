
import mongoose from 'mongoose';

const saqueSchema = new mongoose.Schema({
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

const SaqueModel = mongoose.model('Saque', saqueSchema);

export default SaqueModel;

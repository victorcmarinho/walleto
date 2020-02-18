import mongoose from 'mongoose'
import config from '../configurations'

const Schema = mongoose.Schema

const billSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  storeCnpj: { type: String, required: false },
  storeFantasyName: { type: String, required: false },
  amount: { type: Number, required: true },
  discount: { type: Number, required: false, default: 0.0 },
  paidOut: { type: Boolean, required: false },
  paidOutDate: { type: Date, required: false },
  creationDate: { type: Date, required: false, default: Date.now },
  purchaseDate: { type: Date, required: true },
  billetInfo: { 
    billet: { type: String, required: false },
    code: { type: String, required: false },
    value: { type: Number, required: false },
    paymentSlip: { type: Date, required: false },
    bankName: { type: String, required: false },
  },
})

const BillSchema = mongoose.model(config.BillsCollection, billSchema)

export default BillSchema

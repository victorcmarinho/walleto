import mongoose from 'mongoose'
import config from '../configurations'

const Schema = mongoose.Schema

const billSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  discount: { type: Number, required: false, default: 0.0 },
  paidOut: { type: Boolean, required: true, paidOutDate: false },
  paidOutDate: { type: Date, required: true },
  creationDate: { type: Date, required: false, default: Date.now }
})

const BillSchema = mongoose.model(config.BillsCollection, billSchema)

export default BillSchema

import mongoose from 'mongoose'
import config from '../configurations'

const Schema = mongoose.Schema

const billSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  discount: { type: Number, required: true },
  paidOut: { type: Boolean, required: true },
  paidOutDate: { type: Date, required: true },
  creationDate: { type: Date, required: false, default: Date.now }
})

const BillSchema = mongoose.model(config.BillsCollection, billSchema)

export default BillSchema

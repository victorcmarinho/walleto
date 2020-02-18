import mongoose from 'mongoose'
import config from '../configurations'

const Schema = mongoose.Schema

const paymentSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  bills: [{ type: Schema.Types.ObjectId, ref: 'bills', required: true }],
  billetInfo: { 
    billet: { type: String, required: false },
    code: { type: String, required: false },
    value: { type: String, required: false },
    purchaseInterest: { type: Number, required: false },
    interestFrom: { type: Number, required: false },
    paidWithBillet: { type: Boolean, required: false, default: false }
  },
  bankCard: {
    value: { type: String, required: false },
    purchaseInterest: { type: Number, required: false },
    interestFrom: { type: Number, required: false },
    paidWithBankCard: { type: Boolean, required: false }
  },
  amount: { type: Number, required: true },
  discount: { type: Number, required: true },
  paidOut: { type: Boolean, required: true },
  paidOutDate: { type: Date, required: true },
  creationDate: { type: Date, required: false, default: Date.now }
})

const PaymentSchema = mongoose.model(config.PaymentsCollection, paymentSchema)

export default PaymentSchema

import mongoose from 'mongoose'
import PaymentSchema from '../schemas'

class PaymentRepository {
  constructor () {
    this.schema = new mongoose.model('payments')
  }


  async payBillByBillet(payment) {
    try {
      const model = new this.schema(payment)

      const response = await this.schema.create(model)

      return response
    } catch (err) {
      console.error(`[PaymentRepository - addBillToUser] ${err.message}`)
      return err
    }
  }
}

export default PaymentRepository

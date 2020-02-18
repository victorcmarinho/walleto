import mongoose from 'mongoose'
import PaymentSchema from '../schemas'

class PaymentRepository {
  constructor () {
    this.schema = new mongoose.model('payments')
  }

  async addBillToUser(bill) {
    try {
      const model = new this.schema(bill)

      const response = await this.schema.create(model)

      return response
    } catch (err) {
      console.error(`[UserRepository - sign] ${err.message}`)
      return err
    }
  }
}

export default PaymentRepository

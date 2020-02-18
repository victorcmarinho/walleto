import mongoose from 'mongoose'
import BillsSchema from '../schemas'

class BillsRepository {
  constructor () {
    this.schema = new mongoose.model('bills')
  }

  async createUnpaidBill (data) {
    try {
      const model = new this.schema(data)

      const response = await this.schema.create(model)

      return response
    } catch (err) {
      console.error(`[BillsRepository - createUnpaidBill] ${err.message}`)
      return err
    }
  }
}

export default BillsRepository

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
  
  async findBillsToPay(user, bills) {
    try {
      const response = await this.schema.find({ user: user, _id: { '$in': bills } })

      return response
    } catch (err) {
      console.error(`[BillsRepository - createUnpaidBill] ${err.message}`)
      return err
    }
  }

  async editPaidBillsByCode(bill) {
    try {
      const response = await this.schema.update({ _id: bill }, { paidOut: true, paidOutDate: Date.now })

      return response
    } catch (err) {
      console.error(`[BillsRepository - editPaidBillsByCode] ${err.message}`)
      return err
    }
  }

  async getBillsByStatusOfPayment(paidOut, skip, limit) {
    try {
      const response = await this.schema.find({ paidOut }).skip(skip).limit(limit)

      return response
    }
    catch (err) {
      console.error(`[BillsRepository - getBillsByStatusOfPayment] ${err.message}`)
      return err
    }
  }

  async getAllBills (id, skip, limit) {
    try {
      const response = await this.schema.find({ user: id }).skip(skip).limit(limit)

      return response
    }
    catch (err) {
      console.error(`[BillsRepository - getAllBills] ${err.message}`)
      return err
    }
  }
}

export default BillsRepository

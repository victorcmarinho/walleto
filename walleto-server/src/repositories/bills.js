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


  async sendBillsToUser (body) {
    try {
      let sendedToUser = {
        sended: [],
        notSended: []
      }
  
      if (body.length > 0) {
        body.forEach(async bill => {
          const existsUser = await getUser(bill.cnpj)

          if (existsUser.length > 0) {
            let bill = mountBillToUser(bill, existsUser[0].id)
            sendedToUser.sended.push(await this.paymentRepository.addBillToUser(bill))
          }
          else {
            sendedToUser.sended.push(mountDontSendedBill(bill))
          }
        })
      }
      else {
        return Response.Error(mountErrorNotExistsBills())
      }
    }
    catch (error) {
      console.error(`[PaymentsService - sendBillsToUser] ${error.message}`)
      return Response.Error(error)
    }
  }
}

export default BillsRepository

import mongoose from 'mongoose'
import { Response } from '../helpers'

class PaymentsService {
  constructor (paymentRepository, userRepository) {
    this.paymentRepository = paymentRepository
    this.userRepository = userRepository
  }

  

}

export default PaymentsService
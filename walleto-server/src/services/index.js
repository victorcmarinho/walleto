import UserService from './user'
import BillsService from './bills'
import PaymentService from './payments'

import { userRepository, billsRepository, paymentRepository } from '../repositories'

const userService = new UserService(userRepository)
const billsService = new BillsService(billsRepository, userRepository)
const paymentService = new PaymentService(paymentRepository, userRepository)

export {
    userService,
    billsService,
    paymentService
}
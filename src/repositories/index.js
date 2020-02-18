import database from '../database'

import UserRepository from './user'
import BillsRepository from './bills'
import PaymentRepository from './payments'

database()

const userRepository = new UserRepository()
const billsRepository = new BillsRepository()
const paymentRepository = new PaymentRepository()

export {
    userRepository,
    billsRepository,
    paymentRepository
}
import database from '../database'

import UserRepository from './user'
import BillsRepository from './bills'

database()

const userRepository = new UserRepository()
const billsRepository = new BillsRepository()

export {
    userRepository,
    billsRepository
}
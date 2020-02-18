import UserService from './user'
import BillsService from './bills'

import { userRepository } from '../repositories'
import { billsRepository } from '../repositories'

const userService = new UserService(userRepository)
const billsService = new BillsService(billsRepository)

export {
    userService,
    billsService
}
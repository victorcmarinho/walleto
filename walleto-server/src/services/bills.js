import { Response } from '../helpers'

class BillsService {
  constructor (billsRepository, userRepository) {
    this.billsRepository = billsRepository
    this.userRepository = userRepository
  }

  async getAllBills (skip, limit) {
    try {
      const bills = await this.billsRepository.getAllBills(email, password).skip(skip).limit(limit)
    
      if (bills.length > 0)
        return Response.Created(bills, 'Contas cadastradas')
      else 
        return Response.Error(mountError())
    }
    catch (error) {
      console.error(`[BillsService - getAllBills] ${error.message}`)
      return Response.Error(error)
    }
  }

  async getBillsByStatusOfPayment (paidOut, skip, limit) {
    try {
      const bills = await this.billsRepository.getBillsByStatusOfPayment({ paidOut }).skip(skip).limit(limit)
  
      if (bills.length > 0)
        return Response.Created(bills, 'Contas cadastradas')
      else 
        return Response.Error(mountError())
    }
    catch (error) {
      console.error(`[BillsService - getBillsByStatusOfPayment] ${error.message}`)
      return Response.Error(error)
    }
  }

  async createUnpaidBill (body) {
    try {
      const data = mountBodyToModel(body)
      
      const existsUser = await this.userRepository.findUserById(data.user)
      
      if (existsUser.length > 0) 
        return Response.Error(mountErrorExistsUser())

      const result = await this.billsRepository.createUnpaidBill(data)

      return Response.Created(result, 'Conta cadastrada com sucesso')
    } catch (error) {
      console.error(`[BillsService - createUnpaidBill] ${error.message}`)
      return Response.Error(error)
    }
  }
}

function mountBodyToModel (data) {
  let result = {
    user: data.user,
    name: data.name,
    description: data.description,
    amount: data.amount,
    discount: data.discount,
  }

  if (!result.discount || result.discount == null || result.discount == undefined)
    delete result.discount

  if (!result.description || result.description == null || result.description == undefined)
    delete result.description

  return result
}

function mountErrorExistsUser() {
  return {
    code: 400,
    message: 'Usuário não está cadastrado'
  }
}

function mountError() {
  return {
    code: 404,
    message: 'Nenhuma conta cadastrada'
  }
}

export default BillsService

import { Response } from '../helpers'

class BillsService {
  constructor (billsRepository) {
    this.billsRepository = billsRepository
  }

  async getAllBills (skip, limit) {
    const bills = await this.billsRepository.getAllBills(email, password).skip(skip).limit(limit)
  
    if (bills.length > 0)
      return Response.Created(bills, 'Contas cadastradas')
    else 
      return Response.Error(mountError())
  }

  async getBillsByStatusOfPayment (paidOut, skip, limit) {
    const bills = await this.billsRepository.getBillsByStatusOfPayment({ paidOut }).skip(skip).limit(limit)
  
    if (bills.length > 0)
      return Response.Created(bills, 'Contas cadastradas')
    else 
      return Response.Error(mountError())
  }
}

function mountError() {
  return {
    code: 404,
    message: 'Nenhuma conta cadastrada'
  }
}

export default BillsService

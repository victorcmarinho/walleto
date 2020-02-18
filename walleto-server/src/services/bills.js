import { Response } from '../helpers'

class BillsService {
  constructor (billsRepository, userRepository) {
    this.billsRepository = billsRepository
    this.userRepository = userRepository
  }

  async getAllBills (id, skip, limit) {
    try {
      const bills = await this.billsRepository.getAllBills(id, skip, limit)
    
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

  async getBillsByStatusOfPayment (user, paidOut, skip, limit) {
    try {
      const bills = await this.billsRepository.getBillsByStatusOfPayment(user, paidOut, skip, limit)
  
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
      const data = mountBillToUser(body)
      
      const existsUser = await this.userRepository.findUserById(data.user)
      
      if (existsUser.length == 0) 
        return Response.Error(mountErrorExistsUser())

      const result = await this.billsRepository.createUnpaidBill(data)

      return Response.Created(result, 'Conta cadastrada com sucesso')
    } catch (error) {
      console.error(`[BillsService - createUnpaidBill] ${error.message}`)
      return Response.Error(error)
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

        return Response.Created(sendedToUser, 'Contas enviadas aos seus respectivos')
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

async function getUser(cnpj) {
  return await this.userRepository.findUserById(data.user)
}

function mountErrorNotExistsBills() {
  return {
    code: 400,
    message: 'Nenhuma conta foi enviada'
  }
}

function mountBillToUser(data, user) {
  let result = {
    user: user ? user : data.user,
    name: data.name,
    description: data.description,
    storeCnpj: data.storeCnpj,
    storeFantasyName: data.storeFantasyName,
    discount: data.discount,
    purchaseDate: Date(data.purchaseDate),
    amount: data.amount,
    billetInfo: {
      billet: data.billetInfo.billet,
      code: data.billetInfo.code,
      value: data.billetInfo.value,
      number: data.billetInfo.number,
      paymentSlip: data.billetInfo.paymentSlip,
      bankName: data.billetInfo.bankName
    },
  }

  if (!result.discount || result.discount == null || result.discount == undefined)
    delete result.discount

  if (!result.billetInfo || result.billetInfo == null || result.billetInfo == undefined)
    delete result.billetInfo

  return result
}

function mountDontSendedBill(bill) {
  return result = {
    code: bill.billetInfo.code,
    user: user,
    reason: 'Usuário não cadastrado'
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

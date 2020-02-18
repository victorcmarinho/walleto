import mongoose from 'mongoose'
import { Response } from '../helpers'

class PaymentsService {
  constructor (paymentRepository, userRepository, billsRepository) {
    this.paymentRepository = paymentRepository
    this.userRepository = userRepository
    this.billsRepository = billsRepository
  }

  async payBillsByBankCard(body) {
    try {
      let existUser = await this.userRepository.findById(body.user)

      if (existUser.length == 0)
        return Response.Error(mountErrorNotExistsUser())

      let bills = await this.billsRepository.findBillsToPay(body.user, body.bills)

      if (bills.length == 0)
        return Response.Error(mountErrorNotExistBills())


      let model = mountModelToPaymentsToBankCard(body)  
      const result = await this.paymentRepository.createPayments(model)

      bills.forEach(async b => {
        await this.billsRepository.editPaidBillsByCode(b)
      })
  
      return Response.Created(result, 'Conta paga com sucesso')
    }
    catch (error) {
      console.error(`[PaymentsService - payBillsByBankCard] ${error.message}`)
      return Response.Error(error)
    }
  }

  async payBillsByBillet(body) {
    try {
      let existUser = await this.userRepository.findById(body.user)

      if (existUser.length == 0)
        return Response.Error(mountErrorNotExistsUser())

      let bills = await this.billsRepository.findBillsToPay(body.user, body.bills)

      if (bills.length == 0)
        return Response.Error(mountErrorNotExistBills())

      let totalBills  = sumTotalBills(bills)

      if (totalBills > depositedMoney)
        return Response.Error(mountErrorDontHaveCashToPayBills())

      let model = mountModelToPayments(body)  
      const result = await this.paymentRepository.createPayments(model)

      await this.userRepository.removeCash(body.user, totalBills)

      bills.forEach(async b => {
        await this.billsRepository.editPaidBillsByCode(b)
      })
  
      return Response.Created(result, 'Conta paga com sucesso')
    }
    catch (error) {
      console.error(`[PaymentsService - payBillsByBillet] ${error.message}`)
      return Response.Error(error)
    }
  }
}

function mountModelToPaymentsToBankCard(body) {
  return {
    user: body.user,
    bills: body.bills,
    billetInfo: { 
      billet: body.billetInfo.billet,
      code: body.billetInfo.code,
      value: body.billetInfo.value,
      purchaseInterest: body.billetInfo.purchaseInterest,
      interestFrom: body.billetInfo.interestFrom,
      paidWithBillet: true
    },
    amount: body.amount,
    cashback: body.cashback,
    paidOut: true,
    paidOutDate: Date.now,
  }
}

function mountModelToPayments(body) {
  return {
    user: body.user,
    bills: body.bills,
    bankCard: { 
      value: body.bankCard.value,
      purchaseInterest: body.bankCard.purchaseInterest,
      interestFrom: body.bankCard.interestFrom,
      paidWithBankCard: true
    },
    amount: body.amount,
    cashback: body.cashback,
    paidOut: true,
    paidOutDate: Date.now,
  }
}

function sumTotalBills(bills) {
  let total = 0
  bills.forEach(b => {
    total += b.amount
  })

  return total
}

function mountErrorDontHaveCashToPayBills() {
  return {
    code: 40,
    message: 'Dinheiro insuficiente'
  }
}


function mountErrorNotExistsUser() {
  return {
    code: 404,
    message: 'Usuário não cadastrado'
  }
}

function mountErrorNotExistBills() {
  return {
    code: 404,
    message: 'Contas não cadastradas para esse usuário'
  }
}

export default PaymentsService
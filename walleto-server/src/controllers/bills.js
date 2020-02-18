import { billsService } from '../services'

export async function getAllBills (req, res, next) {
  try {
    const { user, skip, limit } = req.query

    const result = await billsService.getAllBills(user, skip, limit)

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function getBillsByStatusOfPayment (req, res, next) {
  try {
    const { user, paidOut, skip, limit } = req.query

    const result = await billsService.getBillsByStatusOfPayment(user, paidOut, skip, limit)

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  } 
}

export async function createUnpaidBill (req, res, next) {
  try {
    const result = await billsService.createUnpaidBill(req.body)

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  } 
}

export async function sendBillsToUser(req, res, next) {
  try {
    const result = await paymentService.sendBillsToUser(req.body)

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}


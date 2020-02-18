import { paymentService } from '../services'

export async function generateBillet (req, res, next) {
  try {
    const { email, password } = req.body

    const result = {
      
    }

    res.status(201).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function payBillsByBillet (req, res, next) {
  try {
    const result = await paymentService.payBillsByBillet(req.body)
  }
  catch (error) {
    res.status(500).send(error)
  }
}

export async function payBillsByBankCard (req, res, next) {
  try {
    const result = await paymentService.payBillsByBankCard(req.body)
  }
  catch (error) {
    res.status(500).send(error)
  }
}
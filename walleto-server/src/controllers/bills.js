import { billsService } from '../services'
import { Response } from '../helpers'

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
    const { user, paidOut, skip, limit, id } = req.query

    let result = await billsService.getBillsByStatusOfPayment(user, paidOut, skip, limit)

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  } 
}


export async function getBillsByStatusOfPaymentMock (req, res, next) {
  try {
    let result = {}
    
    if (req.body.length > 0 && Object.keys(obj).length !== 0 && obj.constructor !== Object) {      
      result = mountMockFalse(req.body)
    }
    else {
      result = mockResult()
    }

    
    res.status(200).send(Response.Ok(result, "Contas não pagas"))
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

function mountMockFalse(id) {
  var result = mockResult()

  id.map(s => {
    result.map(r => {
      if (r.id = s)
        r.isPaid = true
    })    
  })

  return result
}

function mockResult() {
  let result = [{
    id: "5e4c738182d3576726ea2f4c",
    name: 'Conta de Luz',
    price: '199.99',
    isPaid: false
  },
  {
    id: "5e4c739196908953145a81c6",
    name: 'Conta de Água',
    price: '200.00',
    isPaid: false
  },
  {
    id: "5e4c739e9365142de3f74609",
    name: 'Conta de IPTU',
    price: '57.60',
    isPaid: false
  },
  {
    id: "5e4c73b00c74b443ae7e083d",
    name: 'Conta de Gás',
    price: '32.65',
    isPaid: false
  },
  {
    id: "5e4c73bdf358897f149ecf8f",
    name: 'Conta de Bombeiro',
    price: '25.25',
    isPaid: false
  },
  {
    id: "5e4c73df3537428e6bf16b58",
    name: 'Casas Bahia',
    price: '64.89',
    isPaid: true
  },
  {
    id: "5e4c73eb886fd304becb82d7",
    name: 'Netflix',
    price: '29.99',
    isPaid: true
  }]

  return result
}

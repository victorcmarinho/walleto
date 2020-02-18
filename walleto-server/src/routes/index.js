import { sign, login, getAllBills, addBankCard, deleteBankCard, getBillsByStatusOfPayment, createUnpaidBill } from '../controllers'

function setupRoutes(app) {
  app.get('/', (req, res, next) => res.status(200).send({ Rota: 'Bem vindo ao servidor do Walleto' }))
  app.post('/users/login', login)
  app.post('/users/sign', sign)
  app.put('/users/addBankCard', addBankCard)
  app.delete('/users/deleteBankCard', deleteBankCard)
  app.get('/bills/getAllBills', getAllBills)
  app.get('/bills/getBillsByStatusOfPayment', getBillsByStatusOfPayment)
  app.post('/bills/createUnpaidBill', createUnpaidBill)
}

export default setupRoutes

import { sign, login, getAllBills, addBankCard, deleteBankCard, getBillsByStatusOfPayment,getBillsByStatusOfPaymentMock, createUnpaidBill, sendBillsToUser, editDepositedCash, payBillsByBankCard, payBillsByBillet } from '../controllers'

function setupRoutes(app) {
  app.get('/', (req, res, next) => res.status(200).send({ Rota: 'Bem vindo ao servidor do Walleto' }))
  app.post('/users/login', login)
  app.post('/users/sign', sign)
  app.put('/users/addBankCard', addBankCard)
  app.put('/users/editDepositedCash', editDepositedCash)
  app.delete('/users/deleteBankCard', deleteBankCard),
  app.get('/bills/getAllBills', getAllBills)
  app.post('/bills/getBillsByStatusOfPaymentMock', getBillsByStatusOfPaymentMock)
  app.get('/bills/getBillsByStatusOfPayment', getBillsByStatusOfPayment)
  app.post('/bills/createUnpaidBill', createUnpaidBill)
  app.post('/bills/sendBillsToUser', sendBillsToUser)
  app.post('/payments/payBillsByBankCard', payBillsByBankCard)
  app.post('/payments/payBillsByBillet', payBillsByBillet)
}

export default setupRoutes

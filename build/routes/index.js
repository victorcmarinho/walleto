'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

function setupRoutes(app) {
  app.get('/', function (req, res, next) {
    return res.status(200).send({ Rota: 'Bem vindo ao servidor do Walleto' });
  });
  app.post('/users/login', _controllers.login);
  app.post('/users/sign', _controllers.sign);
  app.put('/users/addBankCard', _controllers.addBankCard);
  app.put('/users/editDepositedCash', _controllers.editDepositedCash);
  app.delete('/users/deleteBankCard', _controllers.deleteBankCard), app.get('/bills/getAllBills', _controllers.getAllBills);
  app.post('/bills/getBillsByStatusOfPaymentMock', _controllers.getBillsByStatusOfPaymentMock);
  app.get('/bills/getBillsByStatusOfPayment', _controllers.getBillsByStatusOfPayment);
  app.post('/bills/createUnpaidBill', _controllers.createUnpaidBill);
  app.post('/bills/sendBillsToUser', _controllers.sendBillsToUser);
  app.post('/payments/payBillsByBankCard', _controllers.payBillsByBankCard);
  app.post('/payments/payBillsByBillet', _controllers.payBillsByBillet);
}

exports.default = setupRoutes;
//# sourceMappingURL=index.js.map
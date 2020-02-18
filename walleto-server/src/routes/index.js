import { sign, login } from '../controllers'

function setupRoutes (app) {
  app.get('/', (req, res, next) => res.status(200).send({ Rota: 'Bem vindo ao servidor do Walleto' }))
  app.post('/users/login', login)
  app.post('/users/sign', sign)
}

export default setupRoutes

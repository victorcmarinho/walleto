import mongoose from 'mongoose'
import { Response, EmailValidator } from '../helpers'

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async login(email, password) {
    if (!EmailValidator(email))
      return Response.Error(mountErrorInvalidEmail())

    const existsUser = await this.userRepository.login(email, password)

    if (existsUser.length > 0)
      return Response.Created({ logado: true, user: existsUser }, 'Usuário logado com sucesso')
    else
      return Response.Error(mountErrorWrongPassword())
  }

  async sign(body) {
    try {
      const data = mountBodyToModel(body)

      const existsUser = await this.userRepository.findUserByEmail(data.email)

      if (existsUser.length > 0)
        return Response.Error(mountErrorExistsUser())

      const result = await this.userRepository.sign(data)

      return Response.Created(existsUser, 'Usuário cadastrado com sucesso')
    } catch (error) {
      console.error(`[UserService - sign] ${error.message}`)
      return Response.Error(error)
    }
  }

  async addBankCard(body) {
    try {
      const data = mountBodyToModelBankCard(body)

      const existsUser = await this.userRepository.findUserById(body.id)

      if (existsUser.length > 0) {
        let existsCard = bankCardExists(existsUser.bankCards, data.cardNumber)

        if (existsCard)
          return Response.Error(mountErrorExistsCard())

        existsUser.bankCards.push(data)
        const result = await this.userRepository.addBankCard(existsUser, body.id)

        return Response.Created(result, 'Cartão cadastrado com sucesso')
      }
      else {
        return Response.Error(mountErrorNotExistsUser())
      }
    } catch (error) {
      console.error(`[UserService - addBankCard] ${error.message}`)
      return Response.Error(error)
    }
  }

  async deleteBankCard(user, id) {
    try {
      const existsUser = await this.userRepository.findUserById(user)

      if (existsUser.length > 0) {
        const result = await this.userRepository.deleteBankCard(id)

        return Response.Created(result, 'Cartão deletado com sucesso')
      }
      else {
        return Response.Error(mountErrorNotExistsUser())
      }
    } catch (error) {
      console.error(`[UserService - addBankCard] ${error.message}`)
      return Response.Error(error)
    }
  }

  async editDepositedCash(id, amount) {
    try {
      const existsUser = await this.userRepository.findUserById(id)

      if (existsUser.length > 0) {
        const total = existsUser[0].depositedMoney + amount
        const result = await this.userRepository.removeCash(id, total)
        return Response.Created(result, 'Cartão deletado com sucesso')
      }
      else {
        return Response.Error(mountErrorNotExistsUser())
      }
    }
    catch (error) {
      console.error(`[UserService - getDepositedCash] ${error.message}`)
    }

  }
}


function mountErrorExistsCard() {
  return {
    code: 400,
    message: 'Cartão já cadastrado'
  }
}

function mountErrorNotExistsUser() {
  return {
    code: 404,
    message: 'Usuário não cadastrado'
  }
}

function mountErrorExistsUser() {
  return {
    code: 400,
    message: 'Usuário já cadastrado'
  }
}

function mountErrorWrongPassword() {
  return {
    code: 400,
    message: 'Email/Senha inválida'
  }
}

function mountErrorInvalidEmail() {
  return {
    code: 400,
    message: 'Email inváldio'
  }
}

function bankCardExists(bankCards, cardNumber) {
  if (bankCards.length == 0)
    return false

  bankCards.forEach(element => {
    if (element.cardNumber === cardNumber)
      return true
  });
}

function mountBodyToModelBankCard(data) {
  return {
    card: new mongoose.mongo.ObjectId(),
    name: data.name,
    bankName: data.bankName,
    cardNumber: data.cardNumber,
    flag: data.flag,
    dueDate: data.dueDate,
    securityNumber: data.securityNumber
  }
}

function mountBodyToModel(data) {
  let result = {
    name: data.name,
    cpf: data.cpf,
    email: data.email,
    password: data.password,
    birthday: Date(data.birthday),
    motherName: data.motherName,
    image: data.image,
    address: {
      zipcode: data.address.zipcode,
      street: data.address.street,
      neighborhood: data.address.neighborhood,
      number: data.address.number,
      complement: data.address.complement
    },
  }

  if (!result.image || result.image == null || result.image == undefined)
    delete result.image

  return result
}

export default UserService

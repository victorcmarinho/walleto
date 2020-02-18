import mongoose from 'mongoose'
import UserSchema from '../schemas'

class UserRepository {
  constructor () {
    this.schema = new mongoose.model('users')
  }

  async sign (data) {
    try {
      const model = new this.schema(data)

      const response = await this.schema.create(model)

      return response
    } catch (err) {
      console.error(`[UserRepository - sign] ${err.message}`)
      return err
    }
  }

  async login (email, password) {
    try {
      const response = await this.schema.find({ email, password })
      
      return response
    } catch (err) {
      console.error(`[UserRepository - login] ${err.message}`)
      return err
    }
  }

  async findUserByEmail(email) {
    try {
      const response = await this.schema.find({ email })
      
      return response
    } catch (err) {
      console.error(`[UserRepository - findUserByEmail] ${err.message}`)
      return err
    }
  }

  async findUserById(id) {
    try {
      const response = await this.schema.find({ _id: id })
      
      return response
    } catch (err) {
      console.error(`[UserRepository - findUserByEmail] ${err.message}`)
      return err
    }
  }

  async findUserByCpf(cpf) {
    try {
      const response = await this.schema.find({ cpf })
      
      return response
    } catch (err) {
      console.error(`[UserRepository - findUserByEmail] ${err.message}`)
      return err
    }
  }

  async addBankCard(data, id) {
    try {
      const response = await this.schema.update({ _id: id}, data)

      return response
    }
    catch (err) {
      console.error(`[UserRepository - addBankCard] ${err.message}`)
      return err
    }
  }

  async deleteBankCard(cardId, id) {
    try {
      const response = await this.schema.update({ _id: id}, { '$pull': { cardId }})

      return response
    }
    catch (err) {
      console.error(`[UserRepository - addBankCard] ${err.message}`)
      return err
    }
  }
}

export default UserRepository

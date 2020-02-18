import mongoose from 'mongoose'
import config from '../configurations'

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: false },
  motherName: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  depositedMoney: { type: Number, required: false, default: 0.0 },
  address: {
    zipcode: {  type: String, required: true },
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String, required: false }
  },
  bankCards: [{
    cardId: { type: mongoose.Schema.Types.ObjectId, required: false},
    name: { type: String, required: false },
    bankName: { type: String, required: false },
    cardNumber: { type: String, required: false },
    flag: { type: String, required: false },
    dueDate: { type: Date, required: false },
    securityNumber: { type: Number, required: false }
  }],
  isLoggedIn: { type: Boolean, required: false, default: false },
  creationDate: { type: Date, required: false, default: Date.now }
})

const UserSchema = mongoose.model(config.UserCollection, userSchema)

export default UserSchema

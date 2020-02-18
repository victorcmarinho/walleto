import { Response, EmailValidator } from '../helpers'

class UserService {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async login (email, password) {
    if (!EmailValidator(email))
      return Response.Error(mountErrorInvalidEmail())

    const existsUser = await this.userRepository.login(email, password)
  
    if (existsUser.length > 0)
      return Response.Created({ logado: true }, 'Usuário logado com sucesso')
    else 
      return Response.Error(mountErrorWrongPassword())
  }

  async sign (body) {
    try {
      const data = mountBodyToModel(body)
      
      const existsUser = await this.userRepository.findUserByEmail(data.email)
      
      if (existsUser.length > 0) 
        return Response.Error(mountErrorExistsUser())

      const result = await this.userRepository.sign(data)

      return Response.Created(result, 'Usuário cadastrado com sucesso')
    } catch (error) {
      console.error(`[UserService - sign] ${error.message}`)
      return Response.Error(error)
    }
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

function mountBodyToModel (data) {
  return {
    name: data.name,
    cpf: data.cpf,
    email: data.email,
    password: data.password,
    birthday: Date(data.birthday),
    address: {
      zipcode: data.address.zipcode,
      street: data.address.street,
      neighborhood: data.address.neighborhood,
      number: data.address.number,
      complement: data.address.complement
    }
  }
}

export default UserService

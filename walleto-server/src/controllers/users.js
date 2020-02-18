import { userService } from '../services'

export async function login (req, res, next) {
  try {
    const { email, password } = req.body

    const result = await userService.login(email, password)

    res.status(201).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function sign (req, res, next) {
  const result = await userService.sign(req.body)

  res.status(201).send(result)
}

export async function addBankCard(req, res, next) {

}

export async function deleteBankCard(req, res, next) {
  
}
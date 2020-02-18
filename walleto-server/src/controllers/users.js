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
  try {
    const result = await userService.sign(req.body)

    res.status(201).send(result)
  }
  catch (error) {
    res.status(500).send(error)
  }
}

export async function addBankCard(req, res, next) {
  try {
    const result = await userService.addBankCard(req.body)

    res.status(201).send(result)
  }
  catch (error) {
    res.status(500).send(error)
  }
}

export async function deleteBankCard(req, res, next) {
  try {
    const { user, id } = req.query;

    const result = await userService.deleteBankCard(user, id)

    res.status(201).send(result)
  }
  catch (error) {
    res.status(500).send(error)
  }
}

export async function editDepositedCash(req, res, next) {
  try {
    const { id, total } = req.query;

    const result = await userService.editDepositedCash(id, total)

    res.status(201).send(result)
  }
  catch (error) {
    res.status(500).send(error)
  }
}


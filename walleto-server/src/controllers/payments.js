export async function generateBillet (req, res, next) {
  try {
    const { email, password } = req.body

    const result = await userService.login(email, password)

    res.status(201).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function payBillsByBillet (req, res, next) {
  try {
    
  }
  catch (error) {
    res.status(500).send(error)
  }
}

export async function payBillsByBankCard (req, res, next) {
  try {

  }
  catch (error) {
    res.status(500).send(error)
  }
}
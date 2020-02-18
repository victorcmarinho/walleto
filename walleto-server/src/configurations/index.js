class Configs {
  get Env () {
    return process.env.NODE_ENV || 'DEV'
  }

  get Port () {
    return process.env.PORT || '3000'
  }

  get DatabaseUrl () {
    return process.env.DB_URL || 'mongodb://localhost:27017'
  }

  get DatabaseName () {
    return process.env.DB_NAME || 'walleto'
  }

  get UserCollection () {
    return process.env.DB_GAME_COLLECTION || 'users'
  }

  get BillsCollection () {
    return process.env.DB_GAME_COLLECTION || 'bills'
  }

  get PaymentsCollection () {
    return process.env.DB_GAME_COLLECTION || 'orders'
  }
}
export default new Configs()

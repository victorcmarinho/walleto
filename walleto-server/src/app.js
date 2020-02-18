import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import setupRoutes from './routes'

class App {
    constructor() {
        this.app = express()
        this.middleware()
        setupRoutes(this.app)
    }

    middleware() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(helmet())
        this.app.use(morgan('dev'))
        this.app.use(cookieParser())
        this.app.use(cors())
    }
}

export default new App().app
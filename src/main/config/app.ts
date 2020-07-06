import setupMiddlewares from './middlewares'
import setupeRoutes from './routes'
import express from 'express'

const app = express()
setupMiddlewares(app)
setupeRoutes(app)

export default app

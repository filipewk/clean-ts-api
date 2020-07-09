import setupMiddlewares from './middlewares'
import setupeRoutes from './routes'
import setupSwagger from './config-swagger'
import express from 'express'

const app = express()
app.disable('x-powered-by')
setupSwagger(app)
setupMiddlewares(app)
setupeRoutes(app)

export default app

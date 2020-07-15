import setupMiddlewares from './middlewares'
import setupeRoutes from './routes'
import setupeStaticFiles from './static-files'
import setupSwagger from './config-swagger'
import express from 'express'

const app = express()
app.disable('x-powered-by')
setupeStaticFiles(app)
setupSwagger(app)
setupMiddlewares(app)
setupeRoutes(app)

export default app

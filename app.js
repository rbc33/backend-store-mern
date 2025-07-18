import express from 'express'
import productRoutes from './routes/product.js'

const app = express()

app.use('/v1', productRoutes)

export default app

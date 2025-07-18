import express from 'express'
import productRoutes from './routes/product.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/v1', productRoutes)

export default app

import express from 'express'
import productRoutes from './routes/product.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/v1', productRoutes)
app.use('/public', express.static(`${__dirname}/storage/imgs`))

export default app

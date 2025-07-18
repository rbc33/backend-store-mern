import express from 'express'
import { addProduct } from '../handlers/productHandler.js'

const api = express.Router()

api.post('/products', addProduct)

export default api

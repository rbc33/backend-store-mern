import express from 'express'
import { addProduct, getProducts } from '../handlers/productHandler.js'
import upload from '../libs/storage.js'

const api = express.Router()

api.post('/products', upload.single('image'), addProduct)
api.get('/products', getProducts)

export default api

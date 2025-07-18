import express from 'express'
import { addProduct } from '../handlers/productHandler.js'
import upload from '../libs/storage.js'

const api = express.Router()

api.post('/products', upload.single('image'), addProduct)

export default api

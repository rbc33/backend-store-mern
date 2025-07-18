import express from 'express'

const api = express.Router()

api.post('/products', (req, res) => {
	res.status(201).send({ success: true })
})

export default api

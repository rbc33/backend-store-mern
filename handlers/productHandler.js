import Product from '../models/product.js'

export const addProduct = async (req, res) => {
	try {
		const { name, unitaryPrice, size, description } = req.body

		const product = Product({
			name,
			unitaryPrice,
			size,
			description,
		})

		const productStored = await product.save()

		res.status(201).send({ productStored })
	} catch (e) {
		res.status(500).send({ message: e.message })
	}
}

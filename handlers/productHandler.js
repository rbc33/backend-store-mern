import product from '../models/product.js'
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
		if (req.file) {
			const { filename } = req.file
			product.setImgUrl(filename)
		}
		const productStored = await product.save()

		res.status(201).send({ productStored })
	} catch (e) {
		res.status(500).send({ message: e.message })
	}
}
// TODO: Add pagination
export const getProducts = async (rew, res) => {
	const products = await Product.find().lean().exec()
	res.status(200).send(products)
}

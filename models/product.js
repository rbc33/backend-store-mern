import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = Schema(
	{
		name: String,
		size: Number,
		unitaryProce: Number,
		imgUrl: String,
		descrption: String,
	},
	{
		timestamp: true,
	}
)

export default mongoose.model('Products', ProductSchema)

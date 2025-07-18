import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = Schema(
	{
		name: String,
		size: String,
		unitaryPrice: Number,
		imgUrl: String,
		description: String,
	},
	{
		timestamps: true
	}
)

export default mongoose.model('Products', ProductSchema)

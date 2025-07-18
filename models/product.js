import mongoose from 'mongoose'
import { appConfig } from '../config.js'

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
		timestamps: true,
	}
)

ProductSchema.methods.setImgUrl = function setImgUrl(filename) {
	const { host, port } = appConfig
	this.imgUrl = `${host}:${port}/public/${filename}`
}

export default mongoose.model('Products', ProductSchema)

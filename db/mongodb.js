import mongoose from 'mongoose'

mongoose.connection.on('open', () => {
	console.log('connected to mongoDb')
})
const connectDb = async (uri) => {
	await mongoose.connect(uri)
}

export default connectDb

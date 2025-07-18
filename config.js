import dotenv from 'dotenv'
dotenv.config()

export const appConfig = {
	host: process.env.APP_HOST,
	port: process.env.APP_PORT,
	mongo_uri: process.env.MONGODB_URI,
}

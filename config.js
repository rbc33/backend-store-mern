import dotenv from 'dotenv'
dotenv.config()

export const appConfig = {
	port: process.env.APP_PORT,
	mongo_uri: process.env.MONGODB_URI,
}

import app from './app.js'
import { appConfig } from './config.js'
import connectDb from './db/mongodb.js'

const initApp = async (appConfig) => {
	connectDb(appConfig.mongo_uri)
		.then(() =>
			app.listen(appConfig.port, () =>
				console.log(`listen on port: ${appConfig.port}`)
			)
		)
		.catch((e) => {
			console.error(e)
			process.exit(0)
		})
}

initApp(appConfig)

import multer from 'multer'
const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, './storage/imgs')
	},
	filename: (req, file, cb) => {
		const ext = file.originalname.substring(
			file.originalname.lastIndexOf('.'),
			file.originalname.length
		)
		cb(null, `${file.fieldname}-${Date.now()}${ext}`)
	},
})

const upload = multer({ storage })

export default upload

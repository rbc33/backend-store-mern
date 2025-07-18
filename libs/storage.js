import multer from 'multer'
const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, './storage/imgs')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	},
})

const upload = multer({ storage })

export default upload

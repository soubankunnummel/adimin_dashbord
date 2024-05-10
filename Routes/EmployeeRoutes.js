import express from 'express'
import trycatchmiddleware from '../Middleware/trycatch.js'
import { CreateEmployee, getEmployees, update } from '../Controller/employeeController.js'
import veryToken from '../Middleware/verifyToken.js'
import fileUpload, { upload } from '../Middleware/fileUpload.js'
// import  {fileUpload, upload } from '../Middleware/fileUpload.js'
const Router = express.Router()
Router.get("/api/employee", trycatchmiddleware(getEmployees))
Router.post('/api/employee',upload.single("image"),fileUpload, veryToken, trycatchmiddleware(CreateEmployee))
Router.patch('/api/employee/:id', upload.single("image"),fileUpload, trycatchmiddleware(update))

export default Router 
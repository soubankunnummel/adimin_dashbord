import express from 'express'
import trycatchmiddleware from '../Middleware/trycatch.js'
import { Login } from '../Controller/auth.js'
const Router = express.Router()

Router.post('/api/login', trycatchmiddleware(Login))
export default Router
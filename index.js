import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDatabase from './Db/dataBase.js'
import EmployeeRoutes from './Routes/EmployeeRoutes.js'
import auth from './Routes/auth.js'
const app = express()
connectDatabase()

app.use(express.json())
app.use(cors())
app.use(EmployeeRoutes,auth)


app.listen(process.env.PORT, () => {
    console.log(`server runnig on port : http://localhost:${process.env.PORT} `)
})
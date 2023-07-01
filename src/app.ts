import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/user/user.route'
const app: Application = express()
// import routes from './app/routes/index'
// import userRouter from './app/modules/user/user.route'
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)

export default app

//  /api/v1/auth/signup

import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
// import ApiError from './errors/ApiError'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', UserRoutes)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })
app.use(globalErrorHandler)

export default app

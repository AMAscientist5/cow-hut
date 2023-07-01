import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
// import routes from './app/routes/index'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1', routes)

export default app

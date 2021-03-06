import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import formRouter from './routes/FormRouter'
import authRouter from './routes/authRouter'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', formRouter)
app.use('/api', authRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
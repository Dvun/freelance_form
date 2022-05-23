import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import formRouter from './src/routes/FormRouter'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', formRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
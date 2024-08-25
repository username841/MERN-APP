import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import connectDB from './connect/database.js'

connectDB()
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/books', bookRoutes)

app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`);
})
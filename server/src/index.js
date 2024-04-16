import express from 'express'
import connectToDatabase from './config/database.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT

const database = await connectToDatabase();

app.listen(port, () => {
    console.log(`ClientSide by arseneybaav ${port}`)
})
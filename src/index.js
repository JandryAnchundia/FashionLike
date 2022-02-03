import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import './database'
require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',authRoutes)



app.listen(3000,() => console.log('server on port',3000))

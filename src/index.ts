import express from 'express'
import {engine} from 'express-handlebars'
import path from 'path'
import IndexRoutes from './routes/index.routes'

const app = express()

//Settings

app.set('port', 3000 || process.env.PORT)
app.set('views',path.join(__dirname, 'views') )

app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}))

app.set('view engine', '.hbs')

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


//Routes

app.use('/books', IndexRoutes)

//Static Files

//Starting de server

app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en puerto ${app.get('port')}`)
})

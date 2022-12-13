import {Router} from 'express'
import { indexController } from '../controllers/index.controllers'

const router: Router = Router()

router.get('/', indexController.index)

router.get('/about', (req,res)=>{
    res.render('about')
})


export default router
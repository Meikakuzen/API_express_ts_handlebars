import {Router} from 'express'
import { booksController } from '../controllers/books.controllers'

const router: Router = Router()

router.get('/', booksController.indexBooks)
router.get('/add', booksController.renderFormBook)



export default router
import {Router} from 'express'
import { booksController } from '../controllers/books.controllers'

const router: Router = Router()

router.get('/', booksController.indexBooks)
router.get('/add', booksController.renderFormBook)
router.post('/add', booksController.saveBook)
router.put('/:id', booksController.updateBook)
router.delete('/:id', booksController.deleteBook)

export default router
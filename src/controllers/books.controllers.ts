import {Request, Response} from 'express'
import Book, {BookInterface} from '../models/Book'

class BooksController{
    public renderFormBook(req:Request, res:Response): void{
        res.render('books/add', {
            title: 'Add a Book'
        })
    }
    public async indexBooks(req:Request, res:Response){
       
        const books: BookInterface[]= await Book.find()
        res.render('books/index',{
            title: 'Books',
            books
        })
    }

    public async saveBook(req: Request, res: Response){
       const {title, author, isbn} = req.body
       
        const book: BookInterface = new Book({title, author, isbn})

        await book.save()
        res.redirect('/books')
    }

    public async updateBook(req:Request, res:Response){

    }

    public async deleteBook(req:Request, res: Response){
        
    }
}

export const booksController = new BooksController()




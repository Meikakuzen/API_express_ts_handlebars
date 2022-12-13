import {Request, Response} from 'express'

class BooksController{
    public renderFormBook(req:Request, res:Response): void{
        res.render('books/add', {
            title: 'Add a Book'
        })
    }
    public indexBooks(req:Request, res:Response):void{
        res.render('books/index',{
            title: 'Books'
        })
    }
}

export const booksController = new BooksController()




import {Response} from 'express'


class IndexController{

    public index (_:any, res: Response){
        res.render('index', { title: 'Welcome to books app', layout: false})
        
    }
}

export const indexController = new IndexController()
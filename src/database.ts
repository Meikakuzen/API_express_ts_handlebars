import mongoose from 'mongoose'
import { mongodb } from './keys'


mongoose.connect(mongodb.URI,{

})
    .then(db=> console.log("DB connected"))
    .catch(e=> console.log(e))
import  express  from 'express';
const router = express.Router();
import {Addcart, getCart,deleteCart} from '../controller/cartController.js'



router.post('/addcart',Addcart);
router.get('/getCart',getCart);
router.post('/deleteCart',deleteCart);


export default router
const express = require('express');
const router = express.Router();
const {Addcart, getCart} = require('../controllers/cartController')



router.post('/addcart',Addcart);
router.get('/getCart',getCart);


module.exports = router
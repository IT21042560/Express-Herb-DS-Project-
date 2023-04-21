const express = require('express');
const { AdminRegister, Signin, Signout, tokenRefresh, getAllAdmins ,deleteAdmin } = require('../controllers/AdminController');
const requireSignin = require('../middleware/auth.js')
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'UploadImage/images')
    },
    filename: function(req, file,cb){
        cb(null,Date.now() + '_' + file.originalname);
    }
})

const upload = multer({storage});



router.post('/Signup',upload.single('ProfilePicture'),AdminRegister);
router.post('/Signin',Signin);
router.delete('/Signout',Signout);
router.post('/Token',tokenRefresh);
router.get('/admins', getAllAdmins);
router.post('/deleteAdmin', deleteAdmin);


module.exports = router
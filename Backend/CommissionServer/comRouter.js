import express  from "express";
const router = express.Router();
import {addCommission} from './comController.js'


router.post('/add',addCommission);


export default router
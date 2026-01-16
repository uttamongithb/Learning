import express from "express";
import authController from "../controller/auth-controller.js"; 

const router = express.Router();


router.get('/home', authController.home)
router.post('/register', authController.register)

export default router;
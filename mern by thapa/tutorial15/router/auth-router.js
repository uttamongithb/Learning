import express from "express";
import authController from "../controller/auth-controller.js"; 
import signupSchema from '../validators/auth-validator.js';
import validate from '../middlewares/validate-middleware.js'
const router = express.Router();


router.route('/home').get(authController.home);
router.route('/register').post(validate(signupSchema), authController.register);
router.route('/login').post(authController.login);

export default router;
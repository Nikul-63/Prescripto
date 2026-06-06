import express from 'express';
import { bookAppointment, cancleAppointment, getProfile, listAppointment, login, paymentRazorPay, registerUser, updateProfile, verifyRazorPay } from '../controllers/userControllers.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';


const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', login);

userRouter.get('/get-profile', authUser , getProfile);
userRouter.post('/update-profile', upload.single('image'), authUser,  updateProfile);
userRouter.post('/book-appointment', authUser, bookAppointment);
userRouter.get('/appointments', authUser, listAppointment);
userRouter.post('/cancle-appointment', authUser, cancleAppointment);
userRouter.post('/payment-razorpay', authUser, paymentRazorPay);
userRouter.post('/verifyRazorpay', authUser, verifyRazorPay);

export default userRouter;
import express from 'express';
import { addDoctor, adminDashboard, allDoctors, appointmentCancle, appointmentsAdmin, loginAdmin } from '../controllers/adminControllers.js'
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailability } from '../controllers/doctorControllers.js';

const adminRouter = express.Router();

adminRouter.get('/test', (req, res) => {
    res.json({message : 'Admin Route is Working..!'});
});

adminRouter.post('/add-doctor',authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors', authAdmin,  allDoctors);
adminRouter.post('/change-availability', authAdmin, changeAvailability);
adminRouter.get('/appointments', authAdmin,  appointmentsAdmin);
adminRouter.post('/cancle-appointment', authAdmin, appointmentCancle);
adminRouter.get('/dashboard', authAdmin, adminDashboard);

export default adminRouter;
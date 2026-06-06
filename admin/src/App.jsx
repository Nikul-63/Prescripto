import React from 'react';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import { AdminContext } from './context/AdminContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointment from './pages/Admin/AllAppointment.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import DoctorList from './pages/Admin/DoctorList.jsx';
import { DoctorContext } from './context/DoctorContext.jsx';
import DoctorDashboard from './pages/Doctor/DoctorDashboard.jsx';
import DoctorAppointments from './pages/Doctor/DoctorAppointments.jsx';
import DoctorProfile from './pages/Doctor/DoctorProfile.jsx';

const App = () => {
  const {aToken} = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext);
  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* ADMIN ROUTE */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-appointments' element={<AllAppointment/>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/doctor-list' element={<DoctorList/>} />

          {/* DOCTOR ROUTE */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>} />
          <Route path='/doctor-appointments' element={<DoctorAppointments/>} />
          <Route path='/doctor-profile' element={<DoctorProfile/>} />
        </Routes>
      </div>
    </div>
  )
  : (
    <>
     <Login/>
      <ToastContainer/>
    </>
  )
}

export default App;
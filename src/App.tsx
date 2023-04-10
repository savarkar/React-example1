import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Register from "./pages/registration/registration";
import Thankyou from "./pages/registration/registration-thankyou";

import MyLearnings from "../src/pages/student/MyLearnings";
import { routes } from "./routes";
// import Carousel from './pages/student/carosel';
import sheader from "./components/layout/header";
import Allcourses from "./pages/courses/allcourses";
import CourseDetails from "./pages/courses/course-details";
import Qrcodes from "./pages/courses/qrcode";
import HomePage from "./pages/home/HomePage";
import Student from "./pages/student/Student";
import PaymentProof from "./pages/courses/payment-proof";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="/mylearnings" element={<MyLearnings />}></Route>
        <Route path="/all-courses" element={<Allcourses />}></Route>
        <Route path="/coursedetails" element={<CourseDetails />}></Route>
      <Route path="/qrcode" element={<Qrcodes />}></Route> 
      <Route path="/proof" element={<PaymentProof />}></Route> 
      <Route path="/register-thankyou" element={<Thankyou />}></Route>
        {/* <Route path="/register" element={<Register />}></Route>
        
        <Route path="/register-thankyou" element={<Thankyou />}></Route>

       

        {/* <Route path="/dashboard" element={<MainLayout />}></Route> 
        <Route path="/dashboard/student" element={<MainLayout />}></Route>*/}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
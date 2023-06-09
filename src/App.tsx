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
import CourseSuccss from "./pages/registration/course-success";
import ForgotPassword from "./pages/registration/forgot-Password";
import MyWishList from "./pages/courses/my-wishlist";
import Mycourses from "./pages/courses/my-courses";
import SrudentProfile from "./pages/student/student-profile";
import ResetPassword from "./pages/registration/reset-Password";
import RegisterBank from "./pages/registration/registration-bank";
import Video from "./pages/courses/video";
import Pdf from "./pages/courses/pdfs";
import Questions from "./pages/courses/questions";

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
        <Route path="/my-courses" element={<Mycourses />}></Route>
        <Route path="/coursedetails" element={<CourseDetails />}></Route>
      <Route path="/qrcode" element={<Qrcodes />}></Route> 
      <Route path="/proof" element={<PaymentProof />}></Route> 
      <Route path="/register-thankyou" element={<Thankyou />}></Route>
      <Route path="/course-success" element={<CourseSuccss />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="/my-wishlist" element={<MyWishList />}></Route>
      <Route path="/all-courses" element={<Allcourses />}></Route>
      <Route path="/profile" element={<SrudentProfile />}></Route>
        <Route path="/register-bank" element={<RegisterBank />}></Route>
        <Route path="/video" element={<Video />}></Route>
        <Route path="/pdf" element={<Pdf />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        {/* <Route path="/register-thankyou" element={<Thankyou />}></Route>
        {/* <Route path="/dashboard" element={<MainLayout />}></Route> 
        <Route path="/dashboard/student" element={<MainLayout />}></Route>*/}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
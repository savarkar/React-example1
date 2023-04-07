import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Register from "./pages/registration/registration";
import Thankyou from "./pages/registration/registration-thankyou";

import MyLearnings from "../src/pages/student/MyLearnings";
import { routes } from "./routes";
// import Carousel from './pages/student/carosel';
import sheader from "./components/layout/header";
import Allcourses from "./pages/courses/allcourses";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/mylearnings" element={<MyLearnings />}></Route>
        <Route path="/register-thankyou" element={<Thankyou />}></Route>
        <Route path="/all-courses" element={<Allcourses />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
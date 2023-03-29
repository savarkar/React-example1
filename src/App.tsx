import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Register from "./pages/registration/registration";
import Thankyou from "./pages/registration/registration-thankyou";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register-thankyou" element={<Thankyou />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
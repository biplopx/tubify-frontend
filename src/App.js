import { Routes, Route } from "react-router-dom";
import Layout from './Layouts/Layout';
import Home from "./Pages/Home/Home";
import AboutUs from './Pages/AboutUs/AboutUs'
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import Explore from "./Pages/Explore/Explore";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/about-us" element={<Layout children={<AboutUs />} />}></Route>
        <Route path="/signup" element={<Layout children={<SignUp />} />}></Route>
        <Route path="/login" element={<Layout children={<Login />} />}></Route>
        <Route path="/explore" element={<DashboardLayout children={<Explore />} />}></Route>
        <Route path="*" element={<Layout children={<NotFound />} />}></Route>
      </Routes>
    </>
  );
}

export default App;

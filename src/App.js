import { Routes, Route } from "react-router-dom";
import Layout from './Layouts/Layout';
import Home from "./Pages/Home/Home";
import AboutUs from './Pages/AboutUs/AboutUs'
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import Explore from "./Pages/Explore/Explore";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ExHome from "./Pages/ExHome/ExHome";
import YourLibary from "./Pages/YourLibary/YourLibary";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/about-us" element={<Layout children={<AboutUs />} />}></Route>
        <Route path="/signup" element={<Layout children={<SignUp />} />}></Route>
        <Route path="/login" element={<Layout children={<Login />} />}></Route>
        <Route path="/explore" element={
          <DashboardLayout children={<RequireAuth><Explore /></RequireAuth>} />
        }>
          <Route>
            <Route index element={<DashboardLayout children={<ExHome></ExHome>} />}></Route>
            <Route path="your-libary" element={<DashboardLayout children={<YourLibary />} />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Layout children={<NotFound />} />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from './Layouts/Layout';
import Home from "./Pages/Home/Home";
import AboutUs from './Pages/AboutUs/AboutUs'
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import YourLibary from "./Pages/YourLibary/YourLibary";
import Explore from "./Pages/Explore/Explore";
import MyProfile from "./Pages/MyAccount/MyProfile";
import CreatePlaylist from "./Pages/CreatePlaylist/CreatePlaylist";
import AllUsers from "./Pages/UserDashboard/AdminDashboard/AllUsers";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/about-us" element={<Layout children={<AboutUs />} />}></Route>
        <Route path="/signup" element={<Layout children={<SignUp />} />}></Route>
        <Route path="/login" element={<Layout children={<Login />} />}></Route>
        <Route path="/dashboard" element={
          <DashboardLayout children={<RequireAuth><UserDashboard /></RequireAuth>} />
        }>
          <Route>
            <Route index element={<DashboardLayout children={<Explore />} />}></Route>
            <Route path="explore" element={<DashboardLayout children={<Explore />} />}></Route>
            <Route path="your-libary" element={<DashboardLayout children={<YourLibary />} />}></Route>
            <Route path="create-playlist" element={<DashboardLayout children={<CreatePlaylist />} />}></Route>
            <Route path="my-profile" element={<DashboardLayout children={<MyProfile />} />}></Route>
            {/* Admin Routes */}
            <Route path="all-users" element={<DashboardLayout children={<AllUsers />} />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Layout children={<NotFound />} />}></Route>
      </Routes>
    </>
  );
}

export default App;

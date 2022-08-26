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
import ContactUs from "./Pages/ContactUs/ContactUs";
import RequireAdmin from "./Pages/RequireAdmin/RequireAdmin";
import AddMusic from "./Pages/UserDashboard/AdminDashboard/AddMusic";
import 'react-jinke-music-player/assets/index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ManageMusic from "./Pages/UserDashboard/AdminDashboard/ManageMusic";
import PricingPlan from "./Pages/PricingPlan/PricingPlan";
import Purchase from "./Pages/Purchase/Purchase";
import Payment from "./Pages/Purchase/Payment";
import AllSongs from "./Pages/AllSong/AllSong";
import LikedSongs from "./Pages/YourLibary/LikedSongs";
import Videos from "./Pages/Videos/Videos";
import AddVideo from "./Pages/UserDashboard/AdminDashboard/AddVideo";
import Video from "./Pages/Video/Video";
import AddArtist from "./Pages/UserDashboard/AdminDashboard/AddArtist";
import Artist from "./Pages/Artist/Artist";
import VideoMusic from "./Pages/Video/VideoMusic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/about-us" element={<Layout children={<AboutUs />} />}></Route>
        <Route path="/signup" element={<Layout children={<SignUp />} />}></Route>
        <Route path="/login" element={<Layout children={<Login />} />}></Route>
        <Route path="/pricing" element={<Layout><RequireAuth><PricingPlan /></RequireAuth></Layout>}></Route>
        <Route path="/purchase/:id" element={<Layout><RequireAuth><Purchase /></RequireAuth></Layout>}></Route>
        <Route path="/payment" element={<Layout><RequireAuth><Payment /></RequireAuth></Layout>}></Route>
        <Route path="/dashboard" element={
          <DashboardLayout children={<RequireAuth><UserDashboard /></RequireAuth>} />
        }>
          <Route>
            <Route index element={<DashboardLayout children={<Explore />} />}></Route>
            <Route path="explore" element={<DashboardLayout children={<Explore />} />}></Route>
            <Route path="videos" element={<DashboardLayout children={<Videos />} />}></Route>
            <Route path="video/:id" element={<DashboardLayout children={<Video />} />}></Route>
            <Route path="your-libary" element={<DashboardLayout children={<YourLibary />} />}></Route>
            <Route path="create-playlist" element={<DashboardLayout children={<CreatePlaylist />} />}></Route>
            <Route path="my-profile" element={<DashboardLayout children={<MyProfile />} />}></Route>
            <Route path="all-songs" element={<DashboardLayout children={<AllSongs />} />}></Route>
            <Route path="liked-songs" element={<DashboardLayout children={<LikedSongs />} />}></Route>
            <Route path="artist" element={<DashboardLayout children={<Artist />} />}></Route>
            {/* Admin Routes */}

            <Route path="all-users" element={<DashboardLayout children={<RequireAdmin><AllUsers /></RequireAdmin>} />}></Route>
            <Route path="add-music" element={<DashboardLayout children={<RequireAdmin><AddMusic /></RequireAdmin>} />}></Route>
            <Route path="add-video" element={<DashboardLayout children={<RequireAdmin><AddVideo /></RequireAdmin>} />}></Route>
            <Route path="manage-music" element={<DashboardLayout children={<RequireAdmin><ManageMusic /></RequireAdmin>} />}></Route>
            <Route path="add-artist" element={<DashboardLayout children={<RequireAdmin><AddArtist /></RequireAdmin>} />}></Route>

          </Route>
        </Route>
        <Route path="*" element={<Layout children={<NotFound />} />}></Route>
        <Route path="/contact" element={<Layout children={<ContactUs />} />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

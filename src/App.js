import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Home,
  Testimonials,
  Login,
  Register,
  CreateProfile,
  CreatePost,
  Profile,
  Calendar,
  Workouts,
  Photos,
  FriendPosts,
  Logo,
  Search,
} from "./components";

function App() {
  return (
    <Router>
      <Logo />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createprofile" element={<CreateProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/friendposts" element={<FriendPosts />} />
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

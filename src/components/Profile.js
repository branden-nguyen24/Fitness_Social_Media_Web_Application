import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (route) => {
    switch (route) {
      case "calendar":
        navigate("/calendar");
        return;
      case "workouts":
        navigate("/workouts");
        return;
      case "photos":
        navigate("/photos");
        return;
      case "friendposts":
        navigate("/friendposts");
        return;
      case "logout":
        dispatch(logoutUser());
        navigate("/");
        return;
      default:
        return;
    }
  };

  return (
    <div className="profile-container">
      <div className="layout">
        <div>
          <h1>My Profile</h1>
          <div className="profile-nav">
            <button onClick={() => handleClick("calendar")}>Calendar</button>
            <button onClick={() => handleClick("workouts")}>Workouts</button>
            <button onClick={() => handleClick("photos")}>Photos</button>
            <button onClick={() => handleClick("friendposts")}>
              Friend Posts
            </button>
          </div>
          <div>
            <CustomPlaceholder width={700} height={400} />
            <br />
            <CustomPlaceholder width={700} height={400} />
            <br />
            <CustomPlaceholder width={700} height={400} />
          </div>
        </div>
        <nav>
          <CustomPlaceholder width={200} height={200} />
          <input placeholder="search" />
          <button onClick={() => handleClick("logout")}>Logout</button>
        </nav>
      </div>
    </div>
  );
};

export default Profile;

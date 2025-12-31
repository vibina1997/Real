
 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from '../assets/profile.module.css'

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={profile.profileWrap}>
      <button
        className={profile.profileBtn}
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-person-circle"></i>
        Profile
      </button>

      {open && (
        <div className={profile.dropdown}>
          <button onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;


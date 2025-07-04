// KidProfile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

// Sadə avatar variantları
const avatars = ["🐶", "🐱", "🦊", "🐸", "🐵", "🐼"];

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState("🐶");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) {
      setUser(stored);
      setAvatar(stored.avatar || "🐶");
    }
  }, []);

  const handleAvatarSelect = (a) => {
    setAvatar(a);
    const updated = { ...user, avatar: a };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // ana səhifə müvafiq route olmalıdır
  };

  if (!user) {
    return <div className="kid-container"><p className="kid-info">Giriş edilməyib.</p></div>;
  }

  return (
    <div className="kid-container">
      <div className="avatar-select">
        {avatars.map((a) => (
          <button
            key={a}
            className={`avatar-choice ${avatar === a ? "selected" : ""}`}
            onClick={() => handleAvatarSelect(a)}
          >{a}</button>
        ))}
      </div>

      <div className="avatar-display">{avatar}</div>

      <h2 style={{"padding-bottom":"20px"}} className="greeting">🎉 Xoş gəldin, {user.name}!</h2>
    

      <button className="kid-button" onClick={handleLogout}>
        🚪 Logout & Ana Səhifə
      </button>
    </div>
  );
}

export default Profile;

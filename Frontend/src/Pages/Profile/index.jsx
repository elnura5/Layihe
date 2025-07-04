import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";  // əlavə edin
import "./style.css";

// Sadə avatar variantları
const avatars = ["🐶", "🐱", "🦊", "🐸", "🐵", "🐼"];

function Profile() {
  const { t } = useTranslation();
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
    return (
      <div className="kid-container">
        <p className="kid-info">{t("not_logged_in", "Giriş edilməyib.")}</p>
      </div>
    );
  }

  return (
    <div className="kid-container">
      <div className="avatar-select">
        {avatars.map((a) => (
          <button
            key={a}
            className={`avatar-choice ${avatar === a ? "selected" : ""}`}
            onClick={() => handleAvatarSelect(a)}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="avatar-display">{avatar}</div>

      <h2 style={{ paddingBottom: "20px" }} className="greeting">
        🎉 {t("welcome_user", "Xoş gəldin")}, {user.name}!
      </h2>

      <button className="kid-button" onClick={handleLogout}>
        🚪 {t("logout_and_home", "Logout & Ana Səhifə")}
      </button>
    </div>
  );
}

export default Profile;

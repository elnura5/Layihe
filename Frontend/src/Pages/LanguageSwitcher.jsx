
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ textAlign: "right", padding: "10px 20px" }}>
      <button onClick={() => changeLanguage("az")}>AZ</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;

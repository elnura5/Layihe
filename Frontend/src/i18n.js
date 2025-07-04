// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tərcümə obyektləri
const resources = {
  az: {
    translation: {
      welcome: "Xoş gəldin",
      email: "Email",
      password: "Şifrə",
      login: "Daxil ol",
      logout: "Çıxış",
      invalidLogin: "İstifadəçi adı və ya şifrə yalnışdır!",
      successfulLogin: "Giriş uğurlu oldu!",
      profileGreeting: "Xoş gəldin, {{name}}!",
      chooseAvatar: "Avatar seçin",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      email: "Эл. почта",
      password: "Пароль",
      login: "Войти",
      logout: "Выход",
      invalidLogin: "Неверное имя пользователя или пароль!",
      successfulLogin: "Успешный вход!",
      profileGreeting: "Добро пожаловать, {{name}}!",
      chooseAvatar: "Выберите аватар",
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      email: "Email",
      password: "Password",
      login: "Login",
      logout: "Logout",
      invalidLogin: "Invalid username or password!",
      successfulLogin: "Login successful!",
      profileGreeting: "Welcome, {{name}}!",
      chooseAvatar: "Choose your avatar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az", // Default dil
  fallbackLng: "en", // Əgər tərcümə tapılmasa
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

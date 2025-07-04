import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { useTranslation } from "react-i18next";
function Login() {
  const navigate = useNavigate();
 const { t } = useTranslation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
     email: Yup.string().email(t("email") + " düzgün deyil").required(t("email") + " tələb olunur"),
      password: Yup.string().required(t("password") + " tələb olunur"),
    }),
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
      console.log("storedUser:", storedUser);
      console.log("login values:", values);

      if (
        storedUser &&
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        localStorage.setItem("user", JSON.stringify(storedUser));
        alert("Giriş uğurlu oldu!");
        navigate("/profile");
      } else {
        alert("İstifadəçi adı və ya şifrə yalnışdır!");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
         placeholder={t("email")}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      <input
        name="password"
        type="password"
          placeholder={t("şifrə")}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
      <button type="submit">{t("Daxil ol")}</button>
    </form>
  );
}

export default Login;

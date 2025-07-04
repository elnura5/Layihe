import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";  // react-i18next import
import "./style.css";

function Register() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, t("name_max", "Ad 15 simvoldan çox ola bilməz"))
        .required(t("name_required", "Ad daxil edilməlidir")),
      email: Yup.string()
        .email(t("email_invalid", "Email düzgün deyil"))
        .required(t("email_required", "Email tələb olunur")),
      password: Yup.string()
        .min(6, t("password_min", "Şifrə minimum 6 simvol olmalıdır"))
        .required(t("password_required", "Şifrə daxil edilməlidir")),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/users/register",
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Uğur:", res.data);
        alert(t("register_success", "Qeydiyyat uğurla tamamlandı!"));

        localStorage.setItem("registeredUser", JSON.stringify(values));
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert(
          err.response?.data?.message || t("register_error", "Xəta baş verdi")
        );
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="register-form">
      <h2>{t("register_heading", "Qeydiyyatdan keç")}</h2>

      <div>
        <label>{t("name_label", "Ad")}:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label>{t("email_label", "Email")}:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label>{t("password_label", "Şifrə")}:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">{t("register_button", "Qeydiyyatdan keç")}</button>
    </form>
  );
}

export default Register;

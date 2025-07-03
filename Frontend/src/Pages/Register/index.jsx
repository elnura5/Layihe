import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.css"; // Stil faylını unutma

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Ad 15 simvoldan çox ola bilməz")
        .required("Ad daxil edilməlidir"),
      email: Yup.string()
        .email("Email düzgün deyil")
        .required("Email tələb olunur"),
      password: Yup.string()
        .min(6, "Şifrə minimum 6 simvol olmalıdır")
        .required("Şifrə daxil edilməlidir"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:3000/users/register", values, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Uğur:", res.data);
        alert("Qeydiyyat uğurla tamamlandı!");
        // istəsən navigate ilə loginə yönləndirə bilərsən
        // navigate("/login");
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Xəta baş verdi");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="register-form">
      <h2>Qeydiyyatdan keç</h2>

      <div>
        <label>Ad:</label>
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
        <label>Email:</label>
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
        <label>Şifrə:</label>
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

      <button type="submit">Qeydiyyatdan keç</button>
    </form>
  );
}

export default Register;

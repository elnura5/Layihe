// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// // import axios from 'axios';

// const Login = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Email düzgün deyil')
//         .required('Email vacibdir'),
//       password: Yup.string()
//         .min(6, 'Şifrə ən az 6 simvol olmalıdır')
//         .required('Şifrə vacibdir'),
//     }),
//     onSubmit: async (values) => {
//       // try {
//       //   const res = await axios.post('http://localhost:3000/api/auth/login', values);
//       //   localStorage.setItem('token', res.data.token);
//       //   alert('Giriş uğurludur!');
//       // } catch (err) {
//       //   alert('Xəta: Email və ya şifrə yanlışdır');
//       // }
//       console.log(values);
      
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <h2>Giriş</h2>

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         placeholder="Email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div style={{ color: 'red' }}>{formik.errors.email}</div>
//       ) : null}

//       <label htmlFor="password">Şifrə</label>
//       <input
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Şifrə"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.password}
//       />
//       {formik.touched.password && formik.errors.password ? (
//         <div style={{ color: 'red' }}>{formik.errors.password}</div>
//       ) : null}

//       <button type="submit">Daxil ol</button>
//     </form>
//   );
// };

// export default Login;


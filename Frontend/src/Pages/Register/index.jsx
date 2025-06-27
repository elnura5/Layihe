// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// // import axios from 'axios';

// export default function Register() {
//   const [message, setMessage] = React.useState('');

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       username: Yup.string()
//         .min(3, 'İstifadəçi adı ən az 3 simvol olmalıdır')
//         .max(20, 'İstifadəçi adı maksimum 20 simvol ola bilər')
//         .required('İstifadəçi adı boş ola bilməz'),
//       email: Yup.string()
//         .email('Email düzgün deyil')
//         .required('Email vacibdir'),
//       password: Yup.string()
//         .min(6, 'Şifrə ən az 6 simvol olmalıdır')
//         .required('Şifrə vacibdir'),
//     }),
//     onSubmit: async (values) => {
//       // try {
//       //   await axios.post('http://localhost:5000/api/auth/register', values);
//       //   setMessage('Qeydiyyat uğurla tamamlandı!');
//       //   resetForm(); // formu sıfırla
//       // } catch (error) {
//       //   setMessage('Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.');
//       // }
//       console.log(values);
      
//     },
//   });

//   return (
//     <div>
//       <h2>Qeydiyyat</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="İstifadəçi adı"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.username}
//         />
//         {formik.touched.username && formik.errors.username && (
//           <div style={{ color: 'red' }}>{formik.errors.username}</div>
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div style={{ color: 'red' }}>{formik.errors.email}</div>
//         )}

//         <input
//           type="password"
//           name="password"
//           placeholder="Şifrə"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div style={{ color: 'red' }}>{formik.errors.password}</div>
//         )}

//         <button type="submit">Qeydiyyat</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// }



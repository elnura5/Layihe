// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const url = isLogin ? '/api/auth/login' : '/api/auth/register';
//       const { data } = await axios.post(url, { email, password });
//       setMessage(isLogin ? 'Giriş uğurlu oldu!' : 'Qeydiyyat uğurlu oldu!');
//       if (isLogin) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         // İstəsən redirect edə bilərsən, məsələn:
//         // window.location.href = '/user';
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Xəta baş verdi');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Giriş' : 'Qeydiyyat'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Şifrə"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">{isLogin ? 'Daxil ol' : 'Qeydiyyatdan keç'}</button>
//       </form>
//       <p onClick={toggleMode} style={{ cursor: 'pointer', color: 'blue', marginTop: '10px' }}>
//         {isLogin ? 'Hesabın yoxdur? Qeydiyyatdan keç' : 'Hesabın var? Giriş et'}
//       </p>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AuthPage;

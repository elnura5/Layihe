// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Sadə yoxlama (demo məqsədli)
//     if (username === 'admin' && password === '1234') {
//       localStorage.setItem('adminToken', 'demo-token');
//       window.location.href = '/'; // Admin panel əsas səhifəsinə yönləndir
//     } else {
//       alert('Yanlış istifadəçi adı və ya şifrə');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Admin Login</h2>
//       <input
//         type="text"
//         placeholder="İstifadəçi adı"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Şifrə"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button type="submit">Daxil ol</button>
//     </form>
//   );
// };

// export default Login;

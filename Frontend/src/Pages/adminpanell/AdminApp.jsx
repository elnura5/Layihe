// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
// import UsersList from './Components/UsersList';
// import Login from './Components/Login';

// const AdminApp = () => {
//   // Sadə auth yoxlaması (misal üçün)
//   const isLoggedIn = Boolean(localStorage.getItem('adminToken'));

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/"
//           element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
//         />
//         <Route
//           path="/users"
//           element={isLoggedIn ? <UsersList /> : <Navigate to="/login" replace />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default AdminApp;

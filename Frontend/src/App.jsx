
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import VideoPlayer from './Pages/VideoPlayer';
import About from './Pages/About';
// import Register from './Pages/Register';
// import AuthPage from './Pages/AuthPage';
// import Login from './Pages/Login';
import Admin from './Pages/AdminPanel';
import { AddAdmin } from './Pages/AddAdmin';
import AllCartoons from './Components/AllCartoons';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/cartoon/:id" element={<VideoPlayer />} />
            <Route path="/about" element={<About />} />
             <Route path="/allcartoon" element={<AllCartoons />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<AuthPage />} /> */}
             <Route path="/admin" element={<Admin />} />
                <Route path="/addadmin" element={<AddAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

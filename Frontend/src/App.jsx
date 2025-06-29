import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import VideoPlayer from './Pages/VideoPlayer';
import Admin from './Pages/AdminPanel';
import { AddAdmin } from './Pages/AddAdmin';
import AllCartoons from './Components/AllCartoons';

import { useRef } from 'react';

function App() {
  const charactersRef = useRef(null); // Qəhrəmanlar bölməsi üçün ref

  const scrollToCharacters = () => {
    charactersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout onScrollToCharacters={scrollToCharacters} />}>
            <Route index element={<Home charactersRef={charactersRef} />} />
            <Route path="/cartoon/:id" element={<VideoPlayer />} />
            <Route path="/allcartoon" element={<AllCartoons />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addadmin" element={<AddAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import VideoPlayer from './Pages/VideoPlayer';
import AllCartoons from './Components/AllCartoonsSection';
import Quiz from './Pages/Quiz';
import CharactersSlider from './Components/CharactersSection';
import Admin from './Pages/AdminPanel/Admin/Admin';
import { AddAdmin } from './Pages/AdminPanel/Admin/AddAdmin';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/cartoon/:id" element={<VideoPlayer />} />
            <Route path="/allcartoon" element={<AllCartoons />} />
             <Route path="/quiz" element={<Quiz/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addadmin" element={<AddAdmin/>} />
                <Route path="/" element={<CharactersSlider />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

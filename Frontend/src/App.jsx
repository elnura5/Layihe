
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AllCartoons from './Pages/AllCartoons';
import Categories from './Pages/Categories';
import VideoPlayer from './Pages/VideoPlayer';
import About from './Pages/About';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route  index element={<Home />} />
        <Route path="/cartoons" element={<AllCartoons />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cartoon/:id" element={<VideoPlayer />} />
        <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

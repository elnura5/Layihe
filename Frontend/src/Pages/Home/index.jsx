import React from 'react';
import AllCartoons from '../../Components/AllCartoonsSection';
import ImageSlider from '../../Components/CizgiTvSection/ImageSlider';
import './style.css';
import CharactersSection from '../../Components/CharactersSection';
import Cartoonday from '../../Components/CartoonDay';
function Home() {
  return (
    <div>
      <ImageSlider />
      {/* Bütün cizgi filmlər */}
      <AllCartoons />
      {/* Qəhrəmanlar bölməsi */}
      <CharactersSection />
      <Cartoonday/>
    </div>
  );
}

export default Home;

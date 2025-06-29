import React from 'react';
import AllCartoons from '../../Components/AllCartoons';
import ImageSlider from '../../Components/Header/ImageSlider';
import './style.css';
import CharactersSection from '../../Components/CharactersSection';
function Home({ charactersRef }) {
  return (
    <div>
      <ImageSlider />
      {/* Bütün cizgi filmlər */}
      <AllCartoons />
      {/* Qəhrəmanlar bölməsi */}
      <CharactersSection ref={charactersRef} />
    </div>
  );
}

export default Home;

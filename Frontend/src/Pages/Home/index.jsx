import React from 'react';
import AllCartoons from '../../Components/AllCartoonsSection';
import ImageSlider from '../../Components/CizgiTvSection/ImageSlider';
import './style.css';
import CharactersSection from '../../Components/CharactersSection';
import Cartoonday from '../../Components/CartoonDay';
import {  Element } from 'react-scroll';
function Home() {
  return (
    <div>
      <ImageSlider />
      <AllCartoons />
      <Cartoonday/>
      <Element name="heroes">
          <CharactersSection />
      </Element>
    
    </div>
  );
}

export default Home;

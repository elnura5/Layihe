import React, { useRef, useEffect } from 'react';
import './style.css';
import characters from '../../data/characters';


const CharactersSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let Amount = 0;

    const scrollStep = () => {
      if (!slider) return;

      // Scroll sağa 1px
      slider.scrollLeft += 1;
      Amount += 1;

      // Əgər sona çatıbsa, başa qayıt
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
        Amount = 0;
      }
    };

    const interval = setInterval(scrollStep, 20);

    return () => clearInterval(interval);
  }, []);

  // Loop effekti üçün 3 dəfə təkrar
  const repeatedCharacters = [...characters, ...characters, ...characters];

  return (
    <section className="heroes">
      <div className="characters-slider" ref={sliderRef}>
        {repeatedCharacters.map((char, index) => (
          <div className="character-card" key={index}>
            <img src={char.img} alt={char.name} />
            <h4 style={{"font-size":"1rem"}} >{char.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharactersSlider;

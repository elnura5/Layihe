import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import characters from '../../data/characters';

const CharactersSlider = () => {
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const slider = sliderRef.current;
    let Amount = 0;

    const scrollStep = () => {
      if (!slider) return;

      slider.scrollLeft += 1;
      Amount += 1;

      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
        Amount = 0;
      }
    };

    const interval = setInterval(scrollStep, 20);

    return () => clearInterval(interval);
  }, []);

  const repeatedCharacters = [...characters, ...characters, ...characters];

  return (
    <section className="heroes">
      <div className="characters-slider" ref={sliderRef}>
        {repeatedCharacters.map((char, index) => (
          <div className="character-card" key={index}>
            <img src={char.img} alt={t(`characters.${char.name}`, char.name)} />
            <h4 style={{ fontSize: "1rem" }}>{t(`characters.${char.name}`, char.name)}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharactersSlider;

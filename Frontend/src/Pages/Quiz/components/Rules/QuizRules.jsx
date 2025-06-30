import React from 'react';
import './style.css';

const QuizRules = ({ onStart }) => (
  <div className="puzzle-rules">
    <h3>Tapmaca qaydaları:</h3>
    <ul>
      <li>Sual gəldikdə, cavabı düşünmək üçün 10 saniyə vaxtın olacaq.</li>
      <li>Vaxt bitəndə avtomatik olaraq doğru cavab göstəriləcək.</li>
      <li>Daha sonra "Sonrakı tapmaca" düyməsinə klikləyərək davam edə bilərsən.</li>
    </ul>
    <button className="start-btn" onClick={onStart}>Başlayaq</button>
  </div>
);

export default QuizRules;

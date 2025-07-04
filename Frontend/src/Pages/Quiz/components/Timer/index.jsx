import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';  // import edin
import './style.css';
import { quizzes } from '../../../../data/quizzes';

const QuizTimer = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !showAnswer) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setShowAnswer(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, showAnswer]);

  const handleNext = () => {
    const next = (index + 1) % quizzes.length;
    setIndex(next);
    setTimeLeft(10);
    setShowAnswer(false);
  };

  return (
    <div className="puzzle-card">
      <h3>{quizzes[index].question}</h3>
      <div className="timer">⏱️ {timeLeft}s</div>
      {showAnswer && (
        <div className="answer">
          {t('quiz_answer_label', 'Cavab')}: <strong>{quizzes[index].answer}</strong>
        </div>
      )}
      {showAnswer && (
        <button className="next-btn" onClick={handleNext}>
          {t('quiz_next_btn', 'Növbəti tapmaca')}
        </button>
      )}
    </div>
  );
};

export default QuizTimer;

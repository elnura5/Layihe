import React, { useState } from 'react';
import QuizRules from '../Rules/QuizRules';
import QuizTimer from '../Timer';

const QuizApp = () => {
  const [mode, setMode] = useState('rules'); // 'rules' və ya 'play'

  return mode === 'rules'
    ? <QuizRules onStart={() => setMode('play')} />
    : <QuizTimer />;
};

export default QuizApp;

import React from 'react';
import QuizApp from './components/QuizApp';
import "./style.css"
const QuizSection = React.forwardRef((props, ref) => (
  <section ref={ref} id="puzzles" className="puzzles-section">
    <h2 style={{"color":"brown"}}>Tapmacalar</h2>
    <QuizApp />
  </section>
));

export default QuizSection;

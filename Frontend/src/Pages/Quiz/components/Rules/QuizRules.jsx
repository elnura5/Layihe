import React from 'react';
import { useTranslation } from 'react-i18next';  // import edin
import './style.css';

const QuizRules = ({ onStart }) => {
  const { t } = useTranslation();

  return (
    <div className="puzzle-rules">
      <h3>{t('quiz_rules_title', 'Tapmaca qaydaları:')}</h3>
      <ul>
        <li>{t('quiz_rule_1', 'Sual gəldikdə, cavabı düşünmək üçün 10 saniyə vaxtın olacaq.')}</li>
        <li>{t('quiz_rule_2', 'Vaxt bitəndə avtomatik olaraq doğru cavab göstəriləcək.')}</li>
        <li>{t('quiz_rule_3', 'Daha sonra "Sonrakı tapmaca" düyməsinə klikləyərək davam edə bilərsən.')}</li>
      </ul>
      <button className="start-btn" onClick={onStart}>
        {t('quiz_start_btn', 'Başlayaq')}
      </button>
    </div>
  );
};

export default QuizRules;

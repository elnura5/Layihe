import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

function Cartoonday() {
  const { t } = useTranslation();

  return (
    <div className="cartoon-day">
      <h2>{t('cartoon_day_title', '6 Aprel – Beynəlxalq Cizgi Filmləri Günüdür')}</h2>
      <p>
        {t('cartoon_day_paragraph_1', 'Dünya Cizgi Filmi günü 2002-ci ildə Beynəlxalq Animasiya Filmləri Dərnəyi tərəfindən təsis edildi.')}
        {' '}
        {t(
          'cartoon_day_paragraph_2',
          '1906-cı ilin aprelin 6-da Con Stuart Blekton və Albert Smit Amerikanın kinoteatr birliyi ilə Vitage təsisçiləri ilk cizgi filmləri “Gülməli üzlərin gülməli mərhələləri” adlı film çəkmişdir. Bunlar animasiya tarixində ilk cizgi filmləri idi.'
        )}
        <br /><br />
        {t(
          'cartoon_day_paragraph_3',
          'Beynəlxalq Cizgi Filmləri Günü öncəsi dünyanın hər yerindən animasiya kinosu peşəkarları və həvəskarları öz filmlərinin proqramlarını bir-birləri ilə bölüşür və bu hadisəni bütün il gözləyən tamaşaçılar üçün əsərlərinin ilk nümayişini göstərirlər. Cizgi filmlərinin belə seansları artıq dünyanın 104 ölkəsində keçirilir.'
        )}
      </p>
    </div>
  );
}

export default Cartoonday;

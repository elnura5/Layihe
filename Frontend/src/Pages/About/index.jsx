import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h2>{t('about_title', 'Haqqımızda')}</h2>

      <p>
        <strong>{t('about_platform_name', '“Milli Cizgi Filmləri”')}</strong> — {t(
          'about_platform_desc',
          'Azərbaycanın uşaq mədəniyyətini və dəyərlərini təbliğ edən, milli ruhda hazırlanmış cizgi filmlərini bir araya gətirən onlayn platformadır.'
        )}
      </p>

      <p>
        {t(
          'about_goal',
          'Məqsədimiz uşaqlarımıza təkcə əyləncə yox, həm də tərbiyə, vətənpərvərlik, dostluq və ailə dəyərləri aşılayan animasiyalar təqdim etməkdir. Saytımızda həm klassik Azərbaycan cizgi filmləri, həm də yeni yaradılmış animasiya layihələri təqdim olunur.'
        )}
      </p>

      <p>
        {t(
          'about_belief',
          'Biz inanırıq ki, milli kimliyimizin qorunmasında və gələcək nəslin formalaşmasında cizgi filmlərinin xüsusi rolu vardır. Bu məqsədlə, yaradıcı heyətimiz və tərəfdaşlarımızla birlikdə uşaqlar üçün maraqlı və maarifləndirici kontent hazırlayırıq.'
        )}
      </p>

      <p>
        {t(
          'about_children',
          'Saytımıza daxil olan hər bir uşaq, milli dəyərlərimizi tanıyaraq böyüyür, eyni zamanda əyləncəli və təhlükəsiz rəqəmsal mühitdə vaxt keçirir.'
        )}
      </p>

      <p>
        <em>
          {t(
            'about_slogan',
            '“Milli Cizgi Filmləri” — dünənin sevimlilərini, bu günün qəhrəmanlarını və sabahın dəyərlərini birləşdirir.'
          )}
        </em>
      </p>
    </div>
  );
}

export default About;

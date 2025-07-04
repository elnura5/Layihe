// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tərcümə obyektləri
const resources = {
  az: {
    translation: {
      characters: {
        cirdtan: {
          name: "Cırtdan",
          desc: "Ağıllı və cəsur Azərbaycan cizgi film qəhrəmanı."
        },
        pispisa_xanim: {
          name: "Pıspısa xanım",
          desc: "Dostluq mövzusunda, dostluğun qarşılıqlı olması önəmlidir."
        },
        humay: {
          name: "Humay",
          desc: "Oyuncaqlara pis davranan Humay onların canının olduğunu başa düşür və dəyişir"
        },
        insan_ve_meshe_heyvanlari: {
          name: "İnsan və meşə heyvanları",
          desc: "İnsan heyvanlara və təbiətə qayğı göstərir, onları yanğından xilas edir."
        },
        balaca_coban: {
          name: "Balaca çoban",
          desc: "Ata-ananın himayəsində olan uşağın qeyri-müstəqilliyi."
        },
        quzu_ve_canavar: {
          name: "Quzu və Canavar",
          desc: "Quzu müdrikliyi ilə canavarın pəncəsindən xilas olur."
        },
        iki_qardas_ekrek_ve_sekrek: {
          name: "İki qardaş Əkrək və Səkrək",
          desc: "Birlik və dostluq mesajı."
        },
        ayi_ve_sican: {
          name: "Ayı və Siçan",
          desc: "Xeyirxahlıq və yardım mövzusu."
        },
        kirpi_balasi: {
          name: "Kirpi balası",
          desc: "Təbiətə qayğı və dostluq mövzusu."
        },
        hiylegar_tulku: {
          name: "Hiyləgər Tülkü",
          desc: "Dürüstlük və ədalət mesajı."
        },
        qaravelli: {
          name: "Qaravəlli",
          desc: "Müasir problemlər vasitəsilə təmsil olunur."
        }
      },
      name_max: "Ad 15 simvoldan çox ola bilməz",
      name_required: "Ad daxil edilməlidir",
      email_invalid: "Email düzgün deyil",
      email_required: "Email tələb olunur",
      password_min: "Şifrə minimum 6 simvol olmalıdır",
      password_required: "Şifrə daxil edilməlidir",
      register_success: "Qeydiyyat uğurla tamamlandı!",
      register_error: "Xəta baş verdi",
      register_heading: "Qeydiyyatdan keç",
      name_label: "Ad",
      email_label: "Email",
      password_label: "Şifrə",
      register_button: "Qeydiyyatdan keç",
      loading: "Yüklənir...",
      not_found: "Cizgi filmi tapılmadı!",
      year: "İl",
      description: "Təsvir",
      back_home: "Ana səhifəyə qayıt",
      welcome: "Xoş gəldin",
      email: "Email",
      password: "Şifrə",
      login: "Daxil ol",
      logout: "Çıxış",
      invalidLogin: "İstifadəçi adı və ya şifrə yalnışdır!",
      successfulLogin: "Giriş uğurlu oldu!",
      profileGreeting: "Xoş gəldin, {{name}}!",
      chooseAvatar: "Avatar seçin",
      quiz_rules_title: "Tapmaca qaydaları:",
      quiz_rule_1: "Sual gəldikdə, cavabı düşünmək üçün 10 saniyə vaxtın olacaq.",
      quiz_rule_2: "Vaxt bitəndə avtomatik olaraq doğru cavab göstəriləcək.",
      quiz_rule_3: '"Sonrakı tapmaca" düyməsinə klikləyərək davam edə bilərsən.',
      quiz_start_btn: "Başlayaq",
      quiz_answer_label: "Cavab",
      quiz_next_btn: "Növbəti tapmaca",
       not_logged_in: "Giriş edilməyib.",
      welcome_user: "Xoş gəldin",
      logout_and_home: "Logout & Ana Səhifə",
       about_title: "Haqqımızda",
      about_platform_name: "“Milli Cizgi Filmləri”",
      about_platform_desc: "Azərbaycanın uşaq mədəniyyətini və dəyərlərini təbliğ edən, milli ruhda hazırlanmış cizgi filmlərini bir araya gətirən onlayn platformadır.",
      about_goal: "Məqsədimiz uşaqlarımıza təkcə əyləncə yox, həm də tərbiyə, vətənpərvərlik, dostluq və ailə dəyərləri aşılayan animasiyalar təqdim etməkdir. Saytımızda həm klassik Azərbaycan cizgi filmləri, həm də yeni yaradılmış animasiya layihələri təqdim olunur.",
      about_belief: "Biz inanırıq ki, milli kimliyimizin qorunmasında və gələcək nəslin formalaşmasında cizgi filmlərinin xüsusi rolu vardır. Bu məqsədlə, yaradıcı heyətimiz və tərəfdaşlarımızla birlikdə uşaqlar üçün maraqlı və maarifləndirici kontent hazırlayırıq.",
      about_children: "Saytımıza daxil olan hər bir uşaq, milli dəyərlərimizi tanıyaraq böyüyür, eyni zamanda əyləncəli və təhlükəsiz rəqəmsal mühitdə vaxt keçirir.",
      cartoon_day_title: "6 Aprel – Beynəlxalq Cizgi Filmləri Günüdür",
      cartoon_day_paragraph_1: "Dünya Cizgi Filmi günü 2002-ci ildə Beynəlxalq Animasiya Filmləri Dərnəyi tərəfindən təsis edildi.",
      cartoon_day_paragraph_2: "1906-cı ilin aprelin 6-da Con Stuart Blekton və Albert Smit Amerikanın kinoteatr birliyi ilə Vitage təsisçiləri ilk cizgi filmləri “Gülməli üzlərin gülməli mərhələləri” adlı film çəkmişdir. Bunlar animasiya tarixində ilk cizgi filmləri idi.",
      cartoon_day_paragraph_3: "Beynəlxalq Cizgi Filmləri Günü öncəsi dünyanın hər yerindən animasiya kinosu peşəkarları və həvəskarları öz filmlərinin proqramlarını bir-birləri ilə bölüşür və bu hadisəni bütün il gözləyən tamaşaçılar üçün əsərlərinin ilk nümayişini göstərirlər. Cizgi filmlərinin belə seansları artıq dünyanın 104 ölkəsində keçirilir.",
      about_slogan: "“Milli Cizgi Filmləri” — dünənin sevimlilərini, bu günün qəhrəmanlarını və sabahın dəyərlərini birləşdirir.",
      home: "🏡 Ana Səhifə",
cartoons: "🎞️ Cizgi Filmlər",
heroes: "🧚‍♀️ Qəhrəmanlar",
quiz: "🧩 Tapmaca",
profile: "👤 Profil",
language: "Dil",
about: "Haqqımızda",
terms: "Şərtlər",
privacy: "Məxfilik",
developed_by: "Hazırladı",
    },
  },
  ru: {
    translation: {
      about: "О нас",
terms: "Условия",
privacy: "Конфиденциальность",
developed_by: "Разработал",
      home: "🏡 Главная",
cartoons: "🎞️ Мультфильмы",
heroes: "🧚‍♀️ Герои",
quiz: "🧩 Викторина",
profile: "👤 Профиль",
language: "Язык",
      characters: {
        cirdtan: {
          name: "Джиртдан",
          desc: "Умный и смелый герой азербайджанских мультфильмов."
        },
        pispisa_xanim: {
          name: "Пыспыса ханым",
          desc: "Тема дружбы, важность взаимности."
        },
        humay: {
          name: "Хумай",
          desc: "Плохо обращаясь с игрушками, Хумай понимает, что у них есть души и меняется."
        },
        insan_ve_meshe_heyvanlari: {
          name: "Человек и лесные животные",
          desc: "Человек заботится о животных и природе, спасает их от пожара."
        },
        balaca_coban: {
          name: "Маленький пастух",
          desc: "Зависимость ребенка от родителей."
        },
        quzu_ve_canavar: {
          name: "Ягненок и Волк",
          desc: "Ягненок спасается от лап волка своей мудростью."
        },
        iki_qardas_ekrek_ve_sekrek: {
          name: "Два брата Экрек и Секрек",
          desc: "Послание о единстве и дружбе."
        },
        ayi_ve_sican: {
          name: "Медведь и Мышь",
          desc: "Тема доброты и помощи."
        },
        kirpi_balasi: {
          name: "Ёжонок",
          desc: "Тема заботы о природе и дружбы."
        },
        hiylegar_tulku: {
          name: "Хитрая Лиса",
          desc: "Послание о честности и справедливости."
        },
        qaravelli: {
          name: "Каравелли",
          desc: "Представлено через современные проблемы."
        }
      },
            cartoon_day_title: "6 апреля — Международный день мультфильмов",
      cartoon_day_paragraph_1: "Международный день мультфильмов был учреждён в 2002 году Международной ассоциацией анимационных фильмов.",
      cartoon_day_paragraph_2: "6 апреля 1906 года Джон Стюарт Блектон и Альберт Смит, основатели Американского союза кинотеатров Витаж, сняли первые анимационные фильмы под названием «Забавные фазы забавных лиц». Это были первые анимационные фильмы в истории анимации.",
      cartoon_day_paragraph_3: "Перед Международным днём мультфильмов профессионалы и любители анимационного кино со всего мира обмениваются своими программами фильмов и показывают премьерные показы своих работ для зрителей, которые ждут этого события весь год. Такие сеансы мультфильмов проходят уже в 104 странах мира.",
       about_title: "О нас",
      about_platform_name: "“Milli Cizgi Filmləri”",
      about_platform_desc: "Онлайн-платформа, объединяющая азербайджанские мультфильмы, продвигающие детскую культуру и ценности в национальном духе.",
      about_goal: "Наша цель — предлагать детям не только развлечения, но и анимации, воспитывающие патриотизм, дружбу и семейные ценности. На нашем сайте представлены как классические азербайджанские мультфильмы, так и новые анимационные проекты.",
      about_belief: "Мы верим, что мультфильмы играют особую роль в сохранении национальной идентичности и формировании будущих поколений. В этом направлении наша творческая команда и партнеры создают интересный и образовательный контент для детей.",
      about_children: "Каждый ребенок, посещающий наш сайт, растет, узнавая наши национальные ценности, одновременно проводя время в увлекательной и безопасной цифровой среде.",
      about_slogan: "“Milli Cizgi Filmləri” объединяет любимцев вчерашнего дня, героев сегодняшнего и ценности завтрашнего.",
      not_logged_in: "Не выполнен вход.",
      welcome_user: "Добро пожаловать",
      logout_and_home: "Выйти и на главную",
       quiz_answer_label: "Ответ",
      quiz_next_btn: "Следующая загадка",
       quiz_rules_title: "Правила загадки:",
      quiz_rule_1: "Когда появляется вопрос, у вас есть 10 секунд, чтобы подумать над ответом.",
      quiz_rule_2: "Когда время истекает, правильный ответ показывается автоматически.",
      quiz_rule_3: 'Затем вы можете продолжить, нажав кнопку "Следующая загадка".',
      quiz_start_btn: "Начнем",
      name_max: "Имя не должно превышать 15 символов",
      name_required: "Имя обязательно для заполнения",
      email_invalid: "Неверный адрес электронной почты",
      email_required: "Электронная почта обязательна",
      password_min: "Пароль должен быть не менее 6 символов",
      password_required: "Пароль обязателен для заполнения",
      register_success: "Регистрация успешно завершена!",
      register_error: "Произошла ошибка",
      register_heading: "Регистрация",
      name_label: "Имя",
      email_label: "Электронная почта",
      password_label: "Пароль",
      register_button: "Зарегистрироваться",
      loading: "Загрузка...",
      not_found: "Мультфильм не найден!",
      year: "Год",
      description: "Описание",
      back_home: "Вернуться на главную",
      welcome: "Добро пожаловать",
      email: "Эл. почта",
      password: "Пароль",
      login: "Войти",
      logout: "Выход",
      invalidLogin: "Неверное имя пользователя или пароль!",
      successfulLogin: "Успешный вход!",
      profileGreeting: "Добро пожаловать, {{name}}!",
      chooseAvatar: "Выберите аватар",
    },
  },
  en: {
    translation: { cartoon_day_title: "April 6 – International Animation Day",
      cartoon_day_paragraph_1: "International Animation Day was established in 2002 by the International Animated Film Association.",
      cartoon_day_paragraph_2: "On April 6, 1906, John Stuart Blackton and Albert Smith, founders of the American Vitagraph Theater Union, made the first animated film called “Humorous Phases of Funny Faces.” These were the first animated films in animation history.",
      cartoon_day_paragraph_3: "Before International Animation Day, animation professionals and enthusiasts from around the world share their film programs with each other and present their works’ premieres to audiences who have been waiting for this event all year. Such animation screenings are now held in 104 countries worldwide.",
      about_title: "About Us",
      about_platform_name: "“Milli Cizgi Filmləri”",
      about_platform_desc: "An online platform that brings together Azerbaijani animated films promoting children's culture and values with a national spirit.",
      about_goal: "Our goal is to offer children not only entertainment but also animations instilling education, patriotism, friendship, and family values. Our site features both classic Azerbaijani cartoons and newly created animation projects.",
      about_belief: "We believe that animated films play a special role in preserving national identity and shaping future generations. To this end, our creative team and partners produce interesting and educational content for children.",
      about_children: "Every child visiting our site grows up recognizing our national values while enjoying a fun and safe digital environment.",
      about_slogan: "“Milli Cizgi Filmləri” unites yesterday's favorites, today's heroes, and tomorrow's values.",
      not_logged_in: "Not logged in.",
      welcome_user: "Welcome",
      logout_and_home: "Logout & Home",
       quiz_rules_title: "Puzzle Rules:",
      quiz_rule_1: "When a question appears, you have 10 seconds to think about the answer.",
      quiz_rule_2: "When time runs out, the correct answer will be shown automatically.",
      quiz_rule_3: 'Then you can continue by clicking the "Next puzzle" button.',
      quiz_start_btn: "Let's start",
       name_max: "Name cannot be longer than 15 characters",
      name_required: "Name is required",
      email_invalid: "Invalid email address",
      email_required: "Email is required",
      password_min: "Password must be at least 6 characters",
      password_required: "Password is required",
      register_success: "Registration completed successfully!",
      register_error: "An error occurred",
      register_heading: "Register",
      name_label: "Name",
      email_label: "Email",
      password_label: "Password",
      register_button: "Register",
      loading: "Loading...",
      not_found: "Cartoon not found!",
      year: "Year",
      description: "Description",
      back_home: "Back to Home",
      welcome: "Welcome",
      email: "Email",
      password: "Password",
      login: "Login",
      logout: "Logout",
      invalidLogin: "Invalid username or password!",
      successfulLogin: "Login successful!",
      profileGreeting: "Welcome, {{name}}!",
      chooseAvatar: "Choose your avatar",
      quiz_answer_label: "Answer",
      quiz_next_btn: "Next puzzle",
home: "🏡 Home",
cartoons: "🎞️ Cartoons",
heroes: "🧚‍♀️ Heroes",
quiz: "🧩 Quiz",
profile: "👤 Profile",
language: "Language",
about: "About",
terms: "Terms",
privacy: "Privacy",
developed_by: "Developed by",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az", // Default dil
  fallbackLng: "en", // Əgər tərcümə tapılmasa
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

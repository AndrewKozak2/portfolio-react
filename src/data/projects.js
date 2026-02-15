export const projects = [
  {
    id: 1,
    title: "TrueScale Shop",
    description:
      "Повноцінний інтернет-магазин з кошиком, фільтрацією товарів та оформленням замовлення.",
    tech: [
      "React",
      "Tailwind CSS",
      "react-three-fiber",
      "react-router",
      "i18next",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    link: "https://github.com/AndrewKozak2/diplom-react",
  },

  {
    id: 2,
    title: "Currency Dashboard",
    description:
      "SPA для моніторингу курсів та конвертації валют. Робота з API винесена в кастомний хук з AbortController для запобігання Memory Leaks. Навігація працює через вкладені роути React Router v6. Двосторонній калькулятор реалізовано через Derived State: це оптимізувало рендер та дозволило відмовитися від анти-паттерну синхронізації стейтів через useEffect.",
    tech: ["React", "React Router v6", "Fetch API", "CSS Grid"],
    link: "https://github.com/AndrewKozak2/currency-dashboard",
  },
  {
    id: 3,
    title: "Kanban Board Task Manager",
    description:
      "Повноцінний додаток для управління задачами з підтримкою Drag-and-Drop. Реалізовано архітектуру похідного стану (Derived State) для миттєвого пошуку з оптимізацією рендеру через useMemo. UI включає кастомні селекти, авторозширення полів вводу (useLayoutEffect + маніпуляції з DOM) та збереження стейту і темної теми у LocalStorage.",
    tech: ["React", "TypeScript", "Vite", "Drag & Drop API", "CSS Variables"],
    link: "https://github.com/AndrewKozak2/kanban-ts",
  },
  {
    id: 4,
    title: "Simple Expense Tracker",
    description:
      "Застосунок для обліку фінансів. Реалізовано логіку додавання та видалення транзакцій, підрахунок загального балансу за допомогою методів масивів (reduce). Дані зберігаються в LocalStorage, тому не зникають після оновлення сторінки.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "DOM Manipulation"],
    link: "https://github.com/AndrewKozak2/Simple-Expense-Tracker",
  },

  {
    id: 5,
    title: "Mountain Travel Landing",
    description:
      "Адаптивний лендінг, розроблений на React. Використано компонентний підхід (JSX), хуки для управління станом та CSS Flexbox/Grid для верстки. Реалізовано плавний скрол та адаптив під мобільні пристрої.",
    tech: ["React", "CSS", "Vite"],
    link: "https://github.com/AndrewKozak2/mountain-site",
  },
  {
    id: 6,
    title: "React Timer & Stopwatch",
    description:
      "React-застосунок для тайм-менеджменту. Реалізовано точний відлік часу через setInterval з корекцією по Date.now() для уникнення дрейфу браузера. Стан синхронізується через кастомний хук useLocalStorage. Інтегровано Web Audio API для звукових сповіщень та Notification API для системних алертів у фоновому режимі. Анімація прогресу побудована на маніпуляціях з SVG (stroke-dashoffset).",
    tech: [
      "React",
      "Custom Hooks",
      "Web Audio API",
      "Notification API",
      "SVG Animation",
    ],
    link: "https://github.com/AndrewKozak2/react-ios-clock-copy",
  },

  {
    id: 7,
    title: "Interactive Quiz App",
    description:
      "SPA-додаток для тестування знань. Реалізовано логіку перемикання питань, підрахунок балів (State Management) та умовний рендеринг (Conditional Rendering) для відображення результатів. Використано масив об'єктів для зберігання структури питань.",
    tech: ["React", "CSS", "Vite"],
    link: "https://github.com/AndrewKozak2/quiz",
  },
  {
    id: 8,
    title: "Weather App",
    description:
      "Додаток прогнозу погоди з використанням OpenWeather API та геолокації користувача.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AndrewKozak2/WeatherApp-with-API",
  },
  {
    id: 9,
    title: "To-Do List",
    description:
      "To-Do додаток з можливістю Drag-and-Drop та збереженням у LocalStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AndrewKozak2/to-do-list",
  },
];

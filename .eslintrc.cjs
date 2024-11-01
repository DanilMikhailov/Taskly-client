module.exports = {
  root: true,  // Указывает, что это корневая конфигурация ESLint
  env: { 
    browser: true,  // Определяет, что код будет выполняться в браузере
    es2020: true,   // Устанавливает поддержку синтаксиса ES2020
  },
  extends: [
    'eslint:recommended',  // Использует рекомендуемые правила ESLint
    'plugin:react/recommended',  // Добавляет рекомендуемые правила для React
    'plugin:react/jsx-runtime',  // Поддержка нового JSX runtime в React 17+
    'plugin:react-hooks/recommended',  // Добавляет рекомендуемые правила для хуков React
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],  // Игнорирует папку 'dist' и файл '.eslintrc.cjs' при линтинге
  parserOptions: { 
    ecmaVersion: 'latest',  // Устанавливает последнюю версию ECMAScript для разбора синтаксиса
    sourceType: 'module',   // Указывает использование модулей ES (import/export)
  },
  settings: { 
    react: { version: '18.2' },  // Указывает, что используется версия React 18.2
  },
  plugins: ['react-refresh'],  // Подключает плагин для поддержки react-refresh (горячая перезагрузка компонентов)
  rules: {
    'react-refresh/only-export-components': [
      'warn',  // Предупреждает, если экспортируются не компоненты
      { allowConstantExport: true },  // Разрешает экспортировать константы вместе с компонентами
    ],
  },
}

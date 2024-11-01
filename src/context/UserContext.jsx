import { createContext, useContext } from 'react';
import { useLocalStorage } from '../util.js'; 

// Создаем объект контекста пользователя
const UserContext = createContext();

// Провайдер для управления состоянием пользователя
const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('taskly_user', null); // Состояние пользователя с использованием локального хранилища
  
  const updateUser = (newUser) => {
    setUser(newUser); // Обновляем данные пользователя
  };

  const value = {
    user,
    updateUser,
  }; // Доступные значения контекста

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования контекста пользователя в компонентах
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser должен быть использован внутри UserProvider');
  }
  return context; // Возвращаем значения контекста
};

// Экспортируем провайдер и хук
export { UserProvider, useUser };

// src/App.jsx
import { UserProvider } from './context/UserContext';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';
import Tasks from './pages/Tasks';
import SingleTask from './pages/SingleTask';

export default function App() {
  return (
    <UserProvider>
      <ChakraProvider>
        <BrowserRouter>
          <NavBar />
          <Toaster position='bottom-right' />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />

            {/* Приватные маршруты */}
            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-task' element={<CreateTask />} />
              <Route path='/update-task/:taskId' element={<UpdateTask />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/tasks/:taskId' element={<SingleTask />} />
            </Route>

            {/* Обработка 404 ошибок */}
            <Route path='*' element={<h1>404 - Страница не найдена</h1>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </UserProvider>
  );
}

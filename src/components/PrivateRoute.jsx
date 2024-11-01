import { useUser } from '../context/UserContext';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to='/signin' />;
} 
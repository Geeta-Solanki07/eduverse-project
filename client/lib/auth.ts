import { jwtDecode } from 'jwt-decode';
import api from './api';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
}

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return jwtDecode(token) as User;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getUser = (): User | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    return jwtDecode(token) as User;
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!getUser();
};
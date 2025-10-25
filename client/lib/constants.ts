import { countReset } from "console";

export const ROUTES = {
  HOME: '/',
  IT: '/it',
  ACADEMICS: '/academics',
  COURSE: '/course',
  SUPPORT: '/support',
  LOGIN: '/login',
  ADMIN: '/admin',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
};

export const META = {
  SITE_NAME: 'DOUSOFT EDUVERSE',
  DESCRIPTION: 'A comprehensive educational platform',
};
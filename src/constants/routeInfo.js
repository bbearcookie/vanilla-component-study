import Counter from '../components/Counter.js';
import MainPage from '../pages/MainPage.js';
import LoginComponent from '../components/LoginComponent.js';

export const BASE_URL = 'http://127.0.0.1:5500';

export const routes = [
  { path: /^\/$/, element: MainPage },
  { path: /^\/counter$/, element: Counter },
  { path: /^\/login$/, element: LoginComponent },
];

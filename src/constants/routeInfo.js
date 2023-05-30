import CounterPage from '../pages/counter/CounterPage.js';
import MainPage from '../pages/MainPage.js';
import LoginPage from '../pages/login/LoginPage.js';
import PostPage from '../pages/post/PostPage.js';
import TodoAppPage from '../pages/todo-app/TodoAppPage.js';

export const BASE_URL = 'http://127.0.0.1:5500';

export const routes = [
  { path: /^\/$/, element: MainPage },
  { path: /^\/counter$/, element: CounterPage },
  { path: /^\/login$/, element: LoginPage },
  { path: /^\/post\/[\w]+$/, element: PostPage },
  { path: /^\/todoapp$/, element: TodoAppPage },
];

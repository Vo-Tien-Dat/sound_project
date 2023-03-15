import React from 'react';
import './App.scss';
import Root from './layouts/root';
import Login from './pages/login';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => <RouterProvider router={router} />;

export default App;

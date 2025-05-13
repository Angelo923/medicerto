import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@/pages/app/Dashboard';
import SignIn from '@/pages/auth/sign-in.tsx';
import AuthLayout from '@/pages/_layouts/auth.tsx'
import Pacientes from '@/pages/app/Pacientes';
import AppLayout from '@/pages/_layouts/app.tsx';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard/> },
      { path: '/pacientes', element: <Pacientes/> },

    ]
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn/> },
    ]
  },

  ])
// Routes.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Chats from './components/chats';
import Login from './components/login';
import { auth } from './firebase/firebaseConfig';

const Routes = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/chats" /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/chats',
      element: user ? <Chats /> : <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

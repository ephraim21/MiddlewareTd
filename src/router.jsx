import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Chats from './components/chats';
import Login from './components/login';
import { auth } from './firebase/firebaseConfig';
import Signup from './components/Signup';

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
      element: user ? <Navigate to="/chats" /> : <Login />,
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/chats" /> : <Signup />, 
    },
    {
      path: '/chats',
      element: user ? <Chats /> : <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

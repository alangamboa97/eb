import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import PerfectScrollbar from 'react-perfect-scrollbar';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <NavLink onClick={() => navigate('/')}>Home</NavLink>
        <Button onClick={() => navigate('/conductor')}>
          Conductor
        </Button>
        <Button onClick={() => navigate('/Incidencia')}>
         Incidencia
        </Button>
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
      </nav>
      <Heading level={1}>Login</Heading>
      <View>
        {route === 'authenticated' ? 'Has ingresado' : 'Porfavor inicia sesión'}
      </View>

      <Outlet />
    </>
  );
}

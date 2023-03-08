import React, {useEffect, useState} from 'react';
import { Amplify,API} from 'aws-amplify';
import config from './aws-exports'; 
import { Authenticator} from '@aws-amplify/ui-react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import './App.css';
import Home from './Home';
import Conductor from './Conductor';
import Incidencia from './Incidencia';
import Ubicacion from './Ubicacion';
import { Layout } from './Layout';
import { Login } from './Login';
import '@aws-amplify/ui-react/styles.css';


import { I18n } from 'aws-amplify';
Amplify.configure(config);

I18n.setLanguage('es');
const dict = {
 
  es: {
    'Sign In': 'Registrarse',
    'Create Account': 'Regístrate',
    'Enter your Email': 'Ingresa tu Email',
    'Password': 'Contraseña',
    'Enter your Password':'Ingresa tu Contraseña',
    

  }
};

I18n.putVocabularies(dict);


 export function MyRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/conductor"
            element={
              <RequireAuth>
                <Conductor />
              </RequireAuth>
            }
          />
          <Route
            path="/incidencia"
            element={
              <RequireAuth>
                <Incidencia />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}




  function App() {
    return (
      <Authenticator.Provider>
        <MyRoutes />
      </Authenticator.Provider>
    );
  }
  
export default App;



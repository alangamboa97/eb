import React from 'react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports'; 
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';
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

function App() {
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
  );
}

export default withAuthenticator(App);

import { useAuthenticator, Authenticator} from "@aws-amplify/ui-react";

export default function Conductor(){
    const { route } = useAuthenticator((context) => [context.route]);

    const message =
      route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
      return (
          <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Bienvenido a Perfil conductor</h1>
             
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
        );
};


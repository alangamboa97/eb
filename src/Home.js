import { Amplify, API } from "aws-amplify";
import config from './aws-exports';


import { useAuthenticator,Authenticator} from "@aws-amplify/ui-react";


export default function Home() {
  const { route } = useAuthenticator((context) => [context.route]);
  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';

    

    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Bienvenido a Home</h1>
           


            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      );


}


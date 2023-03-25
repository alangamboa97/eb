import { Amplify, API, graphqlOperation } from "aws-amplify";
import config from './aws-exports';
import { useAuthenticator,Authenticator} from "@aws-amplify/ui-react";
import { listConductors } from "./graphql/queries";
import { useEffect, useState } from "react";



Amplify.configure(config);
export default function Home() {
  const { route } = useAuthenticator((context) => [context.route]);
  const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';

    const [conductores, setConductores] = useState([]);
    
    useEffect(()=>{
      fetchCoductores()
    },[])

    //lee los conductores de la base de datos
    const fetchCoductores = async() =>{
      try{
        const conductorData = await API.graphql(graphqlOperation(listConductors));
        const conductorNombre = conductorData.data.listConductors.items;
        console.log(conductorNombre);
        setConductores(conductorNombre);

      }
      catch (error){
        console.log('error leyendo datos', error)

      }
    }
    

    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Bienvenido a Home</h1>
           
            <div className="lista_conductores">
              {
                conductores.map(conductor =>{
                  
                })
              }
            </div>

            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      );


}


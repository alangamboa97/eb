import { useAuthenticator,Authenticator, Card, TextField, SelectField, Button} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listConductors } from "../graphql/queries";
import * as mutations from '../graphql/mutations';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';



export default function Incidencia (){
    const { route } = useAuthenticator((context) => [context.route]);
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
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
    const todoDetails = {
      id: 'Todo 1',
      estado: true
    };
    const newIncidencia = async () => {
      try {
        graphqlOperation(mutations.createIncidencia, { input: todoDetails })
        
      } catch (error) {
        console.log('Error al agregar una nueva incidencia', error)
      }
    }


    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <Card>
            <div className="opciones">
            <SelectField
  label="Fruit"
  descriptiveText="Selecciona el conductor"
>
 
    {conductores.map(conductor =>{
      return(
        <option value="Nombre">{conductor.apellido}</option>
      )
    })}
    
  
 
</SelectField>
<TextField value={createdAt}>

</TextField>
<TextField value={updatedAt}>

</TextField>
</div>
<Button onClick={newIncidencia}>
  Push
</Button>
  
            </Card>
          </main>
        )}
      </Authenticator>
      );

}



import { useAuthenticator, Authenticator, Card} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
import { useState, useEffect } from "react";
import { listConductors } from "../graphql/queries";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

export default function Conductor(){
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
            

             <Card>
<Table
  caption=""
  highlightOnHover={false}>
  <TableHead>
    <TableRow>
      <TableCell as="th">ID</TableCell>
      <TableCell as="th">Conductor</TableCell>
      <TableCell as="th">Fecha</TableCell>
      <TableCell as="th">Estado</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
   
  
    
      {conductores.map(conductor =>{
          return(
            
            <TableRow>
            <TableCell> <div>{conductor.id}</div></TableCell>
            <TableCell> <div>{conductor.nombre}</div></TableCell>
            <TableCell> <div>{conductor.createdAt}</div></TableCell>
            <TableCell> <div>{conductor.estado}</div></TableCell>             
          </TableRow>
      
          )

        })}
        
  
   
  </TableBody>
</Table>
</Card> 
  
            </main>
          )}
        </Authenticator>
        );
};


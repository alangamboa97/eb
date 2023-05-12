
import { useAuthenticator, Authenticator, Card, Button, ButtonGroup} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listConductors } from "../graphql/queries";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";


import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

initTE({ Modal, Ripple });
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
            <Outlet />
            
             <Card>
<Table
  caption=""
  highlightOnHover={false}>
  <TableHead>
    <TableRow>
      <TableCell as="th">ID</TableCell>
      <TableCell as="th">Conductor</TableCell>
      <TableCell as="th">Fecha</TableCell>
      <TableCell as="th">Acciones</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
   
  
    
      {conductores.map(conductor =>{
          return(
            
           <TableRow>
            <TableCell> <Link to={`/conductor/${conductor.id}`} ><div>{conductor.id}</div></Link></TableCell>
            <TableCell> <div>{conductor.nombre}</div></TableCell>
            <TableCell> <div>{conductor.createdAt}</div></TableCell>
            <TableCell> <div>{conductor.estado}<Button>Modificar</Button> <Button>Eliminar</Button></div></TableCell>
                         
          </TableRow>
          
      
          )

        })}
        
  
   
  </TableBody>
</Table>
</Card> 

<button
  type="button"
  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  data-te-toggle="modal"
  data-te-target="#exampleModal"
  data-te-ripple-init
  data-te-ripple-color="light">
  Launch demo modal
</button>
            </main>
          )}
        </Authenticator>
        
        );
};


import { useAuthenticator,Authenticator, Card} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listIncidencias } from "../graphql/queries";
import { onCreateIncidencia } from "../graphql/subscriptions";
import * as mutations from '../graphql/mutations';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

export default function Incidencia (){
    const { route } = useAuthenticator((context) => [context.route]);
   
    const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
    const [incidencias, setIncidencias] = useState([]);   

    useEffect(()=>{
       API.graphql(graphqlOperation(onCreateIncidencia)).subscribe({
      next: (eventData) => {
        console.log(eventData)
        
      }
      })

      fetchIncidencias()
      
    },[])

   

    
    //lee los incidenciaes de la base de datos
    const fetchIncidencias = async() =>{
      try{
        const incidenciaData = await API.graphql(graphqlOperation(listIncidencias));
        const incidenciaInfo = incidenciaData.data.listIncidencias.items;
        console.log(incidenciaInfo);
        setIncidencias(incidenciaInfo);

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
      <TableCell as="th">Incidencia</TableCell>
      <TableCell as="th">Estado</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
   
  
    
      {incidencias.map(incidencia =>{
        const pendiente = 'Pendiente';
        const confirmar = 'Confirmada';
        const rechazada = 'Rechazada';
        
          
        function confirmarEstado(incidencia){
          if(incidencia === null){
            return pendiente;
           
          }
          if(incidencia === true){
            return confirmar;
            
          }
          else{
            return rechazada;
            
          }
        }
          
          return(
          
            <TableRow>
           <TableCell><Link to={`/incidencias/${incidencia.id}`}><div>{incidencia.id}</div></Link></TableCell>
            <TableCell> <div>{incidencia.createdAt}</div></TableCell>
            <TableCell><div>{confirmarEstado(incidencia.estado)}</div></TableCell>
                         
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

}


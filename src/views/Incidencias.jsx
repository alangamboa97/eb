import { useAuthenticator,Authenticator, Card} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listIncidencias } from "../graphql/queries";
import { onCreateIncidencia } from "../graphql/subscriptions";
import * as mutations from '../graphql/mutations';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  ThemeProvider,
  Theme
} from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

const theme = {
  name: 'table-theme',
  tokens: {
    components: {
      table: {
        row: {
          hover: {
            backgroundColor: { value: '{colors.blue.80}' },
          },

          striped: {
            backgroundColor: { value: '{colors.blue.10}' },
          },
        },

        header: {
          color: { value: '{colors.blue.80}' },
          fontSize: { value: '{fontSizes.xl}' },
        },

        data: {
          fontWeight: { value: '{fontWeights.semibold}' },
        },
      },
    },
  },
};


export default function Incidencia (){
    const { route } = useAuthenticator((context) => [context.route]);
    
    const message =
    route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
    const [incidencias, setIncidencias] = useState([]);
      

    const fetchIncidencias = async() =>{
      try{
        
        const incidenciaData = await API.graphql(graphqlOperation(listIncidencias));
        const incidenciaInfo = incidenciaData.data.listIncidencias.items;
        console.log(incidenciaInfo);
        setIncidencias(incidenciaInfo)

      }
      catch (error){
        console.log('error leyendo datos', error)

      }
    }
    
    useEffect(()=>{
      fetchIncidencias()

    

    },[])

   
    
    
    //lee los incidenciaes de la base de datos
   
    
    
    
   
   




    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            
          <ToastContainer />
            <Card>
            <ThemeProvider theme={theme} colorMode="dark">
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
   
  
    
      {incidencias.map(incidencia =>{
        const pendiente = 'Pendiente';
        const confirmar = 'Confirmada';
        const rechazada = 'Rechazada';

        const data = {
          nestedProp: incidencia.conductor.nombre
        }
        
          
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
            <TableCell><div>{incidencia.conductor.nombre} {incidencia.conductor.apellido}</div></TableCell>
            <TableCell> <div>{incidencia.createdAt}</div></TableCell>
            <TableCell><div>{confirmarEstado(incidencia.estado)}</div></TableCell>
                         
          </TableRow>
          
      
          )

        })}
        
  
   
  </TableBody>
</Table>
</ThemeProvider>
</Card> 
          
          </main>
        )}
      </Authenticator>
      );

}


import { useAuthenticator,Authenticator, Card} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listIncidencias } from "../graphql/queries";
import { onCreateIncidencia } from "../graphql/subscriptions";
import * as mutations from '../graphql/mutations';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";



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
    const pendiente = 'Pendiente';
    const confirmar = 'Confirmada';
    const rechazada = 'Rechazada';
   const num = incidencias.length
 
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
   
    
    
    //lee los incidenciaes de la base de datos
   
    
    
    
   
   




    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            
            <div class="mt-12 flex flex-col justify-center">
   
   
   <div class="relative overflow-x-auto">
       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                   <th scope="col" class="px-6 py-3">
                       ID
                   </th>
                   <th scope="col" class="px-6 py-3">
                       Conductor
                   </th>
                   <th scope="col" class="px-6 py-3">
                       Fecha
                   </th>
                   <th scope="col" class="px-6 py-3">
                       Estado
                   </th>
                   
               </tr>
           </thead>
           
           <tbody>
             {incidencias.map((incidencia) => ( 
               
               
                
                  
                
                    
             
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               <Link to={`/incidencias/${incidencia.id}`}>
                  {incidencia.id}
                   </Link>
              </th>
              <th scope="col" class="px-6 py-3">
                       {incidencia.conductor.nombre} {incidencia.conductor.apellido}
                   </th>
              <td class="px-6 py-4">
                  {incidencia.createdAt}
              </td>
              <td class="px-6 py-4">
                  {confirmarEstado(incidencia.estado)}
              </td>
             
          </tr>
   
           ))}
              
           
              
           </tbody>
               </table>
   </div>
   
     </div>
   
   
          </main>
        )}
      </Authenticator>
      );

}


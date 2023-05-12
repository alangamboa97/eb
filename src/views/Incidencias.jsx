import { useAuthenticator,Authenticator} from "@aws-amplify/ui-react";
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
    const [nuevaIncidencia, setNuevaIncidencia] = useState();
    const [fecha_incidencia, setFechaIncidencia] = useState('');
    
    const notify = () => toast("Nueva incidencia registrada");

    const fetchIncidencias = async() =>{
      try{
        
        const incidenciaData = await API.graphql(graphqlOperation(listIncidencias));
        const incidenciaInfo = incidenciaData.data.listIncidencias.items;
        const fechaIncidenciaInfo = incidenciaData.data.listIncidencias.items.createdAt;
        
        console.log(incidenciaInfo);
        setIncidencias(incidenciaInfo)
        setFechaIncidencia(fechaIncidenciaInfo)

      }
      catch (error){
        console.log('error leyendo datos', error)

      }
    }
    
    useEffect(()=>{

    
      
      fetchIncidencias();

      

    },[nuevaIncidencia])

    let subscriptionOnCreateIncidencia;

    function handleSubscription(){
      subscriptionOnCreateIncidencia = API.graphql(graphqlOperation(onCreateIncidencia)).subscribe({
        next: (eventData) => {
          setNuevaIncidencia(eventData);
          notify();  
        },
      });
    }

    useEffect(() => { 
      handleSubscription();
      return () => subscriptionOnCreateIncidencia.unsubscribe();  
    }, []);


    const fechaHoy = new Date();
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1;
    const año = fechaHoy.getFullYear();

   

    const fecha = `${dia}/${mes}/${año}`;
    console.log(fecha);


    
   const num = incidencias.length
   var contador = num;


   

    function confirmarEstado(incidencia){
     if(incidencia === null){
       return <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Pendiente</span>
      
     }
     if(incidencia === true){
       return <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Confirmada</span>
       
     }
     else{
       return <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Rechazada</span>;
       
     }
   }
  
  


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
   
            <ToastContainer />
          </main>
        )}
      </Authenticator>
      );

}


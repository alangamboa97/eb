import { Button } from '@aws-amplify/ui-react';
import React, {useState, useEffect} from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getIncidencia } from '../graphql/queries';
import ReactPlayer from 'react-player';
import { updateIncidencia } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import MapView from './MapView';
export default function Incidencias() {

  const { id } = useParams();
  const [incidencia, setIncidencia] = React.useState([]);
  const [conductor, setConductor] = React.useState([]);

  useEffect(()=>{
    fetchIncidencia()
  },[])
  //lee la incidencia de la base de datos
  const fetchIncidencia = async() =>{
    try{
      const incidenciaData = await API.graphql(graphqlOperation(getIncidencia, {id: id}));
      const incidenciaDetails = incidenciaData.data.getIncidencia;
      const conductorDetails = incidenciaData.data.getIncidencia.conductor; 
      
      setIncidencia(incidenciaDetails)
      setConductor(conductorDetails)
      console.log('Incidencia', incidenciaDetails);
      console.log('Conductor', conductorDetails);

    }
    catch (error){
      console.log('error leyendo datos', error)

    }

    
  }

  const confirmarIncidencia = async() =>{
    try{
      const incidenciaData = await API.graphql(graphqlOperation(updateIncidencia, {input: {id: id, estado: true}}));
      const incidenciaDetails = incidenciaData.data.updateIncidencia;
      
      setIncidencia(incidenciaDetails)
      console.log('Incidencia', incidenciaDetails);
    }
    catch (error){
      console.log('error actualizando estado', error)
    }
}
const rechazarIncidencia = async() =>{
  try{
    const incidenciaData = await API.graphql(graphqlOperation(updateIncidencia, {input: {id: id, estado: false}}));
    const incidenciaDetails = incidenciaData.data.updateIncidencia;
    
    setIncidencia(incidenciaDetails)
    console.log('Incidencia', incidenciaDetails);
  }
  catch (error){
    console.log('error actualizando estado', error)
  }
}

const pendiente = 'Pendiente';
const confirmar = 'Confirmada';
const rechazada = 'Rechazada';



  
function confirmarEstado(incidencia){
  if(incidencia === null){
    return <span class="bg-blue-100 text-blue-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Pendiente</span>
   
  }
  if(incidencia === true){
    return <span class="bg-green-100 text-green-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Confirmada</span>
    
  }
  else{
    return <span class="bg-red-100 text-red-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Rechazada</span>;
    
  }
}

 
  const fecha = new Date(incidencia.createdAt).toLocaleDateString();
  const hora = new Date(incidencia.createdAt).toLocaleTimeString();
  console.log(fecha)
  return (
    <div class="p-10">
<div class="p-8 bg-white shadow mt-10">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
       
      </div>
      
          
    </div>
    <div class="relative">
      
    </div>

    <div class="space-x-8 flex justify-between mt-30 md:mt-0 md:justify-center">



    </div>
  
  </div>

  <div class="mt-10 text-left border-b pb-12">
    <h1 class="text-4xl font-medium text-gray-700">ID: <span class="font-light text-gray-500">{incidencia.id}</span></h1>
    <p class="mt-2 text-gray-50">{confirmarEstado(incidencia.estado)}</p>
    <p class="font-light text-gray-600 mt-3">{conductor.nombre} {conductor.apellido}</p>
     
    <p class="text-gray-400">
          <ReactPlayer url={incidencia.url_video} width="50%" height="30%" controls={true} />
        </p>
        <div class="mt-10 text-right border-b pb-10">
    <p class="mt-8 text-gray-500">{fecha}</p>
    
    <button
  class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Connect
</button>
    <button
  class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Message
</button>


    </div>
  </div>

  <div class="mt-12 flex flex-col justify-right">
    <p class="text-gray-600 text-right font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
    <MapView>

</MapView>

    </p>
    
 

 
  </div>

</div>
</div>
           
  );
    
        
}

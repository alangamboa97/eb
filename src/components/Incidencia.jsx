import { Button } from '@aws-amplify/ui-react';
import React, {useState, useEffect} from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getIncidencia } from '../graphql/queries';
import ReactPlayer from 'react-player';
import { updateIncidencia } from '../graphql/mutations';
import { Link } from 'react-router-dom';
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
    return pendiente;
   
  }
  if(incidencia === true){
    return confirmar;
    
  }
  else{
    return rechazada;
    
  }
}
  
  return (
    <div
            
            className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-auto h-full drop-shadow-lg border-2 border-transparent hover:border-gray-400 transition-all mb-4"
          >
             {/* Title */}
             <div className="w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                ID: {incidencia.id}
                <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
                  Estado: {confirmarEstado(incidencia.estado)}
                </span>
              </h1>
              <p className="text-gray-800">{conductor.nombre} {conductor.apellido}</p>
              <p className="text-gray-800">Fecha: {incidencia.createdAt}  </p>

            {/* Video */}
            
            <div className="w-full md:w-[80%] flex items-center justify-start md:justify-left p-1">
            <ReactPlayer url={incidencia.url_video}controls play/>
            </div>

            {/* Info */}
          
              
            </div>
            
            <div className="w-auto md:w-[0%] flex flex-col items-center">
              <h3 className="text-xl text-gray-500 mb-2">Coordenadas: {incidencia.ubicacion}</h3>
              
              <Link to={ `/incidencias/${incidencia.id}/ubicacion`}>
                <Button className='p-3'>Ver en el mapa</Button>
              </Link>

              <div className='p-2'>
              <Button className='p-3' onClick={()=> confirmarIncidencia()}>Aceptar</Button>
              
              <Button onClick={()=> rechazarIncidencia()}>Rechazar</Button>
              </div>
            </div>
           
            {/* Time */}

            
              
          </div>
  );
    
        
}

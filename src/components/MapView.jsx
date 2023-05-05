import React, {useState, useEffect} from "react";
import { API } from "aws-amplify";
import { graphqlOperation } from "aws-amplify";
import { getIncidencia } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { Map ,MapContainer,Marker,Popup,TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'



export default function MapView() {

    
const { id } = useParams();
const [incidencia, setIncidencia] = React.useState([]);


useEffect(()=>{
    fetchIncidencia()
  },[])
  //lee la incidencia de la base de datos
  const fetchIncidencia = async() =>{
    try{
      const incidenciaData = await API.graphql(graphqlOperation(getIncidencia, {id: id}));
      const incidenciaDetails = incidenciaData.data.getIncidencia;
      
      setIncidencia(incidenciaDetails)
      console.log('Incidencia', incidenciaDetails);
     

    }
    catch (error){
      console.log('error leyendo datos', error)

    }

    
  }
  

    return(
    
<MapContainer center={[19.468725,-99.1345574]} zoom={13} className="h-screen: 100vh -">  
<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
/>
<Marker position={[19.468725,-99.1345574]}></Marker>
</MapContainer>

    );
    
}



import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getConductor } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { queries } from "@testing-library/react";


export default function ConductorPerfil() {

   const {id} = useParams(); 
   
   const[conductor, setConductor] = useState([]);

   useEffect(()=>{
    fetchCoductor()
  },[])
  //lee los conductores de la base de datos
  const fetchCoductor = async() =>{
    try{
      const conductorData = await API.graphql(graphqlOperation(getConductor, {id: id}));
      const conductorPerfil = conductorData.data.getConductor;
      
      setConductor(conductorPerfil)
      console.log('Conductor', conductorPerfil);

    }
    catch (error){
      console.log('error leyendo datos', error)

    }
  }
   

   console.log(useParams());
    return(
<div>   hOLA DESDE conductor {conductor.id} {conductor.nombre}</div>
    );
}
import { Button } from '@aws-amplify/ui-react';
import React from 'react';
import { RiTwitchLine } from 'react-icons/ri';

export default function Incidencias() {
  
  return (
    <div
            
            className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-[800px] drop-shadow-lg border-2 border-transparent hover:border-purple-400 transition-all mb-4"
          >
            {/* Video */}
            <div className="w-full md:w-[30%] flex items-center justify-start md:justify-center">
              <RiTwitchLine className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
            </div>
            {/* Title */}
            <div className="w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                ID{" "}
                <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
                  Remote
                </span>
              </h1>
              <p className="text-gray-500">Nombre y Apellido Conductor</p>
              <div className='p-2'>
              <Button className='p-3'>Aceptar</Button>
              
              <Button>Rechazar</Button>
              </div>
            </div>
            {/* Time */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h3 className="text-xl text-gray-500 mb-2">Coordenadas</h3>
              <p className="text-gray-500">Fecha y Hora</p>
            </div>
          </div>
  );
    
        
}
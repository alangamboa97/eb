import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Authenticator, useAuthenticator, Button, Heading, View, TabItem, Tabs, Menu, MenuItem, Divider} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import config from './aws-exports';
import { Link } from "react-router-dom";
import { useState } from 'react';
import {
  RiDashboard2Line,
  
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiSearchLine,
  RiCheckboxBlankCircleFill,
 
} from "react-icons/ri";

Amplify.configure(config);
export function Layout() {



  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);


  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
   

    
    <Authenticator className='items-center'>

    
    <>
     
      
     <div className="min-h-screen grid grid-col-1 lg:grid-cols-6 bg-slate-100">
      {/*Sidebar*/}
      <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-gray-200 transition-all ${
          sidebar ? "left-0" : "-left-full"
        } h-full overflow-y-scroll col-span-1 p-6 border-r`}
      >
      {/*LogoTipo*/}
      <div className="text-center p-8">
      <h1 className="uppercase font-bold tracking-[4px]">Logo</h1>
      </div>
      <div className=' flex flex-col justify-between h-[500px]'>
      {/*Menu*/}
      <nav>
        <ul>
          <li>
            <Link to="/conductor" className="flex items-center gap-4 text-gray-700 hover:bg-gray-900 p-4 hover:text-white rounded-sm
            transition-colors font-semibold">
            <RiDashboard2Line/>
              Conductores
              
                </Link>
          </li>
          <li>
            <Link to='/incidencias' className="flex items-center gap-4 text-gray-700 hover:bg-gray-900 p-4 hover:text-white 
            transition-colors font-semibold rounded-sm">
            <RiDashboard2Line/>
              Incidencias
              
                </Link>
          </li>
          <li>
            <Link to="/ubicacion" className="flex items-center gap-4 text-gray-700 hover:bg-gray-900 p-4 hover:text-white 
            transition-colors font-semibold rounded-sm">
            <RiDashboard2Line/>
              Ubicacion
              
                </Link>
          </li>
          <li>
            <Link to="/incidencia" className="flex items-center gap-4 text-gray-700 hover:bg-gray-900 p-4 hover:text-white 
            transition-colors font-semibold rounded-sm">
            <RiDashboard2Line/>
              Incidencia
              
                </Link>
          </li>
        </ul>
      </nav>
      {/*Imagen y logout*/}
      <div className='flex flex-col gap-4'>
        <img src="footer.svg" alt="Image" />
      
      <Link onClick={signOut} className="flex items-center gap-4 text-gray-700 hover:bg-gray-800 p-3 hover:text-white 
            transition-colors font-semibold rounded-sm  ">
            <RiDashboard2Line/>
              Cerrar sesion
              
                </Link>
                </div>
      </div>
      </div>
      {/*Bton de menu*/}
      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40"
      >
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/*Contenido*/}
      <div className="col-span-5">
        {/* Header */}
        <header className="bg-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:px-12 w-full">
          {/* Search */}
          <form className="w-full md:[40%] lg:w-[30%] order-1 md:-order-none">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-3" />
              <input
                type="text"
                className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
                placeholder="Buscar"
              />
            </div>
          </form>
          {/* Notifications */}
          <nav className="w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="relative">
                  <RiNotification3Line className="text-xl" />
                  <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  alangam97@gmail.com <RiArrowDownSLine />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      <Outlet />
      </div>
      
    </div>
     

     
      
    </>
    </Authenticator>
    
  );
}

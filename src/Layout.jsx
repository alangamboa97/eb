import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View, TabItem, Tabs, Menu, MenuItem, Divider} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Main } from './Main';
import { Link } from "react-router-dom";
import  RiArchiveDrawerFill, { RiDashboard2Line, RiBarChartHorizontalFill}   from "react-icons/ri";
export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
   




    
    <>
     
      
     <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      {/*Sidebar*/}
      <div className=" fixed lg:static top-0 left-0 w-full h-full overflow-y-scroll col-span-1 p-6 border-r">
      {/*LogoTipo*/}
      <div className="text-center p-8">
      <h1 className="uppercase font-bold tracking-[4px]">Logo</h1>
      </div>
      <div className='bg-red-200 flex flex-col justify-between h-[500px]'>
      {/*Menu*/}
      <nav>
        <ul>
          <li>
            <Link to="/conductor" className="flex items-center gap-4 hover:bg-blue-800 p-4 hover:text-white rounded-lg
            transition-colors">
            <RiDashboard2Line/>
              Conductor
              
                </Link>
          </li>
          <li>
            <Link to='/incidencia' className="flex items-center gap-4 hover:bg-blue-800 p-4 hover:text-white rounded-lg
            transition-colors">
            <RiDashboard2Line/>
              Incidencia
              
                </Link>
          </li>
          <li>
            <Link to="/ubicacion" className="flex items-center gap-4 hover:bg-blue-800 p-4 hover:text-white rounded-lg
            transition-colors">
            <RiDashboard2Line/>
              Ubicacion
              
                </Link>
          </li>
        </ul>
      </nav>
      {/*Imagen y logout*/}
      <div className='flex flex-col gap-4'>
        <img src="footer.svg" alt="Image" />
      
      <Link onClick={signOut} className="flex items-center gap-4 hover:bg-blue-800 p-4 hover:text-white rounded-lg
            transition-colors">
            <RiDashboard2Line/>
              Cerrar sesion
              
                </Link>
                </div>
      </div>
      </div>
      {/*Bton de menu*/}
      <button className='absolute top-4 left-4 bg-blue-600 p-2 text-white rounded-full text-2xl'>
        <RiBarChartHorizontalFill/>
        </button>
      {/*Contenido*/}
      <div className="col-span-5">
      <Outlet />
      </div>
      
    </div>
     

     
      
    </>
    
    
  );
}

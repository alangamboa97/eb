import { Link } from "react-router-dom";
import  RiArchiveDrawerFill, { RiDashboard2Line }  from "react-icons/ri";
function Main() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className=" col-span-1 p-8">
      {/*LogoTipo*/}
      <div className="text-center p-8">
      <h1 className="uppercase font-bold tracking-[4px]">Logo</h1>
      </div>
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
            <Link to="/incidencia" className="flex items-center gap-4 hover:bg-blue-800 p-4 hover:text-white rounded-lg
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
      {/*Imagen*/}
      
      </div>
      <div className="col-span-5">Hola2</div>
      
    </div>
  );
}
export default Main;
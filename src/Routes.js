import React, {useState, useEffect} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";


import App from "./App";
import Home from "./Home";
import Conductor from "./Conductor";
import Incidencia from "./Incidencia";
import Ubicacion from "./Ubicacion";



const Router = ()=>{
const [current, setCurrent] = useState('login')
useEffect(()=> {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
    
},[])
function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length-1]
    setCurrent(pathname ? pathname : 'home')
  }
  return (
    <HashRouter>
      <App current={current} />
      <Routes>
        <Route exact path="/" component={App}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/conductor" component={Conductor}/>
        <Route exact path="/incidencia" component={Incidencia}/>
        <Route exact path="/ubicacion" component={Ubicacion}/>
        <Route component={App}/>
      </Routes> 
    </HashRouter>
  )
}

export default Router;
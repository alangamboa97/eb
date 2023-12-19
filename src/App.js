import React, { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import config from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import "./App.css";
import Home from "./Home";
import Conductor from "./views/Conductor";
import Incidencias from "./views/Incidencias";
import Ubicacion from "./views/Ubicacion";
import Incidencia from "./components/Incidencia";
import { Layout } from "./Layout";
import { Login } from "./Login";
import "@aws-amplify/ui-react/styles.css";

import { I18n } from "aws-amplify";

import ConductorPerfil from "./views/ConductorPerfil";
import MapView from "./components/MapView";
import AddProfile from "./components/AddProfile";
import RealTimeMap from "./components/RealTimeMap";
import AgregarConductor from "./components/AgregarConductor";

Amplify.configure(config);

I18n.setLanguage("es");
const dict = {
  es: {
    "Sign In": "Registrarse",
    "Create Account": "Regístrate",
    "Enter your Email": "Ingresa tu Email",
    Password: "Contraseña",
    "Enter your Password": "Ingresa tu Contraseña",
  },
};

I18n.putVocabularies(dict);

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Incidencias />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Conductor />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="conductor/:id"
            element={
              <RequireAuth>
                <ConductorPerfil />
              </RequireAuth>
            }
          />

          <Route
            path="conductor/"
            element={
              <RequireAuth>
                <Conductor />
              </RequireAuth>
            }
          />

          <Route
            path="conductor/agregar"
            element={
              <RequireAuth>
                <AddProfile />
              </RequireAuth>
            }
          />

          <Route
            path="conductor/tiemporeal"
            element={
              <RequireAuth>
                <RealTimeMap />
              </RequireAuth>
            }
          />
          <Route
            path="/agregarConductor"
            element={
              <RequireAuth>
                <AgregarConductor />
              </RequireAuth>
            }
          />
          <Route
            path="/incidencias"
            element={
              <RequireAuth>
                <Incidencias />
              </RequireAuth>
            }
          />
          <Route
            path="/incidencias/:id"
            element={
              <RequireAuth>
                <Incidencia />
              </RequireAuth>
            }
          />
          <Route
            path="/incidencias/:id/ubicacion"
            element={
              <RequireAuth>
                <MapView />
              </RequireAuth>
            }
          />

          <Route
            path="/ubicacion"
            element={
              <RequireAuth>
                <Ubicacion />
              </RequireAuth>
            }
          />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;

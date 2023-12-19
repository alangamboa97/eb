import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getConductor } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { deleteConductor } from "../graphql/mutations";
import ModalDelete from "../components/ModalDelete";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function ConductorPerfil() {
  const { id } = useParams();

  const [conductor, setConductor] = useState([]);
  const [incidencias, setIncidencia] = React.useState([]);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchCoductor();
  }, []);
  //lee los conductores de la base de datos

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchCoductor = async () => {
    try {
      const conductorData = await API.graphql(
        graphqlOperation(getConductor, { id: id })
      );
      const conductorPerfil = conductorData.data.getConductor;
      const incidenciaData = conductorData.data.getConductor.incidencias.items;
      setIncidencia(incidenciaData);
      setConductor(conductorPerfil);
      console.log("Conductor", conductorPerfil);
    } catch (error) {
      console.log("error leyendo datos", error);
    }
  };

  const eliminarConductor = async () => {
    try {
      const conductorData = await API.graphql(
        graphqlOperation(deleteConductor, { input: { id: id } })
      );
      const conductorPerfil = conductorData.data.deleteConductor;
      setConductor(conductorPerfil);
      console.log("Conductor", conductorPerfil);
    } catch (error) {
      console.log("error eliminando conductor", error);
    }
  };

  console.log(useParams());

  const pendiente = "Pendiente";
  const confirmar = "Confirmada";
  const rechazada = "Rechazada";
  const num = incidencias.length;

  function confirmarEstado(incidencia) {
    if (incidencia === null) {
      return (
        <span class="bg-blue-100 text-blue-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Pendiente
        </span>
      );
    }
    if (incidencia === true) {
      return (
        <span class="bg-green-100 text-green-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Confirmada
        </span>
      );
    } else {
      return (
        <span class="bg-red-100 text-red-800 text-l font-large mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Rechazada
        </span>
      );
    }
  }

  return (
    <main>
      <div class="p-16 bg-">
        <div class="p-8 bg-slate-200 shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Editar
              </button>
              <button
                onClick={openModal}
                class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Eliminar
              </button>
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">
              {conductor.nombre} {conductor.apellido}{" "}
              <span class="font-light text-gray-500"></span>
            </h1>
            <br></br>
            <div>
              <p class="text-gray-400">Incidencias</p>
              <p class="font-bold text-blue-700 text-xl">{num}</p>
            </div>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Fecha
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Estado
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {incidencias.map((incidencia) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link to={`/incidencias/${incidencia.id}`}>
                          {incidencia.id}
                        </Link>
                      </th>
                      <td class="px-6 py-4">{incidencia.createdAt}</td>
                      <td class="px-6 py-4">
                        {confirmarEstado(incidencia.estado)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

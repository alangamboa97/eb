import { useAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listConductors } from "../graphql/queries";
import { Link } from "react-router-dom";

import { Modal, Ripple, initTE } from "tw-elements";

initTE({ Modal, Ripple });
export default function Conductor() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
  const [conductores, setConductores] = useState([]);

  useEffect(() => {
    fetchCoductores();
  }, []);
  //lee los conductores de la base de datos
  const fetchCoductores = async () => {
    try {
      const conductorData = await API.graphql(graphqlOperation(listConductors));
      const conductorNombre = conductorData.data.listConductors.items;
      console.log(conductorNombre);
      setConductores(conductorNombre);
    } catch (error) {
      console.log("error leyendo datos", error);
    }
  };

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
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div class="mt-12 flex flex-col justify-center">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-800">
                <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Conductor
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {conductores.map((conductor) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link to={`/conductor/${conductor.id}`}>
                          {conductor.id}
                        </Link>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {conductor.nombre} {conductor.apellido}
                      </th>
                      <td class="px-6 py-4">{conductor.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

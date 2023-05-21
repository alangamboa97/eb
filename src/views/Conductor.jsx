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

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div class="mt-12 flex flex-col justify-center">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-800">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

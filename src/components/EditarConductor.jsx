import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

// Importa el modelo de GraphQL generado automáticamente
import { onCreateConductor } from "../graphql/subscriptions";
import { createConductor } from "../graphql/mutations";
const AgregarConductor = ({ onAddConductor }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleAgregarConductor = async () => {
    // Validar los campos antes de agregar el conductor
    if (nombre.trim() === "" || edad.trim() === "") {
      alert("Por favor, introduce el nombre y la edad del conductor.");
      return;
    }

    try {
      // Llamar a la función para agregar el conductor utilizando GraphQL y Amplify
      const newConductor = await API.graphql(
        graphqlOperation(createConductor, { input: { nombre, edad } })
      );

      // Notificar al componente padre sobre el nuevo conductor
      onAddConductor(newConductor.data.createConductor);

      // Limpiar los campos después de agregar el conductor
      setNombre("");
      setEdad("");
    } catch (error) {
      console.error("Error al agregar el conductor:", error);
      // Manejar el error según tus necesidades
    }
  };

  // Suscripción a eventos de creación de conductores (opcional)
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateConductor)
    ).subscribe({
      next: ({ provider, value }) => {
        // Aquí puedes manejar eventos de creación de conductores en tiempo real
        console.log("Nuevo conductor creado:", value.data.onCreateConductor);
      },
      error: (error) => console.error("Error en la suscripción:", error),
    });

    // Devuelve una función de limpieza para cancelar la suscripción al desmontar el componente
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Editar Datos Conductor
      </h2>
      <form action="#">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              id="nombre"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder=""
              required=""
              onChange={handleNombreChange}
            />
          </div>

          <div>
            <label
              for="item-weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Edad
            </label>
            <input
              type="number"
              name="item-weight"
              id="edad"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="23"
              required=""
              onChange={handleEdadChange}
            />
          </div>
        </div>
        <button
          onClick={handleAgregarConductor}
          type="submit"
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AgregarConductor;

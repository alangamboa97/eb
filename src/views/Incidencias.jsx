import {
  useAuthenticator,
  Authenticator,
  FieldGroupIcon,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { listIncidencias } from "../graphql/queries";
import { onCreateIncidencia } from "../graphql/subscriptions";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { set } from "react-hook-form";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Incidencia() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
  const [incidencias, setIncidencias] = useState([]);
  const [incidenciasSemana, setIncidenciasSemana] = useState(0);
  const [nuevaIncidencia, setNuevaIncidencia] = useState();
  const [incidenciasporSemana, setIncidenciasporSemana] = useState([]);
  const [incidenciasDia, setIncidenciasDia] = useState(0);
  const [cantidadIncidencias, setCantidadIncidencias] = useState(0);
  const [fechas, setFechas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const notify = () => toast("Nueva incidencia registrada");

  const fetchIncidencias = async () => {
    try {
      setIsLoading(true);
      const incidenciaData = await API.graphql(
        graphqlOperation(listIncidencias)
      );
      const incidenciaInfo = incidenciaData.data.listIncidencias.items;

      setIncidencias(incidenciaInfo);
    } catch (error) {
      console.log("error leyendo datos", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIncidenciasSemana = async () => {
    try {
      const currentDate = new Date();
      const weekStart = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
      );
      const weekEnd = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
      );
      const filter = {
        fecha: {
          between: [weekStart.toISOString(), weekEnd.toISOString()],
        },
      };
      const response = await API.graphql(
        graphqlOperation(listIncidencias, { filter })
      );
      const { items } = response.data.listIncidencias;
      setIncidenciasporSemana(items);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubscription = () => {
    subscriptionOnCreateIncidencia = API.graphql(
      graphqlOperation(onCreateIncidencia)
    ).subscribe({
      next: (eventData) => {
        const nuevaIncidencia = eventData.value.data.onCreateIncidencia;
        setNuevaIncidencia(nuevaIncidencia);
        notify();
        // Actualizar la lista de incidencias con la nueva incidencia
        setIncidencias((prevIncidencias) => [
          nuevaIncidencia,
          ...prevIncidencias,
        ]);
        setShowPopup(true);
      },
    });
  };

  const obtenerIncidenciasSemana = async () => {
    const hoy = new Date();
    const inicioSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay()));
    const finSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + 6));

    try {
      const { data } = await API.graphql({
        query: listIncidencias,
        variables: {
          filter: {
            fecha: {
              between: [inicioSemana.toISOString(), finSemana.toISOString()],
            },
          },
        },
      });

      const incidenciaSemana = data.listIncidencias.items;
      const numeroIncidencias = incidenciaSemana.length;

      setIncidenciasSemana(numeroIncidencias);

      console.log(
        "Número de incidencias de la semana:",
        typeof numeroIncidencias
      );
      return numeroIncidencias;
    } catch (error) {
      console.error("Error al obtener las incidencias:", error);
    }
  };

  const calcularIncidenciasPorDia = () => {
    // Verificar si hay datos de incidencias
    if (!incidenciasporSemana || incidenciasporSemana.length === 0) {
      console.log("No hay incidencias para procesar");
    }

    // Crear un objeto para almacenar el recuento de incidencias por día
    const incidenciasPorDia = {
      Lunes: 0,
      Martes: 0,
      Miércoles: 0,
      Jueves: 0,
      Viernes: 0,
      Sábado: 0,
      Domingo: 0,
    };

    // Crear un array para mapear los números de los días de la semana a sus nombres en español
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    // Procesar cada incidencia y contar por día
    incidenciasporSemana.forEach((incidencia) => {
      // Obtener la fecha de la incidencia (asumiendo que hay una propiedad "fecha")
      const fecha = new Date(incidencia.fecha);
      // Obtener el día de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
      const diaSemana = fecha.getDay();
      // Incrementar el recuento de incidencias para el día correspondiente
      incidenciasPorDia[diasSemana[diaSemana]]++;
    });

    console.log("Incidencias por día:", incidenciasPorDia);
    return incidenciasPorDia;
  };
  const obtenerIncidenciasDia = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const { data } = await API.graphql({
        query: listIncidencias,
        variables: {
          filter: {
            fecha: {
              eq: currentDate,
            },
          },
        },
      });

      const incidenciasDia = data.listIncidencias.items;
      const numeroIncidencias = incidenciasDia.length;
      setIncidenciasDia(numeroIncidencias);
      console.log("Número de incidencias del día:", numeroIncidencias);
    } catch (error) {
      console.error("Error al obtener las incidencias:", error);
    }
  };

  const obtenerHoraMasIncidencias = () => {
    const incidenciasPorHora = Array(24).fill(0); // Array para contar incidencias por hora

    incidencias.forEach((incidencia) => {
      const horaCreacion = new Date(incidencia.createdAt).getHours();
      incidenciasPorHora[horaCreacion]++;
    });

    // Encontrar la hora con más incidencias
    const horaMasIncidencias = incidenciasPorHora.reduce(
      (maxHora, hora, index) =>
        hora > incidenciasPorHora[maxHora] ? index : maxHora,
      0
    );

    console.log("Hora con más incidencias:", horaMasIncidencias);
  };

  useEffect(() => {
    fetchIncidencias();
    obtenerIncidenciasSemana();
    obtenerIncidenciasDia();
    calcularIncidenciasPorDia();
  }, [nuevaIncidencia]);

  let subscriptionOnCreateIncidencia;
  const resultadoSemana = obtenerIncidenciasSemana();

  useEffect(() => {
    handleSubscription();
    return () => subscriptionOnCreateIncidencia.unsubscribe();
  }, []);

  const fechaHoy = new Date();
  const dia = fechaHoy.getDate();
  const mes = fechaHoy.getMonth() + 1;
  const año = fechaHoy.getFullYear();

  const fecha = `${dia}/${mes}/${año}`;
  console.log(fecha);

  const incidenciasTotales = incidencias.length;
  console.log(incidenciasTotales);

  const incidenciasPorDia = calcularIncidenciasPorDia();
  console.log(incidenciasDia);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: Object.keys(incidenciasPorDia),
    datasets: [
      {
        label: "Incidencias por día",
        data: Object.values(incidenciasPorDia),
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Color de fondo de las barras
        borderColor: "rgba(75, 192, 192, 1)", // Color del borde de las barras
        borderWidth: 1, // Ancho del borde de las barras
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // El eje y comienza desde cero
        ticks: {
          precision: 0, // Sin decimales en los valores del eje y
        },
      },
    },
  };

  function confirmarEstado(incidencia) {
    if (incidencia === null) {
      return (
        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Pendiente
        </span>
      );
    }
    if (incidencia === true) {
      return (
        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Confirmada
        </span>
      );
    } else {
      return (
        <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Rechazada
        </span>
      );
    }
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div class="mt-12 flex flex-col justify-center bg-white">
            <div class="p-4 border-2 border-gray-300 rounded-lg dark:border-gray-700 mt-14 bg-slate-100">
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class=" text-center mb-2 text-3xl font-bold tracking-tight text-blue-700 dark:text-white">
                    {incidenciasTotales}
                  </h5>
                  <p class=" text-center font-normal text-gray-700 dark:text-gray-400">
                    Número de Incidencias Totales
                  </p>
                </div>

                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class=" text-center mb-2 text-3xl font-bold tracking-tight text-blue-700 dark:text-white">
                    {incidenciasSemana}
                  </h5>
                  <p class=" text-center font-normal text-gray-700 dark:text-gray-400">
                    Número de Incidencias de la Semana
                  </p>
                </div>
                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class=" text-center mb-2 text-3xl font-bold tracking-tight text-blue-700 dark:text-white">
                    {incidenciasDia}
                  </h5>
                  <p class=" text-center font-normal text-gray-700 dark:text-gray-400">
                    Número de Incidencias del Día
                  </p>
                </div>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Conductor
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Fecha y Hora
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidencias
                      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                      .map((incidencia) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <Link to={`/incidencias/${incidencia.id}`}>
                              {incidencia.id}
                            </Link>
                          </th>
                          <td class="px-6 py-4">
                            {" "}
                            {incidencia.conductor.nombre}{" "}
                            {incidencia.conductor.apellido}{" "}
                          </td>
                          <td class="px-6 py-4">
                            {incidencia.fecha} {incidencia.hora}
                          </td>
                          <td class="px-6 py-4">
                            {confirmarEstado(incidencia.estado)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <Line options={options} data={data} />
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"></div>
              </div>
              <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agrega JSX para mostrar el popup */}
          {showPopup && (
            <div
              id="toast-default"
              className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              {/* Contenido del popup */}
              {/* ... (contenido del popup, igual que en tu ejemplo) */}
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => setShowPopup(false)} // Oculta el popup al hacer clic en el botón de cerrar
                aria-label="Close"
              >
                {/* Icono de cierre del popup */}
                {/* ... (icono de cierre, igual que en tu ejemplo) */}
              </button>
            </div>
          )}

          <ToastContainer />
        </main>
      )}
    </Authenticator>
  );
}

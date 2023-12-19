import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var incidentes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

var data = {
  label: dias,
  datasets: [
    {
      label: "Casos",
      data: incidentes,
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      pointRadius: 5,
      pointBorderColor: "rgba(75, 192, 192, 0.2)",
      prointBackgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

var options = {};
export default function LinesChart() {
  return <Line data={data} options={options} />;
}

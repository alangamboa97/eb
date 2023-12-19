import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { graphqlOperation } from "aws-amplify";
import { getIncidencia } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView() {
  const { id } = useParams();
  const [ubicacion, setUbicacion] = useState([19.468725, -99.1345574]); // Valor por defecto

  useEffect(() => {
    fetchIncidencia();
  }, []);

  // Lee la incidencia de la base de datos
  const fetchIncidencia = async () => {
    try {
      const incidenciaData = await API.graphql(
        graphqlOperation(getIncidencia, { id: id })
      );
      const incidenciaDetails = incidenciaData.data.getIncidencia;

      setUbicacion(incidenciaDetails?.ubicacion || [19.468725, -99.1345574]); // Actualiza la ubicación o establece un valor por defecto

      console.log("Incidencia", incidenciaDetails);
      console.log("Ubicacion", incidenciaDetails?.ubicacion);
    } catch (error) {
      console.log("error leyendo datos", error);
    }
  };

  return (
    <MapContainer
      center={ubicacion}
      zoom={13}
      style={{ height: 400, width: 700 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          ubicacion && ubicacion.lat && ubicacion.lng
            ? [ubicacion.lat, ubicacion.lng]
            : [19.468725, -99.1345574]
        }
      ></Marker>
    </MapContainer>
  );
}

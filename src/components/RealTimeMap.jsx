import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import Pin from "../components/Pin";
import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIcon from "../images/marker.png";
import useInterval from "../UseInterval";
import Location from "aws-sdk/clients/location";
import { createRequestTransformer } from "amazon-location-helpers";
import { Signer } from "@aws-amplify/core";
import awsconfig from "../aws-exports";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

Amplify.configure(awsconfig);

const mapName = "MyMap";
const identityPoolId = "admins";
const trackerName = "MyTracker";
const deviceID = "MyDevice";

const INITIAL_VIEW_STATE = {
  longitude: -99.14028,
  latitude: 19.7267,
  zoom: 10,
};

const CustomMarkerIcon = L.icon({
  iconUrl: markerIcon, // Ruta al icono personalizado
  iconSize: [50, 50], // Tamaño del icono
  iconAnchor: [25, 45], // Punto de anclaje del icono
  popupAnchor: [0, -41], // Punto de anclaje del popup
});

const transformRequest = (credentials) => (url, resourceType) => {
  // Resolve to an AWS URL
  if (resourceType === "Style" && !url?.includes("://")) {
    url = `https://maps.geo.${awsconfig.aws_project_region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`;
  }

  // Only sign AWS requests (with the signature as part of the query string)
  if (url?.includes("amazonaws.com")) {
    return {
      url: Signer.signUrl(url, {
        access_key: credentials.accessKeyId,
        secret_key: credentials.secretAccessKey,
        session_token: credentials.sessionToken,
      }),
    };
  }

  // Don't sign
  return { url: url || "" };
};

function Track(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.trackDevice();
  };

  return (
    <div className="container">
      <div className="input-group">
        <div className="input-group-append">
          <button
            onClick={handleClick}
            className="btn btn-primary"
            type="submit"
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RealTimeMap() {
  const [credentials, setCredentials] = useState();
  //const [transformRequest, setRequestTransformer] = useState();
  const [viewport, setViewport] = useState({
    longitude: -99.14028,
    latitude: 19.7267,
    zoom: 10,
  });
  const [client, setClient] = useState(null);

  const [marker, setMarker] = useState({
    longitude: -99.14028,
    latitude: 19.7267,
  });

  const [devPosMarkers, setDevPosMarkers] = useState([]);

  useEffect(() => {
    const fetchCredentials = async () => {
      setCredentials(await Auth.currentUserCredentials());
    };

    fetchCredentials();

    const createClient = async () => {
      const credentials = await Auth.currentCredentials();
      const client = new Location({
        credentials,
        region: awsconfig.aws_project_region,
      });
      setClient(client);
    };

    createClient();
  }, []);

  useInterval(() => {
    //getDevicePosition();
  }, 10000);

  const getDevicePosition = () => {
    // Eliminar esta línea que limpia los marcadores cada vez que se llama a la función
    //setDevPosMarkers([]);

    var params = {
      DeviceId: deviceID,
      TrackerName: trackerName,
      StartTimeInclusive: "2023-05-12T10:05:07.327Z",
      EndTimeExclusive: new Date(),
    };

    client.getDevicePositionHistory(params, (err, data) => {
      if (err) console.log(err, err.stack);
      if (data && data.DevicePositions && data.DevicePositions.length > 0) {
        const latestPosition =
          data.DevicePositions[data.DevicePositions.length - 1];

        console.log(
          "Posicion: ",
          latestPosition.Position[0],
          latestPosition.Position[1]
        );

        const newPosition = {
          longitude: latestPosition.Position[0],
          latitude: latestPosition.Position[1],
        };

        setMarker(newPosition);

        setViewport({
          longitude: newPosition.longitude,
          latitude: newPosition.latitude,
          zoom: 5,
        });
      } else {
        // Si no se reciben coordenadas, mantener la vista inicial y la última posición conocida
        setViewport(INITIAL_VIEW_STATE);
        console.log("No se han recibido coordenadas del dispositivo.");
      }
    });
  };

  const trackerMarkers = React.useMemo(
    () =>
      devPosMarkers.map((pos) => (
        <Marker key={pos.index} longitude={pos.long} latitude={pos.lat}>
          <Pin text={pos.index + 1} size={20} />
        </Marker>
      )),
    [devPosMarkers]
  );

  return (
    <main>
      <br />
      <br />
      <br />
      <div style={{ height: "80vh", overflowY: "scroll" }}>
        <div>
          <button
            onClick={getDevicePosition}
            class="text-white py-2 px-4 uppercase rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Actualizar
          </button>
        </div>
        <br />
        <MapContainer
          center={[viewport.latitude, viewport.longitude]}
          zoom={16}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker
            position={[marker.latitude, marker.longitude]}
            icon={CustomMarkerIcon}
          >
            {/* Contenido del popup */}
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}

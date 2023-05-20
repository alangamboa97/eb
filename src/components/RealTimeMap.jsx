import React, { useState, useEffect } from "react";
import { Amplify,Auth } from "aws-amplify";
import ReactMapGL, { Marker, Popup, NavigationControl, Source, Layer } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Pin from "../components/Pin";

import useInterval from '../UseInterval';   
import Location from "aws-sdk/clients/location";
import { Signer } from "@aws-amplify/core";
import awsconfig from "../aws-exports";


Amplify.configure(awsconfig);


const mapName = "MayMap";
const trackerName = "MyTracker";
const deviceID = "MyDevice";


const INITIAL_VIEW_STATE = {
    longitude: -99.14028,
    latitude: 19.7267,
    zoom: 10,
}




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
        })
      };
    }
  
    // Don't sign
    return { url: url || "" };
  };


  function Track(props){
    const handleClick = (event) => {
        event.preventDefault();
        props.trackDevice();
    }

    return (
        <div className="container">
          <div className="input-group">
            <div className="input-group-append">
              <button onClick={ handleClick } className="btn btn-primary" type="submit">Track</button>
            </div>
          </div>
        </div>
      )
  }

export default function RealTimeMap() {

    const [credentials, setCredentials] = useState();
    const [viewport, setViewport] = useState(INITIAL_VIEW_STATE);
    const [client, setClient] = useState(null);

    const [marker, setMarker] = useState(
        {
            longitude: -99.14028,
            latitude: 19.7267,

        }
    );

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
        }
    
        createClient();  
      }, []);

      useInterval(() => {
        getDevicePosition();
      }, 10000);


      const getDevicePosition = () => {
        setDevPosMarkers([]);
    
        var params = {
          DeviceId: deviceID,
          TrackerName: trackerName,
          StartTimeInclusive:"2023-05-12T10:05:07.327Z" ,
          EndTimeExclusive: new Date()
        };
    
        client.getDevicePositionHistory(params, (err, data) => {
          if (err) console.log(err, err.stack); 
          if (data) { 
            console.log(data)
            const tempPosMarkers =  data.DevicePositions.map( function (devPos, index) {
            console.log(devPos.Position[0], devPos.Position[1])
              return {
                index: index,
                long: devPos.Position[0],
                lat: devPos.Position[1]
              } 
              
            });
    
            setDevPosMarkers(tempPosMarkers);
    
            const pos = tempPosMarkers.length -1;
            
            setViewport({
              longitude: tempPosMarkers[pos].long,
              latitude: tempPosMarkers[pos].lat, 
              zoom: 5});
          }
        });
      }

      const trackerMarkers = React.useMemo(() => devPosMarkers.map(
        pos => (
          <Marker key={pos.index} longitude={pos.long} latitude={pos.lat} >
            <Pin text={pos.index+1} size={20}/>
          </Marker>
        )), [devPosMarkers]);
        
        return (
            <main>
                <div>
        <Track trackDevice = {getDevicePosition}/>
      </div>
      <br/>
      <div>
      {credentials ? (
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100vh"
            transformRequest={transformRequest(credentials)}
            mapStyle={mapName}
            onViewportChange={setViewport}w
          >
            <Marker
              longitude={marker.longitude}
              latitude={marker.latitude}
              offsetTop={-20}
              offsetLeft={-10}
            > 
            <Pin size={20}/>
            </Marker>

            {trackerMarkers}

            <div style={{ position: "absolute", left: 20, top: 20 }}>
              <NavigationControl showCompass={false} />
            </div>
            
          </ReactMapGL>
      ) : (
        <h1>Loading...</h1>
      )}
      </div>
    
            </main>
        )
    

}
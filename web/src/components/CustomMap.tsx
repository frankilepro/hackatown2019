import * as React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs  } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

declare global {
  // tslint:disable-next-line:interface-name
  interface Window { google: any; }
}
window.google = window.google || {};

const CustomMap = withScriptjs(withGoogleMap((props: any) => {
  const montrealPos = { lat: 45.5043877, lng: -73.6150716 };
  const data = props.data.map((x: any) => new window.google.maps.LatLng(x.lat, x.lng));
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={montrealPos}
    >
      {/* <Marker position={montrealPos} /> */}
      <HeatmapLayer data={data}/>
    </GoogleMap>
  );
}));

export default CustomMap;

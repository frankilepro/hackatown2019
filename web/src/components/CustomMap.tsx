// tslint:disable
import * as React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { observer } from 'mobx-react';
import filterStore from 'src/stores/FilterStore';

declare global {
  interface Window { google: any; }
}
window.google = window.google || {};

@observer
export default class CustomMap extends React.Component<any> {
  public refs: any;
  private readonly montrealPos = { lat: 45.5043877, lng: -73.6150716 };

  private onZoomChanged = () => {
    filterStore.radius = this.refs.getZoom();
    console.log(`Zoom: ${this.refs.getZoom()}`);
    console.log(`Radius: ${filterStore.radius}`);
  }

  public async componentWillMount() {
    filterStore.load();
  }

  public render() {
    if (filterStore.data.length === 0) {
      return (
        <div style={{ height: '60vh' }}>Loading</div>
      );
    }

    const GoogleMapExample = withScriptjs(withGoogleMap(() => {
      const data = filterStore.data.filter(x => x.isChecked).map((x: any) => new window.google.maps.LatLng(x.lat, x.lng));
      const ObserverMap = observer(() => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={this.montrealPos}
          ref={(ref) => { this.refs = ref; }}
          onZoomChanged={this.onZoomChanged}
        >
          <HeatmapLayer options={{ 'data': data, 'radius': filterStore.radius }} />
        </GoogleMap>
      ));
      return (
        <ObserverMap />
      );
    }));

    return (
      <div>
        <GoogleMapExample
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=visualization"
          loadingElement={<div style={{ height: '60vh' }}>Loading</div>}
          containerElement={<div style={{ height: '60vh' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

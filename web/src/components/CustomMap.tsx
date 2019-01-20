// tslint:disable
import * as React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { observer } from 'mobx-react';
import placeStore from 'src/stores/PlaceStore';

declare global {
    interface Window { google: any; }
}
window.google = window.google || {};

@observer
export default class CustomMap extends React.Component<any> {
    public refs: any;

    private onZoomChanged = () => {
        placeStore.radius = this.refs.getZoom();
        console.log(`Zoom: ${this.refs.getZoom()}`);
        console.log(`Radius: ${placeStore.radius}`);
    }

    public async componentWillMount() {
        placeStore.load();
    }

    public render() {
        if (placeStore.data.length === 0) {
            return (
                <div style={{ height: '60vh' }}>Loading</div>
            );
        }

        const GoogleMapExample = withScriptjs(withGoogleMap(() => {
            const data = placeStore.data.filter(x => x.isChecked).map((x: any) => new window.google.maps.LatLng(x.lat, x.lng));
            const ObserverMap = observer(() => (
                <div>
                    <h1 style={{ position: 'absolute', top: 0 }}>{data.length} crimes dans ce secteur</h1>
                    <GoogleMap
                        defaultZoom={placeStore.zoom}
                        defaultCenter={placeStore.latLng}
                        ref={(ref) => { this.refs = ref; }}
                        onZoomChanged={this.onZoomChanged}
                    >
                        <HeatmapLayer options={{ 'data': data, 'radius': placeStore.radius }} />
                    </GoogleMap>
                </div>
            ));
            return (
                <ObserverMap />
            );
        }));

        return (
            <div>
                <GoogleMapExample
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=visualization"
                    loadingElement={<div style={{ height: '60vh', width: '90vw', margin: 'auto' }}>Loading...</div>}
                    containerElement={<div style={{ height: '60vh', width: '90vw', margin: 'auto' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        );
    }
}

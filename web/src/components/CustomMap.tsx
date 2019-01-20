// tslint:disable
import * as React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import axios from "axios";

declare global {
    interface Window { google: any; }
}
window.google = window.google || {};

@observer
export default class CustomMap extends React.Component {
    @observable public radius: number = Math.pow(12, 1.2);
    @observable private data: any = [];
    public refs: any;
    private readonly montrealPos = { lat: 45.5043877, lng: -73.6150716 };

    private onZoomChanged = () => {
        this.radius = this.refs.getZoom();
        console.log(`Zoom: ${this.refs.getZoom()}`);
        console.log(`Radius: ${this.radius}`);
    }

    public async componentWillMount() {
        axios.defaults.baseURL = 'http://localhost:4000/api/';
        const serverData = await axios.get(`crimes/2018`);
        this.data = serverData.data;
    }

    public render() {
        if (this.data.length === 0) {
            return (
                <div>Salut</div>
            );
        }

        const GoogleMapExample = withScriptjs(withGoogleMap(() => {
            const data = this.data.map((x: any) => new window.google.maps.LatLng(x.lat, x.lng));
            const ObserverMap = observer(() => (
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={this.montrealPos}
                    ref={(ref) => { this.refs = ref; }}
                    onZoomChanged={this.onZoomChanged}
                >
                    <HeatmapLayer options={{ 'data': data, 'radius': this.radius }} />
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
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '60vh' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        );
    }
}

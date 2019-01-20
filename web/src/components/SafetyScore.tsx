import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import filterStore from 'src/stores/FilterStore';

@observer
export default class SafetyScore extends React.Component<any> {

    @observable public safetyScore: number;
    public async componentWillMount() {
        filterStore.load();
    }

    public getNerbyCrimesCount(searchedLatLng: any, data: any[]): number {
        return data.filter(x => this.isWithinRadius(searchedLatLng, x)).length;
    }

    public isWithinRadius(latLngA: google.maps.LatLng, latLngB: google.maps.LatLng): boolean {
        return (this.calculateDistance(latLngA.lng(), latLngA.lat(), latLngB.lng(), latLngB.lat()) < 100);
    }

    public calculateDistance(lng1: number, lat1: number, lng2: number, lat2: number): number {
        const EARTH_RADIUS = 6371; // KM

        const dlon = lng2 - lng1;
        const dlat = lat2 - lat1;
        const a = Math.pow((Math.sin(dlat / 2)), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow((Math.sin(dlon / 2)), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return EARTH_RADIUS * c;
    }

    public render() {
        if (filterStore.data.length === 0) {
            return (
                <div style={{ height: '60vh' }}>Loading</div>
            );
        }

        return (
            <div>
                {this.safetyScore}
            </div>
        );
    }
}

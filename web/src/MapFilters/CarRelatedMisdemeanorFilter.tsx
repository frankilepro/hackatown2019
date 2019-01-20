import AirportShuttle from '@material-ui/icons/AirportShuttle';
import * as React from 'react';
import { MapFilter } from './MapFilter';

export class CarRelatedMisdemeanorFilter extends MapFilter {
    public constructor() {
        super();
        this.title = "Vol dans / sur véhicule à moteur"
        this.icon = (<AirportShuttle fontSize="large" />);
    }
}
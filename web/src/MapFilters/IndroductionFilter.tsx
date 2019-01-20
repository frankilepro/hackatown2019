import Business from '@material-ui/icons/Business';
import * as React from 'react';
import { MapFilter } from './MapFilter';

export class IntroductionFilter extends MapFilter {
    public constructor() {
        super();
        this.title = "Introduction"
        this.icon = (<Business fontSize="large" />)
    }
}
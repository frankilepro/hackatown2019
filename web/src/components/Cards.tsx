import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { CarRelatedMisdemeanorFilter } from 'src/MapFilters/CarRelatedMisdemeanorFilter';
import { CarRoberyFilter } from 'src/MapFilters/CarRoberyFilter';
import { DeadlyInfractionFilter } from 'src/MapFilters/DeadlyInfractionFilter';
import { IntroductionFilter } from 'src/MapFilters/IndroductionFilter';
import { MisdemeanorFilter } from 'src/MapFilters/MisdemeanorFilter';
import { QualifiedRoberyFilter } from 'src/MapFilters/QualifiedRoberyFilter';
import { MapFilter } from '../MapFilters/MapFilter';

class Cards extends React.Component {
    private mapFilters: Map<number, MapFilter> = new Map();

    public componentWillMount() {
        this.mapFilters.set(0, new CarRelatedMisdemeanorFilter());
        this.mapFilters.set(1, new CarRoberyFilter());
        this.mapFilters.set(2, new DeadlyInfractionFilter());
        this.mapFilters.set(3, new IntroductionFilter());
        this.mapFilters.set(4, new MisdemeanorFilter());
        this.mapFilters.set(5, new QualifiedRoberyFilter());
    }

    public render() {
        return (
            <div>
                <Grid container={true} spacing={16}>
                    <Grid item={true} xs={12}>
                        <Grid container={true} justify="center" spacing={16}>
                            {[0, 1, 2, 3, 4, 5].map(value => (
                                <Grid key={value} item={true}>
                                    {this.generateGrid(this.mapFilters.get(value) as MapFilter)}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    public generateGrid(filter: MapFilter): any {
        const CustomCard = {
            display: 'block',
            height: '200px',
            width: '200px'
        }
        // tslint:disable-next-line:no-console
        console.log(filter.title);
        return (
            <Card>
                <CardActionArea style={CustomCard} onClick={this.setFilter}>
                    <CardContent>
                        <Typography gutterBottom={true} variant="h5">
                            {filter.title}
                        </Typography>
                        {filter.icon}
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    public setFilter(): void {
        // tslint:disable-next-line:no-console
        console.log('onClick');
    }
}

export default Cards;
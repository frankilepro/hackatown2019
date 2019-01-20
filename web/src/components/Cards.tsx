import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import filterStore, { IFilter } from 'src/stores/FilterStore';

@observer
class Cards extends React.Component {

  public render() {
    const CustomGrid = {
      padding: '1vh'
    }


    return (
      <div>
        <Grid container={true} spacing={16} style={CustomGrid}>
          <Grid item={true} xs={12}>
            <Grid container={true} justify="center" spacing={16}>
              {filterStore.filters.map(value => (
                <Grid key={value.type} item={true}>
                  {this.generateGrid(value)}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div >
    );
  }

  public generateGrid(filter: IFilter): any {
    return (
      <Card>
        <CardActionArea
          style={{ display: 'block', height: 150, width: 150, backgroundColor: filter.isChecked ? "#dfdfdf" : "white" }}
          onClick={() => this.setFilter(filter.type)}>
          <CardContent>
            <Typography gutterBottom={true} variant="h5">
              {filter.name}
            </Typography>
            {filter.icon}
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  private setFilter(type: number): void {
    filterStore.applyFilter(type);
  }
}

export default Cards;
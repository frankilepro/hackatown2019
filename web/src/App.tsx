import axios from "axios";
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';

import Cards from './components/Cards';
import CustomMap from './components/CustomMap';

@observer
class App extends React.Component {
  @observable public data = []

  public async componentDidMount() {
    axios.defaults.baseURL = 'http://localhost:4000/api/';
    // let month = 1;
    // let year = 2015
    // setInterval(async () => {
    //   const serverData = await axios.get(`crimes/${year}/${month++}`);
    //   this.data = serverData.data;
    //   console.error(year + " " + month);
    //   if (month === 13) {
    //     month = 1;
    //     year++;
    //     if (year === 2019) {
    //       year = 2015;
    //     }
    //   }
    // }, 2000);
    const serverData = await axios.get(`crimes`);
    this.data = serverData.data;
  }

  public render() {
    return (
      <div className="App">
        <CustomMap
          data={this.data}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=visualization"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <Cards />
      </div>
    );
  }
}

export default App;

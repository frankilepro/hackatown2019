import axios from "axios";
import { observable } from 'mobx';
import { observer }  from 'mobx-react';
import * as React from 'react';
import './App.css';

import CustomMap from './components/CustomMap';

@observer
class App extends React.Component {
  @observable public data = []

  public async componentDidMount() {
    axios.defaults.baseURL = 'http://localhost:4000/api/';
    const serverData = await axios.get("crimes/2018/1");
    this.data = serverData.data;
    console.error(serverData.data);
  }

  public render() {
    return (
      <div className="App">
        <CustomMap
          data={this.data}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=visualization"
          loadingElement={<div style={{ height:'100%' }} />}
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default App;

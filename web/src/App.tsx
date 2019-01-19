import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';

import CustomMap from './components/CustomMap';
import logo from './logo.svg';

@observer
class App extends React.Component {
  @observable private lol: number = 0;

  public componentDidMount(): void {
    setInterval(() => this.lol = (this.lol + 1) % 10, 500);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>{this.lol}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CustomMap
          isMarkerShown="true"
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;

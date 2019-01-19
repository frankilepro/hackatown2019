import * as React from 'react';
import './App.css';

import CustomMap from './components/CustomMap';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CustomMap
          isMarkerShown="true"
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMXNZX7SZ3MP5gVve_e0BRpod_G6ahpFU&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default App;

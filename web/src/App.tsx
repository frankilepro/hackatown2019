import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';

import CustomMap from './components/CustomMap';

@observer
class App extends React.Component {
  @observable public data = [];

  public render() {
    return (
      <div className="App">
        <CustomMap />
      </div>
    );
  }
}

export default App;

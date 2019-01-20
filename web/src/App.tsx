import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';

import Cards from './components/Cards';
import CustomMap from './components/CustomMap';

@observer
class App extends React.Component {
  @observable public data = [];

  public render() {
    return (
      <div className="App">
        <CustomMap />
        <Cards />
      </div>
    );
  }
}

export default App;

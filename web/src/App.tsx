import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';

import Cards from './components/Cards';
import CustomMap from './components/CustomMap';
import SearchBar from './components/SearchBar';

@observer
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CustomMap />
        <Cards />
        <SearchBar />
      </div>
    );
  }
}

export default App;

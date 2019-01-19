import { observable } from 'mobx';
import { observer }  from 'mobx-react';
import * as React from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;

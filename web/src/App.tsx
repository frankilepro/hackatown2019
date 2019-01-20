// tslint:disable-next-line
const ReactFullpage = require("@fullpage/react-fullpage").default;
import * as React from 'react';
import './App.css';
import Cards from './components/Cards';
import CustomMap from './components/CustomMap';
import Landing from './components/Landing';

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <ReactFullpage
                    debug={true} /* Debug logging */
                    scrollOverflow={true}
                    navigation={true}
                    // tslint:disable-next-line:jsx-no-lambda
                    render={() => (
                        <ReactFullpage.Wrapper>
                            <Landing />
                            <div className="section">
                                <CustomMap />
                                <Cards />
                            </div>
                            <div className="section">
                                <h1>text2</h1>
                            </div>
                        </ReactFullpage.Wrapper>
                    )}
                />
            </div>
        );
    }
}

export default App;

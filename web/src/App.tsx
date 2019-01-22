// tslint:disable-next-line
const ReactFullpage = require("@fullpage/react-fullpage").default;
import * as React from 'react';
import './App.css';
import Cards from './components/Cards';
import CustomMap from './components/CustomMap';
import Landing from './components/Landing';
import SearchBar from './components/SearchBar';

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
                                <SearchBar />
                                <Cards />
                            </div>
                            <div className="section">
                                <h1>@Couloulou</h1>
                            </div>
                        </ReactFullpage.Wrapper>
                    )}
                />
                <div style={{
                    backgroundColor: "#EDEDED",
                    // borderTop: "2px solid black",
                    bottom: 0,
                    padding: '5px',
                    position: "absolute",
                    width: "100vw",
                }}>@Couloulou</div>
            </div>
        );
    }
}

export default App;

import * as React from 'react';
import PoliceCar from "../resources/police-car.svg";

class Landing extends React.Component {

    public render() {
        const CustomTitle = {
            'font-size': '1500%',
            left: '5vw',
            position: 'absolute' as 'absolute',
            top: '5vh'
        }

        const CustomCar = {
            bottom: '-10vh',
            height: 'auto',
            maxWidth: '90vw',
            position: 'absolute' as 'absolute',
        }

        return (
            <div className="section">
                <h1 style={CustomTitle}>Crimes Mtl</h1>
                <img src={PoliceCar} style={CustomCar} />
            </div>
        );
    }
}

export default Landing;
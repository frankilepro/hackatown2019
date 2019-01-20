import * as React from 'react';
import PoliceCar from "../resources/police-car.png";

class Landing extends React.Component {

    public render() {
        const CustomTitle = {
            left: '20vw',
            position: 'absolute' as 'absolute',
            top: '20vh'
        }

        const CustomCar = {
            bottom: '1vh',
            'max-width': '40vw',
            position: 'absolute' as 'absolute',
        }

        return (
            <div className="section">
                <h1 style={CustomTitle}>Sample Text</h1>
                <img src={PoliceCar} style={CustomCar} />
            </div>
        );
    }
}

export default Landing;
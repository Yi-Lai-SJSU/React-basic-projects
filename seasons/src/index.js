import React from 'react';
import ReactDOM from  'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null, log: null, errorMessage: "" };

    componentDidMount() {
        console.log('My component was rendered to the screen!');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
                this.setState({log: position.coords.longitude});
            },
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (!this.state.lat && this.state.errorMessage){
            return (<div> Error: {this.state.errorMessage} </div>);
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat = {this.state.lat} log = {this.state.log} />
            )
        }
        return <Spinner message = "Please accept location request!"/>
    }

    //React says we have to define render!!!
    render() {
        return (
            <div className="border red"> 
                {this.renderContent()}
            </div>
        )
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
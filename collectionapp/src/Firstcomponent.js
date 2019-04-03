import React, { Component } from 'react';
import './App.css';
import Map from "./Map";


//first component that pulls in the rawdata javascript file
//then calls the Map component

class Firstcomponent extends Component {
    render() {
        const rawDataArray = require('./rawData');


        return (
            <div className="App">
                <h1>User Collection App</h1>
                <Map array={rawDataArray}/>
            </div>
        );
    }
}

export default Firstcomponent;
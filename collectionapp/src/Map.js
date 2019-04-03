import React, { Component } from 'react';
import Items from "./Items";



//component that maps the array into the eachElement variable
class Map extends Component{
    render(){

        const map = this.props.array.map(
            (eachElement)=>{

                return(<Items eachElement={eachElement}/>)
            }
        );

        return(
            <div>
                {map}
            </div>
        );
    }
}

export default Map;
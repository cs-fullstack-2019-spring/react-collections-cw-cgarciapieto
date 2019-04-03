import React, { Component } from 'react';

class Items extends Component{
    render(){
        return(

            //the structure and items be rendered from the rawdata collection
            <div>

                <p>Name: {this.props.eachElement.name}</p>

                <p>Username: {this.props.eachElement.username}</p>
                <p>email: {this.props.eachElement.email}</p>
                <ul>Address:
                    <li>{this.props.eachElement.address.street}</li>
                    <li>{this.props.eachElement.address.suite}</li>
                    <li>{this.props.eachElement.address.city}</li>
                    <li>{this.props.eachElement.address.zipcode}</li></ul>

            </div>
        );
    }
}

export default Items;


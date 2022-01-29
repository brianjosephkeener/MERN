import React, {Component} from 'react';

class PersonCard extends Component {
    render(){
        return(
            <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <h4>Age: {this.props.age}</h4>
            <h4>Hair Color: {this.props.hairColor}</h4>
            <br></br>
            </div>
        );
    }
}

export default PersonCard
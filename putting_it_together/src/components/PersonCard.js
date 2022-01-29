import React, {Component} from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    addAge = () => {
        this.setState({ age: this.state.age + 1});
    }
    render(){
        return(
            <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <h4>Age: {this.state.age}</h4>
            <h4>Hair Color: {this.props.hairColor}</h4>
            <button onClick={this.addAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            <br></br>
            </div>
        );
    }
}

export default PersonCard
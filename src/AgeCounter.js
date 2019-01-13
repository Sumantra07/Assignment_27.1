// Component for handling the counter and buttons
import React, { Component } from 'react';

class AgeCounter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            age: 0
        };
    }

    incr = () => {
        let { age } = this.state;
        age ++;
        this.setState({
            age: age
        });
    }

    decr = () => {
        let { age } = this.state;
        age --;
        if(age < 1)
        age = 0;
        this.setState({age:age});
    }
    handleChange = e => {
      this.setState({
        ...this.state.age,
        [e.target.name]: e.target.value
        
      });  
    }

    render() {
        return (
            <div>
                <h1>Person's age</h1>
                <input type="text" id='age' autofocus="autofocus" value={this.state.age} name='age' onChange={this.handleChange} />
                <button id ='increment'onClick={this.incr}>+</button>
                <button id ='decrement' onClick={this.decr}>-</button>
            </div>
        );
    }
}

export default AgeCounter;
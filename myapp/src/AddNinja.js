import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    handleClick = (e) => {

    }
    render () {
        return(
            <div className="addNinjas">
                <form onSubmit={this.handleSubmit} className="addNinjasForm">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <br/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <br/>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <br/>
                    <button onClick={ this.handleClick }>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja
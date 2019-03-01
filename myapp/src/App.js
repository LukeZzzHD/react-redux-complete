import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Naruto', age: 19, belt: 'orange', id: 1 },
      { name: 'Sasuke', age: 19, belt: 'blue', id: 2 },
      { name: 'Kakashi', age: 25, belt: 'black', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount () {
    console.log('Component mounted!');
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('Component updated!');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <hr/>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

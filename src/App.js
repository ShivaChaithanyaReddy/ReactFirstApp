import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is my first react app</h1>
        <p>This is really working</p>
          <Person />
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , 'Hi, I\'m new to React'))
  }
}

export default App;

import React, { Component } from 'react';
import importTeams from '../../utils/importTeams';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let teams = importTeams((req, res) => {
      console.log(req, res);
    });
    this.setState({ teams });
  }

  render() {
    return <div></div>;
  }
}

export default App;

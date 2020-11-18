import {Component} from 'react'
import MainContainer from './MainContainer'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(characters => this.setState({characters: characters.results}))
  }

  //

  render(){
    
      return (
        <div className="App">
          <h1>Up?</h1>
          <MainContainer characters={this.state.characters} />
          {/* {this.eachCharacter()} */}
        </div>
      );
    }
  }

export default App;

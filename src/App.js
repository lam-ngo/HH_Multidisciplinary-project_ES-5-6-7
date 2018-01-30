import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//IMPORT DATA
import playerList from './data/Data';

//IMPORT COMPONENTS
import PlayerListing from './components/listing/PlayerListing.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a player app using React and ES 5, 6, 7 features</h1>
        </header>

        <h3>Add new player</h3>
        <PlayerListing playerList={playerList}/>
      </div>
    );
  }
}

export default App;

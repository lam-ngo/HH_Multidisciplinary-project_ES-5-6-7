import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//IMPORT DATA
import playerList from './data/Data';

//IMPORT COMPONENTS
import PlayerListing from './components/listing/PlayerListing.js';
import PlayerAdding from './components/adding/PlayerAdding.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerList: playerList,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a player app using React and ES 5, 6, 7 features</h1>
        </header>

        <PlayerAdding actionHandle={this.actionHandle}/>
        <PlayerListing actionHandle={this.actionHandle} playerList={this.state.playerList}/>
      </div>
    );
  }

  //HANDLE ALL ACTION AND SETSTATE
  actionHandle = (type, index, player) => {
    switch (type) {
      case 'PLAYER_ADD':
        console.log(`PLAYER_ADD new ${player}`);
        this.setState({ playerList: [ ...this.state.playerList, player] });
        break;
      case 'PLAYER_DELETE':
        console.log(`PLAYER_DELETE index ${index}`);
        this.setState({ playerList: [ ...this.state.playerList.slice(0,index), ...this.state.playerList.slice(index+1)] });
        break;
      default:
        break;
    }
  }
}

export default App;

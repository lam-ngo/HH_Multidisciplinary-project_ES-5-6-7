import React, { Component } from 'react';

const style = {
  container: {
    width: "600px",
    margin: "auto",
  },
  column: {
    width: "150px",
  },
  textAlign: {
    paddingLeft: "20px",
    textAlign: "left",
  },
};

class PlayerListing extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    const renderPlayer = this.props.playerList.map((player, index) =>
      <SinglePlayer key={index} player={player} deleteHandle={() => this.deleteHandle(index)}/>
    );

    let totalPlayer = this.props.playerList.length;

    return (
      <div style={style.container}>
        <div>
          <h3>List of all players</h3>
          <p>The total number of players is: {totalPlayer}. Sort by <span>
              <select>
                <option>Name</option>
                <option>Age</option>
                <option>Point</option>
              </select>
            </span>
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th style={style.column}>Name</th>
              <th style={style.column}>Age</th>
              <th style={style.column}>Score</th>
              <th style={style.column}></th>
            </tr>
          </thead>
          <tbody>
            {renderPlayer}
          </tbody>
        </table>
      </div>
    );
  }

  deleteHandle = (index) => {
    console.log(`Delete player at index ${index}`);
    this.props.actionHandle('PLAYER_DELETE', index);
  }
}

const SinglePlayer = ({ player, deleteHandle }) =>
  <tr>
    <td style={style.textAlign}>{player.name}</td>
    <td>{player.age}</td>
    <td>{player.score}</td>
    <td>
      <button onClick={() => deleteHandle()}>DELETE</button>
    </td>
  </tr>
;

export default PlayerListing;

import React, { Component } from 'react';

class PlayerAdding extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: 0,
      score: 0,
    };
  }

  render() {
    return (
      <div>
        <h3>Add new player</h3>
        <form onSubmit={this.addHandle}>
          <p>
            Name:
            <input type="text" name="name" placeholder="Add a new name"
              onChange={this.inputChanged} value={this.state.name} required/>
            Age:
            <input type="number" name="age" min="1"
              onChange={this.inputChanged} value={this.state.age} />
            Score:
            <input type="number" name="score" min="0" max="150"
              onChange={this.inputChanged} value={this.state.score} />
          </p>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
  //HANDLE INPUT CHANGE
  inputChanged = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //HANDLE SUBMIT ADD FORM
  addHandle = (e) => {
    e.preventDefault();
    this.props.actionHandle('PLAYER_ADD', 0, this.state);
    console.log(`Add new player: ${this.state.name}, ${this.state.age}, ${this.state.score}`);
    this.setState({
      name: '',
      age: 0,
      score: 0,
    });
  }
}

export default PlayerAdding;

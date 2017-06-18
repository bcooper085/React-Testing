import React, { Component } from 'react';

class BrewList extends Component {
  constructor() {
    super()
    this.state = {
      brews: [
        {
          name: "Coors"
        },
        {
          name: "Bud"
        },
        {
          name: "Miller"
        },
        {
          name: "Mich"
        },
      ]
    }
  }
  render() {
    return (
      <div className="BrewList">
          <p className="App-intro">
            {this.props.brew.name}
          </p>
      </div>
    );
  }
}

export default BrewList;

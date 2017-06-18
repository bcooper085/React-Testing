import React, { Component } from 'react';

class BrewList extends Component {
  render() {
    return (
      <div className="BrewList">
          <p className="App-intro">
            {this.props.brew.name}: {this.props.brew.abv}
          </p>
      </div>
    );
  }
}

export default BrewList;

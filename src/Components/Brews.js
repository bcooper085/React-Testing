import React, { Component } from 'react'
import BrewList from './BrewList'

class Brews extends Component {
  render() {
    let brewList;
    if(this.props.brews){
      brewList = this.props.brews.map(brew => {
        return (
          <BrewList brew={brew} />
        )
      });
    }
    return (
      <div className="Brews">
        {brewList}
      </div>
    );
  }
}

export default Brews;

import React, { Component } from 'react'
import BrewList from './BrewList'

class Projects extends Component {
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
      <div className="Projects">
        {brewList}
      </div>
    );
  }
}

export default Projects;

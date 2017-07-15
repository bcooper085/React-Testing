import React, { Component } from 'react'
import BrewList from './BrewList'
import { Well, Col } from 'react-bootstrap'

class Brews extends Component {
  render() {
    let brewList;
    if(this.props.brews){
      brewList = this.props.brews.map(brew => {
        return (
          <Col md={2}>
            <Well>
              <BrewList brew={brew} />
            </Well>
          </Col>
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

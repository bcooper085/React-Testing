import React, { Component } from 'react'
import Brews from './Components/Brews'
import AddBrew from './Components/AddBrew'
// import Modal from './Components/Modal'
import logo from './beerMug.png'
import './App.css'
import './Components/Project.scss'
import { Row } from 'react-bootstrap'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { isOpen: false };
  // }
  //
  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  constructor() {
    super()
    this.handleAddBrew = this.handleAddBrew.bind(this);
    this.state = {
      brews: []
    }
  }

  componentWillMount() {
    //If using API collect data here
    this.setState({brews: [
      {
        name: "Coors",
        style: "Light Lager",
        abv: "3.2",
      },
      {
        name: "Bud",
        style: "Light Lager",
        abv: "3.2"
      },
      {
        name: "Miller",
        style: "Light Lager",
        abv: "3.2"
      },
      {
        name: "Mich",
        style: "Light Lager",
        abv: "3.5"
      },
    ]})
  }

  handleAddBrew(brew) {
    let brews = this.state.brews;
    brews.push(brew);
    this.setState({brews:brews})
  }

  render() {
    return (
        <div className="AddBrew">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Beer Board 2100</h2>
            </div>
            <div className="content-container">
              <Row>
                <AddBrew addBrew={this.handleAddBrew}/>
              </Row>
              <Row className="brew-container">
                <Brews brews={this.state.brews}/>
              </Row>
              {/* <button onClick={this.toggleModal}>
                Toggle Me
              </button>
              <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
              </Modal> */}
            </div>
        </div>
    );
  }
}

export default App;

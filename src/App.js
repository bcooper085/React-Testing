import React, { Component } from 'react'
import Brews from './Components/Brews'
import AddBrew from './Components/AddBrew'
import Modal from './Components/Modal'
import logo from './beerMug.png'
import './App.css'
import './Components/Project.scss'

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
        abv: "3.2%",
      },
      {
        name: "Bud",
        style: "Light Lager",
        abv: "3.2%"
      },
      {
        name: "Miller",
        style: "Light Lager",
        abv: "3.2%"
      },
      {
        name: "Mich",
        style: "Light Lager",
        abv: "3.5%"
      },
    ]})
  }

  handleAddBrew(brew) {
    console.log(brew);
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Beer Board 2017</h2>
          </div>
        <AddBrew addBrew={this.handleAddBrew}/>
        <Brews brews={this.state.brews}/>
        <button onClick={this.toggleModal}>
          Toggle Me
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>

        </Modal>
      </div>
    );
  }
}

export default App;

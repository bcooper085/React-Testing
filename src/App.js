import React, { Component } from 'react'
import Projects from './Components/Projects'
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
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Dashboard 2017</h2>
          </div>
        <Projects brews={this.state.brews}/>
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

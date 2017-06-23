import React, { Component } from 'react'

class AddBrew extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newBrew:{}
    }
  }
  static defaultProps = {
    styles: ['Pilsner', 'IPA', 'Pale Ale', 'Ale', 'Porter', 'Stout', 'Brown Ale', 'Lager', 'Light Lager', 'Wheat']
  }

  handleSubmit(e) {
    if(this.refs.name.value === ''){
      alert("Name is required")
    } else {
      this.setState({newBrew: {
        name: this.refs.name.value,
        abv: this.refs.abv.value,
        style: this.refs.style.value
      }}, function() {
        console.log(this.state);
        this.props.addBrew(this.state.newBrew);
      });
    }
    e.preventDefault();
  }

  render() {
    let styleOptions = this.props.styles.map(style => {
      return <option key={style} value={style}>{style}</option>
    });
    return (
      <div className="AddBrew">
        <h3>Add Brew</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" ref="name" /><br />
          </div>
          <div>
            <label>Abv: </label>
            <input type="text" ref="abv" /><br />
          </div>
          <div>
            <label>Style: </label>
            <select ref="style">
              {styleOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddBrew;

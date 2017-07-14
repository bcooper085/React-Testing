import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

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
        <form onSubmit={this.handleSubmit}>
        <h4>Add Brew</h4>
            <div className="input-field">
              <input placeholder="Name" type="text" ref="name" />
            </div>
            <div className="input-field">
              <input placeholder="Abv" type="text" ref="abv" /><br />
            </div>
            <div className="input-field">
              <label>Style: </label>
              <select ref="style">
                {styleOptions}
              </select>
            </div>
            <RaisedButton type="submit" label="Add" />
        </form>
      </div>
    );
  }
}

export default AddBrew;

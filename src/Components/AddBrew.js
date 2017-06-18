import React, { Component } from 'react'

class AddBrew extends Component {
  static defaultProps = {
    styles: ['Pilsner', 'IPA', 'Pale Ale', 'Ale', 'Porter', 'Stout', 'Brown Ale', 'Lager', 'Light Lager', 'Wheat']
  }
  render() {
    let styleOptions = this.props.styles.map(style => {
      return <option key={style} value="style">{style}</option>
    });
    return (
      <div className="AddBrew">
        <h3>Add Brew</h3>
        <form>
          <div>
            <label>Name: </label>
            <input type="text" ref="name" /><br />
          </div>
          <div>
            <label>Abv: </label>
            <input type="text" ref="abv" /><br />
          </div>
          <div>
            <label>style: </label>
            <select ref="style">
              {styleOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBrew;

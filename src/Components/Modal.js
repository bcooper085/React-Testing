import React, { Component } from 'react'

class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop-style" >
        <div className="modal-style" >
          {this.props.children}
          <div className="footer">
            <textarea>Beer Feedback</textarea>
            <br />
            <button onClick={this.props.onClose}>
              Close
            </button>
            <button onClick={this.props.onClose}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Modal;

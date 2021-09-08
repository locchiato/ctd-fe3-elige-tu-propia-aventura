import { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div className="opcion">
        <button id="A" onClick={this.props.handleClick} className="botones">
          A
        </button>
        <span className="opciones">{this.props.opcionA}</span>
        <br />
        <button id="B" onClick={this.props.handleClick} className="botones">
          B
        </button>
        <span className="opciones">{this.props.opcionB}</span>
      </div>
    );
  }
}

export default Opciones;

import { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Ultima seleccion: {this.props.ultimaSeleccion}</h3>
        <hr />
        <h4>Historial:</h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Recordatorio;

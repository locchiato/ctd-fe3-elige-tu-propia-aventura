import { Component } from "react";

class Recordatorio extends Component {
  render() {
    console.log(this.props.historial);

    return (
      <div className="recordatorio">
        <h3>Seleccion previa: {this.props.seleccionPrevia}</h3>
        <hr />
        <h4>Historial:</h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Recordatorio;

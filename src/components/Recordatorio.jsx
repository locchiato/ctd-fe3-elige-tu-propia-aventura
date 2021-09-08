import { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <div>{this.props.seleccionPrevia}</div>
      </div>
    );
  }
}

export default Recordatorio;

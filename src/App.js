import data from "./data";
import React from "react";
import Historia from "./components/Historia";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";
import "./app.css";

export default class App extends React.Component {
  state = {
    contador: 1,
    ultimaSeleccion: "",
    historial: [],
    etapaActual: data[0]
  };

  UNSAFE_componentWillMount() {
    data.map((etapa) => {
      if (this.esLaIdQueEstoyBuscando(etapa.id))
        this.setState({
          etapaActual: etapa
        });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // pregunta si cambió el contador
    if (prevState.contador !== this.state.contador) {
      // si cambió actualizo el estado con la siguiente etapa
      data.map((etapa) => {
        if (this.esLaIdQueEstoyBuscando(etapa.id))
          this.setState({
            etapaActual: etapa,
            historial:
              this.state.contador > 2
                ? [...prevState.historial, prevState.ultimaSeleccion]
                : [...prevState.historial]
          });
      });
    }
  }

  handleClick = (e) => {
    // funcionamiento de los botones
    const id = e.target.id;
    if (this.state.contador >= 5) {
      alert("Fin.");
    } else {
      this.setState((prevState) => ({
        contador: prevState.contador + 1,
        ultimaSeleccion: id
      }));
    }
  };

  esLaIdQueEstoyBuscando(id) {
    const a = this.state.contador;
    const b = this.state.ultimaSeleccion.toLowerCase();
    return id === `${a}${b}`;
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <Historia texto={this.state.etapaActual.historia} />
          <Opciones
            handleClick={this.handleClick}
            opcionA={this.state.etapaActual.opciones.a}
            opcionB={this.state.etapaActual.opciones.b}
          />
          <Recordatorio
            ultimaSeleccion={this.state.ultimaSeleccion}
            historial={this.state.historial.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          />
        </div>
      </div>
    );
  }
}

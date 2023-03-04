import React, { Component } from 'react';
class Buscador extends Component {
  busquedaRef = React.createRef();
  obtenerDatos = (e) => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datoBusqueda(termino);
  };
  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscar una imagen por Ejemplo Café"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;

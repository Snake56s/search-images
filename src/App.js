import React,{ Component } from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
class App extends Component{
  state={
    termino : '',
    imagenes : [],
    pagina : ''
  }
  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }  
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina===1) return alert('No se puede seguir retrocediendo');
    pagina -=1;
    this.setState({
      pagina: pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina +=1;
    this.setState({
      pagina: pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () =>{
    let termino = this.state.termino;
    let pagina  = this.state.pagina;
    let APIkey = 'your API KEY';
    const url=`https://pixabay.com/api/?key=${APIkey}&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=>this.setState({imagenes: resultado.hits}));
  }
  datoBusqueda = (termino) =>{
    this.setState({
      termino:termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    });
  }
  
  render(){
    return (
      <div className="container">
        <div className='jumbotron'>
          <h1 className='titulo text-center text-light'>Buscador de imagenes</h1>
          <Buscador 
            datoBusqueda = {this.datoBusqueda}
            />
        </div>
        <div className='row justify-content-center text-center'>
          <Resultado 
            Imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
            />
        </div>
      </div>
    );
  }
}

export default App;

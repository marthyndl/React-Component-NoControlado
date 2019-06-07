import React, {Fragment, Component} from 'react';
import NoControlado from './noControlado';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tamano: '',
      tipo: ''
    };
  }

  render() {

    return (
      <Fragment>
        <NoControlado 
          onClickAceptar={(datos) => {
            console.log('No Controlado', datos);
          }}
        />
      </Fragment>
    )
  }
}

export default App;

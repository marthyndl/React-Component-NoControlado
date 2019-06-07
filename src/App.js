import React, {Fragment} from 'react';
import NoControlado from './noControlado';
//import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;

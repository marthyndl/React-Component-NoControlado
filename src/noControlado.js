import React, { Component, Fragment } from 'react';

class NoControlado extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tamano: '',
            tipo:''
        };
    }
    render() {
        const {
            onClickAceptar
        } = this.props;

        const {
            tamano,
            tipo
        } = this.state;

        return (
            <Fragment>
                <h1>Hamburguesas</h1>

                <h3>Elije tamano:</h3>
                <ul>
                    <li>
                        <input onChange={e => this.setState({tamano: e.target.value})} checked={tamano === 'chico'} value='chico' type='radio' />
                        Chico
                    </li>
                    <li>
                        <input onChange={e => this.setState({tamano: e.target.value})} checked={tamano === 'mediano'} value='mediano' type='radio' />
                        Mediano
                    </li>
                    <li>
                        <input onChange={e => this.setState({tamano: e.target.value})} checked={tamano === 'grande'} value='grande' type='radio' />
                        Grande
                    </li>
                </ul>

                <h3>Elije tipo de carne:</h3>
                <ul>
                    <li>
                        <input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'pollo'} value='pollo' type='radio' />
                        Pollo
                    </li>
                    <li>
                        <input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'res'} value='res' type='radio' />
                        Res
                    </li>
                    <li>
                        <input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'cerdo'} value='cerdo' type='radio' />
                        Cerdo
                    </li>
                </ul>

                <button
                    onClick={() => onClickAceptar(this.state)}
                >Aceptar</button>
            </Fragment>
        )
        }
}

export default NoControlado;
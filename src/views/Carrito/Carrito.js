import React, { Component } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import { connect } from 'react-redux';

import './Carrito.css';

// actions
import { setearProductos } from '../../actions/productos.action';

// api
import { payCarrito } from '../../api/productos.api';

class Carrito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carrito: this.props.carrito,
        };
        this.pagarCarrito = this.pagarCarrito.bind(this);
        console.log(this.state);
    }

    sumaProductos() {
        return this.state.carrito.reduce( ( valorAnterior, c ) => {
            return valorAnterior + (c.cantidad * c.price);
        }, 0 );
    }

    goBack = () => {
        this.props.history.goBack();
    }

    pagarCarrito = () => {
        payCarrito( this.state.carrito )
            .then( alert );
    }

    render() {
        return (
            <div>
                <AppFrame
                    body={
                        <div className="content-body-home">
                            <nav>
                                <div className="nav-wrapper">
                                    <span className="left brand-logo color-fuente">Carrito de compras</span>
                                </div>
                            </nav>
                            <div className="row">
                                <div className="col s12 m6">
                                    <ul className="collection">

                                        {this.state.carrito.map( c => (
                                            <li key={c.id} className="collection-item avatar">
                                                <img src={c.img} alt="" className="circle" />
                                                <span className="title">{c.name}</span>
                                                <p>Unidades: {c.cantidad} <br />
                                                    <strong>Subtotal:</strong> {c.cantidad * c.price}
                                                </p>
                                                <a href="#!" className="secondary-content">
                                                    <i className="material-icons">grade</i>
                                                </a>
                                            </li>
                                        ) )}

                                    </ul>
                                </div>

                                <div className="col s12 m6">
                                    <h3>Total: {this.sumaProductos()}</h3>
                                    <br/>
                                    <button className="waves-effect waves-light btn" onClick={this.goBack}>
                                        Cancelar
                                    </button>
                                    <button className="waves-effect waves-light btn" onClick={this.pagarCarrito}>
                                        Pagar
                                    </button>
                                </div>
                            </div>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    carrito: state.productos.carrito,
});

const mapDispatchToProps = dispatch => ({
    _setearProductos: value => dispatch(setearProductos(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
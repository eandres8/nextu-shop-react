import React, { Component } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import { connect } from 'react-redux';
// Import Materialize
import M from "materialize-css";
import './Home.css';

// Components
import Producto from '../../components/Producto/Producto';
// API
import { requestProducts } from '../../api/productos.api';
// actions
import { setearProductos, setCarrito, replaceCarrito } from '../../actions/productos.action';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            filtro : '',
            loading : false,
            lista: []
        };
        this.filtrar = this.filtrar.bind(this);
    }

    componentDidMount() {
        M.AutoInit();
        this.getProductos();
    }

    getProductos = () => {
        this.setState({ loading: true });
        requestProducts()
            .then( data => {
                console.log("recibido", data);
                if ( data ){
                    this.setState({ loading: false, lista: data });
                    this.props._setearProductos( data );
                }
            } )
            .catch( err => console.warn(err) );
    }

    loader = () => {
        return this.state.loading && (<div className="progress">
            <div className="indeterminate"></div>
        </div>);
    }

    filtrar = ( e ) => {
        if ( e.target.value == '' ) {
            this.setState({lista: this.props.productos});
        } else {
            let array = this.props.productos.filter(p => p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 );
            this.setState({ lista: array });
        }
    }

    verValor = ( e ) => {
        let producto = this.props.productos.find( p => p.id == e.id );
        let carritoAux = this.props.carrito.filter( c => c.id == e.id );
        if ( carritoAux.length == 0 )
            this.props._setCarrito( {...producto, cantidad: e.cantidad } );
        else {
            this.props._replaceCarrito( {...producto, cantidad: e.cantidad } );
        }

    }

    render() {
        return (
            <div>
                <AppFrame
                    body={
                        <div className="content-body-home">
                            <nav>
                                <div className="nav-wrapper">
                                    <span className="left brand-logo color-fuente">Catálogo de productos</span>
                                    <form className="right hide-on-med-and-down">
                                        <div className="input-field">
                                            <input id="search" type="search" onChange={this.filtrar} />
                                            <label className="label-icon"><i className="material-icons">search</i></label>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                            { this.loader() }
                            <div className="row">
                                {
                                    this.state.lista.map(producto => <Producto key={producto.id} {...producto} setCarrito={this.verValor} /> )
                                }
                            </div>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    } // FIN render
}

const mapStateToProps = state => ({
    productos: state.productos.productos,
    carrito: state.productos.carrito
});

const mapDispatchToProps = dispatch => ({
    _setearProductos: value => dispatch( setearProductos( value ) ),
    _setCarrito: value => dispatch( setCarrito( value ) ),
    _replaceCarrito: value => dispatch( replaceCarrito(value) )
});

export default connect( mapStateToProps, mapDispatchToProps )(Home);
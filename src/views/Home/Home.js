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
import { setearProductos } from '../../actions/productos.action';

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
                    this.props.setearProductos( data );
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
                                    this.state.lista.map( producto => <Producto key={producto.id} {...producto} /> )
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
    productos: state.productos.productos
});

const mapDispatchToProps = dispatch => ({
    setearProductos: value => dispatch( setearProductos( value ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(Home);
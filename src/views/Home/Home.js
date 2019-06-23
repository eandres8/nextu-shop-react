import React, { Component } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
// Import Materialize
import M from "materialize-css";
import './Home.css';
import Producto from '../../components/Producto/Producto';
import { SERVER } from '../../constants';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            productos: [],
            loading: false,
            lista: [],
            filtro: ''
        };
        this.filtrar = this.filtrar.bind(this);
    }

    componentDidMount() {
        M.AutoInit();
        this.getProductos();
    }

    getProductos = () => {
        this.setState({loading: true});
        let urlS = `${SERVER}/productos`;
        fetch( urlS )
            .then( data => data.json() )
            .then( products => {
                let items = products.map( p => {
                    return { ...p, img: `${SERVER}/img/${p.img}` };
                } );
                this.setState( { productos: items, lista: items } );
                console.log("estado", this.state );
                this.setState({ loading: false });
            } )
            .catch( err => {
                this.setState({ productos: [], lista: [], loading: false});
                alert('error: ' + JSON.stringify(err) );
            } );
    }

    loading = () => {
        return this.state.loading && (<div className="progress">
            <div className="indeterminate"></div>
        </div>);
    }

    filtrar = ( e ) => {
        if ( e.target.value == '' ) {
            this.setState({lista: this.state.productos});
        } else {
            let array = this.state.productos.filter(p => p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 );
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
                            { this.loading() }
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

export default Home;
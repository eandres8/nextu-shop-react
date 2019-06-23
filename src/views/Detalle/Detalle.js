import React, { Component } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import {Link} from 'react-router-dom';
// Import Materialize
import M from "materialize-css";
import { SERVER } from '../../constants';

class Detalle extends Component {

    constructor( props ) {
        super(props);
        console.log("props", props);
        this.state = {
            producto: {},
            loading: false
        };
    }

    componentDidMount() {
        M.AutoInit();
        this.getProducto( this.props.match.params.id );
    }

    getProducto = ( id ) => {
        this.setState({loading:true});
        fetch(`${SERVER}/productos/${id}`)
            .then( data => data.json() )
            .then( product => {
                let producto = { ...product, img: `${SERVER}/img/${product.img}` };
                this.setState({ producto, loading: false });
                console.log( this.state );
            } )
            .catch( err => {
                this.setState({ loading: false });
                console.log( "err", err );
                this.setState({producto: {}});
            } );
    }

    loading = () => {
        return this.state.loading && (<div className="progress">
            <div className="indeterminate"></div>
        </div>);
    }

    render() {
        return (
            <div>
                <AppFrame
                    body={
                        <div className="content-body-home">
                            <nav>
                                <div className="nav-wrapper">
                                    <span className="left brand-logo color-fuente">Detalle Producto</span>
                                </div>
                            </nav>
                            {this.loading()}
                            <div className="row">
                                <div className="col s1 m1"></div>
                                <div className="col s10 m10">
                                    <h2 className="header">{this.state.producto.name}</h2>
                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img src={this.state.producto.img} />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>Precio: {this.state.producto.price}</p>
                                                <p>Unidades: {this.state.producto.units}</p>
                                            </div>
                                            <div className="card-action">
                                                <Link className="btn waves-effect waves-light" to="/">Atrás</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s1 m1"></div>
                            </div>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default Detalle;
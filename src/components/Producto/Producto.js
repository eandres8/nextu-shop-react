import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Producto.css';

class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            units: this.props.units,
            cantidad: 1
        };
        // this.addToCarrito = this.addToCarrito.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addToCarrito(params) {
        this.props.setCarrito(params);
        let u = this.state.units - Number(params.cantidad);
        this.setState({cantidad:1, units: u});
    }

    handleChange(e) {
        let cantidad = Number(e.target.value);
        this.setState({ cantidad });
    }

    render() {
        let id = this.props.id;
        return (
            <div className="col s4 m3">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.img} alt={this.props.name} className="img-producto" />
                        <span className="card-title">{this.props.name}</span>
                    </div>
                    <div className="card-content">
                        <p>Precio: {this.props.price}</p>
                        <p>Unidades: {this.state.units}</p>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <div className="col s6 m6">
                                <Link className="btn waves-effect waves-light btn-small" to={`/detalle/${id}`}>Ver más</Link>
                            </div>
                            <div className="col s3 m3">
                                <button className="btn waves-effect waves-light btn-small btn-amarillo" type="button" 
                                        onClick={this.addToCarrito.bind(this, { id, cantidad: this.state.cantidad })} >
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                            <div className="col s3 m3">
                                <input type="number" min="1" value={this.state.cantidad} max={this.props.units} className="validate" 
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Producto.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    setCarrito: PropTypes.func.isRequired,
};

export default Producto;
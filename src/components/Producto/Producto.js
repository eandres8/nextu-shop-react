import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Producto.css';

const Producto = ({ id, img, name, price, units}) => {
    return (
        <div className="col s4 m3">
            <div className="card">
                <div className="card-image">
                    <img src={img} alt={name} className="img-producto" />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>Precio: {price}</p>
                    <p>Unidades: {units}</p>
                </div>
                <div className="card-action">
                    <div className="row">
                        <div className="col s6 m6">
                            <Link className="btn waves-effect waves-light btn-small" to={`/detalle/${id}`}>Ver más</Link>
                        </div>
                        <div className="col s3 m3">
                            <button className="btn waves-effect waves-light btn-small btn-amarillo" type="button">
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                        <div className="col s3 m3">
                            <input type="number" min="1" max={units} className="validate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Producto.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
};

export default Producto;
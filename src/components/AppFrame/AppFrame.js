import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './AppFrame.css';

const AppFrame = ({body, carrito}) => {
    return (
        <div className="app-frame-content">
            <Navbar unidades={carrito.length} />
            <br />
            <div className="container container-backg">
                {body}
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    body: PropTypes.element.isRequired,
    carrito: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    carrito: state.productos.carrito
});

export default connect(mapStateToProps, null)(AppFrame);
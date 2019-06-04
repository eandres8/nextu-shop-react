import React, { Component } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';

class Carrito extends Component {
    render() {
        return (
            <div>
                <AppFrame
                    body={
                        <h1>Hola Carrito</h1>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default Carrito;
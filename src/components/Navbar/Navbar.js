import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        console.log(props.unidades);
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <span className="brand-logo color-fuente">OnlineShop</span>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="menu-item-route">
                                <Link to="/"><i className="material-icons">apps</i></Link>
                            </li>
                            <li className="menu-item-route">
                                <Link to="/carrito">
                                    <i className="material-icons">shopping_cart</i>
                                </Link>
                                <span className="badge">{this.props.unidades}</span>
                            </li>
                            <li className="menu-item-route">
                                <Link to="/login"><i className="material-icons">exit_to_app</i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
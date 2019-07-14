import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

import Login from './Login/Login';
import Home from './Home/Home';
import Carrito from './Carrito/Carrito';
import Detalle from './Detalle/Detalle';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/login" component={Login} />
				<PrivateRoute exact path="/" component={Home} />
				<PrivateRoute path="/carrito" component={Carrito} />
				<PrivateRoute path="/detalle/:id" component={Detalle} />
			</Router>
		</div>
	);
}

export default App;

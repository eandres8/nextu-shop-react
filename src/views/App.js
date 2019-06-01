import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/login" component={Login} />
			</Router>
		</div>
	);
}

export default App;

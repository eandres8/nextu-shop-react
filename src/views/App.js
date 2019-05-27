import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../assets/logo.svg';
import Navbar from '../components/Navbar/Navbar';
import Login from './Login/Login';
import './App.css';

function App() {
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;

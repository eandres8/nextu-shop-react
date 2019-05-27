import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import Materialize
import M from "materialize-css";
import './Login.css';

class Login extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		M.AutoInit();
	}

	render() {
		return (
			<main className="login-container">
				<center>
					<div className="section"></div>
					<div className="section"></div>

					<div className="container">
						<div className="z-depth-1 grey lighten-4 row sub-container">

							<h5 className="indigo-text">Inicia Sesión</h5>

							<form className="col s12">
								<div className='row'>
									<div className='col s12'>
									</div>
								</div>

								<div className='row'>
									<div className='input-field col s12'>
										<label>Enter your email</label>
										<input className='validate' type='email' name='email' id='email' />
									</div>
								</div>

								<div className='row'>
									<div className='input-field col s12'>
										<input className='validate' type='password' name='password' id='password' />
										<label>Enter your password</label>
									</div>
								</div>

								<br />
								<center>
									<div className='row'>
										<button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
									</div>
								</center>
							</form>
						</div>
					</div>
				</center>
			</main>
		);
	}
}

Login.propTypes = {

};

export default Login;
import React, { Component } from 'react';
// Import Materialize
import M from "materialize-css";
import './Login.css';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pass: '',
			error: ''
		};
		this.handleUser = this.handleUser.bind(this);
		this.handlePass = this.handlePass.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		M.AutoInit();
	}

	handleUser(event) {
		let {value} = event.target;
		this.setState({ user: value, error: '' });
	}

	handlePass(event) {
		let { value } = event.target;
		this.setState({ pass: value, error: '' });
	}

	handleSubmit(event) {
		event.preventDefault();
		let error = '';

		if ( this.state.user == '' ) {
			error = 'El usuario es obligatorio';
		}else if (this.state.pass == '') {
			error = 'La contraseña es obligatoria';
		}

		if ( error != '' ) {
			this.setState({error});
			return false;
		}

		let body = {
			user: this.state.user,
			pass: this.state.pass,
		};

		fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then( data => data.json() )
		.then( data => {
			console.warn( "data", data );
			if ( data.ok ) {
				this.props.history.push('/');
			} else {
				this.setState({error: data.message});
			}

		} ).catch( err => console.error("error", err) );

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

							<form className="col s12" onSubmit={this.handleSubmit}>
								<div className='row'>
									<div className='col s12'>
									</div>
								</div>

								<div className='row'>
									<div className='input-field col s12'>
										<label>Enter your email</label>
										<input className='validate' type='email' value={this.state.user || ''} onChange={this.handleUser} />
									</div>
								</div>

								<div className='row'>
									<div className='input-field col s12'>
										<input className='validate' type='password' value={this.state.pass || ''} onChange={this.handlePass} />
										<label>Enter your password</label>
									</div>
								</div>

								<div className='row'>
									{ this.state.error && <label className='error-text' >{this.state.error}</label> }
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


export default Login;
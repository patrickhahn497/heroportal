import React from 'react';
import './Signin.css';
import 'tachyons';


class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onProfileChange(user.id);
					this.props.onRouteChange('profile');
				}
			})
	}

		render() {
		const {onRouteChange} = this.props;
		return (
			<div className="fullheight">
				<article className="br3 ba dark-gray b--black-10 mv4 w-500 w-500-m w-500-l mw5 shadow-5 center white">
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange={this.onEmailChange}
					        	/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password"
					        	onChange={this.onPasswordChange}
					        	/>
					      </div>
					    </fieldset>
					    <div className="mv3">
					      <input
					      	onClick={this.onSubmitSignIn}
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100"
					      	type="submit"
					      	value="Sign in"
						   />
					    </div>
					    <div className="lh-copy mt3">
					      <p onClick={() => this.props.onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
					    </div>
					  </div>
					</main>
				</article>
			</div>
		);
	}
}

export default Signin;
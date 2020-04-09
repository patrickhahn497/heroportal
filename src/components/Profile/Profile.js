import React from 'react';
import './Profile.css';
import Stats from './Stats/Stats';
import Roles from './Roles/Roles';
import Abilities from './Abilities/Abilities';
import profpic from './ArkhamKnight.png';
import 'tachyons';

class Profile extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			abilityList : [],
			roleList: []

		}
	}

	componentDidMount(){
	    fetch('http://localhost:3000/profile/'+ this.props.user.id)
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
				}
			})

		fetch('http://localhost:3000/userabilities/'+ this.props.user.id)
			.then(response => response.json())
			.then(userabilities => {
				console.log("user abilities: ", userabilities);
				this.setState({abilityList: userabilities})
			})

		fetch('http://localhost:3000/userroles/' + this.props.user.id)
			.then(response => response.json())
			.then(userroles => {
				console.log("user roles: ", userroles);
				this.setState({roleList: userroles})
			})
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
					this.props.onRouteChange('home');
				}
			})
			// .then(data => {
			// 	if (data === 'Success!') {
			// 		this.props.onRouteChange('home');
			// 	}
			// })
		//console.log(this.state);
	}
	//the top panel can potentiallly be made into its own component
	render() {

		// const {attributes} = this.props.user;
		// console.log("bub", attributes);


		return (
			<div className="">
				
				{//<img className="profilepic" src={"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/ArkhamKnight.png/220px-ArkhamKnight.png"} alt="HTML5 Icon"/>
				}


				<div id="topPanel">
					<div className="profileBlock" id="profileBlock">
						<img className="shadow-5 br2 grow" id="profilePic" src={profpic} alt="HTML5 Icon"/>
						
					</div>
					<div className="textBlock">
						<h1 id="name"> {this.props.user.name} </h1>
						<p id="blurb"> Expert martial combatant with shadow manipulation powers. Enhanced strength, speed, cognition, and reflexes. </p>
					</div>

					{//<p>texto</p>
					}

				</div>
				<Stats stats={this.props.user.attributes}/>
				<Roles roleList={this.state.roleList}/>
				<Abilities abilityList={this.state.abilityList}/>
			</div>

		);
	}

}

export default Profile;
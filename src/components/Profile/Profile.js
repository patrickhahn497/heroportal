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
			profileid: this.props.profileid,
			abilityList : [],
			roleList: [],
			attributes: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10
             },
             user: {}

		}
	}

	componentDidMount(){
	    fetch('http://localhost:3000/users/'+ this.state.profileid)
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.setState({user: user});
				}
			})
			.catch(error => console.log(error));

		fetch('http://localhost:3000/userabilities/'+ this.state.profileid)
			.then(response => response.json())
			.then(userabilities => {
				console.log("user abilities: ", userabilities);
				this.setState({abilityList: userabilities})
			})
			.catch(error => console.log(error));

		fetch('http://localhost:3000/userroles/' + this.state.profileid)
			.then(response => response.json())
			.then(userroles => {
				console.log("user roles: ", userroles);
				this.setState({roleList: userroles})
			})
			.catch(error => console.log(error));

		fetch('http://localhost:3000/attributes/' + this.state.profileid)
			.then(response => response.json())
			.then(attributes => {
				console.log("attributes: ", attributes);
				this.setState({attributes: attributes})
			})
			.catch(error => console.log(error));
	}


	// onSubmitSignIn = () => {
	// 	fetch('http://localhost:3000/signin', {
	// 		method: 'post',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			email: this.state.signInEmail,
	// 			password: this.state.signInPassword
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(user => {
	// 			if (user.id) {
	// 				this.props.loadUser(user);
	// 				this.props.onRouteChange('home');
	// 			}
	// 		})

	// }
	//the top panel can potentiallly be made into its own component
	render() {
		return (
			<div className="">
				
				<div id="topPanel">
					<div className="profileBlock" id="profileBlock">
						<img className="shadow-5 br2 grow" id="profilePic" src={profpic} alt="HTML5 Icon"/>
						
					</div>
					<div className="textBlock">
						<h1 id="name"> {this.state.user.name} </h1>
						<p id="blurb"> Expert martial combatant with shadow manipulation powers. Enhanced strength, speed, cognition, and reflexes. </p>
					</div>
				</div>
				<Stats stats={this.state.attributes}/>
				<Roles roleList={this.state.roleList}/>
				<Abilities abilityList={this.state.abilityList}/>
			</div>

		);
	}

}

export default Profile;
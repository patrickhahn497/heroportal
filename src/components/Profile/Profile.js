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
             user: {},
             description: "",
             profilepictureurl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

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
				this.setState({attributes: attributes});
			})
			.catch(error => console.log(error));

		fetch('http://localhost:3000/profiledescriptions/' + this.state.profileid)
			.then(response => response.json())
			.then(profiledescriptions => {
				console.log("profiledescriptions: ", profiledescriptions);
				if (profiledescriptions.userid){
					this.setState({description: profiledescriptions["description"]});
					this.setState({profilepictureurl: profiledescriptions["profilepictureurl"]});
				} else{
					//while this may seem extraneous at first, it is useful for when you don't leave the profile route
					//but you want to change which profile that you view
					this.setState({description: ""});
					this.setState({profilepictureurl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"})
				}
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
					{
						//<img className="shadow-5 br2 grow" id="profilePic" src={profpic} alt="HTML5 Icon"/>
					}
					<img className="shadow-5 br2 grow" id="profilePic" src={this.state.profilepictureurl} alt="HTML5 Icon"/>
						
					</div>
					<div className="textBlock">
						<h1 id="name"> {this.state.user.name} </h1>
						<p id="blurb"> {this.state.description} </p>
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
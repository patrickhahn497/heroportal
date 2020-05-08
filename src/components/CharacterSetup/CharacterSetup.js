import React from 'react';
import { FaCheck } from "react-icons/fa";
import './CharacterSetup.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import StatFillin from './StatFillin/StatFillin';
import AbilityFillin from './AbilityFillin/AbilityFillin';
import AbilityList from './AbilityList/AbilityList';
import RoleFillin from './RoleFillin/RoleFillin';
import Button from 'react-bootstrap/Button';


class CharacterSetup extends React.Component {

	constructor(props) {
		super(props);
		console.log("this the id for real in CharacterSetup", this.props.id);
		this.state = {
			id: this.props.id,
			// id: 6,
			email: '',
			password: '',
			name: '',
			firstname: '',
			lastname: '',
			heroname: '',
			strength: '10',
			dexterity: '10',
			constitution: '10',
			intelligence: '10',
			wisdom: '10',
			charisma: '10',
			abilityNames: {},
			abilityDescriptions: {},
			roles: {
				'stealth': false,
				'combat': false,
				'support': false

			}
			
		}
	}

	buttonColor = (attribute) => {
		if (attribute==="email"){
			if (this.state[attribute]){
				this.validateEmail(this.state.email)
			}
		}
		else if (this.state[attribute]){
			return 'green';
		}
		return 'grey';

	}

	// toggleClass = (event) => {
	//    event.target.classList.toggle('dropScroll');
	// }

	// onAbilityNameChange = (event) => {

	// }

	// onAbilityAdd = (event) => {
	// 	this.setState({abilityCount: abilityCount+1});
	// 	this.setState({abilityId: abilityId+1});

	// }
	componentDidMount(){
		console.log("the id loaded is", this.state.id);
		fetch('http://localhost:3000/roles')
			.then(response => response.json())
			.then(rolelist => {
				console.log("roles: ", rolelist);
				// let temproles = roles;
				// for (let role of temproles){
				// 	role['preference']='';
				// }
				let temproles = {}
				for (let role of rolelist){
					temproles[role.name]=false;
				}
				// console.log(temproles);
				this.setState({roles: temproles});
			})

	}




	onPropertyChange = (property) => (event) => {
		console.log(event.target);
		
		this.setState({[property]:event.target.getAttribute('value') });
		console.log(this.state[property]);
	}



	setProperty = (property, item) => {
		// console.log("wow", item);
		this.setState({[property]: item });
		//console.log(this.state[property]);
		console.log("state", this.state)

	}

	validateEmail = (email) => {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	//can eventually filter this out with propertychange
	onFirstNameChange = (event) => {
		this.setState({firstname: event.target.value});
	}

	onLastNameChange = (event) => {
		this.setState({lastname: event.target.value});
	}

	roleColor = (role) => {
		//console.log("COLOR NEEDS TO BE CHANGED");
		if (this.state.roles[role]){
			//console.log('gone in here');
			return 'green';
		} 
		return '';

	}

	onRoleSelect = (role) => {
		//console.log("whadfhasbdfjkasdb");
		let tempRoles = {...this.state.roles};
		tempRoles[role] = !tempRoles[role];
		console.log(tempRoles);
		this.setState({roles: tempRoles});
	}


	// onEmailChange = (event) => {
	// 	this.setState({email: event.target.value});
	// }

	// onPasswordChange = (event) => {
	// 	this.setState({password: event.target.value});
	// }

	onSubmitCharacterSetup = () => {
		const abilityNameArr = Object.values(this.state.abilityNames);
		const abilityDescArr = Object.values(this.state.abilityDescriptions);
		let roles = [];

		for (let key in this.state.roles){
			if (this.state.roles[key]){
				roles.push({"userid": this.state.id, "rolename": key});
			}
		}
		console.log("submitting user", this.state.id, this.props.id);

		fetch('http://localhost:3000/charactersetup', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				// id: this.props.id,
				id: this.state.id,
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				// name: this.state.name,
				strength: this.state.strength,
				dexterity: this.state.dexterity,
				constitution: this.state.constitution,
				intelligence: this.state.intelligence,
				wisdom: this.state.wisdom,
				charisma: this.state.charisma,
				abilityNames: abilityNameArr,
				abilityDescriptions: abilityDescArr,
				roles: roles
			})
		})
			.then(response => response.json())
			.then(user => {
				console.log(user);
				this.props.onRouteChange('profile');
			})
		//console.log(this.state);
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div className="center">
				<label className="db fw6 lh-copy f6">First Name  &nbsp;  </label>
				<div className="mt3 formline">
			        {//<label className="db fw6 lh-copy f6" htmlFor="firstname">First Name  &nbsp;  </label>
			    }
			        <input 
			        	className="pa2 input-reset ba bg-white hover-bg-black hover-black" 
			        	type="text" 
			        	name="firstname"  
			        	id="firstname"
			        	onChange={this.onFirstNameChange}
			        />
			        <button
			        	type="button"
			        	style={{backgroundColor: this.buttonColor('firstname')}}
			        ><FaCheck/></button>
				</div>
				<div className="mt3 formline">
			        <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name  &nbsp;  </label>
			        <input 
			        	className="pa2 input-reset ba bg-white hover-bg-black hover-black" 
			        	type="text" 
			        	name="lastname"  
			        	id="lastname"
			        	onChange={this.onLastNameChange}
			        />
			        <button
			        	type="button"
			        	style={{backgroundColor: this.buttonColor('lastname')}}
			        ><FaCheck/></button>
				</div>
				<StatFillin stat="strength" value={this.state.strength} onPropertyChange={this.onPropertyChange}/>
				<StatFillin stat="dexterity" value={this.state.dexterity} onPropertyChange={this.onPropertyChange}/>
				<StatFillin stat="constitution" value={this.state.constitution} onPropertyChange={this.onPropertyChange}/>
				<StatFillin stat="intelligence" value={this.state.intelligence} onPropertyChange={this.onPropertyChange}/>
				<StatFillin stat="wisdom" value={this.state.wisdom} onPropertyChange={this.onPropertyChange}/>
				<StatFillin stat="charisma" value={this.state.charisma} onPropertyChange={this.onPropertyChange}/>
				<RoleFillin roles={this.state.roles} onRoleSelect={this.onRoleSelect} roleColor={this.roleColor}/>
				<div className="center">
					<h3> Abilities </h3>
					<AbilityList setProperty={this.setProperty} onPropertyChange={this.onRouteChange}/>
				</div>
				 <Button variant="primary" onClick={this.onSubmitCharacterSetup}>Submit</Button>{' '}

			</div>
		);
	}
}

export default CharacterSetup;
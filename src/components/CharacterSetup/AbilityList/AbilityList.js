import React from 'react';
import AbilityFillin from '../AbilityFillin/AbilityFillin'


const defaultState = {
	abilityNames: {0: ''},
	abilityDescriptions: {0: ''},
	abilityId: 0,
	abilityCount: 1
}

class AbilityList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			abilityNames: {0: ''},
			abilityDescriptions: {0: ''},
			abilityId: 0,
			abilityCount: 1
		}
	}

	//this is untested
	onNameChange = (id) => (event) =>  {
		console.log(event.target.value);
		let temp = {...this.state.abilityNames, [id]: event.target.value};
		this.setState({abilityNames: {...this.state.abilityNames, [id]: event.target.value}});
		console.log(this.state.abilityNames);
		// this.props.onPropertyChange('abilityDescriptions');
		this.props.setProperty('abilityNames', temp);
	}


	onDescriptionChange = (id) => (event) => {
		console.log(event.target.value);
		let temp = {...this.state.abilityDescriptions, [id]: event.target.value};
		console.log("this!", temp);
		//temp[id]= event.target.value;
		// this.setState({abilityDescriptions: {...this.state.abilityDescriptions, [id]: event.target.value}});
		this.setState({abilityDescriptions: temp});

		//setProperty was passed down from above
		this.props.setProperty('abilityDescriptions', temp);
		console.log("ability descriptions" , this.state.abilityDescriptions);
		console.log("ability names", this.state.abilityNames);
	}


	onAbilityAdd = (event) => {
		//i noticed something interesting here. I think the state gets updated all at once
		//so if i try to make a change in state, and set another value to the updated state, it won't work
		//all i'll get is the old state
		//i fixed this by adding the +1 before the fact
		console.log("new ability id: ", this.state.abilityId+1);
		this.setState({abilityCount: this.state.abilityCount+1});
		this.setState({abilityId: this.state.abilityId+1});
		this.setState({abilityNames: {...this.state.abilityNames, [this.state.abilityId+1]: ""}});
		this.setState({abilityDescriptions: {...this.state.abilityDescriptions, [this.state.abilityId+1]: ""}});

	}

	onAbilityDelete = (id) => (event) => {
		console.log(this.state.abilityNames);
		console.log("id to be deleted is", id);
		if (this.state.abilityCount>1){
			let newAbiName = {...this.state.abilityNames};
			delete newAbiName[id];
			console.log(newAbiName);
			let newAbiDesc = {...this.state.abilityDescriptions};
			delete newAbiDesc[id];
			this.setState({abilityNames: newAbiName});
			this.setState({abilityDescriptions: newAbiDesc});
			this.setState({abilityCount: this.state.abilityCount-1});
		} else {
			this.setState(defaultState);

		}


	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					console.log("registered successfully");
					// console.log(user['id']);
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			})
		//console.log(this.state);
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				{
					Object.entries(this.state.abilityNames).map((keyVal) => {
						console.log(keyVal);
						const abilityId = keyVal[0];
						return (
								<AbilityFillin 
									id={abilityId} 
									onNameChange={this.onNameChange} 
									onDescriptionChange={this.onDescriptionChange}
									onAbilityAdd={this.onAbilityAdd}
									onAbilityDelete={this.onAbilityDelete}
									abilityName={this.state.abilityNames[abilityId]}
									abilityDescription={this.state.abilityDescriptions[abilityId]}
								/>
							);
					})

				}
			</div>
		);
	}
}

export default AbilityList;
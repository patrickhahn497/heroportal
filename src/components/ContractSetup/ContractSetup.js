import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Tooltip from '@material-ui/core/Tooltip';
import RolePreferenceSelect from './RolePreferenceSelect/RolePreferenceSelect'

import './ContractSetup.css';


class ContractSetup extends React.Component {

	constructor(props) {
		super(props);
		console.log("this the id for real in CharacterSetup");
		this.state = {
			employerid: this.props.employerid,
			// id: 6,
			jobtitle: '',
			jobdesc: '',
			threatrank: 'E',
			reward: '',
			roleStatus: {}
		}
	}

	componentDidMount(){
		console.log("the id loaded is", this.state.id);
		fetch('http://localhost:3000/roles')
			.then(response => response.json())
			.then(roles => {
				console.log("roles: ", roles);
				let temproles = {}
				for (let role of roles){
					temproles[role.name]={'description': role.description, 'preference': '', slots: ''};
				}
				this.setState({roleStatus: temproles});
			})

	}



	onPropertyChange = (property, integerOnly=false) => (event) => {
		console.log(event.target.value);
		console.log(event.target.getAttribute('value'));
		const val = event.target.value;
		//this is strange, event.target.value doesn't seem to work but getAttribute does
		//so getAttribute works for dropdown menus but not for text inputs
		//but vice versa for event.target.value
		if (integerOnly){
		    if (val === '' || !isNaN(val)) {
		       this.setState({reward: val})
		    }

		} else {
			this.setState({[property]:event.target.value});
		}
	}

	onPropertyChangeDropDown = (property) => (event) => {
		console.log(event.target.value);
		console.log(event.target.getAttribute('value'));
		//this is strange, event.target.value doesn't seem to work but getAttribute does
		//so getAttribute works for dropdown menus but not for text inputs
		//but vice versa for event.target.value
		this.setState({[property]:event.target.getAttribute('value') });
	}


	onPreferenceChange = (rolename, preference) => {
		let temp = this.state.roleStatus;
		temp[rolename]['preference']=preference;
		// console.log(temp);
		this.setState({roleStatus: temp});

	}

	onSubPropertyChange = (rolename, property, integerOnly=false) => (event) => {
		//this is for when there's a dynamic input
		let temp = this.state.roleStatus;
		const val = event.target.value;
		// console.log(temp[rolename]);
		temp[rolename][property]=val;
		// console.log(temp);
		if (integerOnly){
		    if (val === '' || !isNaN(val)) {
		       this.setState({roleStatus: temp})
		    }

		} else {
			this.setState({roleStatus:temp});
		}

	}

	onSubmitContractSetup = () => {
		console.log("SUBMITTING");
		console.log(this.state);
		const {employerid, jobtitle, jobdesc, threatrank, reward} = this.state;
		// const reward = parseInt(this.state.reward);

		const rolelist = Object.entries(this.state.roleStatus).map(([roleName, roleValue]) => {
			let temprole = {
				rolename:roleName,
				preference:roleValue["preference"]
			}
			if (roleValue["slots"]){
				temprole["spotsneeded"]=parseInt(roleValue["slots"]);
			}
			return (temprole);
		});
		console.log("final roles are these,", rolelist);

		fetch('http://localhost:3000/contractsetup', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				// id: this.props.id,
				employerid: parseInt(this.state.employerid),
				jobtitle: jobtitle,
				description: jobdesc,
				threatrank: threatrank,
				reward: parseInt(reward),
				rolelist: rolelist
			})
		})
		.then(response => response.json())
		.then(jobid => {
			console.log("job id created: ", jobid);
			this.props.onJobChange(jobid);
			this.props.pageSwitch('contractposting');

		})
		console.log(this.state);
	}


	setProperty = (property, item) => {
		// console.log("wow", item);
		this.setState({[property]: item });
		//console.log(this.state[property]);
		console.log("state", this.state)
	}


	threatColor = (threatrank) => {
		//console.log("COLOR NEEDS TO BE CHANGED");
		if (this.state.threatrank === threatrank){
			//console.log('gone in here');
			return 'DarkOrange';
		} 
		return '';

	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div className="center">
				<input 
			        	className="pa2 input-reset ba bg-white hover-bg-black hover-black formline" 
			        	type="text" 
			        	name="jobtitle"  
			        	onChange={this.onPropertyChange('jobtitle')}
			        	placeholder="Job Title"
			        	value={this.state.jobtitle}
			     />
			     <textarea rows="5" cols="50" name="description" placeholder="Job Description" 
		        	className="pa2 input-reset ba bg-white hover-bg-black hover-black "
		        	onChange={this.onPropertyChange('jobdesc')}
		        	value={this.state.jobdesc}
		        >
		        </textarea>

		        <input 
			        	className="pa2 input-reset ba bg-white hover-bg-black hover-black formline" 
			        	type="text" 
			        	name="reward"  
			        	onChange={this.onPropertyChange('reward', true)}
			        	placeholder="Reward"
			        	value={this.state.reward}
			     />

			    <div className="mt3  formline ">
					<label className="db fw6 lh-copy f6">Threat Rank  &nbsp;  </label>
					<Dropdown>
					  <Dropdown.Toggle variant="success" id="dropdown-basic">
					    {this.state.threatrank}
					  </Dropdown.Toggle>
					  <Dropdown.Menu className="dropScroll">
					    <Dropdown.Item value="S" onClick={this.onPropertyChangeDropDown('threatrank')}>S</Dropdown.Item>
					    <Dropdown.Item value="A" onClick={this.onPropertyChangeDropDown('threatrank')}>A</Dropdown.Item>
					    <Dropdown.Item value="B" onClick={this.onPropertyChangeDropDown('threatrank')}>B</Dropdown.Item>
					    <Dropdown.Item value="C" onClick={this.onPropertyChangeDropDown('threatrank')}>C</Dropdown.Item>
					    <Dropdown.Item value="D" onClick={this.onPropertyChangeDropDown('threatrank')}>D</Dropdown.Item>
					    <Dropdown.Item value="E" onClick={this.onPropertyChangeDropDown('threatrank')}>E</Dropdown.Item>
					  </Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="threat-rank-table">
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('S')}}>
						<div className="right-border">
							<p > S</p>
						</div>
						<p>Threat to millions of lives eg. Nuclear bomb</p>
					</div>
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('A')}}>
						<div className="right-border">
							<p > A</p>
						</div>
						<p>Threat to thousands of lives eg. Army invasion</p>
					</div>
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('B')}}>
						<div className="right-border">
							<p > B</p>
						</div>
						<p>Threat to hundreds of lives eg. Bomb in city-block</p>
					</div>
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('C')}}>
						<div className="right-border">
							<p > C</p>
						</div>
						<p>Threat to dozens of lives eg. Mass shooter</p>
					</div>
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('D')}}>
						<div className="right-border">
							<p > D</p>
						</div>
						<p>Threat to a few lives eg. Assailant with knife</p>
					</div>
					<div className="default-border threat-rank-row "
						style={{backgroundColor: this.threatColor('E')}}>
						<div className="right-border">
							<p > E</p>
						</div>
						<p>Nuisance level threat eg. pickpockets, vandals</p>
					</div>
				</div>

				<RolePreferenceSelect roleStatus={this.state.roleStatus} 
					onPropertyChange={this.onPropertyChange}
					onPreferenceChange={this.onPreferenceChange}
					onSubPropertyChange={this.onSubPropertyChange}/>

				<Button variant="primary" onClick={this.onSubmitContractSetup}>Submit</Button>{' '}

			</div>
		);
	}
}

export default ContractSetup;